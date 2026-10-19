"use client";
import Link from "next/link";
import { useState } from "react";
import { blogs } from "../data/blog";



export default function BlogCard({ blog }: { blog: Blog }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        border: "1px solid #e1e1e1",
        borderRadius: 6,
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: hover ? "0 10px 30px rgba(0,0,0,.14)" : "0 2px 10px rgba(0,0,0,.06)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "all .18s",
      }}
    >
      {/* top banner (image ki jagah) */}
    <div
        style={{
          height: 150,
          // background: "linear-gradient(135deg,#33414f,#9f1c33)",
          backgroundImage: `url(${blog.thumbnail.src})`, // <-- yahan .src add kiya hai
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          padding: 14,
        }}
      >
        <span
          style={{
            background: "#9f1c33",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 3,
          }}
        >
          {blog.category}
        </span>
      </div>

      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>
          {blog.date} · {blog.readTime}
        </div>
        <h3
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.3,
            color: hover ? "#9f1c33" : "#212529",
            margin: "0 0 8px",
          }}
        >
          {blog.title}
        </h3>
        <p style={{ color: "#666", fontSize: 14, lineHeight: 1.6, margin: 0, flex: 1 }}>
           {blog.excerpt.slice(0, 120)+"..."}
        </p>
        <span
          style={{
            marginTop: 14,
            color: "#9f1c33",
            fontWeight: 600,
            fontSize: 13,
            textTransform: "uppercase",
          }}
        >
          Read More →
        </span>
      </div>
    </Link>
  );
}