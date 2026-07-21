import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import { forService } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CarCard from "@/components/site/CarCard";
import Icon from "@/components/site/Icon";

export const dynamic = "force-dynamic";
export const metadata = { title: "Self Drive Cars | Grab Your Cab", description: "Choose your self-drive car — hatchbacks, SUVs and luxury cars across Delhi NCR, Goa and Jewar Airport." };

export default async function Results({ searchParams }: {
  searchParams: { loc?: string; start?: string; end?: string };
}) {
  const loc = searchParams.loc || "Delhi NCR";
  const start = searchParams.start || "";
  const end = searchParams.end || "";

  let cars: Car[] = [];
  try {
    const supabase = createClient();
    const goa = /goa/i.test(loc);
    let q = supabase.from("cars").select("*").eq("available", true).order("sort_order");
    if (goa) q = q.contains("cities", ["goa"]);
    const { data } = await q;
    cars = forService((data as Car[]) ?? [], "self-drive");
  } catch { cars = []; }

  return (
    <>
      <Header />
      {/* search summary bar */}
      <div className="rs-bar">
        <div className="container in">
          <div className="rs-info">
            <span className="rs-item"><Icon name="pin" />{loc}</span>
            {start ? <span className="rs-item"><Icon name="clock" />{start}</span> : null}
            {end ? <span className="rs-item"><Icon name="arrow" />{end}</span> : null}
          </div>
          <Link className="btn btn-ghost btn-sm" href={`/self-drive?loc=${encodeURIComponent(loc)}`}>Modify search</Link>
        </div>
      </div>
      <section className="sec" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="sec-head split">
            <div><h2>{cars.length} cars available in {loc}</h2>
              <p>Self drive — book any car on WhatsApp with your dates, we confirm availability instantly.</p></div>
          </div>
          <div className="fleet-grid static">
            {cars.map((c) => (
              <CarCard key={c.id} car={c}
                waMsg={`Hi Grab Your Cab! I want a SELF DRIVE car.\nCar: ${c.name}\nLocation: ${loc}\nStart: ${start || "-"}\nEnd: ${end || "-"}\nPlease confirm availability & price.`} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
