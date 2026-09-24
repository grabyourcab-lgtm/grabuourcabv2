import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Tempo Traveller on Rent | Book AC & Luxury Travellers",
  description:
    "Book a tempo traveller on rent with Grab Your Cab for family trips, group tours, airport transfers and outstation travel. Get flexible rental options.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — tempo-traveller-on-rent page styles
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
.seo-block h3{font-size:clamp(16px,2.2vw,19px);font-weight:700;margin:18px 0 8px;color:var(--ink)}
.seo-block p{color:var(--text);font-size:14.5px;margin-bottom:12px;line-height:1.75}
.seo-block ul{margin:0 0 12px 20px}
.seo-block ul li{color:var(--text);font-size:14.5px;line-height:1.8}
.seo-block ol{margin:0 0 12px 20px}
.seo-block ol li{color:var(--text);font-size:14.5px;line-height:1.8}

.sec-head{display:block;width:100%;text-align:center;margin-bottom:34px}
.sec-head .eyebrow{display:block;color:var(--red);font-weight:600;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
.sec-head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700;display:inline-block;position:relative;padding-bottom:14px}
.sec-head h2::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:70px;height:3px;background:var(--red)}
.sec-head p{color:var(--muted);margin:12px auto 0;max-width:64ch;font-size:14.5px}

/* service cards */
.svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;width:100%;align-items:start}
.svc-card{display:block;width:100%;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:24px 22px;box-sizing:border-box}
.svc-card h3{display:block;width:100%;font-size:16.5px;font-weight:700;margin:0 0 10px 0;color:var(--ink);text-align:left}
.svc-card p{display:block;width:100%;color:var(--muted);font-size:14px;line-height:1.7;margin:0;text-align:left}

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

/* why choose grid */
.why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.why-grid .item{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:16px 18px}
.why-grid .item p{color:var(--muted);font-size:13.5px;margin-top:4px;line-height:1.6}

/* travel needs grid */
.need-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.need-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:22px 20px}
.need-card h3{font-size:15.5px;font-weight:700;margin-bottom:8px;color:var(--ink)}
.need-card p{color:var(--muted);font-size:13.5px;line-height:1.65;margin:0}

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
  .steps{grid-template-columns:repeat(2,1fr)}
  .svc-grid{grid-template-columns:1fr}
  .check-grid{grid-template-columns:1fr}
  .why-grid{grid-template-columns:1fr}
  .need-grid{grid-template-columns:repeat(2,1fr)}
  .garage-grid{grid-template-columns:1fr}
  .garage-map{min-height:300px}
  .garage-map iframe{min-height:300px}
}
@media (max-width:620px){
  .container{padding:0 16px}
  .sec{padding:36px 0}
  .page-hero{padding:32px 0}
  .hero-ctas .btn{flex:1;padding:12px 8px;font-size:13px}
  .steps{grid-template-columns:1fr}
  .need-grid{grid-template-columns:1fr}
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

const rentalOptions = [
  {
    title: "12 Seater Tempo Traveller on rent (Small Groups)",
    text: "12 Seater Tempo Traveller is a comfortable option for families, friends, and small groups travelling together. With enough space for passengers and luggage, you can enjoy a smooth and relaxed journey. You can hire a 12 seater Tempo Traveller for local sightseeing, family functions, airport transfers, weekend trips, outstation travel, and long-distance tours. It is a convenient choice when you want everyone to travel together in one vehicle.",
  },
  {
    title: "12 Seater Maharaja Tempo Traveller on rent",
    text: "12 seater Maharaja Tempo Traveller is a great choice for small groups planning a long tour. It comes with separate push-back seats on each side, giving passengers more leg space and making the journey more comfortable. With spacious seating and enough room for luggage, it is ideal for family trips, group tours, sightseeing, outstation travel, and long-distance journeys. Hire a 12 seater Maharaja Tempo Traveller and enjoy a comfortable ride with your group.",
  },
  {
    title: "12 Seater Force Urbania Tempo Traveller on rent",
    text: "The 12 seater Force Urbania on rent is a comfortable choice for groups of 8 to 12 people. It comes with push-back seats, good leg space, and a lavish interior for a relaxed journey. Features like a microphone and fridge make it convenient for long trips and group travel. It is ideal for family holidays, outstation trips, sightseeing, weddings, and multi-day tours. If you want to travel together in comfort, the 12 seater Urbania is a great option.",
  },
  {
    title: "16 seater Maharaja Tempo Traveller on rent (Medium Group)",
    text: "Grab your Cab offers 16 seater Maharaja Tempo Traveller and 16 seater Force Urbania which is ideal for group travel, family holidays, and long-distance trips. Both vehicles offer luxury interiors, cozy push-back seats, good leg space, and all the essential amenities for a comfortable journey. Whether you are planning a family tour, outstation trip, sightseeing, wedding travel, or a multi-day journey, these spacious vehicles allow the whole group to travel together comfortably. Hire a reliable Tempo Traveller on rent for a relaxed and enjoyable travel experience.",
  },
  {
    title: "18-20 Seater Tempo Traveller on rent (Large group)",
    text: "An 18-20 seater Tempo Traveller is a excellent choicie for large groups travelling together. It is ideal for family trips, corporate tours, and pilgrimages where everyone wants to travel in one comfortable and sanitized vehicle. Grab your Cab Tempo Traveller comes with push-back seats, spacious interiors, and modern facilities for a comfortable journey. Our vehicles are well-maintained and regularly checked before every trip. With an experienced and professional driver, you can relax and enjoy your journey knowing you are in safe hands. It is a convenient option for long-distance tours, outstation trips, sightseeing, and multi-day travel with a large group.",
  },
  {
    title: "26 Seater Luxury Tempo Traveller on rent (Larger groups)",
    text: "A 26 seater Tempo Traveller is a great option for larger groups travelling together. It comes with comfortable push-back seats and plenty of space for passengers to enjoy the journey. With ample luggage space, everyone can carry their bags without compromising on seating comfort. It is ideal for family tours, corporate trips, pilgrimages, sightseeing, outstation travel, and long-distance journeys.",
  },
];

const tripTypes = [
  {
    title: "Local Sightseeing",
    text: "A Tempo traveller can make city sightseeing more convenient Because the entire group can to travel together from one attraction to another without arranging separate vehicles.",
  },
  {
    title: "Airport Transfers",
    text: "Tempo Travellers have more capacity for people and luggage than a regular cab, so for family and groups with loads of bags, it's an obvious choice. The travel will be planned to the pickup and drop-off.",
  },
  {
    title: "Outstation Travel",
    text: "A Tempo Traveller is ideal for long road trips and intercity journeys. From Delhi NCR, popular travel itineraries may include places such as Agra, Jaipur, Haridwar, Rishikesh, Mathura, Vrindavan, Dehradun, and Chandigarh, Khatu Shyam Baba, Neem Karoli baba, contingent on route availability and booking conditions.",
  },
  {
    title: "Weddings and Events",
    text: "Wedding guests, event crews and family reunions can take advantage of Tempo travellers to shuttle them between hotels, venues, rail stations, airports and more.",
  },
];

const pricingFactors = [
  "Vehicle seating capacity",
  "Rental duration",
  "Total travel distance",
  "Local or outstation travel",
  "One-way or round-trip requirements",
  "Vehicle category and model",
  "Travel date and availability",
  "Additional stops or itinerary requirements",
];

const bookingSteps = [
  { title: "Share Pickup & Destination", text: "Share the pickup location and destination." },
  { title: "Provide Date & Duration", text: "Provide the travel date and rental duration." },
  { title: "Mention Passengers", text: "Mention the number of passengers." },
  { title: "Select Traveller Category", text: "Select the preferred traveller category based on availability." },
  { title: "Confirm Fare & Inclusions", text: "Confirm the fare, inclusions, and applicable charges." },
  { title: "Complete Booking", text: "Complete the booking and receive the trip details." },
];

const whoCanHire = [
  "Large families",
  "Friends traveling together",
  "Corporate Team",
  "Wedding Parties",
  "School and College groups",
  "Pilgrimage Groups",
  "Society Tour Groups",
  "Large Events",
  "Airport transfer and travel passengers",
];

const faqs = [
  {
    q: "How much does a tempo traveller on rent cost?",
    a: "The rental cost depends on seating capacity, travel distance, rental duration, vehicle type, route, and whether the journey is local or outstation. The Minimum fare in Delhi NCR, Meerut & Jewar starts from Rs. 6000.",
  },
  {
    q: "Can I rent a tempo traveller for one day?",
    a: "Yes, you can hire a tempo traveller for one-day sightseeing, airport transfers, local travel, events, or short group trips, subject to availability.",
  },
  {
    q: "How many passengers can travel in a tempo traveller?",
    a: "Tempo travellers are available in different seating capacities start from 9-26 seater. The suitable vehicle depends on your passenger count, luggage requirements, route, and travel duration.",
  },
  {
    q: "Is an AC tempo traveller available for rent?",
    a: "Yes, AC tempo traveller options are available with push back seats, fridge and other amenities. Confirm availability and specifications before making your reservation for group tours.",
  },
  {
    q: "Can I hire a tempo traveller for an outstation trip?",
    a: "Yes, tempo travellers can be hired for outstation journeys, including family vacations, group tours, corporate trips, weddings, pilgrimages, and multi-city road trips.",
  },
  {
    q: "Can I book a tempo traveller online?",
    a: "Yes, you can book a tempo traveller online from Grab your Cab website and through whatsapp by providing your travel date, pickup location, destination, passenger count, duration, and preferred vehicle type.",
  },
  {
    q: "Is a driver included with tempo traveller rental?",
    a: "Tempo traveller rentals are generally provided with a professional driver. Confirm driver arrangements, applicable charges, and booking terms before finalizing your journey.",
  },
  {
    q: "Can I hire a luxury tempo traveller?",
    a: "Yes, luxury tempo traveller options may be available for suitable bookings. Vehicle availability, seating capacity, amenities, and pricing should be confirmed before booking.",
  },
  {
    q: "Can I book a Force Urbania tempo traveller ?",
    a: "Yes, Force Urbania tempo travellers are available with all seating capacities specially for small and medium group tours.",
  },
  {
    q: "What charges should I confirm before booking?",
    a: "Confirm the total fare, fuel, tolls, parking, taxes, driver charges, rental duration, inclusions, exclusions, and cancellation terms before confirming your booking.",
  },
  {
    q: "Can I get a caravan in Delhi NCR?",
    a: "Yes, Grab your cab provide Luxury caravan for those luxury is a habbit. It comes with drawing room, bed room, washroom with TV, Fridge and all other amenities.",
  },
];

export default function TempoTravellerOnRentPage() {
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
            <b>Tempo Traveller on Rent</b>
          </div>
          <span className="eyebrow">Delhi NCR · Family, Corporate &amp; Group Trips</span>
          <h1>Tempo Traveller on Rent for Family, Corporate &amp; Group Trips</h1>
          <p className="lead">
            If you're planning a family trip, company outing, wedding journey, or group tour, it's convenient to have everyone travel together. Grab Your Cab offers tempo traveller for rent for local travel, airport transfers, sightseeing, events and outstation journey. Travelers can select an appropriate vehicle based on the size of their group and travel needs.
          </p>
          <div className="hero-ctas">
            <a href="https://wa.me/917522817555" className="btn btn-wa">
              Book on WhatsApp
            </a>
            <a href="tel:+917522817555" className="btn btn-ghost">
              Call to Book
            </a>
          </div>
          <div className="loc-pills">
            <span>Delhi NCR</span>
            <span>Meerut</span>
            <span>Jewar</span>
            <span>Noida</span>
            <span>Gurugram</span>
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
                If you're planning a family trip, company outing, wedding journey, or group tour, it's convenient to have everyone travel together. Grab Your Cab offers tempo traveller for rent for local travel, airport transfers, sightseeing, events and outstation journey. Travelers can select an appropriate vehicle based on the size of their group and travel needs.
              </p>
              <p>
                A tempo traveller is especially helpful for groups that desire more room than a typical car, but also want a comfortable, cohesive trip. With its professional driver, flexible travel plans and roomy interior, it is the ideal choice for families, friends, corporate groups and sightseeing tours.
              </p>
            </div>

            <div className="seo-block">
              <h2>Tempo Traveller on Rent for Group Travel</h2>
              <p>
                A Tempo Traveller on rent is a comfortable passenger vehicle for families, friends, and groups travelling together. Instead of hiring separate cars, everyone can travel together in one vehicle with enough space for passengers and luggage.
              </p>
              <p>
                A Tempo Traveller can be used for both short-distance local trips and long-distance intercity travel. People commonly hire Tempo Travellers for sightseeing, family functions, business trips, airport transfers, weekend getaways, and multi-day tours.
              </p>
              <p>
                You can choose the right Tempo Traveller based on the number of passengers, luggage, destination, and duration of the trip. It is a convenient option for group travel as everyone can stay together and enjoy the journey comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- RENTAL OPTIONS BY GROUP SIZE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">By Group Size</span>
            <h2>Tempo Traveller Rental Options for Different Group Sizes</h2>
            <p>
              Group size is one of the key elements in the selection of a traveller. Grab Your Cab allows clients to choose a right vehicle as per seating capacity for their need of travel and availability.
            </p>
          </div>
          <div className="svc-grid">
            {rentalOptions.map((item) => (
              <div className="svc-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LOCAL & OUTSTATION TRIPS ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Where You Can Go</span>
            <h2>Tempo Traveller Hire for Local and Outstation Trips</h2>
            <p>Grab Your Cab provide tempo traveler service for all types of journeys either based on availability or customers itinerary.</p>
          </div>
          <div className="need-grid">
            {tripTypes.map((item) => (
              <div className="need-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRICING FACTORS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Transparent Pricing</span>
            <h2>How Much Does Tempo Traveller Rental Cost?</h2>
            <p>The cost of a tempo traveller on rent depends on several practical factors rather than a single fixed rate. Important pricing factors include:</p>
          </div>
          <div className="check-grid">
            {pricingFactors.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: "14.5px", maxWidth: "840px", marginLeft: "auto", marginRight: "auto" }}>
            Fuel, toll, park, interstate tax, and other such fees may be included or not depend on the chosen package and route. Customers are advised to ask for a comprehensive quote prior to booking their trip in order to confirm what the trip fee covers and what are the additional charges.
          </p>
        </div>
      </section>

      {/* ---------- WHY TEMPO VS MULTIPLE CARS ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Hire a Tempo Traveller Instead of Multiple Cars?</h2>
              <p>
                For group travel a Tempo traveller can make the entire travel simple comfortable and enjoyable. everyone can stay together, you can handle your luggage in one vehicle, stay at one place with your family or colleagues can make your trip more enjoyable rather than going on different cars. It also save time and hassle to synchronize the movements of several vehicles going the same way.
              </p>
              <p>
                It may also help to make long-distance trips easier to handle, since the party keeps to a single itinerary. This synchronized approach to traveling can help a family or corporate group minimize travel travel headaches and have a more convenient trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Book a Tempo Traveller Online</h2>
            <p>Customers can book a tempo traveller online from website or 24 hours customer service by providing basic trip information. The booking process generally involves:</p>
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
            Correct estimation of the number of passengers and luggage requirement helps us to choose the right vehicle best suited for your journey.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Tempo Traveller?</h2>
              <p>Choose a traveller, confirm your booking and get verified in minutes.</p>
              <div className="hbtns">
                <a href="https://wa.me/917522817555" className="btn btn-wa">
                  Book on WhatsApp
                </a>
                <a href="tel:+917522817555" className="btn btn-ghost">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHO CAN HIRE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Perfect For</span>
            <h2>Who Can Hire a Traveller?</h2>
            <p>A Tempo Traveller on rent can be beneficial for numerous types of passengers but are ideal for:</p>
          </div>
          <div className="need-grid">
            {whoCanHire.map((item) => (
              <div className="need-card" key={item}>
                <p style={{ margin: 0, color: "var(--slate)", fontWeight: 600, fontSize: "14.5px" }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: "14.5px", maxWidth: "840px", marginLeft: "auto", marginRight: "auto" }}>
            If the need is for a 1 day local trip or for the multi-day road travel, the vehicle can be chosen as per the size of group and itinerary.
          </p>
        </div>
      </section>

      {/* ---------- BOOK NOW BANNER ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="banner">
            <div className="in">
              <h2>Book a Tempo Traveller with Grab Your Cab</h2>
              <p>
                Simplify group travel by booking a Tempo Traveller based on no of passengers customers have freedom to choose various seating capacity. Grab Your Cab provides economical Tempo Travellers with small budget and for those where comfort is priority can easily book luxury Tempo Travellers. It provides easy solution for city and outstation group travel from delhi NCR and nearby region.
              </p>
              <p>
                Provide your travel information to Grab Your Cab to enquire about vehicle availability and price for your next group journey.
              </p>
              <div className="hbtns">
                <a href="https://wa.me/917522817555" className="btn btn-wa">
                  Book on WhatsApp
                </a>
                <a href="tel:+917522817555" className="btn btn-ghost">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Got Questions?</span>
            <h2>Frequently Asked Questions About Tempo Traveller on Rent</h2>
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
      {/* <section className="sec grey">
        <div className="container">
          <div className="garage-head">
            <h2>Our Tempo Traveller Rental Office</h2>
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
                title="Grab Your Cab tempo traveller rental office location"
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
      </section> */}
      <Footer />
    </>
  );
}