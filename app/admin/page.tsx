import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = createClient();
  const [{ count: cars }, { count: enquiries }, { count: posts }] = await Promise.all([
    supabase.from("cars").select("*", { count: "exact", head: true }),
    supabase.from("enquiries").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
  ]);
  return (
    <>
      <h1>Dashboard</h1>
      <div className="sub">Welcome back. Here's your fleet at a glance.</div>
      <div className="cards">
        <div className="stat"><div className="n">{cars ?? 0}</div><div className="l">Cars in fleet</div></div>
        <div className="stat"><div className="n">{enquiries ?? 0}</div><div className="l">New enquiries</div></div>
        <div className="stat"><div className="n">{posts ?? 0}</div><div className="l">Blog posts</div></div>
      </div>
    </>
  );
}
