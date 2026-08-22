import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Best Taxi Service in Greater Noida | Book a Cab Today",
  description:
    "Book a cab service in Greater Noida for local and outstation travel. Choose suitable cars for airport transfers, family trips, business travel and one-way journeys.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — taxi-service-greater-noida page styles
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

/* service type grid (fills "taxi services available" section) */
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

/* checklist grid (fills "fare factors" / "why choose" sections) */
.check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 24px}
.check-grid .item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:12px 14px}
.check-grid .item .dot{width:8px;height:8px;border-radius:50%;background:var(--red);margin-top:6px;flex:none}
.check-grid .item p{color:var(--text);font-size:14px;margin:0}

/* why choose grid */
.why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.why-grid .item{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:16px 18px}
.why-grid .item p{color:var(--muted);font-size:13.5px;margin-top:4px;line-height:1.6}

/* routes list */
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
@media (max-width:700px){
  .check-grid{grid-template-columns:1fr}
}
@media (max-width:620px){
  .container{padding:0 16px}
  .sec{padding:36px 0}
  .page-hero{padding:32px 0}
  .hero-ctas .btn{flex:1;padding:12px 8px;font-size:13px}
  .fleet-card,.step,.route-grid .item{flex:1 1 100%;max-width:100%}
  .check-grid{grid-template-columns:1fr}
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

const advantages = [
  "Simple taxi booking",
  "Professional drivers who know their routes",
  "Clean and comfortable cabs",
  "Flexible options for pickup and drop-off of passengers",
  "Vehicle categories available",
  "Travel from city to city, within city",
  "One-way and round trip services",
  "Families, groups or individuals - suitable solutions for all when it comes to hiring a taxi.",
];

const taxiServices = [
  {
    title: "Local Taxi Service in Greater Noida",
    text: "You can use a local cab for daily commute, office work, shopping, appointments, meetings or local travels. You can schedule a pickup from any location and use the cab to travel within Greater Noida and the other nearby Places.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87MVlflVDxpgvAbHSxL3GH-BnttdQa8InRS_yfyZaeJ2jvGLBKhYuQQk&s=10",
  },
  {
    title: "Airport Taxi Service in Greater Noida",
    text: "Whether you are heading to the airport or coming from the airport, you need timely and reliable transport. Book a taxi from Greater Noida to Delhi Airport for your trip to the airport or get an airport transfer when you are returning to the city.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh73zv7c4iGj0HQYZvV4IBIO6Hm5HBYOeyYAHBCZgOg7m1i-pzey9rX63&s=10",
  },
  {
    title: "Outstation Taxi from Greater Noida",
    text: "You can get an outstation taxi for intercity travel as a good alternative to driving on your own. After the journey you may have to travel to Delhi, Agra, Jaipur, Haridwar, Dehradun, Mathura and Vrindavan etc, depending on popular destinations so stay tuned for travel plans.",
    image: "https://www.lordkrishnatravels.com/wp-content/uploads/2025/03/slider-2.jpg",
  },
  {
    title: "One-Way Taxi Service in Greater Noida",
    text: "Hire taxi for one way journey suitable for to reach your destination. You don't have to use it for a return taxi in the middle of the city.",
    image: "https://mithilatravels.com/wp-content/uploads/2026/02/Cab-service-in-noida-e1770898999606.jpg",
  },
  {
    title: "Round-Trip Taxi Service in Greater Noida",
    text: "Round-trip reservations are especially convenient for family excursions sightseeing-business trips or any well-planned travel where your transportation needs to cover both ends of your journey.",
    image: "https://suritours.in/nimg/car-rental-service-noida.jpg",
  },
  {
    title: "Corporate Taxi Service in Greater Noida",
    text: "Individuals and organizations now have the opportunity to travel to and deliver their professional, organizational and institutional needs with ease: for example, for business meetings conferences visits to the office employees attending work, and for any other work-related travel.",
    image: "https://www.grabyourcab.com/images/taxi-service.jpg",
  },
];

const popularRoutes = [
  "Greater Noida to Delhi",
  "Greater Noida to Noida",
  "Greater Noida to Ghaziabad",
  "Greater Noida to Delhi Airport",
  "Greater Noida to Agra",
  "Greater Noida to Jaipur",
  "Greater Noida to Haridwar",
  "Greater Noida to Dehradun",
  "Greater Noida to Mathura",
  "Greater Noida to Vrindavan",
];

const bookingSteps = [
  { title: "Choose Pickup", text: "Choose your place of pickup in Greater Noida." },
  { title: "Enter Travel Details", text: "Type in your city and the date of travel." },
  { title: "Select Car Type", text: "Choose the type of car or taxi you prefer." },
  { title: "Review Booking", text: "Review your trip and booking details." },
  { title: "Get Confirmation", text: "Send you booking confirmation and get you ready for pickup." },
];

const fareFactors = [
  "Distance travelled",
  "Type of vehicle",
  "Length of the trip",
  "Trip type: One Way or Round Trip",
  "Location for pick-up and drop off",
  "Toll and parking fees",
  "Travel date and demand for services",
];

const faqs = [
  {
    q: "How can I book a taxi in Greater Noida?",
    a: "You can book a taxi by providing your pickup location, destination, travel date, passenger details, and preferred vehicle type, then confirming the booking.",
  },
  {
    q: "How much does a taxi cost in Greater Noida?",
    a: "Taxi fares depend on distance, vehicle type, trip duration, route, and applicable toll or parking charges. Confirm the fare for your specific journey before booking.",
  },
  {
    q: "Can I book a taxi from Greater Noida to Delhi Airport?",
    a: "Yes, you can arrange a taxi from Greater Noida to Delhi Airport for airport drop-offs, subject to service availability and booking confirmation.",
  },
  {
    q: "Can I book an outstation taxi from Greater Noida?",
    a: "Yes, outstation taxi options can be used for planned intercity journeys, including one-way and round-trip travel, depending on destination and availability.",
  },
  {
    q: "Do you provide one-way taxi service from Greater Noida?",
    a: "One-way taxi service can be suitable for travellers who need transportation to a destination without requiring the same taxi for the return journey.",
  },
  {
    q: "Which cars are available for taxi booking in Greater Noida?",
    a: "Vehicle options may include Maruti, Kia, Mahindra and Luxury cars depending on availability and the number of passengers, luggage, and comfort requirements.",
  },
  {
    q: "Can I book a taxi online in Greater Noida?",
    a: "Yes, you can provide your journey details and booking requirements to arrange a taxi, subject to vehicle and service availability.",
  },
];

export default function TaxiServiceGreaterNoidaPage() {
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
                <b>Taxi Service in Greater Noida</b>
              </div>
              <span className="eyebrow">Greater Noida · Local &amp; Outstation</span>
              <h1>Book Taxi Service in Greater Noida for Easy Travel</h1>
              <p className="lead">
                Grab Your Cab offers a comfortable cab ride in Greater Noida for local travel,
                airport transfers, corporate rides, railway station transfers and outstation
                rides. Whether you are planning a short trip across town or have an intercity
                trip planned, you can choose from a range of vehicles suitable for your travel
                needs and arrange for pickup and drop-off.
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
                <span>Greater Noida</span>
                <span>Noida</span>
                <span>Delhi</span>
                <span>Ghaziabad</span>
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
                There are choices to cater for solo travellers, families, business travellers and
                groups trips, this service aims to give you hassle-free travelling in and around
                Greater Noida and nearby places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Our Advantages</span>
            <h2>Why Choose Our Taxi Service in Greater Noida?</h2>
            <p>
              The right cab service can relieve those hassles of day-to-day and out-of-town
              travels. Grab Your Cab is all about easy booking, comfortable ride, and flexible
              journey.
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
                If you are travelling for work, to an appointment, to the airport or planning an
                outstation trip, we have a taxi that's right for your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI SERVICES GRID ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Choose Your Service</span>
            <h2>Taxi Services Available in Greater Noida</h2>
            <p>Grab Your Cab fulfills various travel needs by offering multiple taxi services.</p>
          </div>
          <div className="fleet-grid">
            {taxiServices.map((service) => (
              <div className="fleet-card" key={service.title}>
                <div className="img-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CAB OPTIONS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Cab Options Available in Greater Noida</h2>
              <p>
                Different trips call for different kinds of vehicles. Grab Your Cab can suggest
                the best car options according to your passengers, luggage, comfort and distance
                of travel.
              </p>
              <p>
                Options can include Maruti, Kia, Mahindra and Luxury cars are subject to
                availability. Compact cars are a good option for lone travellers and small
                groups, while the extra passenger and luggage space offered by a bigger car can
                be a godsend for families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- POPULAR ROUTES ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Where We Go</span>
            <h2>Popular Routes from Greater Noida</h2>
            <p>
              From Greater Noida taxi bookings are available to travel to the following cities
              and more:
            </p>
          </div>
          <div className="route-grid">
            {popularRoutes.map((route) => (
              <div className="item" key={route}>
                <span className="dot" />
                {route}
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                You can choose the suitable car and trip type for the total distance and the
                number of passengers, luggage as well as days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LOCAL AND OUTSTATION TAXI ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Local and Outstation Taxi for Different Travel Needs</h2>
              <p>
                A taxi can be booked as per your travel need. Local Taxi services are also
                available for daily travel, shopping, meetings, local visits etc., in Outstation
                Taxi services are available for Airport transfers and City Transfers.
              </p>
              <p>
                A one-way taxi is ideal for journeys with a single destination, and a round trip
                taxi is useful for sightseeing and traveling back. When you are planning
                long-distance travel between cities an outstation cab you will be at the mercy of
                the road and whatever the weather and road conditions might be and you would not
                need to drive all the way yourself.
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
            <h2>How to Book a Taxi in Greater Noida?</h2>
            <p>You can get a cab with these simple steps:</p>
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
            Accurate information on pickup, destination, date, and passengers allows for a better
            trip coordination.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Taxi in Greater Noida?</h2>
              <p>Choose your car, confirm your booking and get ready for pickup.</p>
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

      {/* ---------- FAMILIES, BUSINESSES AND GROUPS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi Service for Families, Businesses and Groups</h2>
              <p>
                A taxi in Greater Noida is not limited to stay certain class of travellers.
                Families book taxis for airport transfers, local trips and also for outstation
                trips. Business travellers can book for meetings, corporate visits and
                appointments.
              </p>
              <p>
                For vacationers, a cab can make sightseeing and travel between cities simpler and
                less complicated. Groups may choose larger vehicles if seats and luggage space
                are at a premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AIRPORT & OUTSTATION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Greater Noida Airport and Outstation Taxi Service</h2>
              <p>
                Travelling by airline nearly always entails baggage, schedules, and maybe
                specific pickup or drop-off requirements. An advance book taxi from Greater Noida
                to Delhi Airport can offer hassle free ride to single, group and business
                travellers. Be accurate while you book your city cab to the Airport, mention the
                pickup address and flight related travel details and tell us how many passengers
                are flying with you and how much luggage you carrying so we can plan your ride.
              </p>
              <p>
                Be it your weekend trip, family holidays, business trip or intercity transfer, an
                outstation cab can come to your rescue. You can go for either a one way trip or
                round trip based on your needs.
              </p>
              <p>
                One can plan to travel to destinations like Agra, Jaipur, Haridwar, Dehradun,
                Mathura or Vrindavan from Greater Noida. Trip availability, vehicle options, and
                applicable charges should be reconfirmed at the time of booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY BOOK A TAXI ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Book a Taxi Instead of Driving Yourself?</h2>
              <p>
                A taxi booking can minimize the stress of driving, routing, finding a parking
                slot, and even the strain of travel over long distances. This is especially
                helpful when you take an unknown path, or you want to prevent yourself getting
                too tired of driving.
              </p>
              <p>
                With taxi transport you also have the convenience of door to door service for
                your trips to the airport, railway station, family vacations and even longer
                inter-city travels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI FARE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Read Before You Book</span>
            <h2>Taxi Fare in Greater Noida</h2>
            <p>The taxi fare is subject to change based on the following conditions:</p>
          </div>
          <div className="check-grid">
            {fareFactors.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                To get an accurate fare, verify the charges that apply to your trip before making
                a booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOK NOW BANNER ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="banner">
            <div className="in">
              <h2>Book a Taxi in Greater Noida with Grab Your Cab</h2>
              <p>
                If it is a local cab, airport transfer, single ride, double ride, or outstation
                taxi you have a need for, Grab Your Cab makes travel easy with its varied travel
                options to fit the bill. Select your preferred vehicle and enter your travel
                information to get a quote, then book the ride and relax while we take you to
                your destination. Reserve your taxi in Greater Noida with Grab Your Cab and plan
                your next journey with easy cab travels.
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
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Got Questions?</span>
            <h2>FAQs About Taxi Service in Greater Noida</h2>
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
      <section className="sec grey">
        <div className="container">
          <div className="garage-head">
            <h2>Our Taxi Service Office</h2>
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
                title="Grab Your Cab taxi service office location"
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