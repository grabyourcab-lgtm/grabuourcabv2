export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogs: Blog[] = [
  {
    slug: "demo-blog",
    title: "What is Next.js? A Beginner's Guide",
    excerpt: "Next.js ek React framework hai jo routing, SSR aur SEO ko easy bana deta hai.",
    category: "Next.js",
    date: "10 Oct 2026",
    readTime: "4 min read",
  },
  {
    slug: "mern-stack",
    title: "MERN Stack Explained for Beginners",
    excerpt: "MongoDB, Express, React aur Node.js se full-stack app kaise banti hai.",
    category: "Full Stack",
    date: "08 Oct 2026",
    readTime: "5 min read",
  },
  {
    slug: "web-development",
    title: "Web Development Roadmap 2026",
    excerpt: "HTML se lekar deployment tak ka simple step-by-step roadmap.",
    category: "Web Dev",
    date: "05 Oct 2026",
    readTime: "6 min read",
  },
];