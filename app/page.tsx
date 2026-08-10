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
import WelcomeSection from "@/components/sections/Welcome";
import CitiesGrid from "@/components/sections/CitiesGrid";

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

const IconPhone = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
)
const IconMail = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="m22 6-10 7L2 6" /></svg>
)
const IconPin = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
const IconWhatsapp = () => (
  <svg className="ic ic-fill" viewBox="0 0 24 24"><path d="M17.47 14.38c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.63-1.53-.87-2.09-.23-.55-.46-.48-.63-.49h-.54c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.4 1.02 2.76 1.17 2.95.14.19 2 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.66-.68 1.9-1.34.23-.65.23-1.21.16-1.34-.07-.12-.26-.19-.54-.33Z" /><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.99-1.36A10 10 0 1 0 12 2Z" /></svg>
)
const IconClock = () => (
  <svg className="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
)
const IconSend = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
)
const IconCopy = () => (
  <svg className="ic" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
)
const IconCheck = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
)
const IconChevronRight = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
)

const PHONE_DISPLAY = '7522817555'
const PHONE_TEL = '+917522817555, '
const WHATSAPP_NUMBER = '917522817555'
const EMAIL = 'grabyourcab12@gmail.com'

const CITY_OFFICES = [
  // {
  //   id: 'delhi',
  //   city: 'New Delhi',
  //   tag: 'Head Office',
  //   address: 'first floor, Galaxy Diamond Plaza, FB-133, Noida-Greater Noida Link Rd, Haibatpur, Sector 4, Greater Noida',
  //   hours: 'Open daily · 6:00 AM – 11:00 PM',
  //   phone: PHONE_DISPLAY,
  //   lat: 28.6315,
  //   lng: 77.2167,
  // },
  {
    id: 'gurugram',
    city: 'Gurugram',
    tag: 'Branch',
    address: 'PWO Apartments, C-4 206, PWO Appartments, Sector 43, Gurugram, Haryana 122009',
    hours: 'Open daily · 6:00 AM – 11:00 PM',
    phone: 8368737081,
    lat: 28.4949,
    lng: 77.0891,
  },
  {
    id: 'noida',
    city: 'Noida',
    tag: 'Branch',
    address: 'A-152, Sector 63 Rd, A Block, Sector 63, Noida, Uttar Pradesh 201309',
    hours: 'Open daily · 6:00 AM – 11:00 PM',
    phone: PHONE_DISPLAY,
    lat: 28.5708,
    lng: 77.3260,
  },
  // {
  //   id: 'jaipur',
  //   city: 'Jaipur',
  //   tag: 'Branch',
  //   address: 'C-Scheme, near Central Park, Jaipur, Rajasthan 302001',
  //   hours: 'Open daily · 7:00 AM – 10:00 PM',
  //   phone: PHONE_DISPLAY,
  //   lat: 26.9124,
  //   lng: 75.7873,
  // },
  {
    id: 'Noida Extension',
    city: 'Greater Noida West',
    tag: 'Branch',
    address: 'first floor, Galaxy Diamond Plaza, FB-133, Noida-Greater Noida Link Rd, Haibatpur, Sector 4, Greater Noida, Uttar',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:  7522817555,
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    id: 'Ghaziabad',
    city: 'Ghaziabad',
    tag: 'Branch',
    address: 'Jc4J+Jm Ghaziabad, Uttar Pradesh 201016',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone: 7522817555,
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    id: 'noida-int',
    city: 'Noida International Airport, Jewar',
    tag: 'Branch',
    address: 'Front of primary school, Kishorpur, Greater Noida, Uttar Pradesh 203135',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:  9953599735,
    lat: 26.9124,
    lng: 75.7873,
  },
   {
    id: 'goa',
    city: 'Goa',
    tag: 'Branch',
    address: 'H. No. - 66, Bogda, Vosco Da Gama, Goa',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:  9108617014,
    lat: 26.9124,
    lng: 75.7873,
  },
   {
    id: 'meerut',
    city: 'Meerut',
    tag: 'Branch',
    address: 'Gitanjali Tower, near Shani mandir, Main Divider Road, Meerut',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:   9108617014,
    lat: 26.9124,
    lng: 75.7873,
  },
  


]

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
      <WelcomeSection/>
      <CitiesGrid/>
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
      {/* <section className="sec grey">
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
      </section> */}

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
     
        <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Service locations </span><h2>Offices &amp; Phone Lines</h2> 
          
          </div>
          <div className="loc-grid">
            {CITY_OFFICES.map((o) => (
              <div className="loc" key={o.id}>
                <div className="lt"><IconPin /> {o.city}</div>
                <p style={{ color: 'var(--muted)', fontSize: 12.5, margin: '4px 0 8px' }}>{o.address}</p>
                <a href={`tel:${PHONE_TEL}`}>{o.phone}</a>
              </div>
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
