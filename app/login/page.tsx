"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    router.push("/admin"); router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0B1120" }}>
      <form onSubmit={submit} style={{ background: "#fff", padding: 32, borderRadius: 16, width: 360, boxShadow: "0 20px 50px rgba(0,0,0,.35)" }}>
        <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 4 }}>Grab Your Cab — Admin</div>
        <div style={{ color: "#6A7180", fontSize: 14, marginBottom: 18 }}>Sign in to manage your fleet.</div>
        <label style={{ fontSize: 13, fontWeight: 700 }}>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
          style={inp} placeholder="you@email.com" />
        <label style={{ fontSize: 13, fontWeight: 700 }}>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required
          style={inp} placeholder="••••••••" />
        {err && <div style={{ color: "#c0392b", fontSize: 13, marginTop: 10 }}>{err}</div>}
        <button disabled={loading} style={btn}>{loading ? "Signing in…" : "Sign in"}</button>
      </form>
    </div>
  );
}
const inp: React.CSSProperties = { width: "100%", padding: "11px 13px", border: "1px solid #E8EAEE", borderRadius: 10, margin: "5px 0 14px", fontSize: 14 };
const btn: React.CSSProperties = { width: "100%", padding: 13, background: "#FFC21A", color: "#0B1120", fontWeight: 800, border: 0, borderRadius: 10, cursor: "pointer", marginTop: 6 };
