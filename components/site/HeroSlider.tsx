"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    img: "/slider-hero/new_banner.jpeg",
    mobileImg: "/slider-hero/mobile1.jpeg",
    tag: "10 Years · 24/7",
    title: "Doorstep to the skies we take you everywhere.",
    sub: "Self drive car, taxi, tempo traveller, Luxury bus, special Taxi service",
  },
  // {
  //   img: "/images/luxury-cars.jpg",
  //   mobileImg: "/images/luxury-cars-mobile.jpg",
  //   tag: "Luxury Cars on Rent",
  //   title: "Mercedes, BMW & Audi for the occasion.",
  //   sub: "Chauffeur-driven luxury for weddings, events and corporate travel.",
  // },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${i * 100}%)` }}>
        {SLIDES.map((s) => (
          <div className="slide" key={s.img}>
            <picture>
              {/* mobile image: screens up to 767px */}
              <source media="(max-width: 767px)" srcSet={s.mobileImg} />
              {/* default/desktop image */}
              <img src={s.img} alt={s.title} />
            </picture>
            <div className="cap">
              <div className="in">
                <small>{s.tag}</small>
                <h2>{s.title}</h2>
                <p>{s.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {SLIDES.map((_, d) => (
          <button
            key={d}
            className={d === i ? "active" : ""}
            onClick={() => setI(d)}
            aria-label={`Slide ${d + 1}`}
          />
        ))}
      </div>
    </div>
  );
}