import "./admin.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return (
    <div className="admin">
      <aside>
        <div className="b"><span className="m">GC</span> Admin</div>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/cars?type=taxi">Taxi Service Cars</Link>
        <Link href="/admin/cars?type=self-drive">Self Drive Cars</Link>
        <Link href="/admin/cars">All Cars</Link>
        <Link href="/admin/enquiries">Enquiries</Link>
        <Link href="/admin/blog">Blog</Link>
        <Link href="/admin/content">Content</Link>
        <Link href="/" target="_blank">View site ↗</Link>
        <form action={signOut}><button className="out" type="submit">Sign out</button></form>
        <div style={{ color: "#5b6478", fontSize: 12, marginTop: 16 }}>{user.email}</div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
