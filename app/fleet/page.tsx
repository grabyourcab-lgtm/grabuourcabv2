import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FleetShowcase from "@/components/site/FleetShowcase";

export const dynamic = "force-dynamic";
export const metadata = { title: "Our Fleet | Grab Your Cab", description: "All taxis, self-drive and luxury cars available across Delhi NCR, Goa and Jewar Airport." };

export default async function Fleet() {
  let cars: Car[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("cars").select("*").eq("available", true).order("sort_order");
    cars = (data as Car[]) ?? [];
  } catch { cars = []; }

  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our fleet</span>
          <h1>{cars.length} cars ready to book</h1>
          <p className="lead">From CNG hatchbacks to premium SUVs and luxury cars — every ride on one page.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 26 }}>
        <div className="container">
          <FleetShowcase cars={cars} limit={999} carousel={false} />
        </div>
      </section>
      <Footer />
    </>
  );
}
