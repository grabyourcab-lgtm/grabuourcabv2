import Image from "next/image";

/**
 * AuthorCard - blog ke end me author/authority section
 * Usage: <AuthorCard />  ya  <AuthorCard label="Reviewed by" name="..." role="..." bio="..." image="..." />
 */
export default function AuthorCard({
  label = "Written by",
  name = "Kamal Srivastava",
  role = "Author",
  bio = "A seasoned professional with over 18 years in senior leadership roles across top corporate organisations in India and abroad. Extensive business travel gave him a first-hand view of what was missing from the industry — reliability, convenience, personalisation and a truly customer-centric approach. That gap became the reason Grab Your Cab exists.",
  image = "/images/founders/kamal.jpeg",
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // mobile pe photo upar, text neeche
        alignItems: "stretch",
        maxWidth: 680,
        margin: "32px 0",
        background: "#fff",
        border: "1px solid var(--line, #e1e1e1)",
        fontFamily: '"Poppins","Inter",sans-serif',
      }}
    >
      {/* Photo (left) */}
      <div
        style={{
          position: "relative",
          flex: "0 0 150px",
          minHeight: 190,
          background: "var(--grey, #f5f5f5)",
        }}
      >
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          sizes="150px"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>

      {/* Text (right) */}
      <div style={{ flex: "1 1 260px", padding: "12px 14px", minWidth: 0 }}>
        <p
          style={{
            margin: "0 0 4px",
            fontSize: 12.5,
            fontWeight: 500,
            color: "var(--red, #9f1c33)",
          }}
        >
          {/* {label} */}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 1.3,
            color: "var(--ink, #212529)",
          }}
        >
          {name}
        </p>
        <p
          style={{
            margin: "2px 0 0",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.5,
            color: "var(--slate, #33414f)",
          }}
        >
          {role}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 13.5,
            fontWeight: 300,
            lineHeight: 1.7,
            textAlign: "justify",
            color: "var(--text, #444)",
          }}
        >
          {bio}
        </p>
      </div>
    </div>
  );
}