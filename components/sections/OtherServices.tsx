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
    slug: "taxi-service-delhi",
    title: "Taxi Service Delhi",
    desc: "Book reliable local, outstation and airport taxis in Delhi with verified drivers and transparent fares.",
  },
  {
    slug: "self-drive-car-rental-delhi",
    title: "Self Drive Car Rental Delhi",
    desc: "Rent a well-maintained car in Delhi and drive it yourself on hourly, daily or weekly plans.",
  },
  {
    slug: "cab-service-gurgaon",
    title: "Cab Service Gurgaon",
    desc: "Comfortable cabs in Gurgaon for office commutes, airport transfers and outstation trips, available 24x7.",
  },
  {
    slug: "self-drive-car-rental-gurgaon",
    title: "Self Drive Car Rental Gurgaon",
    desc: "Self drive cars in Gurgaon with simple paperwork, flexible plans and no hidden charges.",
  },
  {
    slug: "cab-service-noida",
    title: "Cab Service Noida",
    desc: "Safe and punctual cab service in Noida for daily travel, airport drops and out-of-city journeys.",
  },
  {
    slug: "self-drive-car-rental-noida",
    title: "Self Drive Car Rental Noida",
    desc: "Choose from a range of clean, serviced cars in Noida and enjoy the freedom of driving yourself.",
  },
  {
    slug: "taxi-service-greater-noida",
    title: "Taxi Service Greater Noida",
    desc: "Dependable taxi service in Greater Noida for local rides, airport transfers and long-distance travel.",
  },
  {
    slug: "jewar-airport-cab-service",
    title: "Jewar Airport Cab Service",
    desc: "Pre-booked pickups and drops for Noida International Airport, Jewar, with professional chauffeurs.",
  },
  {
    slug: "taxi-service-ghaziabad",
    title: "Taxi Service Ghaziabad",
    desc: "Affordable taxis in Ghaziabad for city rides, railway and airport transfers, and outstation trips.",
  },
  {
    slug: "car-rent-faridabad",
    title: "Car Rent Faridabad",
    desc: "Rent cars in Faridabad with or without a driver for business, family and weekend travel.",
  },
  {
    slug: "taxi-service-meerut",
    title: "Taxi Service Meerut",
    desc: "Hassle-free taxi booking in Meerut and on the Delhi–Meerut route, with courteous and experienced drivers.",
  },
  {
    slug: "car-rental-goa",
    title: "Car Rental Goa",
    desc: "Explore Goa at your own pace with our self drive and chauffeur-driven car rental options.",
  },
  {
    slug: "tempo-traveller-rent",
    title: "Tempo Traveller Rent",
    desc: "Spacious Tempo Travellers for family trips, group tours, pilgrimages and corporate outings.",
  },
  {
    slug: "luxury-car-rental",
    title: "Luxury Car Rental",
    desc: "Premium luxury cars for weddings, business meetings and special occasions, with or without a chauffeur.",
  },
  {
    slug: "corporate-cab-services",
    title: "Corporate Cab Services",
    desc: "Employee transport, client pickups and airport transfers for companies, with monthly billing and dedicated support.",
  },
];

export default function OtherServices({
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