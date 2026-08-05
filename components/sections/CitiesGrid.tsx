"use client"
import Link from "next/link";
import type { CSSProperties } from "react";

type CityCard = {
  name: string;
  slug: string;
  img: string;
};
const CITY_CARDS: CityCard[] = [
  { name: "Gurugram", slug: "gurugram", img: "/cities/gurugram.jpg" },
  { name: "Noida", slug: "noida", img: "/cities/noida.webp" },
  { name: "Greater Noida West", slug: "greater-noida-west", img: "/cities/g-noida.jpg" },
  { name: "Ghaziabad", slug: "ghaziabad", img: "/cities/ghaziabad.jpg" },
  { name: "Noida International Airport, Jewar", slug: "noida-international-jewar", img: "/cities/noida-int.jpg" },
  { name: "Goa", slug: "goa", img: "/cities/goa.png" },
  { name: "Meerut", slug: "meerut", img: "/cities/meerut.jpg" },
  { name: "Delhi", slug: "delhi", img: "/cities/delhi.webp" },
];

const sectionStyle: CSSProperties = {
  padding: "60px 20px",
  boxSizing: "border-box",
};

const wrapStyle: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
};

const headStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: 32,
};

const titleStyle: CSSProperties = {
  margin: "0 0 8px 0",
  fontSize: 28,
  fontWeight: 800,
  color: "#1a1a1a",
};

const subStyle: CSSProperties = {
  margin: 0,
  fontSize: 15,
  color: "#666",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: 16,
};

const cardStyle: CSSProperties = {
  position: "relative",
  display: "block",
  width: "100%",
  height: 260,
  borderRadius: 14,
  overflow: "hidden",
  backgroundColor: "#2a2a2a",
  textDecoration: "none",
  boxSizing: "border-box",
};

const imgStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  objectFit: "cover",
  objectPosition: "center",
  display: "block",
  margin: 0,
  padding: 0,
  border: "none",
};

const overlayStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage:
    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.4) 100%)",
};

const nameStyle: CSSProperties = {
  position: "absolute",
  left: 14,
  right: 14,
  bottom: 14,
  color: "#ffffff",
  fontWeight: 700,
  fontSize: 15,
  lineHeight: 1.25,
  textShadow: "0 1px 4px rgba(0,0,0,0.7)",
};

export default function CitiesGrid() {
  return (
    <section style={sectionStyle}>
      <div style={wrapStyle}>
        <div style={headStyle}>
          <h2 style={titleStyle}>Best Cab Service In Gurugram, Delhi And Noida</h2>
          <p style={subStyle}>Grab Your Cab offers city taxis, inter-city cabs, and local cabs at hourly packages.</p>
        </div>

        <div
          style={{
            ...gridStyle,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {CITY_CARDS.map((c) => (
            <Link href={`/${c.slug}`} key={c.slug} style={cardStyle}>
              <img src={c.img} alt={c.name} loading="lazy" style={imgStyle} />
              <div style={overlayStyle} />
              <span style={nameStyle}>{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}