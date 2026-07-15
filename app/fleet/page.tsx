import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CarCard from "@/components/site/CarCard";

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
      <section className="sec">
        <div className="container">
          <div className="fleet-grid">{cars.map((c) => <CarCard key={c.id} car={c} />)}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
