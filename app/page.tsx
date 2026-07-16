import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import HeroSlider from "@/components/site/HeroSlider";
import BookingBar from "@/components/site/BookingBar";
import FleetShowcase from "@/components/site/FleetShowcase";
import BrandsSection from "@/components/site/BrandsSection";
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

const STATS: [string, string, string][] = [
  ["medal", "10+", "Years of Service"],
  ["taxi", "500+", "Cabs & Coaches"],
  ["star", "2,000+", "Happy Riders"],
  ["city", "3", "Regions Covered"],
];

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

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* BOOK A CAR (overlapping the slider, selfdrives style) */}
      <div className="bookwrap">
        <div className="container">
          <BookingBar />
          <div className="trust">
            <div className="t"><Icon name="check" /> Free cancellation</div>
            <div className="t"><Icon name="check" /> No hidden charges</div>
            <div className="t"><Icon name="check" /> 24/7 support</div>
            <div className="rate"><b>4.9</b><Stars /><span>from 2,000+ riders</span></div>
          </div>
        </div>
      </div>

      {/* OUR RENTAL FLEETS */}
      <section className="sec" id="fleet">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Drive more, pay less</span>
            <h2>Our Rental Fleets</h2>
            <p>{cars.length}+ vehicles — from CNG hatchbacks to Rolls Royce. Live availability from our fleet.</p>
          </div>
          <FleetShowcase cars={cars} limit={8} />
          <div className="center" style={{ marginTop: 26 }}>
            <Link className="btn btn-ghost" href="/fleet">View All Cars <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="stats-band">
        <div className="container in">
          {STATS.map(([ic, n, l]) => (
            <div className="stat" key={l}>
              <span className="i"><Icon name={ic} /></span>
              <b>{n}</b><span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BROWSE BY MAKE */}
      <BrandsSection cars={cars} />

      {/* SERVICES */}
      <div className="sec grey" style={{ padding: 0 }}><ServicesSection /></div>

      {/* CITIES */}
      <section className="sec" id="cities">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Where we drive</span><h2>Book by City</h2></div>
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
                <Link className="link-more" href={`/${c.slug}`}>Explore {c.name} <Icon name="arrow" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + DELIVERS */}
      <section className="sec grey">
        <div className="container">
          <div className="about-wrap">
            <div>
              <span className="eyebrow" style={{ display: "block", color: "var(--red)", fontWeight: 600, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 6 }}>An introduction</span>
              <h2>Grab Your Cab — 10 years on the road</h2>
              <p>Grab Your Cab is a full-service cab &amp; car rental company serving Delhi NCR, Goa and Noida International Airport (Jewar). Our range is large — from the most basic hatchbacks to premium sedans, convertibles and super-premium SUVs — to suit all budgets and purposes.</p>
              <p>We are a customer-oriented company where service and satisfaction come first, backed by 24/7 support on a human phone line and an in-house maintenance team that ensures every car you book is in top mechanical condition.</p>
              <div className="delivers">
                <span className="deliver"><Icon name="star" />Customer Satisfaction</span>
                <span className="deliver"><Icon name="wrench" />Maintained Fleet</span>
                <span className="deliver"><Icon name="clock" />24x7 Operations</span>
                <span className="deliver"><Icon name="shield" />Verified Drivers</span>
                <span className="deliver"><Icon name="wallet" />Transparent Fares</span>
              </div>
            </div>
            <div className="about-pics">
              <img className="p1" src="/images/fleet.jpg" alt="Our fleet" loading="lazy" />
              <img className="p2" src="/images/taxi-service.jpg" alt="Taxi service" loading="lazy" />
              <img className="p3" src="/images/luxury-cars.jpg" alt="Luxury cars" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <RoutesSection />

      {/* TESTIMONIALS */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Incredible customer says</span><h2>Client Testimonials</h2></div>
          <div className="tgrid">
            {TESTIMONIALS.map((t) => (
              <div className="tst" key={t.name}>
                <Stars />
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="who">
                  <span className="av">{t.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}</span>
                  <div style={{ textAlign: "left" }}><b>{t.name}</b><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Simple &amp; fast</span><h2>How It Works</h2></div>
          <div className="steps">
            <div className="step"><div className="n"><Icon name="search" /></div><h3>1. Choose your car</h3><p>Pick a car and service on the site, or tell us your trip on WhatsApp.</p></div>
            <div className="step"><div className="n"><Icon name="chat" /></div><h3>2. Confirm on WhatsApp</h3><p>We confirm your car, driver and a clear fixed fare within minutes.</p></div>
            <div className="step"><div className="n"><Icon name="car" /></div><h3>3. Drive anywhere</h3><p>With a verified driver, or take the wheel yourself on self-drive.</p></div>
            <div className="step"><div className="n"><Icon name="check" /></div><h3>4. Ride &amp; relax</h3><p>Clean, serviced cars and 24/7 support for the whole journey.</p></div>
          </div>
        </div>
      </section>

      {/* SERVICE LOCATIONS */}
      <section className="sec grey" id="locations">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Service locations</span><h2>Offices &amp; Phone Lines</h2></div>
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

      {/* CALL BANNER */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner">
            <img className="bg" src="/images/special.jpg" alt="" loading="lazy" />
            <div className="in">
              <h2>Have a question? Call today!</h2>
              <p>Our team picks up 24/7 — every day of the year.</p>
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
