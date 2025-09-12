import { useState, useEffect } from "react";
import '../css/ad.css';

function Ad() {
  const images = [
    "https://picsum.photos/id/1018/600/350",
    "https://picsum.photos/id/1015/600/350",
    "https://picsum.photos/id/1019/600/350",
    "https://picsum.photos/id/1020/600/350",
    "https://picsum.photos/id/1021/600/350"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="ad">
        <div className="ctn-ad">
            <article className="ad-image">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </article>
        </div>
        <article className="ad-dots">
            {images.map((_, index) => (
            <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
            ></span>
            ))}
        </article>
    </section>
  );
}

export default Ad;
