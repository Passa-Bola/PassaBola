import { useState, useEffect } from "react";
import '../css/ad.css';

function Ad() {
  const images = [
    "https://www.bloommaterials.com/wp-content/uploads/2020/03/BLOOM-BRAND-copy_Adidas.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/hd/56613b18954529.562d231b8203f.jpg",
    "https://image.adsoftheworld.com/x0bsqf795b2rtxh2vibfgxv7268p",
    "https://m.media-amazon.com/images/S/aplus-media/sota/702f8088-f8aa-486a-b801-dcb698774a09.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    "https://m.media-amazon.com/images/S/aplus-media/sota/5ddd2207-a69b-4bdd-aef8-3c0f5fae48b8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
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
