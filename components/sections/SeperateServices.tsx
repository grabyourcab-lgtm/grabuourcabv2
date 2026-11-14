import Link from "next/link";

/**
 * OtherServices - "Explore Our Other Services" section
 *
 * Usage:
 *   <OtherServices current="taxi-service-delhi" />
 *
 * current -> jis page par ho uska slug (wo list me nahi dikhega)
 * limit   -> optional, kitne cards dikhane hain (default: sab)
 */
const SERVICES = [
  {
    slug: "tempo-traveller-rent",
    title: "Tempo Traveller Rent",
    desc: "Comfortable Tempo Traveller on rent for group trips, family outings, weddings, pilgrimages and outstation tours, with spacious seating and experienced drivers.",
  },
  {
    slug: "luxury-car-rental",
    title: "Luxury Car Rental",
    desc: "Book premium luxury cars with or without a chauffeur for weddings, business meetings, airport transfers and special occasions, with a smooth and stylish ride.",
  },
  {
    slug: "corporate-cab-services",
    title: "Corporate Cab Services",
    desc: "Reliable corporate cab services for employee commute, office transfers and client pickups, with punctual service, professional drivers and flexible monthly plans.",
  },
];

export default function SeperateServices({
  current = "",
  limit,
  heading = "Explore Our Other Services",
}) {
  const clean = current.replace(/^\/+|\/+$/g, "");
  let items = SERVICES.filter((s) => s.slug !== clean);
  if (limit) items = items.slice(0, limit);

  return (
    <section
      style={{
        background: "var(--grey, #f5f5f5)",
        padding: "55px 0",
        fontFamily: '"Inter","Segoe UI",Roboto,Arial,sans-serif',
      }}
    >
      {/* hover ke liye chhota scoped css (inline me hover nahi hota) */}
      <style>{`
        .osc-card{transition:box-shadow .18s}
        .osc-card:hover{box-shadow:0 10px 30px rgba(0,0,0,.14)!important}
        .osc-btn{transition:background .18s}
        .osc-btn:hover{background:var(--red-dark,#7e1628)!important}
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            fontFamily: '"Poppins","Inter",sans-serif',
            fontSize: "clamp(24px,3.2vw,32px)",
            fontWeight: 700,
            color: "var(--ink, #212529)",
            textAlign: "center",
            margin: "0 0 34px",
          }}
        >
          {heading}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 20,
          }}
        >
          {items.map((s) => (
            <div
              key={s.slug}
              className="osc-card"
              style={{
                background: "#fff",
                borderRadius: "var(--r, 6px)",
                boxShadow: "var(--shadow, 0 2px 10px rgba(0,0,0,.08))",
                padding: "28px 24px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: '"Poppins","Inter",sans-serif',
                  fontSize: 19,
                  fontWeight: 600,
                  color: "var(--red, #9f1c33)",
                  margin: "0 0 12px",
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.7,
                  color: "var(--text, #444)",
                  margin: "0 0 20px",
                  flexGrow: 1,
                }}
              >
                {s.desc}
              </p>

              <Link
                href={`/${s.slug}`}
                className="osc-btn"
                style={{
                  display: "inline-block",
                  background: "var(--red, #9f1c33)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "10px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}