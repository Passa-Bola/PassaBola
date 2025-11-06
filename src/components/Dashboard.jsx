import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import KicksDashboard from "./KicksDashboard";
import "../css/dashboard.css";
import "../css/kicks-dashboard.css";

export default function DashboardModal({ onClose }) {
  const WIDTH = 420;
  const HEIGHT = 260;
  // configurable bottom margin so sheet doesn't reach the very bottom of the viewport (mobile)
  const SHEET_BOTTOM_MARGIN = 184;
  // configurable threshold for swipe-to-close (px)
  const SHEET_CLOSE_THRESHOLD = 80;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // mobile/bottom-sheet state
  const [isMobile, setIsMobile] = useState(false);
  const [sheetHeight, setSheetHeight] = useState(260);
  const [verticalOffset, setVerticalOffset] = useState(0);
  // keep a ref copy of the vertical offset so event listeners can read the
  // latest value (prevents stale closures when handlers are attached to
  // document during drag)
  const verticalOffsetRef = useRef(0);
  const setVerticalOffsetSync = (v) => {
    verticalOffsetRef.current = v;
    setVerticalOffset(v);
  };
  const startYRef = useRef(0);
  const startOffsetRef = useRef(0);

  useEffect(() => {
    // center modal on mount
    const cx = Math.max((window.innerWidth - WIDTH) / 2, 16);
    const cy = Math.max((window.innerHeight - HEIGHT) / 2, 24);
    setPos({ x: cx, y: cy });

    function onUp() {
      dragging.current = false;
      document.body.style.userSelect = "";
      // ensure modal stays within bounds after drop
      setPos((p) => ({
        x: Math.max(8, Math.min(p.x, window.innerWidth - WIDTH - 8)),
        y: Math.max(8, Math.min(p.y, window.innerHeight - HEIGHT - 8)),
      }));
    }

    function onMove(e) {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      // compute new pos and clamp to viewport with 8px margin
      const nx = Math.max(8, Math.min(clientX - offset.current.x, window.innerWidth - WIDTH - 8));
      const ny = Math.max(8, Math.min(clientY - offset.current.y, window.innerHeight - HEIGHT - 8));
      setPos({ x: nx, y: ny });
    }

    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });

    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  function startDrag(e) {
    // don't start drag when interacting with buttons/links/inputs inside modal
    const target = e.target;
    const interactiveTags = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT", "LABEL"];
    if (interactiveTags.includes(target.nodeName) || target.closest && target.closest('.dashboard-modal-close')) {
      return;
    }
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    if (isMobile) {
      // start vertical drag for bottom sheet
      dragging.current = true;
  startYRef.current = clientY;
  startOffsetRef.current = verticalOffsetRef.current;
      document.body.style.userSelect = "none";
      // attach non-passive touchmove listener so we can call preventDefault()
      document.addEventListener('touchmove', onPointerMove, { passive: false });
      document.addEventListener('touchend', onPointerEnd);
    } else {
      // desktop full-modal drag
      dragging.current = true;
      document.body.style.userSelect = "none";
      const rect = modalRef.current.getBoundingClientRect();
      offset.current = { x: clientX - rect.left, y: clientY - rect.top };
    }
  }

  // mobile pointer handlers for vertical drag/swipe
  function onPointerMove(e) {
    if (!isMobile || !dragging.current) return;
    if (e.cancelable) e.preventDefault();
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const dy = clientY - startYRef.current;
    const maxOffset = sheetHeight + SHEET_BOTTOM_MARGIN; // downward max
    const minOffset = -(sheetHeight + SHEET_BOTTOM_MARGIN); // upward max (hide to top)
    const newOffset = Math.max(minOffset, Math.min(startOffsetRef.current + dy, maxOffset));
    setVerticalOffsetSync(newOffset);
  }

  function onPointerEnd() {
    if (!isMobile) return;
    if (!dragging.current) return;
    dragging.current = false;
    document.body.style.userSelect = "";
    // remove document listeners attached during mobile drag
    try {
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerEnd);
    } catch (e) {}
    // smaller threshold for swipe-to-close (smaller = easier to keep open)
    const threshold = Math.min(SHEET_CLOSE_THRESHOLD, sheetHeight * 0.2);
    const current = verticalOffsetRef.current;
    if (current > threshold) {
      // animate out downward then close
      setVerticalOffsetSync(sheetHeight + SHEET_BOTTOM_MARGIN);
      setVisible(false);
      setTimeout(() => onClose && onClose(), 220);
    } else if (current < -threshold) {
      // animate out upward then close
      setVerticalOffsetSync(-(sheetHeight + SHEET_BOTTOM_MARGIN));
      setVisible(false);
      setTimeout(() => onClose && onClose(), 220);
    } else {
      // animate back to opened position
      setVerticalOffsetSync(0);
    }
  }

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // compute mobile layout and sheet height
  useEffect(() => {
    function computeMobile() {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      if (mobile) {
        // smaller sheet height on mobile (45% of viewport) to avoid overly tall sheet
        const h = Math.max(Math.round(window.innerHeight * 0.25), 140);
        setSheetHeight(h);
        setVerticalOffsetSync(h + SHEET_BOTTOM_MARGIN); // start off-screen (below bottom margin)
      } else {
        setVerticalOffsetSync(0);
      }
    }

    computeMobile();
    window.addEventListener('resize', computeMobile);
    return () => window.removeEventListener('resize', computeMobile);
  }, []);

  function handleClose() {
    // trigger exit animation then call parent onClose
    if (isMobile) {
      setVerticalOffsetSync(sheetHeight + SHEET_BOTTOM_MARGIN);
      setVisible(false);
      setTimeout(() => {
        onClose && onClose();
      }, 220);
    } else {
      setVisible(false);
      setTimeout(() => {
        onClose && onClose();
      }, 220);
    }
  }

  // when modal becomes visible on mobile, slide it up
  useEffect(() => {
    if (isMobile && visible) {
      // let initial paint finish then slide up
      const t = setTimeout(() => setVerticalOffsetSync(0), 20);
      return () => clearTimeout(t);
    }
  }, [isMobile, visible, sheetHeight]);

  const content = (
    <div
      className={`dashboard-modal-overlay ${visible ? "overlay-enter" : "overlay-exit"}`}
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        // close when clicking on the overlay (outside the modal)
        if (e.target === e.currentTarget) handleClose();
      }}
      onTouchStart={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
  ref={modalRef}
  className={`dashboard-modal ${visible ? "enter" : "exit"} ${isMobile ? 'mobile' : ''}`}
  style={isMobile ? { left: 16, right: 16, height: sheetHeight, bottom: SHEET_BOTTOM_MARGIN, transform: `translateY(${verticalOffset}px)` } : { width: WIDTH, height: HEIGHT, left: pos.x, top: pos.y }}
  onMouseDown={startDrag}
  onTouchStart={startDrag}
  onMouseMove={onPointerMove}
  onMouseUp={onPointerEnd}
      >
        <div
          className="dashboard-modal-header"
          role="button"
          tabIndex={0}
        >
          <div className="dashboard-modal-title"> </div>
          <button className="dashboard-modal-close" onClick={handleClose} aria-label="Fechar dashboard">
            ✕
          </button>
        </div>

        {/* Dashboard de Chutes */}
        <div className="dashboard-modal-body">
          <KicksDashboard 
            backendUrl={import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}
            refreshInterval={5000}
          />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}
