import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";

export const dynamic = "force-dynamic";

const WA = "https://wa.me/917522817555?text=Hello%20Grab%20Your%20Cab!%20I%20would%20like%20to%20book%20a%20taxi.";

export default async function Home() {
  let cars: Car[] = [];
  let error: string | null = null;
  try {
    const supabase = createClient();
    const { data, error: e } = await supabase
      .from("cars")
      .select("*")
      .eq("available", true)
      .order("sort_order");
    if (e) error = e.message;
    cars = (data as Car[]) ?? [];
  } catch (err: any) {
    error = err?.message ?? "Could not connect to the database.";
  }

  return (
    <>
      <header className="site container">
        <div className="brand"><span className="m">GC</span> Grab Your Cab</div>
        <a className="btn" href={WA} target="_blank" rel="noopener">Book a Taxi</a>
      </header>

      <section className="hero">
        <div className="container">
          <span className="eyebrow">10 Years · 24/7</span>
          <h1>Your ride is ready when you are.</h1>
          <p>Cabs, self-drive cars, luxury sedans and group coaches across Delhi NCR, Goa and
             Jewar Airport — now powered by your live database.</p>
        </div>
      </section>

      <section className="section container">
        <h2>Our fleet</h2>
        <p className="muted">{cars.length} vehicles loaded from Supabase.</p>

        {error && (
          <div className="note">
            <b>Database not connected yet.</b> Add your Supabase keys to <code>.env.local</code>,
            run <code>supabase/schema.sql</code> then <code>supabase/seed.sql</code> in the Supabase
            SQL editor, and reload. (Details: {error})
          </div>
        )}

        <div className="grid">
          {cars.map((c) => (
            <div className="card" key={c.id}>
              <div className="pic">
                {c.badge ? <span className="badge">{c.badge}</span> : null}
                {c.photo_url ? <img src={c.photo_url} alt={c.name} /> : <span>{c.name}</span>}
              </div>
              <div className="body">
                <h3>{c.name}</h3>
                <div className="specs">
                  <span className="spec">{c.seats} Seater</span>
                  <span className="spec">{c.category}</span>
                  <span className="spec">{c.fuel}</span>
                  <span className="spec">{c.transmission}</span>
                </div>
                <div className="price">&#8377;{c.price?.toLocaleString("en-IN")} <span className="muted" style={{fontSize:12,fontWeight:400}}>onwards</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="site">
        <div className="container">© {new Date().getFullYear()} Grab Your Cab — Delhi NCR · Goa · Jewar Airport</div>
      </footer>
    </>
  );
}
