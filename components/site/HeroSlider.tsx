"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  { img: "/images/hero.jpg", tag: "10 Years · 24/7", title: "Your ride is ready when you are.", sub: "Cabs, self-drive and luxury cars across Delhi NCR, Goa & Jewar Airport." },
  { img: "/images/luxury-cars.jpg", tag: "Luxury Cars on Rent", title: "Mercedes, BMW & Audi for the occasion.", sub: "Chauffeur-driven luxury for weddings, events and corporate travel." },
  { img: "/images/self-drive.jpg", tag: "Self Drive Car Rental", title: "Take the wheel. Go anywhere.", sub: "Hourly, daily and weekly self-drive rentals with quick handover." },
  { img: "/images/city-goa.jpg", tag: "Goa", title: "Beach hops on your schedule.", sub: "Airport pickups, sightseeing and self-drive across North & South Goa." },
  { img: "/images/city-jewar.jpg", tag: "Jewar Airport", title: "Fixed-fare airport transfers.", sub: "On-time pickups for Noida International Airport, day or night." },
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
            <img src={s.img} alt={s.title} />
            <div className="cap"><div className="in">
              <small>{s.tag}</small>
              <h2>{s.title}</h2>
              <p>{s.sub}</p>
            </div></div>
          </div>
        ))}
      </div>
      <div className="dots">
        {SLIDES.map((_, d) => (
          <button key={d} className={d === i ? "active" : ""} onClick={() => setI(d)} aria-label={`Slide ${d + 1}`} />
        ))}
      </div>
    </div>
  );
}
