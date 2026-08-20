import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Cab Service in Gurgaon | Local & Outstation Cabs",
  description:
    "Book a cab service in Gurgaon for local trips, airport transfers and outstation travel. Enjoy convenient booking, comfortable vehicles and flexible travel options.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — cab-service-gurgaon page styles
   Maroon red #9f1c33 · slate #33414f · white/grey sections
   ============================================================ */
:root{
  --red:#9f1c33;--red-dark:#7e1628;--slate:#33414f;--slate-dark:#2c2e36;
  --ink:#212529;--text:#444;--muted:#666;--soft:#888;
  --line:#e1e1e1;--line-2:#ddd;--bg:#ffffff;--grey:#f5f5f5;
  --wa:#29ad00;--maxw:1200px;--r:6px;
  --shadow:0 2px 10px rgba(0,0,0,.08);--shadow-lg:0 10px 30px rgba(0,0,0,.14);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:"Inter","Segoe UI",Roboto,Arial,sans-serif;color:var(--text);background:var(--bg);
  line-height:1.6;font-size:15px;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3,h4{font-family:"Poppins","Inter",sans-serif;color:var(--ink);line-height:1.25}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.container{max-width:var(--maxw);margin:0 auto;padding:0 20px;width:100%}
.sec{padding:55px 0}
.sec.grey{background:var(--grey)}

.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:14px;
  padding:11px 24px;border-radius:4px;cursor:pointer;border:1px solid transparent;font-family:inherit;
  white-space:nowrap;text-transform:uppercase;letter-spacing:.03em;transition:all .18s}
.btn:active{transform:translateY(1px)}
.btn-amber{background:var(--red);color:#fff}
.btn-amber:hover{background:var(--red-dark);box-shadow:var(--shadow)}
.btn-dark{background:var(--slate);color:#fff}
.btn-dark:hover{background:var(--slate-dark)}
.btn-wa{background:var(--wa);color:#fff}
.btn-wa:hover{background:#218a00;box-shadow:var(--shadow)}
.btn-ghost{background:#fff;color:var(--red);border-color:var(--red)}
.btn-ghost:hover{background:var(--red);color:#fff}

.crumbs{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--muted);margin-bottom:14px;flex-wrap:wrap}
.crumbs a:hover{color:var(--red)}
.crumbs b{color:var(--ink);font-weight:600}

.page-hero{background:var(--slate);color:#fff;padding:44px 0}
.page-hero .eyebrow{display:block;color:#ffb3c1;font-weight:600;font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:6px}
.page-hero h1{color:#fff;font-size:clamp(26px,3.8vw,40px);font-weight:700}
.page-hero .lead{color:#cfd6dd;font-size:15px;margin-top:12px;max-width:60ch}
.page-hero .crumbs{margin-bottom:14px;color:#aab6c0}
.page-hero .crumbs a{color:#cfd6dd}
.page-hero .crumbs b{color:#fff}
.page-hero .btn-ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.5)}
.page-hero .btn-ghost:hover{background:#fff;color:var(--slate);border-color:#fff}
.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-top:20px}
.loc-pills{display:flex;gap:8px;flex-wrap:wrap;margin-top:22px}
.loc-pills span{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);
  border-radius:3px;padding:6px 12px;font-size:12px;font-weight:600;color:#fff}

/* SEO content blocks */
.seo-wrap{max-width:840px}
.seo-block{margin-bottom:30px}
.seo-block h2{font-size:clamp(19px,2.6vw,25px);font-weight:700;margin-bottom:12px;position:relative;padding-bottom:10px}
.seo-block h2::after{content:"";position:absolute;left:0;bottom:0;width:54px;height:3px;background:var(--red)}
.seo-block p{color:var(--text);font-size:14.5px;margin-bottom:12px;line-height:1.75}
.seo-block ul{margin:0 0 12px 20px}
.seo-block ul li{color:var(--text);font-size:14.5px;line-height:1.8}

.sec-head{text-align:center;margin-bottom:34px}
.sec-head .eyebrow{display:block;color:var(--red);font-weight:600;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
.sec-head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700;display:inline-block;position:relative;padding-bottom:14px}
.sec-head h2::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:70px;height:3px;background:var(--red)}
.sec-head p{color:var(--muted);margin:12px auto 0;max-width:64ch;font-size:14.5px}

/* vehicle / service type grid */
.fleet-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.fleet-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;text-align:left}
.fleet-card .img-wrap{width:100%;aspect-ratio:4/3;background:var(--grey);overflow:hidden}
.fleet-card .img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
.fleet-card .body{padding:20px 22px}
.fleet-card h3{font-size:16px;font-weight:600;margin-bottom:8px}
.fleet-card p{color:var(--muted);font-size:13.5px;line-height:1.6}

/* steps */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.step{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:26px 20px;text-align:center}
.step .n{width:44px;height:44px;border-radius:50%;background:var(--grey);border:1px solid var(--line);display:grid;place-items:center;margin:0 auto 14px;font-family:"Poppins";font-weight:700;color:var(--red)}
.step h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
.step p{color:var(--muted);font-size:13px}

/* checklist grid */
.check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 24px}
.check-grid .item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:12px 14px}
.check-grid .item .dot{width:8px;height:8px;border-radius:50%;background:var(--red);margin-top:6px;flex:none}
.check-grid .item p{color:var(--text);font-size:14px;margin:0}

/* comparison / route / service table */
.cmp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:#fff}
table.cmp-table{width:100%;border-collapse:collapse;font-size:14px;min-width:420px}
table.cmp-table thead th{background:var(--slate);color:#fff;text-align:left;padding:14px 18px;font-family:"Poppins";font-weight:600;font-size:13.5px;text-transform:uppercase;letter-spacing:.03em}
table.cmp-table tbody td{padding:14px 18px;border-top:1px solid var(--line);color:var(--text);vertical-align:top}
table.cmp-table tbody tr:nth-child(even){background:var(--grey)}
table.cmp-table tbody td:first-child{font-weight:700;color:var(--ink);font-family:"Poppins";white-space:nowrap}

/* faq */
.faq{display:flex;flex-direction:column;gap:10px;max-width:840px;margin:0 auto}
.faq details{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:0 18px}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;
  padding:15px 0;font-weight:600;font-size:14.5px;font-family:"Poppins";color:var(--ink)}
.faq summary::-webkit-details-marker{display:none}
.faq .chev{width:28px;height:28px;border-radius:50%;background:var(--grey);display:grid;place-items:center;flex:none;transition:transform .2s;font-weight:700;color:var(--red)}
.faq details[open] .chev{transform:rotate(45deg)}
.faq details p{color:var(--muted);font-size:13.5px;padding:0 0 16px;max-width:66ch}

/* banner */
.banner{position:relative;border-radius:var(--r);overflow:hidden;min-height:220px;display:grid;place-items:center;text-align:center;padding:50px 24px;background:var(--red)}
.banner.alt{background:var(--slate)}
.banner .in{position:relative;z-index:2;color:#fff;max-width:640px}
.banner h2{font-size:clamp(22px,3.2vw,32px);font-weight:700;color:#fff}
.banner p{color:rgba(255,255,255,.85);margin:10px 0 20px;font-size:14.5px}
.banner .hbtns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

/* garage / location section */
.garage-head{margin-bottom:30px}
.garage-head h2{font-size:clamp(22px,3vw,30px);font-weight:700;color:var(--red)}
.garage-head hr{border:0;border-top:1px solid var(--line);margin-top:16px}
.garage-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:30px;align-items:stretch}
.garage-map{position:relative;border-radius:var(--r);overflow:hidden;border:1px solid var(--line);min-height:360px;background:var(--grey)}
.garage-map iframe{width:100%;height:100%;min-height:360px;border:0;display:block}
.garage-map .maps-link{position:absolute;top:14px;left:14px;z-index:2;background:#fff;border:1px solid var(--line);border-radius:4px;
  padding:8px 14px;font-weight:600;font-size:13px;color:var(--red);display:inline-flex;align-items:center;gap:6px;box-shadow:var(--shadow)}
.garage-info{display:flex;flex-direction:column;gap:26px;justify-content:center}
.info-block{display:flex;gap:16px;align-items:flex-start}
.info-block .ico{width:48px;height:48px;border-radius:10px;border:1.5px solid var(--red);display:grid;place-items:center;flex:none;color:var(--red)}
.info-block .ico svg{width:20px;height:20px}
.info-block h3{font-size:19px;font-weight:700;margin-bottom:6px}
.info-block p{color:var(--muted);font-size:14.5px;line-height:1.6;margin:0}
.info-block a{color:var(--muted)}
.info-block a:hover{color:var(--red)}

@media (max-width:1000px){
  .fleet-grid{grid-template-columns:repeat(2,1fr)}
  .steps{grid-template-columns:repeat(2,1fr)}
  .check-grid{grid-template-columns:1fr}
  .garage-grid{grid-template-columns:1fr}
  .garage-map{min-height:300px}
  .garage-map iframe{min-height:300px}
}
@media (max-width:620px){
  .container{padding:0 16px}
  .sec{padding:36px 0}
  .page-hero{padding:32px 0}
  .hero-ctas .btn{flex:1;padding:12px 8px;font-size:13px}
  .fleet-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:1fr}
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  table.cmp-table{font-size:13px}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

/* Why Choose Our Cab Service in Gurgaon? */
const whyChooseChecklist = [
  "Instantly Book Your Ride For Predefined Routes or Nearby Locations",
  "Experienced Drivers for Intercity and Local Travel",
  "Clean and Well-maintained Vehicles for all trip needs",
  "Maruti, Mahindra, Kia, Luxury And Larger Vehicle Options where available",
  "Flexible pick-up and drop-off options",
  "Local, Airport, Corporate & Outstation Travel Services",
  "Clear pricing information based on your selected journey",
  "Prebooking for Planned Travel",
];

/* Cab Booking In Gurgaon */
const bookingSteps = [
  { title: "Enter Pickup Location", text: "Enter your location in Gurgaon or nearby locations." },
  { title: "Add Destination", text: "Add your destination and choose the travel route you wish to take." },
  { title: "Choose Date & Time", text: "Enter your date and time of travel." },
  { title: "Select the Right Cab", text: "Based on your passenger and luggage size, choose the right cab." },
  { title: "Confirm Booking", text: "Confirm the booking with the required contact details." },
];

/* Types of Cab Services Available in Gurgaon */
const cabServiceTypes = [
  {
    title: "Local Cabs Service in Gurgaon",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
    text: "Local cabs are good for a commute, grocery shopping, business appointments, business meetings, train or metro travel, or traveling in various locations in Gurugram.",
  },
  {
    title: "Gurgaon Airport Cab Service",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600",
    text: "IGI Delhi airport taxi for Old Gurgaon cab and Sector 53 Gurgaon means you don't have to worry about late arrivals or long commuting times, especially with luggage or an early/late flight.",
  },
  {
    title: "Outstation Cab Service from Gurgaon",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
    text: "Best for travelling out of and beyond the city, including Delhi, Jaipur, Agra, Haridwar, Rishikesh, and Chandigarh. Passengers can opt for one way or round trip based on their trip.",
  },
  {
    title: "One-Way Cab from Gurgaon",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    text: "One way cabs from Gurgaon are made available if you wish to travel only in one direction from here — hire a oneway taxi from Gurgaon.",
  },
  {
    title: "Round-Trip Cab Service",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600",
    text: "Ideal for family visits, work travel, weekend getaways, sightseeing, or trips where you expect to return to Gurgaon after reaching your destination.",
  },
  {
    title: "Corporate Cab Service",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTpeN1ID4mEY7KJ2qpkjGoi7YAcVzvM1rGZy2M7yb6Y-kiy0Zne1OsKY&s=10",
    text: "Companies can avail cab transportation for employee travel, client meetings, conferences, airport transfers, and an array of professional excursions.",
  },
];

/* Cars Available for Cab Service in Gurgaon */
const carsAvailable = [
  { title: "Maruti Cabs", text: "Are you a single, a couple or a small family." },
  { title: "Mahindra Cabs", text: "When travellers need extra space for passengers or luggage." },
  { title: "Luxury Cars", text: "Suitable for business travel and events where extra comfort is needed." },
  { title: "Bigger Vehicles", text: "Ideal for families or a group of travelers, subject to availability." },
];

/* Gurgaon to Outstation Cab Service */
const outstationRoutes = [
  { route: "Gurgaon to Delhi", suitable: "Local and intercity travel" },
  { route: "Gurgaon to Jaipur", suitable: "Weekend and business trips" },
  { route: "Gurgaon to Agra", suitable: "Sightseeing and Taj Mahal visits" },
  { route: "Gurgaon to Haridwar", suitable: "Religious and leisure travel" },
  { route: "Gurgaon to Rishikesh", suitable: "Leisure and adventure trips" },
  { route: "Gurgaon to Chandigarh", suitable: "Business and leisure journeys" },
];

/* Local and Outstation Gurgaon Cab Services */
const servicesTable = [
  { service: "Local Cab", suitable: "City travel and daily commuting" },
  { service: "Airport Cab", suitable: "Airport pickup and drop" },
  { service: "One-Way Cab", suitable: "Intercity one-way journeys" },
  { service: "Round-Trip Cab", suitable: "Return journeys" },
  { service: "Outstation Cab", suitable: "Travel outside Gurgaon" },
  { service: "Corporate Cab", suitable: "Business transportation" },
];

const faqs = [
  {
    q: "How can I book a cab in Gurgaon?",
    a: "You can book a cab by providing your pickup location, destination, travel date, time, passenger details, and preferred vehicle.",
  },
  {
    q: "How much does a cab cost in Gurgaon?",
    a: "Cab fares vary according to distance, vehicle type, trip duration, route, and additional applicable charges such as tolls or parking.",
  },
  {
    q: "Can I book a cab from Gurgaon to Delhi Airport?",
    a: "Yes, Gurgaon airport cab services can be used for transfers to and from Indira Gandhi International Airport, subject to service availability.",
  },
  {
    q: "Do you provide outstation cabs from Gurgaon?",
    a: "Outstation cab services can be arranged for destinations such as Jaipur, Agra, Haridwar, Rishikesh, Chandigarh, and other routes, subject to availability.",
  },
  {
    q: "Can I book a one-way cab from Gurgaon?",
    a: "Yes, one-way cab bookings are suitable when you need transportation from Gurgaon to another destination without requiring a return journey.",
  },
  {
    q: "Can I book a cab for a round trip?",
    a: "Yes, round-trip cab services are useful for journeys where you need transportation to your destination and back to Gurgaon.",
  },
  {
    q: "Which areas of Gurgaon do you serve?",
    a: "Service coverage includes major Gurgaon locations such as Cyber City, MG Road, Golf Course Road, Sohna Road, Udyog Vihar, Manesar, and other areas.",
  },
  {
    q: "What types of cars are available?",
    a: "Vehicle options may include maruti, mahindra, kia, premium cars, and larger vehicles depending on passenger requirements and availability.",
  },
  {
    q: "Do you provide corporate cab services in Gurgaon?",
    a: "Corporate transportation can be arranged for business meetings, employee travel, client visits, conferences, and other professional requirements.",
  },
];

export default function CabServiceGurgaonPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <b>Cab Service in Gurgaon</b>
          </div>
          <span className="eyebrow">Local · Airport · Outstation</span>
          <h1>Cab Service in Gurgaon for Local &amp; Outstation Travel</h1>
          <p className="lead">
            Dependable local transportation in Gurgaon is that much more possible with your cab
            service if it offers easy booking, the right kind of vehicles, professional
            chauffeurs and a wide array of travel solutions. Grab Your Cab provides local trip,
            airport transfer, business travel and outstation trip cab services from Gurgaon.
            Whether you're looking for a trip within Gurugram or a drive to another city, you can
            pick from a range of services based on the distance of travel, time and requirements.
          </p>
          <div className="hero-ctas">
            <a href="https://wa.me/910000000000" className="btn btn-wa">
              Book on WhatsApp
            </a>
            <a href="tel:+910000000000" className="btn btn-ghost">
              Call to Book
            </a>
          </div>
          <div className="loc-pills">
            <span>DLF Cyber City</span>
            <span>MG Road</span>
            <span>Golf Course Road</span>
            <span>Sohna Road</span>
            <span>Udyog Vihar</span>
            <span>Manesar</span>
          </div>
        </div>
      </section>

      <TaxiSearch />

      {/* ---------- INTRO ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Reliable Cab Service in Gurgaon for Local and Outstation Travel</h2>
              <p>
                A taxi in Gurgaon operates for daily transport up and down the city, meetings,
                shopping, airport transfers, family excursions and long distance travel. The busy
                business areas, residential colonies, highways and close vicinity of Gurgaon to
                Delhi requires easy travel options to have for the locals as well as the
                visitors.
              </p>
              <p>
                With Grab Your Cab, cab booking in Gurgaon can be planned around your pickup
                location, destination, travel date and rest of the way details, and selecting
                from a range of vehicles. The service is for the benefit of travelers within
                Gurugram as well as for those going to Delhi, Jaipur, Agra, Haridwar, Rishikesh,
                Chandigarh and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE OUR CAB SERVICE (CHECKLIST) ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Reasons To Book With Us</span>
            <h2>Why Choose Our Cab Service in Gurgaon?</h2>
            <p>
              An efficient taxi service should allow to make the entire trip, including booking
              and pickup, easy and hassle-free. Grab Your Cab is about easy travel for the
              diverse needs of travelers.
            </p>
          </div>
          <div className="check-grid">
            {whyChooseChecklist.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            The availability of the services, vehicle categories, operation time differs by route
            and by demand.
          </p>
        </div>
      </section>

      {/* ---------- CAB BOOKING IN GURGAON (STEPS) ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>Cab Booking In Gurgaon</h2>
            <p>Booking a cab in Gurgaon can be planned in a few simple steps.</p>
          </div>
          <div className="steps">
            {bookingSteps.map((step, i) => (
              <div className="step" key={step.title}>
                <div className="n">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "14.5px" }}>
            This simple process makes online cab booking in Gurgaon really convenient.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Cab in Gurgaon?</h2>
              <p>Choose your route, pick a vehicle and confirm your booking in minutes.</p>
              <div className="hbtns">
                <a href="https://wa.me/910000000000" className="btn btn-wa">
                  Book on WhatsApp
                </a>
                <a href="tel:+910000000000" className="btn btn-ghost">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TYPES OF CAB SERVICES ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Choose Your Ride</span>
            <h2>Types of Cab Services Available in Gurgaon</h2>
          </div>
          <div className="fleet-grid">
            {cabServiceTypes.map((item) => (
              <div className="fleet-card" key={item.title}>
                <div className="img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CARS AVAILABLE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Fleet Options</span>
            <h2>Cars Available for Cab Service in Gurgaon</h2>
            <p>Type of vehicle should be appropriate for number of passengers, luggage and type of trip.</p>
          </div>
          <div className="check-grid">
            {carsAvailable.map((c) => (
              <div className="item" key={c.title}>
                <span className="dot" />
                <p>
                  <b>{c.title}:</b> {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- POPULAR AREAS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Popular Areas We Serve in Gurgaon</h2>
              <p>
                Cab requests are originated from homes, offices, and commercial establishments
                all over Gurgaon. The usual service areas are DLF Cyber City, Golf Course Road,
                Golf Course Extension Road, MG Road, Sohna Road, Sector 14, Sector 29, Sector 44,
                Sector 49, Udyog Vihar, Manesar, Dwarka Expressway, and New Gurgaon.
              </p>
              <p>
                Availability is subject to the selected pickup location, destination, vehicle,
                and time of booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- GURGAON TO OUTSTATION TABLE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Long Distance Travel</span>
            <h2>Gurgaon to Outstation Cab Service</h2>
            <p>
              For long distance travel, outstation cabs from Gurgaon offer hassle free door to
              door service without the need of driving on your own. They are especially useful
              for families, groups, business travelers and those traveling with baggage.
            </p>
          </div>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Suitable For</th>
                </tr>
              </thead>
              <tbody>
                {outstationRoutes.map((row) => (
                  <tr key={row.route}>
                    <td>{row.route}</td>
                    <td>{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- FARE + WHY BOOK A CAB ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Cab Fare in Gurgaon: How Much Does a Cab Cost?</h2>
              <p>
                Gurgaon Taxi prices are calculated on many common parameters, and not one
                specifically. Travel distance, vehicle type, travel duration, one way trip or
                round trip, pick up and drop, airport or outstation trip are some of the
                important considerations.
              </p>
              <p>
                Tolls, parking, fee for using highways, and other relevant costs could also
                contribute to the final price. Knowing the full fare in advance allows the
                passengers to plan their travel budget.
              </p>
            </div>

            <div className="seo-block">
              <h2>Why Book a Cab Instead of Driving Yourself?</h2>
              <p>
                Taking a cab can make your trip a little easier if you'd rather not deal with the
                traffic, the parking headaches, and the energy-sapping driving. It is convenient
                for airport travel, business trips, long distance travel and traveling with
                family or luggage.
              </p>
              <p>
                Since cab travel provides doorstep service even for outstation travel, passengers
                get to rest or attend to other activities inside the car, while enjoying the
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY GRAB YOUR CAB + SERVICES TABLE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Choose to Grab Your Cab for Gurgaon Travel?</h2>
              <p>
                Grab Your Cab is also a good choice for passengers looking for local or
                intercity travel from Gurgaon. The service concentrates on easy booking,
                different kind of vehicles requirements, local travelling, airport travelling and
                outstation travelling.
              </p>
              <p>
                If you want to book a Gurugram taxi service for a day trip in the city or an
                outstation cab for a trip for a long time, pre selecting the vehicle, route and
                fare will certainly give a better travelling experience overall.
              </p>
            </div>
          </div>

          <div className="sec-head" style={{ marginTop: 10 }}>
            <span className="eyebrow">At a Glance</span>
            <h2>Local and Outstation Gurgaon Cab Services</h2>
          </div>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Suitable For</th>
                </tr>
              </thead>
              <tbody>
                {servicesTable.map((row) => (
                  <tr key={row.service}>
                    <td>{row.service}</td>
                    <td>{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- DIFFERENT TRAVEL NEEDS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Cab Service in Gurgaon for Different Travel Needs</h2>
              <p>
                Not all passengers have the same travel needs. Local cabs can cater to regular
                commuters, and families flying to outstation can opt for comfortable rides.
                Businessmen can book cabs for their meetings and corporate transport, while
                tourists can opt for city and intercity travel on the basis of their plan.
              </p>
              <p>
                Also subject to the relevant booking conditions, full day cab in Gurgaon can be
                included when transportation for two or more stops or long distance local
                travelling is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOK NOW BANNER ---------- */}
      <section className="sec">
        <div className="container">
          <div className="banner">
            <div className="in">
              <h2>Book Your Cab in Gurgaon</h2>
              <p>
                Choose from local, airport, one-way, round-trip, outstation or corporate cab
                services and confirm your booking in a few simple steps.
              </p>
              <div className="hbtns">
                <a href="https://wa.me/910000000000" className="btn btn-wa">
                  Book on WhatsApp
                </a>
                <a href="tel:+910000000000" className="btn btn-ghost">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Got Questions?</span>
            <h2>FAQs About Cab Service in Gurgaon</h2>
          </div>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span className="chev">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OFFICE / LOCATION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="garage-head">
            <h2>Our Cab Service Office in Gurgaon</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              
               <a className="maps-link"
                href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps ↗
              </a>
              <iframe
                title="Grab Your Cab Gurgaon office location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="garage-info">
              <div className="info-block">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h3>Our Location</h3>
                  <p>Rz-1110/A gali no 10 sadh nagar palam colony new delhi -110045</p>
                </div>
              </div>

              <div className="info-block">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+917522817555">+91-7522817555</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}