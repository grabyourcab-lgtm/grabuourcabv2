import Link from "next/link";
import BlogCard from "./BlogCard";
import { blogs } from "../data/blog";

type Props = {
  limit?: number;          // homepage pe 3 de sakte ho
  showHeading?: boolean;   // homepage pe true, /blogs page pe false (wahan hero hai)
  eyebrow?: string;
  title?: string;
  showViewAll?: boolean;   // "View All Blogs" button
  background?: string;
};

const css = `
.bl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media (max-width:1000px){.bl-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:620px){.bl-grid{grid-template-columns:1fr}}
.bl-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:28px}
.bl-viewall{display:inline-block;padding:10px 22px;border-radius:6px;background:#33414f;color:#fff;font-weight:600;font-size:14px;text-decoration:none;transition:opacity .2s}
.bl-viewall:hover{opacity:.85}
`;

export default function BlogsSection({
  limit,
  showHeading = false,
  eyebrow = "Our Blog",
  title = "Latest Blogs & Guides",
  showViewAll = false,
  background = "#f5f5f5",
}: Props) {
  const list = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section
      style={{
        background,
        padding: "55px 0",
        fontFamily: "Inter, 'Segoe UI', Arial, sans-serif",
        color: "#444",
      }}
    >
      <style>{css}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {showHeading && (
          <div className="bl-head">
            <div>
              <span
                style={{
                  color: "#e0405a",
                  fontWeight: 600,
                  fontSize: 12.5,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </span>
              <h2
                style={{
                  fontFamily: "Poppins, Inter, sans-serif",
                  color: "#33414f",
                  fontSize: "clamp(22px,3vw,32px)",
                  fontWeight: 700,
                  margin: "6px 0 0",
                }}
              >
                {title}
              </h2>
            </div>

            {showViewAll && (
              <Link href="/blogs" className="bl-viewall">
                View All Blogs →
              </Link>
            )}
          </div>
        )}

        <div className="bl-grid">
          {list.map((b) => (
            <BlogCard key={b.slug} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}