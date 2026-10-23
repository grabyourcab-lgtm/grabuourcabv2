import Header from "@/components/site/Header";
import BlogCard from "./components/BlogCard";
import { blogs } from "./data/blog";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "Blogs | Grab Your Cab",
  description: "Latest blogs and guides.",
  alternates: {
    canonical: "/blogs",
  },
};

const css = `
.bl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media (max-width:1000px){.bl-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:620px){.bl-grid{grid-template-columns:1fr}}
`;

export default function BlogsPage() {
  return (
    <>
    <Header/>
    <main style={{ fontFamily: "Inter, 'Segoe UI', Arial, sans-serif", color: "#444" }}>
      <style>{css}</style>

      {/* hero */}
      <section style={{ background: "#33414f", color: "#fff", padding: "44px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <span
            style={{
              color: "#ffb3c1",
              fontWeight: 600,
              fontSize: 12.5,
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}
          >
            Our Blog
          </span>
          <h1
            style={{
              fontFamily: "Poppins, Inter, sans-serif",
              color: "#fff",
              fontSize: "clamp(24px,3.6vw,36px)",
              fontWeight: 700,
              margin: "6px 0 0",
            }}
          >
            Latest Blogs & Guides
          </h1>
        </div>
      </section>

      {/* cards */}
      <section style={{ background: "#f5f5f5", padding: "55px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div className="bl-grid">
            {blogs.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}