import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Taxi Service in Meerut | Book Local & Outstation Cabs",
  description:
    "Book a taxi service in Meerut for local rides, airport transfers, railway station pickups and outstation trips. Choose a suitable cab for your journey.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — taxi-service-in-meerut page styles
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

/* route pills */
.route-pills{display:flex;flex-wrap:wrap;gap:10px}
.route-pills span{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid var(--line);
  border-radius:30px;padding:8px 16px;font-size:13.5px;font-weight:600;color:var(--slate)}
.route-pills span::before{content:"→";color:var(--red);font-weight:700}

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

const popularRoutes = [
  "Meerut to Delhi",
  "Meerut to Noida",
  "Meerut to Gurgaon",
  "Meerut to Ghaziabad",
  "Meerut to Agra",
  "Meerut to Hardwar",
  "Meerut to Rishikesh",
  "Meerut to Jaipur",
  "Meerut to Chandigarh",
  "Meerut to Kedarnath and Badrinath",
  "Meerut to Mathura and Vrindawan",
  "Meerut to Neem Karoli Baba",
  "Meerut to Khatushyam Baba",
  "Meerut to Shakambari devi temple",
  "Meerut to Nainital",
  "Meerut to Massourie and Dehradun",
];

const bookingSteps = [
  { title: "Enter Pickup", text: "Enter your Meerut pick-up point." },
  { title: "Add Destination", text: "Add your destination and travel information." },
  { title: "Choose Date & Time", text: "Choose a date and your preferred collection time." },
  { title: "Pick a Vehicle", text: "Pick a vehicle that suits your needs." },
  { title: "Verify & Book", text: "Verify the trip details and book." },
  { title: "Reach Pickup Point", text: "Be at the designated pickup point." },
];

const travelNeeds = [
  "Business meetings and corporate travel",
  "Family trips and social functions",
  "Airport and railway station transfers",
  "Local sight-seeing",
  "Wedding and event transportation",
  "Medical essential travel",
  "Outstation road trips",
  "One way cab for oustation",
  "Special event transport service",
  "Round trip travel",
  "Self Drive car rental",
  "Self Drive car rental with PSO/Bodyguards",
];

const fareFactors = [
  "Pickup and destination",
  "How far to travel in total",
  "Vehicle type",
  "One-way or Round-trip Travel",
  "Duration of tour",
  "Toll and parking fees",
  "Waiting or extra stops time",
  "Specific travel needs",
];

const faqs = [
  {
    q: "How can I book a taxi in Meerut?",
    a: "You can book a taxi by providing your pickup location, destination, travel date, time, passenger details, and preferred vehicle type.",
  },
  {
    q: "What is the cost of a taxi in Meerut?",
    a: "Taxi fares depend on factors such as distance, vehicle type, trip category, route, tolls, parking, and waiting requirements.",
  },
  {
    q: "Do you provide outstation taxi service from Meerut?",
    a: "Yes, outstation taxi bookings can be arranged for eligible routes from Meerut, subject to vehicle and route availability.",
  },
  {
    q: "Can I book a one-way taxi from Meerut?",
    a: "Yes, one-way taxi travel can be suitable when you need transportation to another city without requiring the same vehicle for the return journey.",
  },
  {
    q: "Do you provide airport taxi service from Meerut?",
    a: "Airport transfers can be arranged 24 hours from Meerut to Indira Gandhi International Airport, New Delhi and Noida International Airport, Jewar with experienced and safe drivers dedicated only on these routes.",
  },
  {
    q: "Can I book a self-drive car on rent in Meerut?",
    a: "Yes Grab Your Cab provides various choices of Self drive car rental with all types of hatch backs, sedan, SUVs and luxury cars with both Automatic and Manual transmissions.",
  },
  {
    q: "Are taxis available for round trips from Meerut?",
    a: "Round-trip taxi bookings can be arranged for planned visits, family journeys, business travel, functions, and other return journeys.",
  },
  {
    q: "Can I book a tempo Traveller in Meerut?",
    a: "Yes, customers can book luxury tempo traveller, Maharaja Tempo Traveller, Force Urbania Tempo Traveller very easily through website, whatsapp or 24 hours dedicated customer care service.",
  },
  {
    q: "Which type of taxi is suitable for a family trip?",
    a: "A sedan may suit smaller families, while an SUV or larger vehicle can be more appropriate",
  },
];

export default function TaxiServiceInMeerutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="page-hero"
      style={{
        backgroundImage:"url('/pages_banners/meerut.png')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
         backgroundPosition: "center",
    position: "relative",
    width: "100%",
      }}
      >
        {/* Optional dark overlay for text readability */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0, 0, 0, 0.45)",
      zIndex: 0,
      pointerEvents: "none",
    }}
  ></div>
        <div className="container"   style={{
    position: "relative",
    zIndex: 1,
  }}>
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <b>Taxi Service in Meerut</b>
          </div>
          {/* <span className="eyebrow">Meerut · Local, Airport &amp; Outstation</span> */}
          <h1>Taxi Service in Meerut for Comfortable Local &amp; Outstation Rides</h1>
          {/* <p className="lead">
            Grab Your Cab is now at your service to provide comfortable and reliable taxi service in Meerut for local travel, airport transfer, railway station pick up, business travel, family travel or outstation travel. Fares are available for Point to Point Rides, One Way cab and round Trips for the convenience of the riders.
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
            <span>Meerut Cantt</span>
            <span>Modipuram</span>
            <span>Shastri Nagar</span>
            <span>Pallavpuram</span>
            <span>Partapur</span>
          </div> */}
        </div>
      </section>

      <TaxiSearch />

      {/* ---------- INTRO ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <p>
                Grab Your Cab is now at your service to provide comfortable and reliable taxi service in Meerut for local travel, airport transfer, railway station pick up, business travel, family travel or outstation travel. Fares are available for Point to Point Rides, One Way cab and round Trips for the convenience of the riders. Customers can get various Cab options in 5 seater and 7 seater taxi with highly experienced and verified drivers. One can get 24 hours Airport taxi service in Meerut for Indira Gandhi International Airport or Noida International Airport in Jewar.
              </p>
            </div>
            <div className="seo-block">
              <h2>Reliable Taxi Service in Meerut for Every Journey</h2>
              <p>
                When you're looking for a straight ride and don't want to deal with routes, parking, or connections with public transport, a taxi is a practical option. Grab Your Cab provides the best taxi in Meerut for daily travel within the city or for outstation journeys.
              </p>
              <p>
                Whether customers are planning for outstation trip, one way cab, local or Airport cab they have facility to call 24 hours customer care to book their trip which makes it the most reliable taxi service in Meerut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Our Services</span>
            <h2>Taxi Services We Offer in Meerut</h2>
          </div>
          <div className="svc-grid">
            <div className="svc-card">
              <h3>Local Taxi Service in Meerut</h3>
              <p>
                Meerut taxi can also be hired for one point to point travel in the city with varieties of 5 and 7 seater car rental options for marriage, shopping, business visit family outing and much more. Pickup and dropout can also be made as per the journey details at the time of booking
              </p>
            </div>
            <div className="svc-card">
              <h3>Outstation Taxi Service from Meerut</h3>
              <p>
                For travelling outstation, enjoy convenience and comfort with outstation cabs from Meerut to several cities at Delhi-NCR, Uttar Pradesh, Uttarakhand, Haryana, Rajasthan, Himachal, Punjab and other nearby locations. One-way cab and round-trip rates can be taken into account for the travel plans.
              </p>
            </div>
            <div className="svc-card">
              <h3>Airport Taxi Service From Meerut</h3>
              <p>
                Customers do not want to take any risk when it comes to Airport transfer, so they need highly trustworthy Airport Taxi service. Grab your cab provides all types of Airport Cab service in Meerut for Indira Gandhi International Airport, New Delhi and Noida International Airport, Jewar with experienced drivers.
              </p>
            </div>
            <div className="svc-card">
              <h3>One-Way Taxi from Meerut</h3>
              <p>
                One-way cab in Meerut is perfect if you have to travel to another city but no need to hire the cab for return journey. Route, vehicle class and travel needs are considered. Client need to pay as per one way distance including toll and tax and no need to pay as return journey distance.
              </p>
            </div>
            <div className="svc-card">
              <h3>Round-Trip Taxi Service</h3>
              <p>
                Round-trip reservations are ideal for scheduled visits, business meetings, family occasions, tourism, and so forth when you have the intention of coming back to Meerut after visiting your destination.
              </p>
            </div>
            <div className="svc-card">
              <h3>Luxury car rental in Meerut</h3>
              <p>
                Grab your cab offer a varieties of cars in Meerut for Wedding, Special occasion, Political rally, celebrity event or any special occasion. It includes all luxury brand vehicle, Kia Carnival, Toyota Fortuner, Toyota Vellfire, MG Gloster, Mercedes, Audi, BMW, Jaguar, Ranger Rover, Rolls Royce, Hummer, etc. in addition to Wedding vintage cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- POPULAR ROUTES ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Intercity Travel</span>
            <h2>Popular Taxi Routes from Meerut</h2>
            <p>
              Meerut has convenient and excellent road connectivity with several major cities in North India. Common intercity travel requirements include:
            </p>
          </div>
          <div className="route-pills">
            {popularRoutes.map((route) => (
              <span key={route}>{route}</span>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: "14.5px", maxWidth: "840px", marginLeft: "auto", marginRight: "auto" }}>
            The most suitable taxi option depends on the destination, number of passengers, luggage, travel schedule, and whether the journey is one-way or round trip.
          </p>
        </div>
      </section>

      {/* ---------- SELF DRIVE + TEMPO + PSO ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car rental in meerut</h2>
              <p>
                Self drive car rental is rapidly getting popularity in India and Grab your cab launched self drive cars with providing all varieties of hatch back, Sedan, Mini SUVs, SUVs and luxury cars. Customer has a freedom to choose Automatic or Manual transmission with their choice of fuel like petrol, diesel, CNG and Electric. Some travelers often need a self-drive car with sunroof which they can easily get with varieties of cars.
              </p>
            </div>
            <div className="seo-block">
              <h2>Luxury Tempo Traveller in Meerut</h2>
              <p>
                For all personal, official or pilgrimage tour customers can take luxury tempo traveler, Maharaja Tempo Traveller, Force Urbania Tempo Traveller from Grab your Cab with highly maintained and well verified drivers. It has varieties of Tempo Travellers for all type of group tours and provide 9 seater Tempo Traveller, 12 seater tempo traveller, 15 seater tempo traveller, 18 seater tempo traveller and 26 seater tempo traveller. Customer can also opt luxury Force Urbania in Meerut with push back customized seats and all state of art facilities for group tour.
              </p>
            </div>
            <div className="seo-block">
              <h2>Self Drive Car Rental with PSO or Bodyguard</h2>
              <p>
                Looking for a self drive car rental with PSO or bodyguard? We provide clean, well-maintained cars for people who want privacy, comfort, and extra security during their travel.
              </p>
              <p>
                You can rent a self drive car with a PSO or choose a professional bodyguard for added protection. This service is suitable for business owners, executives, VIPs, public figures, and anyone who needs secure travel.
              </p>
              <p>
                Our car rental with bodyguard service can be used for local travel, business meetings, events, airport transfers, and outstation trips. You get the freedom of a self-drive car along with professional security support when you need it.
              </p>
              <p>
                Book a self drive car with security and travel with greater comfort and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CHOOSE THE RIGHT TAXI ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Choose the Right Taxi for Your Trip</h2>
              <h3>5 Seater Cab</h3>
              <p>
                5 seaters are mostly idle for single person or small family specially in short tours, one can look for Swift Dezire, Hyundai Aura, Tata Nexon, Maruti Brezza, Hyundai Creta, Kia Sonet, MG Hector, Honda city, Toyota corolla Altis etc as per their choice and confort.
              </p>
              <h3>7 Seater Cab</h3>
              <p>
                7 seater taxis are often a good option for families or group more than 3 persons and cutomers have a freedom to choose economic taxi in CNG fuel like Maruti Eritga and Tata Rumion. If customer does not want to take CNG taxi, and want a medium affordable taxi option, can go for kia carrens. For client who do not want to compromise with comfort Toyota Innova crysta, Toyota Innova hycross, Mahindra Scorpion Classic, Mahindra Scoprion N, Mahindra XUV 700, MG Hector Plus, Tata Safari, and Toyota Fortuner are good and famous taxi options, especially for long road trips.
              </p>
              <h3>Large Group Tours</h3>
              <p>
                Sometimes when customer has more people and they all want to go in group they can easily hire good varieties of tempo travellers in Meerut or also different seating options of Newly launched Force Urbania Tempo Travellers. For even larger school, college, corporate and wedding large group tours Grab your Cab offers various options of Luxury Bus service or Volvo Bus service in Meerut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Choose Grab Your Cab for Taxi Service in Meerut?</h2>
              <p>
                Grab your Cab gives the most varieties when it comes to your travel need. Other than traditional taxi like Swift Dezire, Hyundai Aura, Maruti Ertiga or Innova Cryta customers have the liberty of choosing cars like, Maruti Baleno, Tata Nexon, Hyundai creta, Honda City, Toyota Corolla Altis, Maruti Brezza, MG Hector Plus, Kia Carrens, Kia Seltos, Mahindra Scorpion Classic, Mahindra Scorpion N, Mahindra XUV 700, Mahindra Thar Roxx Toyota Innova Hycross, Toyota Fortuner, etc as per their need and comfort. Customer can also book any Taxi where he need a Car rental with panaromic sunroof.
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
            <h2>How to Book a Taxi in Meerut</h2>
            <p>Booking a taxi can be done through a one-step process:</p>
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
            For scheduled trips or even daily commuting, this is the easiest way to book cabs in Meerut.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Meerut Taxi?</h2>
              <p>Choose a cab, confirm your booking and get verified in minutes.</p>
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

      {/* ---------- DIFFERENT TRAVEL NEEDS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Travel Your Way</span>
            <h2>Taxi Service in Meerut for Different Travel Needs</h2>
            <p>A local cab can be used for a variety of transportation needs, such as:</p>
          </div>
          <div className="need-grid">
            {travelNeeds.map((need) => (
              <div className="need-card" key={need}>
                <p style={{ margin: 0, color: "var(--slate)", fontWeight: 600, fontSize: "14.5px" }}>{need}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: "14.5px", maxWidth: "840px", marginLeft: "auto", marginRight: "auto" }}>
            The right service depends on the number of passengers, destination, luggage requirements, and duration of the journey.
          </p>
        </div>
      </section>

      {/* ---------- AREAS WE SERVE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Areas We Serve in and Around Meerut</h2>
              <p>
                Cabs demands can come from anywhere in Meerut in the homes, offices and transit areas of the city. Depending on service availability, pickups may be arranged from locations such as Meerut Cantt, Modipuram, Shastri Nagar, Garh Road, Delhi Road, Rohta Road, Pallavpuram, Kanker Khera, Begum Bridge, Saket, Partapur.Ganga Nagar, Mawana, Delhi Road etc.
              </p>
              <p>
                Grab your cab also offer taxi service for nearby districts like Hapur, Shamli, Muzaffrnagar etc for various travel need.
              </p>
            </div>
            <div className="seo-block">
              <h2>Taxi Service from Meerut to Nearby Cities</h2>
              <p>
                Meerut is well positioned for road journeys towards Delhi-NCR and other cities of neighbouring states. Grab Your Cab can also be taken for rides from Meerut to other places like Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon, Muzaffarnagar, Haridwar, Dehradun, Agra, Haridwar, Rishikesh, Nainital, Neem Karoli Baba, Jaipur etc. So when you're heading out on a longer trip, choosing your vehicle according to the passenger count and luggage can help Make your journey more comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FARE FACTORS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Transparent Pricing</span>
            <h2>Meerut Taxi Fare – What Affects the Cost?</h2>
            <p>The Meerut taxi service charges vary based on the route you travel. Key fare components might be:</p>
          </div>
          <div className="check-grid">
            {fareFactors.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: "14.5px", maxWidth: "840px", marginLeft: "auto", marginRight: "auto" }}>
            Instead of a standard fare, clients should share their exact route and travel details to get the valid quotation.
          </p>
        </div>
      </section>

      {/* ---------- BOOK / ADVANCE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Book a Taxi in Meerut for Local or Outstation Travel</h2>
              <p>
                Grab Your Cab lets you book Meerut taxis for all your local needs and outstation travel at ease. Whether it is a short city ride, to the airport for your flight, or an outstation trip, pick the needed taxi to travel based on your journey.
              </p>
              <p>
                Enter Your point of pickup, destination, date of travel, number of passengers, and type of vehicle to find Dus taxi and the best suitable Taxi Fare from Meerut.
              </p>
            </div>
            <div className="seo-block">
              <h2>Why Book Your Meerut Taxi in Advance?</h2>
              <p>
                With advance booking, you get to plan your trip as per your preferred date and pick up time. Particularly for airport and railway transfers, to avoid last time hazard.
              </p>
              <p>
                In addition, planning ahead means you can send us details about the number of passengers, luggage size, destination, and vehicle category you want before the ride.
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
              <h2>Book Your Taxi Service in Meerut with Grab Your Cab</h2>
              <p>
                Whether you want to hire a taxi in Meerut for local sightseeing or from Meerut to another city, Grab Your Cab caters to all your travelling needs by different varieties of 5 seater, 7 seater, Tempo Travelers and Luxury Bus.
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
            <h2>Frequently Asked Questions About Taxi Service in Meerut</h2>
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
            <h2>Our Taxi Service Office in Meerut</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              <a
                className="maps-link"
                href="https://www.google.com/maps/place/First+floor,+Grab+Your+Cab+Self+Drive+Cars+and+Taxi+Service+in+Meerut,+Geetanjali+Tower,+C-489,+C-Pocket,+Radha+Garden,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001/data=!4m2!3m1!1s0x390c7b49831b1519:0xbf8024aaeda0d7c8!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjM3LjUYACDXggMqxwEsMTAwODM3NTI4LDk0MjY3NzI3LDk0MjkyMTk1LDk0Mjk5NTMyLDEwMDc5NjQ5OCwxMDA3OTc3NjEsMTAwNzk2NTM1LDk0MjgwNTc2LDEwMDgxMTk1OSw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MzU3MDQsMTAwODI1MDIxLDEwMDgyMDIzNywxMDA4MjI0OTQsMTAwODI3OTc1QgJJTg%3D%3D&skid=efbac9d0-56e0-4fe2-8dbc-908774916c3e"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps ↗
              </a>
              <iframe
                title="Grab Your Cab taxi service office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.456712527372!2d77.754262!3d29.003466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b49831b1519%3A0xbf8024aaeda0d7c8!2sGrab%20Your%20Cab%20Self%20Drive%20Cars%20and%20Taxi%20Service%20in%20Meerut!5e0!3m2!1sen!2sin!4v1790071776541!5m2!1sen!2sin"
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
                  <p>First floor, Geetanjali Tower, C-489, C-Pocket, Radha Garden, Ganga Nagar, Meerut, Uttar Pradesh 250001</p>
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
                    <a href="tel:+917522817555">+91-9108617014</a>
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