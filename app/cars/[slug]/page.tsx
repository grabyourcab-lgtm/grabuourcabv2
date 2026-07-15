import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CarCard from "@/components/site/CarCard";
import Icon from "@/components/site/Icon";
import { waLink, WA } from "@/lib/site";

export const dynamic = "force-dynamic";

async function getCar(slug: string) {
  try {
    const supabase = createClient();
    const { data } = await supabase.from("cars").select("*").eq("slug", slug).single();
    return (data as Car) || null;
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const car = await getCar(params.slug);
  if (!car) return { title: "Car | Grab Your Cab" };
  return {
    title: `${car.name} on Rent | Grab Your Cab`,
    description: `Book the ${car.name} (${car.category}) from ₹${car.price?.toLocaleString("en-IN")} — with driver or self-drive, across Delhi NCR, Goa & Jewar Airport.`,
  };
}

export default async function CarPage({ params }: { params: { slug: string } }) {
  const car = await getCar(params.slug);
  if (!car || !car.available) notFound();

  let related: Car[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("cars").select("*")
      .eq("available", true).eq("category", car.category).neq("slug", car.slug)
      .order("sort_order").limit(3);
    related = (data as Car[]) ?? [];
  } catch { related = []; }

  const photo = car.photo_url && (car.photo_url.startsWith("http") || car.photo_url.startsWith("/")) ? car.photo_url : "";
  const msg = `Hi Grab Your Cab! I want to book the ${car.name}. Please share availability & fare.`;
  const isLux = car.category === "Luxury";

  return (
    <>
      <Header />
      <section className="sec" style={{ paddingBottom: 34 }}>
        <div className="container">
          <nav className="crumbs">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/fleet">Our Fleet</Link><span>/</span>
            <b>{car.name}</b>
          </nav>
          <div className="car-detail">
            <div className="cd-pic">
              {car.badge ? <span className={car.badge === "Luxury" ? "badge lux" : "badge"}>{car.badge}</span> : null}
              {photo
                ? <img src={photo} alt={car.name} />
                : <span className="carart"><Icon name="car" className="ca-ic" /><span>{car.name}</span></span>}
            </div>
            <div className="cd-info">
              <span className="eyebrow">{car.category}{car.model_year ? ` · ${car.model_year}` : ""}</span>
              <h1>{car.name}</h1>
              <div className="cd-specs">
                {car.seats ? <div className="sp"><Icon name="seat" /><b>{car.seats} Seater</b><span>Seats</span></div> : null}
                {car.transmission ? <div className="sp"><Icon name="gear" /><b>{car.transmission}</b><span>Transmission</span></div> : null}
                {car.fuel ? <div className="sp"><Icon name="fuel" /><b>{car.fuel}</b><span>Fuel</span></div> : null}
                {car.luggage ? <div className="sp"><Icon name="wallet" /><b>{car.luggage} Bags</b><span>Luggage</span></div> : null}
              </div>
              <div className="cd-price">
                <div><b>&#8377;{car.price?.toLocaleString("en-IN")}</b>
                  <span>{isLux ? "per day, onwards" : "8 hr / 80 km, onwards"}</span></div>
                <p>Final fare confirmed on WhatsApp before you book — no hidden charges.</p>
              </div>
              <div className="cd-ctas">
                <a className="btn btn-amber" href={waLink(msg)} target="_blank" rel="noopener">Book Now</a>
                <a className="btn btn-wa" href={waLink(msg)} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp</a>
                <a className="btn btn-ghost" href={`tel:+${WA}`}><Icon name="phone" />Call</a>
              </div>
              <ul className="ticks" style={{ marginTop: 20 }}>
                <li><Icon name="check" />Verified driver or self-drive options</li>
                <li><Icon name="check" />Clean, serviced &amp; sanitised before every trip</li>
                <li><Icon name="check" />Available across Delhi NCR, Goa &amp; Jewar Airport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="sec-head split">
              <div><span className="eyebrow">Similar rides</span><h2>More {car.category} options</h2></div>
              <Link className="btn btn-ghost btn-sm" href="/fleet">All cars <Icon name="arrow" /></Link>
            </div>
            <div className="fleet-grid carousel">{related.map((c) => <CarCard key={c.id} car={c} />)}</div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
