import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import { forService } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Icon from "@/components/site/Icon";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Book a Taxi | Grab Your Cab",
  description: "Book a taxi with verified driver in Delhi NCR, Goa & Jewar Airport — choose your car, date, pickup and drop. Fixed fares, 24/7.",
};

export default async function TaxiServices() {
  let cars: Car[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("cars").select("*").eq("available", true).order("sort_order");
    cars = forService((data as Car[]) ?? [], "taxi");
  } catch { cars = []; }

  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Taxi Services · with driver · 24/7</span>
          <h1>Book a Taxi — choose your car</h1>
          <p className="lead">Step 1 of 2 — pick a car below. Next you&rsquo;ll choose your booking date, pickup and drop location, and confirm on WhatsApp.</p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="fleet-grid static">
            {cars.map((c) => {
              const photo = c.photo_url && (c.photo_url.startsWith("http") || c.photo_url.startsWith("/")) ? c.photo_url : "";
              return (
                <div className="ccard" key={c.id}>
                  <div className="chead">
                    <div className="cname">
                      <span>{c.category}{c.model_year ? ` ${c.model_year}` : ""}</span>
                      <h3>{c.name}</h3>
                    </div>
                    <div className="cimg">
                      {photo ? <img src={photo} alt={c.name} loading="lazy" />
                        : <span className="carart"><Icon name="car" className="ca-ic" /></span>}
                    </div>
                  </div>
                  <div className="specs">
                    <span><Icon name="seat" />{c.seats} seats</span>
                    {c.transmission ? <span><Icon name="gear" />{c.transmission}</span> : null}
                    {c.fuel ? <span><Icon name="fuel" />{c.fuel}</span> : null}
                  </div>
                  <div className="cfoot">
                    <div className="price"><b>&#8377;{c.price?.toLocaleString("en-IN")}</b><span>{c.category === "Luxury" ? "per day" : "per 8hr · 80km"}</span></div>
                    <Link className="btn btn-amber btn-sm" href={`/taxi/book?car=${encodeURIComponent(c.name)}`}>Select <Icon name="arrow" /></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
