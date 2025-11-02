import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/header.css'
import ConfHeader from "./ConfHeader";

function Header() {
  const [isConfOpen, setIsConfOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      const confHeaderElem = document.querySelector('.conf-header');
      if (confHeaderElem && !confHeaderElem.contains(event.target)) {
        setIsConfOpen(false);
      }
    }

    if (isConfOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isConfOpen]);

  return (
    <header>
      <section className="header">
        <Link to="/Profile">
          <article className='profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBTidDksW45LZo_UjdEqRUC3EYKUggNENiQ&s" />
          </article>
        </Link>
        <article className="btn-conf-header">
          <button onClick={() => setIsConfOpen(prev => !prev)}>
            <i className="fa-solid fa-gear"></i>
          </button>
        </article>
      </section>

      {isConfOpen && <ConfHeader />}
    </header>
  )
}

export default Header;
