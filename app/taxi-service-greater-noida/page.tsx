import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Taxi Service in Greater Noida & Noida Extension | Cab Service & Self Drive Car Rental",
  description:
    "Book taxi service in Greater Noida and Noida Extension with cab service, self drive car rental, Tempo Travellers, luxury car rental, luxury bus rental, airport transfers and outstation travel services.",
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
.seo-block:last-child{margin-bottom:0}
.seo-block h2{font-size:clamp(19px,2.6vw,25px);font-weight:700;margin-bottom:12px;position:relative;padding-bottom:10px}
.seo-block h2::after{content:"";position:absolute;left:0;bottom:0;width:54px;height:3px;background:var(--red)}
.seo-block p{color:var(--text);font-size:14.5px;margin-bottom:12px;line-height:1.75}
.seo-block p:last-child{margin-bottom:0}
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
  "Taxi & Cab Services",
  "Self Drive Car Rental",
  "Car Rental",
  "Tempo Traveller on Rent",
  "Force Urbana on Rent",
  "Luxury Car Rental",
  "Luxury Bus & Volvo Bus Rental",
  "Airport Transfers",
  "One Way & Outstation Cabs",
  "Corporate & Event Transportation",
  "Pet Friendly Cab Services",
  "Safe Transportation Options for Women",
];

const taxiServices = [
  {
    title: "Cab Service in Greater Noida",
    text: "Our cab service in Greater Noida is suitable for daily travel, office commute, airport transfers, business meetings, shopping trips and outstation journeys. Customers can enquire about local, outstation or one way cab services according to their travel requirements.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87MVlflVDxpgvAbHSxL3GH-BnttdQa8InRS_yfyZaeJ2jvGLBKhYuQQk&s=10",
  },
  {
    title: "Self Drive Car Rental in Greater Noida",
    text: "Grab Your Cab offers self drive car rental in Greater Noida for customers who prefer the flexibility, privacy and convenience of driving themselves. Self-drive cars are available both in automatic and manual transmission for local travel, business trips, family outings and weekend getaways.",
    image: "https://rajputanacabs.b-cdn.net/wp-content/uploads/2026/05/kia-carens-taxi-rajputana-cabs.webp",
  },
  {
    title: "Tempo Traveller on Rent in Greater Noida",
    text: "Planning a family trip, corporate outing, wedding or group tour? Grab Your Cab provides Tempo Traveller on rent in Greater Noida for comfortable group transportation and outstation travel, with 9, 12, 16, 20 and 26 seater options available.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHe5mtgLiUZsdyousYcrSeU7Ohu0XCvXH-Fj7Ak-YBnfqsYCZ5dQLzB7M&s=10",
  },
  {
    title: "Force Urbania Tempo Traveller on Rent",
    text: "Looking for a premium group travel vehicle? Grab Your Cab provides Force Urbania Tempo Traveller on rent in Greater Noida, Noida Extension, Yamuna Expressway, Pari Chowk, Knowledge Park, Alpha, Beta and Gamma sectors for corporate events, airport transfers, weddings, family trips, group tours and outstation travel.",
    image: "https://media.zigcdn.com/media/model/2026/Apr/front-right-quarter-view-892111143_930x620.jpg",
  },
  {
    title: "Luxury Car Rental in Greater Noida",
    text: "Grab Your Cab provides luxury car rental in Greater Noida for weddings, VIP travel, executive transportation, airport transfers, celebrity events and special occasions. Customers can enquire about Toyota Fortuner, Mercedes, BMW, Audi, Defender, Toyota Vellfire and other premium vehicles.",
    image: "https://luxuryrentacar.in/uploads/mercedes-maybach-s680-rental-delhi.jpg",
  },
  {
    title: "Luxury Bus Rental in Greater Noida",
    text: "Our luxury bus rental services in Greater Noida are suitable for corporate events, conferences, employee transportation, weddings, educational tours and large group travel requirements.",
    image: "https://www.carrentaldelhi.biz/images/categories-photoes/volvo-9600-big@2x.jpg",
  },
];

const popularRoutes = [
  "Pari Chowk",
  "Knowledge Park",
  "Alpha Sector",
  "Beta Sector",
  "Gamma Sector",
  "Delta Sector",
  "Omega Sector",
  "Jaypee Greens",
  "Surajpur",
  "Ecotech",
  "Yamuna Expressway",
  "Noida Extension",
];

const bookingSteps = [
  { title: "Share Pickup Location", text: "Tell us your pickup location in Greater Noida, Noida Extension or nearby areas." },
  { title: "Share Destination", text: "Provide your destination or drop-off point for the trip." },
  { title: "Select Travel Date", text: "Choose your date and time of travel for the booking." },
  { title: "Choose Vehicle", text: "Pick a taxi, self-drive car, Tempo Traveller or luxury vehicle as per your need." },
  { title: "Confirm Booking", text: "Share rental or travel duration and passenger details to confirm suitable available options." },
];

const weddingCars = [
  "Toyota Fortuner",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Land Rover Defender",
  "Toyota Vellfire",
  "Jaguar",
];

const faqs = [
  {
    q: "Do you provide taxi service in Greater Noida?",
    a: "Yes. Grab Your Cab provides taxi and cab services in Greater Noida 24 hours for local, airport, corporate and outstation travel requirements.",
  },
  {
    q: "Can I rent a self drive car in Greater Noida?",
    a: "Yes. Self drive car rental options are available subject to vehicle availability, rental eligibility and applicable terms.",
  },
  {
    q: "Can I book a Tempo Traveller on rent in Greater Noida?",
    a: "Yes. Tempo Traveller rental is available for group tours, family trips, corporate events, weddings and outstation travel, subject to availability.",
  },
  {
    q: "Can I rent a luxury car in Greater Noida?",
    a: "Yes. Customers can enquire about luxury cars such as Mercedes, BMW, Audi, Defender and other premium vehicles for different travel and event requirements.",
  },
  {
    q: "Do you provide luxury bus rental in Greater Noida?",
    a: "Yes. Customers can enquire about luxury buses and Volvo buses for corporate events, group tours, weddings, conferences and outstation travel.",
  },
  {
    q: "Do you provide airport taxi service from Greater Noida?",
    a: "Yes. Airport taxi services are arranged for Delhi Airport and Noida International Airport (Jewar Airport), subject to service availability from all parts of Greater Noida.",
  },
  {
    q: "Do you provide corporate transportation in Greater Noida?",
    a: "Yes. We provide corporate cab services, employee transportation, executive travel, airport transfers and group transportation solutions for businesses.",
  },
  {
    q: "How can I book a cab or rental car in Greater Noida?",
    a: "Share your pickup location, destination, travel date, vehicle requirement and rental or travel duration with Grab Your Cab to enquire about suitable available options.",
  },
  {
    q: "Do you provide cab service in Noida Extension?",
    a: "Yes. Grab Your Cab provides cab services in Noida Extension (Greater Noida West) for local travel, airport transfers, business travel and outstation journeys.",
  },
  {
    q: "Do you provide self drive car rental in Noida Extension?",
    a: "Yes. Self drive car rental options are available for customers in Noida Extension, subject to vehicle availability, rental terms and eligibility requirements.",
  },
  {
    q: "Do you provide Force Urbana on rent in Noida Extension?",
    a: "Yes. Customers can enquire about Force Urbana on rent in Greater Noida, Noida Extension, Pari Chowk, Knowledge Park, Yamuna Expressway, Alpha, Beta and Gamma for group travel, corporate events, weddings and outstation journeys.",
  },
];

export default function TaxiServiceGreaterNoidaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="page-hero" style={{
          backgroundImage:"url('/pages_banners/greater_noida.png')",
          backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
         backgroundPosition: "center",
    position: "relative",
    width: "100%",
        }}>
          <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0, 0, 0, 0.45)",
      zIndex: 0,
      pointerEvents: "none",
    }}
  ></div>
        <div className="container" style={{
    position: "relative",
    zIndex: 1,
  }}>
          <div className="hero-grid">
            <div>
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <b>Taxi Service in Greater Noida</b>
              </div>
              {/* <span className="eyebrow">Greater Noida · Noida Extension · Yamuna Expressway</span> */}
              <h1>Taxi Service in Greater Noida &amp; Noida Extension</h1>
              {/* <p className="lead">
                Looking for a reliable taxi service in Greater Noida? Grab Your Cab provides
                outstation taxi services, airport transfers, one-way cabs, local taxis and
                corporate transportation across Greater Noida for individuals, families, business
                travelers and groups.
              </p> */}
              <div className="hero-ctas">
                <a href="https://wa.me/917522817555" className="btn btn-wa">
                  Book on WhatsApp
                </a>
                <a href="tel:+917522817555" className="btn btn-ghost">
                  Call to Book
                </a>
              </div>
              {/* <div className="loc-pills">
                <span>Greater Noida</span>
                <span>Noida Extension</span>
                <span>Yamuna Expressway</span>
                <span>Pari Chowk</span>
              </div> */}
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
                Grab Your Cab brings multiple transportation options together under one
                platform, making it easier to arrange different travel requirements through a
                single transportation partner. We provide taxi and cab services, self-drive cars,
                car rentals, Tempo Travellers, Force Urbana, luxury cars and luxury buses across
                Greater Noida, Noida Extension and nearby areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Multiple Travel Options Under One Roof</span>
            <h2>Why Choose Our Taxi Service in Greater Noida?</h2>
            <p>
              Whether you need a local taxi, airport transfer, one-way cab, self-drive car,
              luxury vehicle, group transportation or corporate event travel, you can enquire
              about a suitable vehicle based on your journey, passenger count and travel
              requirements.
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
                From taxi and cab bookings to self-drive cars, Tempo Travellers, Force Urbana,
                luxury cars and luxury buses, Grab Your Cab helps arrange the right vehicle for
                your journey across Greater Noida, Noida Extension and nearby areas.
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

      {/* ---------- TAXI SERVICE IN GREATER NOIDA ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi Service in Greater Noida</h2>
              <p>
                Looking for a reliable taxi service in Greater Noida? Grab Your Cab provides
                outstation taxi services, airport transfers, one-way cabs, local taxis and
                corporate transportation across Greater Noida for individuals, families,
                business travelers and groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAB SERVICE IN GREATER NOIDA ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Cab Service in Greater Noida</h2>
              <p>
                Our cab service in Greater Noida is suitable for daily travel, office commute,
                airport transfers, business meetings, shopping trips and outstation journeys.
                Customers can enquire about local, outstation or one way cab services according
                to their travel requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL IN GREATER NOIDA ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Greater Noida</h2>
              <p>
                Grab Your Cab offers self drive car rental in Greater Noida for customers who
                prefer the flexibility, privacy and convenience of driving themselves.
                Self-drive cars are available both in automatic and manual transmission for
                local travel, business trips, family outings and weekend getaways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAR RENTAL IN GREATER NOIDA ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Car Rental in Greater Noida</h2>
              <p>
                Whether you need a car for a few hours, a full day or multiple days, our car
                rental services in Greater Noida offer comfortable and reliable transportation
                solutions for personal, business and leisure travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER ON RENT IN GREATER NOIDA ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent in Greater Noida</h2>
              <p>
                Planning a family trip, corporate outing, wedding or group tour? Grab Your Cab
                provides Tempo Traveller on rent in Greater Noida for comfortable group
                transportation and outstation travel. You can choose from varieties of seating
                options, 9 seater tempo traveller, 12 seater tempo traveller, 16 seater tempo
                traveller, 20 seater tempo traveller and 26 seater tempo traveller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FORCE URBANA TEMPO TRAVELLER ON RENT ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Force Urbana Tempo Traveller on Rent in Greater Noida &amp; Noida Extension</h2>
              <p>
                Looking for a premium group travel vehicle? Grab Your Cab provides Force Urbana
                Tempo Traveller on rent in Greater Noida, Noida Extension, Yamuna Expressway,
                Pari Chowk, Knowledge Park, Alpha, Beta and Gamma sectors for corporate events,
                airport transfers, weddings, family trips, group tours and outstation travel.
                With modern interiors, comfortable seating and ample luggage space, Force Urbana
                tempo traveller offers a more premium travel experience for small and large
                groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY BUS RENTAL IN GREATER NOIDA ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Bus Rental in Greater Noida</h2>
              <p>
                Our luxury bus rental services in Greater Noida are suitable for corporate
                events, conferences, employee transportation, weddings, educational tours and
                large group travel requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR RENTAL IN GREATER NOIDA ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car Rental in Greater Noida</h2>
              <p>
                Grab Your Cab provides luxury car rental in Greater Noida for weddings, VIP
                travel, executive transportation, airport transfers, celebrity events and
                special occasions. Customers can enquire about Toyota Fortuner, Mercedes, BMW,
                Audi, Defender, Toyota Vellfire and other premium vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI SERVICE IN NOIDA EXTENSION ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi Service in Noida Extension</h2>
              <p>
                Grab Your Cab provides taxi service in Noida Extension (Greater Noida West) for
                local travel, airport transfers, outstation trips, office commute and one way
                cab requirements. Residents of Gaur City, Bisrakh, Techzone, Ek Murti and nearby
                areas can enquire about taxi services according to their travel needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAB SERVICE IN NOIDA EXTENSION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Cab Service in Noida Extension</h2>
              <p>
                Looking for a cab service in Noida Extension? Whether you need a local cab,
                airport taxi or outstation vehicle, Grab Your Cab provides 5 and 7 seater cabs
                for families, professionals, students and business travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL IN NOIDA EXTENSION ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Noida Extension</h2>
              <p>
                Customers looking for self drive car rental in Noida Extension can enquire about
                hatchbacks, sedans and SUVs for personal travel, business trips, weekend drives
                and outstation journeys. We have both manual and automatic transmission with all
                fuel type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAR RENTAL IN NOIDA EXTENSION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Car Rental in Noida Extension</h2>
              <p>
                Our car rental services in Noida Extension provide flexible transportation
                options for local travel, airport transfers, family functions, business meetings
                and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER ON RENT IN NOIDA EXTENSION ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent in Noida Extension</h2>
              <p>
                Tempo Traveller on rent in Noida Extension is suitable for group tours, weddings,
                religious trips, corporate outings and family travel. Multiple seating options
                may be available depending on the group size. You can also enquire about luxury
                tempo travellers, 1 x 1 Maharaja Tempo Travellers and Force Urbana Tempo
                Travellers available with all seating capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY BUS RENTAL IN NOIDA EXTENSION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Bus Rental in Noida Extension</h2>
              <p>
                Grab Your Cab provides luxury bus rental in Noida Extension for corporate events,
                educational tours, weddings, conferences and group transportation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR RENTAL IN NOIDA EXTENSION ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car Rental in Noida Extension</h2>
              <p>
                Looking for a luxury car rental in Noida Extension? Customers can enquire Toyota
                Fortuner, Audi, BMW, Mercedes, Toyota Vellfire, Range Rover, Defender and other
                premium vehicles for weddings, VIP guests, executive travel, airport transfers
                and special events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI & CAB SERVICE ON YAMUNA EXPRESSWAY ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi &amp; Cab Service on Yamuna Expressway</h2>
              <p>
                Grab Your Cab provides taxi and cab services on Yamuna Expressway for local
                travel, airport transfers, business travel, outstation journeys and
                transportation to and from Noida International Airport (Jewar Airport).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL ON YAMUNA EXPRESSWAY ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental on Yamuna Expressway</h2>
              <p>
                Self drive car rental in Yamuna Expressway is available 24 hours with lots of
                options from hatchback to SUVs for family trips, business travel, weekend
                getaways and long-distance journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER ON RENT ON YAMUNA EXPRESSWAY ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent on Yamuna Expressway</h2>
              <p>
                Tempo Traveller rental on Yamuna Expressway is suitable for group tours, family
                functions, educational trips, religious travel and corporate group
                transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR RENTAL ON YAMUNA EXPRESSWAY ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car Rental on Yamuna Expressway</h2>
              <p>
                Grab Your Cab provides luxury car rental on Yamuna Expressway for weddings,
                airport transfers, VIP travel, executive transportation and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI & CAB SERVICE AT PARI CHOWK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi &amp; Cab Service at Pari Chowk</h2>
              <p>
                Pari Chowk is one of the most important landmarks in Greater Noida. Grab Your
                Cab provides taxi and cab services at Pari Chowk for local travel, airport
                transfers, office commute, educational travel and outstation journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL AT PARI CHOWK ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental at Pari Chowk</h2>
              <p>
                Customers looking for self drive car rental near Pari Chowk can enquire about
                suitable vehicle options for personal travel, business requirements and weekend
                trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER ON RENT AT PARI CHOWK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent at Pari Chowk</h2>
              <p>
                Tempo Traveller on rent at Pari Chowk is available for weddings, family tours,
                corporate events, educational trips and group transportation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI & CAB SERVICE IN ALPHA, BETA & GAMMA SECTORS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi &amp; Cab Service in Alpha, Beta &amp; Gamma Sectors</h2>
              <p>
                Grab Your Cab provides taxi and cab services across Alpha, Beta and Gamma
                sectors of Greater Noida for local travel, airport transfers, daily commute,
                family journeys and business transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL IN ALPHA, BETA & GAMMA SECTORS ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Alpha, Beta &amp; Gamma Sectors</h2>
              <p>
                Residents of Alpha, Beta and Gamma sectors can get self drive car rental at
                affordable rates for personal travel, office commute, family outings and
                outstation journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER ON RENT IN ALPHA, BETA & GAMMA SECTORS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent in Alpha, Beta &amp; Gamma Sectors</h2>
              <p>
                Planning a group trip from Alpha, Beta or Gamma? Grab Your Cab provides Tempo
                Traveller rental for weddings, family functions, educational tours, corporate
                outings and group travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI & CAB SERVICE IN KNOWLEDGE PARK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi &amp; Cab Service in Knowledge Park</h2>
              <p>
                Grab Your Cab provides taxi and cab services in Knowledge Park for students,
                faculty members, corporate visitors, airport travelers and daily commuters.
                Knowledge Park remains one of the busiest educational and commercial hubs of
                Greater Noida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL IN KNOWLEDGE PARK ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Knowledge Park</h2>
              <p>
                Looking for self drive car rental in Knowledge Park? Customers can enquire about
                vehicles for local travel, business trips, educational visits and personal
                transportation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER ON RENT IN KNOWLEDGE PARK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent in Knowledge Park</h2>
              <p>
                Tempo Traveller rental in Knowledge Park is suitable for college groups,
                educational tours, conferences, corporate events and large group travel
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR RENTAL IN KNOWLEDGE PARK ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car Rental in Knowledge Park</h2>
              <p>
                Customers can also enquire about luxury car rental in Knowledge Park for VIP
                guests, business meetings, airport transfers, corporate events and special
                occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WEDDING CAR ON RENT ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Wedding Car on Rent in Greater Noida, Noida Extension &amp; Yamuna Expressway</h2>
              <p>
                Make your special day memorable with wedding car rental services in Greater
                Noida, Noida Extension and Yamuna Expressway. Customers can enquire about luxury
                wedding cars including Mercedes, BMW, Audi, Jaguar, Defender, Toyota Vellfire and
                other premium vehicles for weddings and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PET FRIENDLY CAB SERVICE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Pet Friendly Cab Service</h2>
              <p>
                Pets are an important part of the family, and travelling with them should be
                convenient. Grab Your Cab provides pet friendly cab services for passengers
                travelling with dogs, cats and other companion animals, helping make journeys
                more comfortable for both pets and their owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SAFE CAB SERVICE FOR WOMEN ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Safe Cab Service for Women</h2>
              <p>
                Women passenger safety remains a key priority. Grab Your Cab offers
                transportation solutions with verified drivers, GPS-enabled trip tracking,
                driver and vehicle details shared before pickup, and emergency assistance
                support to help provide a safer and more comfortable travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORPORATE & EVENT TRANSPORTATION ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Corporate &amp; Event Transportation in Greater Noida</h2>
              <p>
                Greater Noida hosts business meetings, conferences, dealer meets, exhibitions,
                training programs, weddings and large events that often require different types
                of vehicles. Grab Your Cab can assist with airport pickups, local cabs, executive
                luxury cars, Tempo Travellers, Force Urbana and luxury buses through a
                coordinated transportation solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AREAS WE SERVE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Areas We Serve in Greater Noida</h2>
              <p>
                We provide transportation services across Greater Noida and nearby areas,
                including Pari Chowk, Knowledge Park, Alpha, Beta, Gamma, Delta, Omega, Jaypee
                Greens, Surajpur, Ecotech and areas around the Yamuna Expressway, subject to
                service availability.
              </p>
            </div>
          </div>
          <div className="route-grid" style={{ marginTop: 26 }}>
            {popularRoutes.map((route) => (
              <div className="item" key={route}>
                <span className="dot" />
                {route}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MULTIPLE TRAVEL OPTIONS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Multiple Travel Options Under One Roof</h2>
              <p>
                Grab Your Cab brings multiple transportation options together under one
                platform, making it easier to arrange different travel requirements through a
                single transportation partner. We provide taxi and cab services, self-drive
                cars, car rentals, Tempo Travellers, Force Urbana, luxury cars and luxury buses
                across Greater Noida, Noida Extension and nearby areas.
              </p>
              <p>
                Whether you need a local taxi, airport transfer, one-way cab, self-drive car,
                luxury vehicle, group transportation or corporate event travel, you can enquire
                about a suitable vehicle based on your journey, passenger count and travel
                requirements.
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
            <p>You can get a cab or rental vehicle with these simple steps:</p>
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
            Share your pickup location, destination, travel date, vehicle requirement and rental
            or travel duration to enquire about suitable available options.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Taxi in Greater Noida?</h2>
              <p>Choose your vehicle, confirm your booking and get ready for pickup.</p>
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

      {/* ---------- WEDDING CAR & PREMIUM VEHICLE OPTIONS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Weddings &amp; Special Occasions</span>
            <h2>Wedding Car &amp; Premium Vehicle Options</h2>
            <p>
              Make your special day memorable with wedding car rental services in Greater Noida,
              Noida Extension and Yamuna Expressway. Customers can enquire about:
            </p>
          </div>
          <div className="check-grid">
            {weddingCars.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                Premium vehicle availability should be reconfirmed at the time of booking for
                weddings, VIP guests, executive travel and special events.
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
              <h2>Book a Taxi or Rental Vehicle in Greater Noida with Grab Your Cab</h2>
              <p>
                Whether you need a local taxi, airport transfer, self-drive car, Tempo Traveller,
                Force Urbania, luxury car or luxury bus, Grab Your Cab makes travel easy with its
                varied options to fit the bill. Share your pickup location, destination, travel
                date, vehicle requirement and rental or travel duration to enquire about suitable
                available options, then book and relax while we take you to your destination.
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
      <section className="sec grey">
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
      <section className="sec">
        <div className="container">
          <div className="garage-head">
            <h2>Our Taxi Service Office</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              <a
                className="maps-link"
                href="https://www.google.com/maps/place/Grab+Your+Cab/@28.6070559,77.4321837,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef1fd62163fd:0x48be6f8138d907b0!8m2!3d28.6070559!4d77.4321837!16s%2Fg%2F11tnh9nfql!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps ↗
              </a>
              <iframe
                title="Grab Your Cab taxi service office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7573328683106!2d77.4321837!3d28.607055900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef1fd62163fd%3A0x48be6f8138d907b0!2sGrab%20Your%20Cab!5e0!3m2!1sen!2sin!4v1790071528245!5m2!1sen!2sin"
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
                  <p>first floor, Galaxy Diamond Plaza, FB-133, Noida-Greater Noida Link Rd, Haibatpur, Sector 4, Greater Noida, Uttar Pradesh 201318</p>
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