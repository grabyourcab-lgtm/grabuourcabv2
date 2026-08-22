import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Jewar Airport Cab Service | Airport Taxi Booking in Jewar",
  description:
    "Book Jewar Airport cab service with Grab Your Cab for airport pickup and drop. Get convenient taxi transfers to and from Noida International Airport.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — jewar-airport-cab-service page styles
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
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:44px;align-items:center}
.hero-img{border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,.2);box-shadow:var(--shadow-lg);aspect-ratio:4/3}
.hero-img img{width:100%;height:100%;object-fit:cover;display:block}
@media (max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .hero-img{order:-1;max-width:520px;margin:0 auto}
}

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

/* fleet / route / cab-type grid (equal-width cards with images) */
.fleet-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}
.fleet-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;text-align:left;
  display:flex;flex-direction:column;flex:1 1 300px;max-width:360px}
.fleet-card .img-wrap{width:100%;aspect-ratio:16/10;background:var(--grey);overflow:hidden;flex:none}
.fleet-card .img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
.fleet-card .body{padding:20px 22px;flex:1;display:flex;flex-direction:column}
.fleet-card h3{font-size:16px;font-weight:600;margin-bottom:8px}
.fleet-card p{color:var(--muted);font-size:13.5px;line-height:1.6}

/* steps */
.steps{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}
.step{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:26px 20px;text-align:center;
  flex:1 1 220px;max-width:260px;display:flex;flex-direction:column;align-items:center}
.step .n{width:44px;height:44px;border-radius:50%;background:var(--grey);border:1px solid var(--line);display:grid;place-items:center;margin:0 auto 14px;font-family:"Poppins";font-weight:700;color:var(--red);flex:none}
.step h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
.step p{color:var(--muted);font-size:13px}

/* checklist grid (evenly-numbered lists — services offered, advantages) */
.check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 24px}
.check-grid .item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:12px 14px}
.check-grid .item .dot{width:8px;height:8px;border-radius:50%;background:var(--red);margin-top:6px;flex:none}
.check-grid .item p{color:var(--text);font-size:14px;margin:0}
@media (max-width:700px){
  .check-grid{grid-template-columns:1fr}
}

/* why choose / pickup-drop grid */
.why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.why-grid .item{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:16px 18px}
.why-grid .item p{color:var(--muted);font-size:13.5px;margin-top:4px;line-height:1.6}

/* areas / routes covered — centered pill grid */
.route-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 16px;max-width:840px;margin:0 auto}
.route-grid .item{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:12px 14px;font-size:14px;color:var(--text);font-weight:600;flex:1 1 260px;max-width:300px;justify-content:center}
.route-grid .item .dot{width:8px;height:8px;border-radius:50%;background:var(--red);flex:none}

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

/* office / location section */
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
  .why-grid{grid-template-columns:1fr}
  .garage-grid{grid-template-columns:1fr}
  .garage-map{min-height:300px}
  .garage-map iframe{min-height:300px}
}
@media (max-width:620px){
  .container{padding:0 16px}
  .sec{padding:36px 0}
  .page-hero{padding:32px 0}
  .hero-ctas .btn{flex:1;padding:12px 8px;font-size:13px}
  .fleet-card,.step,.route-grid .item{flex:1 1 100%;max-width:100%}
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

const serviceUses = [
  "Jewar Airport taxi pick up and drop off",
  "From City to air port Transfers",
  "Airport to city Transfers",
  "One way airport trips",
  "Round trip transport at the airport",
  "Transfers for Families and Groups",
  "Corporate & Business travel",
  "Early morning and late night trips to the airport",
];

const routeCards = [
  {
    title: "Delhi to Jewar Airport Cab",
    text: "A Delhi to Jewar Airport cab offers a one stop travel for air passenger across the Delhi to Jewar Airport in which you can easily travel from different parts of Delhi to Airport. You can arrange for the pickup from home, hotel, office or any other place of your convenience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOiLYYyaJKTG_8NthFj1h8hPhxLPiG8V29gGWC74NoVaE23LOJXnUYO0I&s=10",
  },
  {
    title: "Noida to Jewar Airport Cab",
    text: "A Noida to Jewar Airport cab is best for air travelers going between Noida, the city, and the airport. Book in advance to make pickup arrangements with your flight schedule.",
    image: "https://bizimages.withfloats.com/actual/690055bf394b82c9c4750bf3.jpg",
  },
  {
    title: "Greater Noida to Jewar Airport Cab",
    text: "You can book your cab from Greater Noida to Jewar Airport or from the airport to Greater Noida if you are departing from there and arriving in Greater Noida respectively with a one way, round-trip, multi city etc. for any information or Queries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrrlY3eJtY_mG41ceboiIMx-aJmLy4Nffp76m_Qx6asBtu4LxqWyp7Dw&s=10",
  },
//   {
//     title: "Ghaziabad, Gurgaon and Faridabad",
//     text: "Airport transfers services can also be provided for passengers traveling between Jewar Airport and Ghaziabad, Gurgaon, and Faridabad subject to booking and route availability.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dHoDJhnLORwzKsSQf7DZWFxUAg35sUfpDLDOMTIK2Bcg1vjwSIaFouw&s=10",
//   },
];

const pickupDrop = [
  {
    title: "Jewar Airport Pickup",
    text: "For airport pick-up, please provide your flight information, your destination, number of passengers and luggage when making your booking. Specific pick-up instructions can also be followed to the letter to help streamline your transfer after catching your flight.",
  },
  {
    title: "Jewar Airport Drop",
    text: "For the drop to the airport, please enter your address and your flight departure details at the time of booking. When you plan the route, you get to consider the road conditions, distance, how much baggage you have, and how early or late you want to arrive at the airport.",
  },
];

const cabTypes = [
  {
    title: "Maruti cabs",
    text: "Maruti cabs are ideal for singles, couples and small families who want a functional airport transfer and knowing that their luggage will be normal.",
    image: "https://images.pexels.com/photos/9544521/pexels-photo-9544521.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Mahindra cabs",
    text: "You may also consider Mahindra cabs when traveling with more passengers, with more luggage, or simply if you prefer a little extra space.",
    image: "https://images.pexels.com/photos/6649925/pexels-photo-6649925.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Luxury Cabs",
    text: "Passengers who booked a premium class vehicle may be given the option to travel in a non-premium class vehicle, subject to fleet availability, for a more comfortable journey.",
    image: "https://images.pexels.com/photos/32512194/pexels-photo-32512194.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const advantages = [
  "Easy to book airport cabs",
  "Pickup and drop off services",
  "Expert Drivers",
  "Variety of vehicle options",
  "Local and intercity airports takings",
  "Advance booking available",
  "They have the right qualifications for individuals, families or groups",
  "Transparent trip & booking details",
];

const bookingSteps = [
  { title: "Set Locations", text: "Setting your pickup and drop-off location." },
  { title: "Pick Date & Time", text: "Enter your travel date and the desired pickup time." },
  { title: "Passenger Count", text: "Number of passengers." },
  { title: "Choose Vehicle", text: "Choose the right vehicle type." },
  { title: "Add Luggage Info", text: "Luggage requirements if applicable." },
  { title: "Confirm Booking", text: "Book and get your trip details." },
];

const areasCovered = [
  "Jewar",
  "Greater Noida",
  "Noida",
  "Delhi",
  "Ghaziabad",
  "Faridabad",
  "Gurgaon",
  "Nearby towns and cities",
];

const faqs = [
  {
    q: "How can I book a cab for Jewar Airport?",
    a: "You can contact Grab Your Cab with your pickup location, destination, travel date, time, passenger count, and preferred vehicle to arrange your airport transfer.",
  },
  {
    q: "Does Grab Your Cab provide pickup from Jewar Airport?",
    a: "Yes, airport pickup can be arranged based on your destination, travel requirements, and cab availability at the time of booking.",
  },
  {
    q: "Can I book a cab from Delhi to Jewar Airport?",
    a: "Yes. A Delhi to Jewar Airport cab can be arranged from a suitable pickup location in Delhi according to your travel schedule.",
  },
  {
    q: "Can I book a cab from Noida to Jewar Airport?",
    a: "Yes, passengers can enquire about a Noida to Jewar Airport cab for scheduled airport transfers.",
  },
  {
    q: "Is Jewar Airport cab service available for early morning flights?",
    a: "Early morning airport transfers can be planned in advance. Share your required pickup time and location when making the booking.",
  },
  {
    q: "Can I book a one-way cab to Jewar Airport?",
    a: "Yes, one-way airport transportation can be arranged for passengers travelling to the airport or from the airport to their destination.",
  },
  {
    q: "How much does a cab to Jewar Airport cost?",
    a: "The fare depends on the route, distance, vehicle category, travel date, and one-way or round-trip requirement. Confirm the applicable fare before booking.",
  },
  {
    q: "What types of cars are available for Jewar Airport transfers?",
    a: "Maruti, Kia, Mahindra, Luxury cars and other vehicle categories may be available depending on passenger requirements and fleet availability.",
  },
  {
    q: "Can I book a cab for a family with luggage?",
    a: "Yes. Share the number of passengers and luggage requirements so that a suitable vehicle category can be considered.",
  },
];

export default function JewarAirportCabServicePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <b>Jewar Airport Cab Service</b>
              </div>
              <span className="eyebrow">Noida International Airport · Jewar</span>
              <h1>Jewar Airport Cab Service for Easy Airport Transfers</h1>
              <p className="lead">
                Grab Your Cab offers a reliable and timely Jewar Airport taxi service for the
                passengers who are on the road to catch a flight from Noida International
                Airport or coming from there. Whether you need an airport drop from jewar, a
                pickup at the airport after your landing or need to catch an airport transfer to
                another city, you'll be able to pick the best cab for your travel needs.
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
                <span>Jewar</span>
                <span>Greater Noida</span>
                <span>Noida</span>
                <span>Delhi</span>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <TaxiSearch />

      {/* ---------- INTRO ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <p>
                One may also book a one way journey or local or outstation cab for airport
                transfers.
              </p>
              <p>
                Flight schedules, baggage, and the ability to modify air travel plans aren't very
                flexible during airport trips. A pre-booked cab enables you to decide your pickup
                location, travel time, vehicle category as well as the number of passengers for
                your trip, even before you start your journey. Grab Your Cab caters for your
                travel needs at competitive rates! Travel from and to The Grab Your Cab offers a
                comfortable journey to Jewar Airport from Noida, Greater Noida, Delhi and other
                nearby regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE USES ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What's Included</span>
            <h2>Reliable Jewar Airport Cab Service for Airport Transfers</h2>
            <p>
              A Jewar Airport taxi service is a great choice for incoming as well as outgoing
              travelers. You can book a ride from your house, hotel, office or any other place to
              the airport, or get a cab from the airport to your destination. The service can
              utilized for:
            </p>
          </div>
          <div className="check-grid">
            {serviceUses.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                Booking is built around your travel plans which can include pickup location,
                destination, date, time, number of passengers and vehicle preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ROUTES TO/FROM JEWAR AIRPORT ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Where We Connect</span>
            <h2>Cab Service to and From Noida International Airport</h2>
            <p>
              Grab Your Cab is available for airport taxi rides from Noida International Airport
              to most places in the Delhi-NCR area. The value of the right vehicle and fare is
              determined by the route, trip needs, and booking information.
            </p>
          </div>
          <div className="fleet-grid">
            {routeCards.map((route) => (
              <div className="fleet-card" key={route.title}>
                <div className="img-wrap">
                  <img src={route.image} alt={route.title} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PICKUP AND DROP ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Two Ways to Travel</span>
            <h2>Jewar Airport Pickup and Drop Service</h2>
          </div>
          <div className="why-grid">
            {pickupDrop.map((item) => (
              <div className="item" key={item.title}>
                <h3 style={{ fontSize: 15.5, fontWeight: 600 }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CAB TYPES ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Transport for All</span>
            <h2>Types of Jewar Airport Cabs</h2>
            <p>
              The passengers have different needs in transportation. Listed cab categories can be
              chosen based on number of passengers, number of luggage, comfort level and route.
            </p>
          </div>
          <div className="fleet-grid">
            {cabTypes.map((cab) => (
              <div className="fleet-card" key={cab.title}>
                <div className="img-wrap">
                  <img src={cab.image} alt={cab.title} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{cab.title}</h3>
                  <p>{cab.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Our Advantages</span>
            <h2>Why Choose Grab Your Cab for Jewar Airport Transfers?</h2>
            <p>
              Grab Your Cab specializes in simplifying the airport transportation process.
              Travelers can chat about their travel needs and take a cab that fits them well for
              the trip. The benefits of your service are:
            </p>
          </div>
          <div className="check-grid">
            {advantages.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                The idea is to have a feasible, sustainable service, rather than one that makes
                fantastical claims about fares, travel times or capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Book a Cab for Jewar Airport</h2>
            <p>Taking a Jewar Airport cab can be arranged in a few simple steps:</p>
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
            While booking the cab for Noida International Airport, inform your journey details
            correctly at the time of booking to make sure that you can have a hassle free ride
            without any worries.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Jewar Airport Cab?</h2>
              <p>Share your pickup, destination and flight details to get started.</p>
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

      {/* ---------- DIFFERENT TRAVEL REQUIREMENTS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Jewar Airport Cab for Different Travel Requirements</h2>
              <p>
                The sale is applicable to any of these travel needs. Business travelers can book
                office to office, office to hotel, hotel to office or hotel to airport transfers
                and family can book their vehicle by the number of passengers and luggage. Group
                travellers may prefer an Mahindra or larger suitable vehicle.
              </p>
              <p>
                Hotel, Airport, Home, Local, Outstation and Corporate transfers can also be
                customised to needs along route. Passengers travelling outside Jewar or the
                Delhi-NCR area can also discuss an intercity airport transfer when booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FARE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Jewar Airport Cab Fare</h2>
              <p>
                The Fare/Cost charges of an Airport Cab depending on the pickup location and
                destination, distance, type of Vehicle, travel date when you travel, whether you
                want one way or two way service and other all applicable charges.
              </p>
              <p>
                Airport routes are hugely variable, and there is no single one fare that suits
                every passenger. Please verify the applicable rates and inclusions for the cab
                services from Jewar Airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EARLY MORNING / LATE NIGHT ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Early Morning and Late-Night Airport Transfers</h2>
              <p>
                The flights don't always coincide with normal hours of operation. Passengers with
                early departures or late arrivals are advised to book their taxi in advance.
              </p>
              <p>
                Enter accurate information for pickup time and location when reservations are
                made and include any special travel information. Planning ahead can make
                coordination of transportation from the airport less of a hassle, especially if
                you are travelling with family, children, or a lot of luggage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AREAS COVERED ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Our Coverage</span>
            <h2>Areas Covered by Jewar Airport Cab Service</h2>
            <p>
              Grab Your Cab can handle airport travel demands from Jewar to other places, such
              as:
            </p>
          </div>
          <div className="route-grid">
            {areasCovered.map((area) => (
              <div className="item" key={area}>
                <span className="dot" />
                {area}
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                The coverage and the availability of vehicles may vary for certain routes and
                booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOK IN ADVANCE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Book Your Jewar Airport Cab in Advance?</h2>
              <p>
                Booking in advance allows you more time to plan your route, pick-up point,
                vehicle choice and travel time. This is especially beneficial for people who have
                fixed flight schedule, travelling with family, group of persons and late night
                journey.
              </p>
              <p>
                A scheduled Jewar Airport taxi ride can also lessen the anxiety of finding
                transportation when you arrive.
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
              <h2>Book Your Jewar Airport Cab with Grab Your Cab</h2>
              <p>
                Schedule your airport ride for delivery and pickup from a convenient location
                near you with Jewar Airport cab, while we cater to your route, destination,
                passengers, and travel timings. If you are looking for a reliable taxi service in
                Jewar or want to book a cab from Jewar to Noida International Airport or an
                airport transfer from Noida to Delhi-NCR then look no further than Grab Your Cab
                as we can help you book the perfect travel option. Book your Jewar Airport taxi
                with Grab Your Cab and get to or from the airport with ease on reliable,
                pre-booked transportation.
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
            <h2>Frequently Asked Questions About Jewar Airport Cab Service</h2>
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

      {/* ---------- OUR OFFICE / LOCATION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="garage-head">
            <h2>Our Jewar Airport Cab Service Office</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              <a
                className="maps-link"
                href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps ↗
              </a>
              <iframe
                title="Grab Your Cab Jewar Airport cab service office location"
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