import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import BookingBar from "@/components/site/BookingBar";
import FleetShowcase from "@/components/site/FleetShowcase";
import ServicesSection from "@/components/site/ServicesSection";
import RoutesSection from "@/components/site/RoutesSection";
import Icon from "@/components/site/Icon";
import Link from "next/link";
import { CITIES, TESTIMONIALS, OFFICES, PHONES, waLink } from "@/lib/site";

export const dynamic = "force-dynamic";

function Stars() {
  return (
    <span className="stars" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" />)}
    </span>
  );
}

export default async function Home() {
  let cars: Car[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("cars").select("*").eq("available", true).order("sort_order");
    cars = (data as Car[]) ?? [];
  } catch { cars = []; }

  return (
    <>
      <Header />

      {/* HERO — editorial collage style */}
      <section className="hero">
        <svg className="map-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <circle cx="1050" cy="80" r="260" fill="#ECE4D6" opacity=".55" />
          <circle cx="120" cy="520" r="200" fill="#ECE4D6" opacity=".4" />
        </svg>
        <div className="container in">
          <div>
            <span className="eyebrow">10 Years · 24/7 · Delhi NCR · Goa · Jewar</span>
            <h1>Your ride is ready<br />
              <span className="hl">when you are.
                <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 9 Q 50 2 100 7 T 197 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".55" />
                </svg>
              </span>
            </h1>
            <p className="lead">Cabs, self-drive cars, luxury sedans and group coaches across Delhi NCR,
              Goa and Jewar Airport — booked in seconds on WhatsApp, with clean cars and verified drivers.</p>
            <div className="hero-ctas">
              <a className="btn btn-amber" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener">Book your ride</a>
              <a className="btn btn-ghost" href="tel:+917522817555"><Icon name="phone" />+91 75228 17555</a>
            </div>
            <div className="hero-stats">
              <div className="hs"><b>10+</b><span>Years on the road</span></div>
              <div className="hs"><b>500+</b><span>Cabs &amp; coaches</span></div>
              <div className="hs"><b>4.9</b><span>Rider rating</span></div>
              <div className="hs"><b>24/7</b><span>Support</span></div>
            </div>
          </div>
          <div className="collage">
            <div className="c1"><img src="/images/hero.jpg" alt="Grab Your Cab premium fleet" /></div>
            <div className="c2"><img src="/images/city-goa.jpg" alt="Goa beaches" loading="lazy" /></div>
            <div className="c3"><img src="/images/city-delhi.jpg" alt="Delhi NCR" loading="lazy" /></div>
            <span className="stamp"><Icon name="taxi" /></span>
            <svg className="path" viewBox="0 0 150 90" aria-hidden="true">
              <path d="M6 84 C 40 70, 60 30, 142 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
              <path d="M142 12 l-9 1.5 M142 12 l-4 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
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
          <div className="rate"><b>4.9</b><Stars /><span>from 2,000+ riders</span></div>
        </div>
      </div>

      {/* FLEET — "Top Destinations" pattern: chips + cards */}
      <section className="sec" id="fleet">
        <div className="container">
          <div className="sec-head split">
            <div>
              <span className="eyebrow">Drive more, pay less</span>
              <h2>Our popular cars</h2>
              <p>{cars.length}+ vehicles — hatchbacks to Rolls Royce. Live from our fleet.</p>
            </div>
            <Link className="btn btn-ghost btn-sm" href="/fleet">Explore all cars <Icon name="arrow" /></Link>
          </div>
          <FleetShowcase cars={cars} />
        </div>
      </section>

      <ServicesSection />

      {/* CITIES — destination cards */}
      <section className="sec" id="cities">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Where we drive</span>
            <h2>Book by city</h2>
          </div>
          <div className="city-grid">
            {CITIES.map((c) => (
              <div className="city" key={c.slug}>
                <div className="pic">
                  <img src={c.img} alt={c.name} loading="lazy" />
                  <span className="pill">{c.pill}</span>
                </div>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <div className="meta"><span>{c.cabs}</span><span>24/7</span></div>
                <Link className="link-more" href="/fleet">Explore {c.name} <Icon name="arrow" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center">
            <span className="eyebrow">Simple &amp; fast</span>
            <h2>Booking is as easy as 1–2–3</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="n"><Icon name="search" /></div><h3>1. Tell us your trip</h3><p>Share pickup, drop and date on WhatsApp or the form.</p></div>
            <div className="step"><div className="n"><Icon name="car" /></div><h3>2. Pick your car</h3><p>Choose from sedans, SUVs, luxury cars or coaches at a clear fare.</p></div>
            <div className="step"><div className="n"><Icon name="check" /></div><h3>3. Ride &amp; relax</h3><p>A verified driver arrives on time. Sit back and enjoy.</p></div>
          </div>
        </div>
      </section>

      <RoutesSection />

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center">
            <span className="eyebrow">Loved by riders</span>
            <h2>What our riders say</h2>
          </div>
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <div className="tst" key={t.name}>
                <Stars />
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="who">
                  <span className="av">{t.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}</span>
                  <div><b>{t.name}</b><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LOCATIONS */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Service locations</span>
            <h2>Cab &amp; car rental across Delhi NCR, Goa &amp; more</h2>
          </div>
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

      {/* HELP BANNER — full-width image CTA (reference style) */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner">
            <img className="bg" src="/images/special.jpg" alt="" loading="lazy" />
            <div className="in">
              <h2>Need help? We&rsquo;re here 24/7.</h2>
              <p>Call or chat with our team any time — every day of the year.</p>
              <div className="hbtns">
                <a className="btn btn-amber" href="tel:+917522817555"><Icon name="phone" />+91 75228 17555</a>
                <a className="btn btn-wa" href={waLink("Hello Grab Your Cab! I need help booking a ride.")} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
