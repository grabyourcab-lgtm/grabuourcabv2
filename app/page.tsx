import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CarCard from "@/components/site/CarCard";
import BookingBar from "@/components/site/BookingBar";
import ServicesSection from "@/components/site/ServicesSection";
import RoutesSection from "@/components/site/RoutesSection";
import Icon from "@/components/site/Icon";
import Link from "next/link";
import { CITIES, TESTIMONIALS, OFFICES, PHONES, waLink } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function Home() {
  let cars: Car[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("cars").select("*").eq("available", true).order("sort_order");
    cars = (data as Car[]) ?? [];
  } catch { cars = []; }
  // pick a varied set of 6 for the homepage: prefer badged + spread of categories
  const featured = [...cars].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0)).slice(0, 6);
  const list = featured.length ? featured : cars.slice(0, 6);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container in">
          <div>
            <span className="eyebrow">10 Years · 24/7 · Delhi NCR · Goa · Jewar</span>
            <h1>Your ride is ready<br /><span className="amb">when you are.</span></h1>
            <p className="lead">Cabs, self-drive cars, luxury sedans and group coaches across Delhi NCR,
              Goa and Jewar Airport — booked in seconds on WhatsApp, with clean cars and verified drivers.</p>
            <div className="hero-badges">
              <div className="hb"><span className="i"><Icon name="wallet" /></span><div><b>Best Prices</b><span>Transparent fares</span></div></div>
              <div className="hb"><span className="i"><Icon name="shield" /></span><div><b>Trusted &amp; Safe</b><span>Verified drivers</span></div></div>
              <div className="hb"><span className="i"><Icon name="bolt" /></span><div><b>Quick &amp; Easy</b><span>Book in 2 minutes</span></div></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="frame"><img src="/images/hero.jpg" alt="Grab Your Cab premium fleet" /></div>
            <div className="chip a"><span className="d"><Icon name="shield" /></span><div><b>Verified drivers</b><small>Trained &amp; background-checked</small></div></div>
            <div className="chip b"><span className="d"><Icon name="star" /></span><div><b>4.9 / 5 rating</b><small>2,000+ happy riders</small></div></div>
          </div>
        </div>
        <div className="container"><BookingBar /></div>
      </section>

      {/* TRUST */}
      <div className="container">
        <div className="trust">
          <div className="t"><Icon name="check" /> Free cancellation</div>
          <div className="t"><Icon name="check" /> No hidden charges</div>
          <div className="t"><Icon name="check" /> 24/7 support</div>
          <div className="rate"><b>4.9</b><span className="stars">★★★★★</span><span>from 2,000+ riders</span></div>
        </div>
      </div>

      {/* FLEET */}
      <section className="sec" id="fleet">
        <div className="container">
          <div className="sec-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
            <div><span className="eyebrow">Drive more, pay less</span><h2>Our popular cars</h2>
              <p>{cars.length}+ vehicles — hatchbacks to Rolls Royce. Live from our fleet.</p></div>
            <Link className="btn btn-ghost btn-sm" href="/fleet">View all cars <Icon name="arrow" /></Link>
          </div>
          <div className="fleet-grid">{list.map((c) => <CarCard key={c.id} car={c} />)}</div>
        </div>
      </section>

      <ServicesSection />

      {/* CITIES */}
      <section className="sec" id="cities">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Where we drive</span><h2>Book by city</h2></div>
          <div className="city-grid">
            {CITIES.map((c) => (
              <div className="city" key={c.slug}>
                <img src={c.img} alt={c.name} loading="lazy" />
                <span className="pill">{c.pill}</span>
                <div className="cc">
                  <h3>{c.name}</h3><p>{c.blurb}</p>
                  <div className="meta"><span>{c.cabs}</span><span>24/7</span></div>
                  <Link className="btn btn-amber btn-sm" href="/fleet">Explore {c.name} <Icon name="arrow" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="sec-head center"><span className="eyebrow">Simple &amp; fast</span><h2>Booking is as easy as 1–2–3</h2></div>
          <div className="steps">
            <div className="step"><div className="n"><Icon name="search" /></div><h3>1. Tell us your trip</h3><p>Share pickup, drop and date on WhatsApp or the form.</p></div>
            <div className="step"><div className="n"><Icon name="car" /></div><h3>2. Pick your car</h3><p>Choose from sedans, SUVs, luxury cars or coaches at a clear fare.</p></div>
            <div className="step"><div className="n"><Icon name="check" /></div><h3>3. Ride &amp; relax</h3><p>A verified driver arrives on time. Sit back and enjoy.</p></div>
          </div>
        </div>
      </section>

      <RoutesSection />

      {/* TESTIMONIALS */}
      <section className="sec" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="sec-head center"><span className="eyebrow">Loved by riders</span><h2>What our riders say</h2></div>
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <div className="tst" key={t.name}>
                <div className="stars">★★★★★</div><p>“{t.text}”</p>
                <div className="who"><span className="av">{t.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}</span>
                  <div><b>{t.name}</b><span>{t.role}</span></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LOCATIONS */}
      <section className="sec">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Service locations</span><h2>Cab &amp; car rental across Delhi NCR, Goa &amp; more</h2></div>
          <div className="loc-grid">
            {PHONES.map(([c, n]) => (
              <div className="loc" key={c + n}><div className="lt"><Icon name="phone" />{c}</div><a href={`tel:+${n}`}>+{n}</a></div>
            ))}
          </div>
          <div className="office-grid">
            {OFFICES.map((o) => (
              <div className="office" key={o.city}><h4><Icon name="pin" />{o.city} Office</h4><p>{o.addr}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP BANNER */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="help">
            <div><h2>Need help? We're here 24/7.</h2><p>Call or chat with our team any time — every day of the year.</p></div>
            <div className="hbtns">
              <a className="btn btn-amber" href="tel:+917522817555"><Icon name="phone" />+91 75228 17555</a>
              <a className="btn btn-wa" href={waLink("Hello Grab Your Cab! I need help booking a ride.")} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
