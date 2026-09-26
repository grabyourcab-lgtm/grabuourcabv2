import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Car Rental in Goa | Self Drive & Car Hire Services",
  description:
    "Rent a car in Goa for local sightseeing, airport travel and outstation journeys. Choose from suitable vehicle options and enjoy flexible rental arrangements.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — car-rental-in-goa page styles
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

// .sec-head{text-align:center;margin-bottom:34px}
.sec-head{
  display:block !important;
  width:100% !important;
  text-align:center;
  margin-bottom:34px;
}
.sec-head .eyebrow{display:block;color:var(--red);font-weight:600;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
// .sec-head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700;display:inline-block;position:relative;padding-bottom:14px}
.sec-head h2{
  display:block !important;
  width:100% !important;
}
.sec-head h2::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:70px;height:3px;background:var(--red)}
.sec-head p{color:var(--muted);margin:12px auto 0;max-width:64ch;font-size:14.5px}

/* vehicle type grid */
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

/* comparison table */
.cmp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:#fff}
table.cmp-table{width:100%;border-collapse:collapse;font-size:14px;min-width:520px}
table.cmp-table thead th{background:var(--slate);color:#fff;text-align:left;padding:14px 18px;font-family:"Poppins";font-weight:600;font-size:13.5px;text-transform:uppercase;letter-spacing:.03em}
table.cmp-table tbody td{padding:14px 18px;border-top:1px solid var(--line);color:var(--text);vertical-align:top}
table.cmp-table tbody tr:nth-child(even){background:var(--grey)}
table.cmp-table tbody td:first-child{font-weight:700;color:var(--ink);font-family:"Poppins";white-space:nowrap}

/* why choose grid */
.why-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.why-grid .item{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:16px 18px}
.why-grid .item p{color:var(--muted);font-size:13.5px;margin-top:4px;line-height:1.6}

/* service cards (for Car Rental Services Available in Goa) */
// .svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
// .svc-grid{
//   display:grid !important;
//   grid-template-columns:repeat(2,1fr) !important;
//   gap:20px;
//   width:100%;
// }
// .svc-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:24px 22px}
// .svc-card h3{font-size:16.5px;font-weight:700;margin-bottom:10px;color:var(--ink)}
// .svc-card p{color:var(--muted);font-size:14px;line-height:1.7;margin:0}

.svc-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:20px;
  width:100%;
  align-items:start;
}
.svc-card{
  display:block;
  width:100%;
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--r);
  padding:24px 22px;
  box-sizing:border-box;
}
.svc-card h3{
  display:block;
  width:100%;
  font-size:16.5px;
  font-weight:700;
  margin:0 0 10px 0;
  color:var(--ink);
  text-align:left;
}
.svc-card p{
  display:block;
  width:100%;
  color:var(--muted);
  font-size:14px;
  line-height:1.7;
  margin:0;
  text-align:left;
}

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
  .fleet-grid{grid-template-columns:repeat(2,1fr)}
  .steps{grid-template-columns:repeat(2,1fr)}
  .check-grid{grid-template-columns:1fr}
  .why-grid{grid-template-columns:1fr}
  .svc-grid{grid-template-columns:1fr}
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
  .fleet-grid{grid-template-columns:1fr}
  .steps{grid-template-columns:1fr}
  .need-grid{grid-template-columns:1fr}
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  table.cmp-table{font-size:13px}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

const fleetTypes = [
  {
    title: "Hatchbacks",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-lightning-lap-volkswagen-golf-gti-mu-105-1675446169.jpg?crop=0.629xw:0.630xh;0.121xw,0.199xh",
    text: "Suitable for couples, solo travellers, and city driving",
  },
  {
    title: "Sedans",
    image: "https://cdn-s3.autocarindia.com/Mercedes/cla-electric/Mercedes-Benz_CLA_EV_Front_Quarter_Tracking.jpg?w=640&q=75&fm=auto",
    text: "A practical choice for families and comfortable longer journeys",
  },
  {
    title: "SUVs",
    image: "https://www.spinny.com/blog/wp-content/uploads/2025/11/New-Toyota-7-Seater-SUV.jpg",
    text: "Useful for larger groups and travellers carrying more luggage",
  },
  {
    title: "Luxury Cars",
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls-rocyce-cullinan-top_10.jpg?itok=w_HPkyxC",
    text: "Suitable for occasions where a higher-end vehicle is preferred",
  },
];

const bookingSteps = [
  { title: "Choose Your Vehicle", text: "Choose your desired vehicle type." },
  { title: "Enter Dates", text: "Enter the dates of your pickup and dropoff." },
  { title: "Select Location", text: "Choose a location to pick up and drop off." },
  { title: "Select Drive Type", text: "If applicable, select self-drive or chauffeur-drive." },
  { title: "Fill Details", text: "Fill in the document or personal details required." },
  { title: "Check & Book", text: "Check the rental conditions and rates. Book your car in Goa." },
];

const comparisonRows = [
  { feature: "Multiple stops", self: "Ideal", cab: "Less convenient" },
  { feature: "Route changes", self: "Easy", cab: "Depends on driver" },
  { feature: "Sightseeing at leisure", self: "Yes", cab: "Limited" },
  { feature: "Point-to-point trips", self: "Possible", cab: "Best suited" },
  { feature: "Freedom & flexibility", self: "More", cab: "Less" },
  { feature: "Best suited for", self: "Multi-stop sightseeing", cab: "Simple point-to-point trips" },
];

const whyChoose = [
  {
    title: "Wide Variety of Cars",
    text: "Grab Your Cab offers a wide variety of car rental options in Goa to suit every type of trip and budget. From small and easy-to-drive hatchbacks to comfortable sedans, mini SUVs, SUVs, and luxury cars, you can choose the car that best fits your needs.",
  },
  {
    title: "Convenient for Multi-Stop Trips",
    text: "A rental car comes in handy when your trip involves a lot of stops or you're going to places that are a hassle to get to via point-to-point transportation. Grab Your Cab delivers on a simple booking process, practical vehicle selection, as well as easy travel plans.",
  },
  {
    title: "Choose Based on Your Needs",
    text: "Customers choose their car based on their group size, type of journey and rental period. Before making a reservation, it's helpful to know about the vehicle type, rental policy, fuel policy, distance limits, security deposit and any extra charge if applicable.",
  },
  {
    title: "Transparency in Pricing",
    text: "This high level of transparency allows travelers to better budget for their transportation.",
  },
];

const inclusionChecklist = [
  "Vehicle type",
  "Rental policy",
  "Fuel policy",
  "Distance limits",
  "Security deposit",
  "Any extra charge if applicable",
  "Rental duration",
  "Pickup and drop-off location",
  "Transmission type",
  "Mileage limit",
  "Insurance or coverage conditions",
  "Late return rules",
];

const faqs = [
  {
    q: "What is the cost of car rental in Goa?",
    a: "Rental prices vary according to vehicle type, duration, season, mileage, and rental terms. Confirm the current rate and inclusions before booking.",
  },
  {
    q: "Can I rent a car in Goa without a driver?",
    a: "Yes, self-drive rental options may be available for eligible customers, subject to vehicle availability and applicable documentation requirements.",
  },
  {
    q: "What documents are required for self-drive car rental in Goa?",
    a: "A valid driving licence and accepted identification are generally required. Additional requirements may apply depending on the rental terms.",
  },
  {
    q: "Can I rent an automatic car in Goa?",
    a: "Automatic rental cars may be available depending on the fleet and booking date. It is advisable to confirm availability before reserving.",
  },
  {
    q: "Can I rent a car in Goa for one day?",
    a: "Yes, short-duration rentals may be available, subject to the vehicle category, availability, and applicable rental conditions.",
  },
  {
    q: "Can I take a rental car outside Goa?",
    a: "Some rental arrangements permit outstation travel, while others may have geographic restrictions. Confirm permitted travel areas before booking.",
  },
];

export default function CarRentalInGoaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="page-hero"
      style={{
        backgroundImage:"url('/pages_banners/goa.png')",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
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
        <div className="container" style={{
    position: "relative",
    zIndex: 1,
  }}>
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <b>Car Rental in Goa</b>
          </div>
          {/* <span className="eyebrow">Goa · Self Drive &amp; Car Hire Services</span> */}
          <h1>Car Rental in Goa - Self Drive Cars &amp; <br/> Car Hire Services</h1>
          {/* <p className="lead">
            Planning a trip to Goa is made simple once you have easy means of transport to take you between the beaches, markets, heritage sites, hotels and must-see locations. Grab Your Cab offers taxi in Goa for travellers with private transport needs for leisure trip, airport transfer, business travel, weekend trip and outstation travel.
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
            <span>North Goa</span>
            <span>South Goa</span>
            <span>Panaji</span>
            <span>Mopa Airport</span>
            <span>Dabolim Airport</span>
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
                Planning a trip to Goa is made simple once you have easy means of transport to take you between the beaches, markets, heritage sites, hotels and must-see locations. Grab Your Cab offers taxi in Goa for travellers with private transport needs for leisure trip, airport transfer, business travel, weekend trip and outstation travel. You can hire a car according to your needs and convenience and plan your journey around your schedule.
              </p>
              <p>
                If you are planning to hire a car for a day, a couple of days or even for a longer stretch, the right rental can certainly enhance your experience of travelling through North Goa, South Goa, Panaji, and other such places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why Grab Your Cab</span>
            <h2>Why Choose Grab Your Cab for Car Rental in Goa?</h2>
          </div>
          <div className="why-grid">
            {whyChoose.map((item) => (
              <div className="item" key={item.title}>
                <h3 style={{ fontSize: 15.5, fontWeight: 600 }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
     <section className="sec">
  <div className="container">
    <div
      className="sec-head"
      style={{
        display: "block",
        width: "100%",
        textAlign: "center",
        marginBottom: "34px",
      }}
    >
      <span className="eyebrow">Our Services</span>
      <h2 style={{ display: "block", width: "100%" }}>Car Rental Services Available in Goa</h2>
    </div>
    <div
      className="svc-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        width: "100%",
      }}
    >
      <div className="svc-card">
        <h3>Goa car rentals at Airport</h3>
        <p>
          Experience the best of your beach holiday with a Local Car Hire in Goa package from Grab Your Cab. Our self-drive cars are available 24 hours at both Goa Airport (Dabolim) and Mopa Airport, making it easy to pick up your car whenever you arrive. Local rentals are ideal for day visits to beaches, shopping places, restaurants, historical monuments, and much more in and around Goa. The flexibility of having your own car makes it easier to visit several places in a day and explore at your own pace.
        </p>
      </div>
      <div className="svc-card">
        <h3>Self Drive Car Rental Goa</h3>
        <p>
          Featured agents offer self drive car rental in Goa, allowing customers to drive their own rental vehicle. It is especially convenient for tourists who like to explore and go sightseeing independently while arranging their daily schedule on their own.
        </p>
        <p style={{ marginTop: 10 }}>
          Before picking up a self-drive vehicle, customers should meet all the relevant age, driving licence, identification, deposit, and rental agreement requirements.
        </p>
      </div>
      <div className="svc-card">
        <h3>Car Rental with Driver in Goa</h3>
        <p>
          For those who don't want to drive themselves, they might as well rent a car with a driver in Goa. Passengers can sit back and relax while the job is handled by the professional driver.
        </p>
      </div>
      <div className="svc-card">
        <h3>Goa Airport Car Rental</h3>
        <p>
          For the travellers arriving at Manohar International Airport (Mopa) or Goa International Airport (Dabolim) airport transportation can be offered, with our assistance and subject to availability of services. Pre-booking help in coordinating easy pickup at the airport and UK's best holiday.
        </p>
      </div>
      <div className="svc-card">
        <h3>Outstation Car Rental from Goa</h3>
        <p>
          Self drive outstation car rental in Goa is a convenient option for travellers who want the freedom to plan their own journey. You can take a rental car for nearby destinations or longer outstation trips, depending on the rental terms. Choose between a one-way or round trip and enjoy a comfortable journey at your own pace.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* ---------- FLEET / CAR TYPES GRID ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Pick Your Ride</span>
            <h2>Cars Available for Rent in Goa</h2>
            <p>
              Types of Vehicles for Different Trips. Grab Your Cab can provide different vehicle options for singles, couples, families and groups (based on availability).
            </p>
          </div>
          <div className="fleet-grid">
            {fleetTypes.map((car) => (
              <div className="fleet-card" key={car.title}>
                <div className="img-wrap">
                  <img src={car.image} alt={`${car.title} car rental in Goa`} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{car.title}</h3>
                  <p>{car.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted)", fontSize: "14.5px", maxWidth: "840px", marginLeft: "auto", marginRight: "auto" }}>
            Capacity of passengers, amount of luggage, transmission, expected distance to drive, itinerary type when you consider between rental car in Goa.
          </p>
        </div>
      </section>

      {/* ---------- POPULAR PLACES ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Popular Places to Visit in Goa by Rental Car</h2>
              <p>
                A flexible transport option allows you to visit more than one top attraction in the same trip. Popular places to include in a Goa itinerary include Baga Beach, Calangute Beach, Candolim, Anjuna, Vagator, Morjim, Panaji, Fort Aguada, Old Goa, Basilica of Bom Jesus, Colva, Palolem, and other coastal and cultural attractions.
              </p>
              <p>
                Longer drives are also possible with rental cars to places like Dudhsagar Falls, subject to local access conditions and travel restrictions. A rental car is especially handy if you're planning multiple stops or beaches, or if your points of interest in Goa are scattered between North Goa and South Goa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAR RENTAL FOR DIFFERENT TRAVEL NEEDS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Travel Your Way</span>
            <h2>Car Rental for Different Travel Needs</h2>
          </div>
          <div className="need-grid">
            <div className="need-card">
              <h3>For Couples</h3>
              <p>For couples who enjoy stop-and-go living on the beach and want to dine out and sightsee, a compact car will do.</p>
            </div>
            <div className="need-card">
              <h3>For Families</h3>
              <p>Those travelling with kids, in particular, may want a sedan or SUV that offers adequate room for passengers and luggage.</p>
            </div>
            <div className="need-card">
              <h3>For Groups</h3>
              <p>With a SUV or larger vehicle, groups can stay together instead of separating into more cars.</p>
            </div>
            <div className="need-card">
              <h3>For Business trip</h3>
              <p>Traveling in goa by rental car can make it easier to get from one hotel to another, and to meetings and business need.</p>
            </div>
            <div className="need-card">
              <h3>For Long-Term Travel</h3>
              <p>The stay customers looking to stay in Goa for a longer duration can get in touch for long term rentals and rental terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CHEAPEST & BEST SELF DRIVE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Cheapest Car Rental in Goa</h2>
              <p>
                Grab Your Cab offers affordable self-drive car rental options starting from ₹1,200 per day. You can choose from a range of cars based on your budget, trip duration, and travel needs.
              </p>
              <p>
                Whether you are planning a short beach trip, sightseeing, or an outstation journey, renting a car gives you the freedom to travel at your own pace. Book an affordable self-drive car in Goa and enjoy a comfortable trip without spending too much on transportation.
              </p>
            </div>
            <div className="seo-block">
              <h2>Best self drive car rental in Goa</h2>
              <p>
                Grab Your Cab offers a wide range of self drive cars in Goa for different travel needs and budgets. From small hatchbacks and sedans to SUVs and luxury cars, you can choose the right vehicle for your trip.
              </p>
              <p>
                Our self-drive cars are available for local sightseeing, beach visits, airport pickup, weekend trips, and outstation travel. With easy booking and flexible rental options, you can explore Goa comfortably and enjoy the freedom to travel at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TAXI & CAB SERVICE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi Service in Goa</h2>
              <p>
                Hiring a reliable taxi service in Goa makes travelling around the state much easier. Grab Your Cab provides taxi services for airport transfers, local sightseeing, hotel transfers, beach visits, and outstation trips.
              </p>
              <p>
                You can book a taxi for a single ride or keep a cab for the day, depending on your travel plans. Our taxi service is suitable for couples, families, business travellers, and groups who want a comfortable way to explore Goa without worrying about driving or parking.
              </p>
              <p>
                We cover popular places across North and South Goa, including beaches, markets, restaurants, and tourist attractions. Airport taxi services are also available from Goa Airport (Dabolim) and Mopa Airport to hotels and other destinations.
              </p>
              <p>
                Whether you need a Goa airport taxi, local cab, sightseeing taxi, or outstation cab, you can choose a vehicle according to your group size and travel requirements. Book your taxi with Grab Your Cab and enjoy a convenient way to travel around Goa.
              </p>
            </div>
            <div className="seo-block">
              <h2>Cab Service in Goa</h2>
              <p>
                Grab Your Cab provides a convenient and reliable cab service in Goa for local travel, airport transfers, sightseeing, and outstation trips. Whether you are travelling alone, with family, or with a group, you can choose a cab that suits your travel needs.
              </p>
              <p>
                Book a cab for Goa airport pickup and drop, local sightseeing, hotel transfers, beach visits, or day trips. Our service helps you travel around Goa comfortably without the hassle of driving or finding parking.
              </p>
              <p>
                From North Goa to South Goa, you can book a cab for short rides as well as full-day travel. Choose Grab Your Cab for a simple and comfortable way to explore Goa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER / BUS ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Tempo Traveller on Rent in Goa</h2>
              <p>
                Luxury Tempo traveller in Goa is a comfortable option for families, friends, corporate groups, and travellers planning long-distance journeys.
              </p>
              <p>
                With comfortable push-back seats, spacious interiors, good legroom, and modern amenities, a luxury Tempo Traveller makes group travel more relaxing. You can hire one for Goa sightseeing, airport transfers, outstation trips, family holidays, weddings, and multi-day tours. Grab your cab also offers varieties of Force Urbania tempo traveller in goa seeing the rapid demand of customers.
              </p>
              <p>
                Travel together in one spacious vehicle and enjoy your Goa trip without the hassle of managing multiple cars.
              </p>
            </div>
            <div className="seo-block">
              <h2>Luxury Bus in Goa &amp; Volvo Bus in Goa</h2>
              <p>
                Looking for a luxury bus in Goa for a family trip, corporate event, wedding, or large group tour? Grab Your Cab offers comfortable bus options for groups who want to travel together with plenty of space and modern amenities.
              </p>
              <p>
                A Volvo bus in Goa is a good choice for long-distance journeys, corporate travel, pilgrimages, and multi-day tours. With comfortable seating, spacious interiors, and a smooth travel experience, you can enjoy the journey without the hassle of arranging multiple vehicles.
              </p>
              <p>
                Choose the right bus based on your group size, destination, and travel requirements, and make your group journey more comfortable and convenient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Car Rental Pricing in Goa</h2>
              <p>
                Several economic factors play an important role in deciding the rate for car rental in Goa. A few important factors affecting the car rental price include car category, rental duration, transmission, season, pickup location, mileage limit, and keyless or driver keys options.
              </p>
              <p>
                Customers should verify all full rental terms and what is included in the rental before booking.
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
            <h2>How to Book a Rental Car in Goa</h2>
            <p>Booking a rental car can be kept simple:</p>
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
            It is recommended to pre book when travelling during peak seasons as availability of vehicles may fluctuate.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Explore Goa on Your Own Terms?</h2>
              <p>Choose a car, confirm your booking and get verified in minutes.</p>
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

      {/* ---------- DOCUMENTS REQUIRED ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Documents Required for Car booking in Goa</h2>
              <p>
                As a rule, to rent a car for self-driving you need a valid driving license and an identification document issued by government. Age requirement, security deposit and other documentation may apply and may be different per type of vehicle and rental company.
              </p>
              <p>
                For chauffeur-driven hire, the paperwork requirements may be different. Always confirm the current requirements prior to making your reservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY RENT A CAR VS TAXI ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Compare Your Options</span>
            <h2>Why Rent a Car Instead of Using Regular Taxis?</h2>
            <p>
              A rent a car can be ideal for tourists who wish to make multiple stops, alter the day's route, or visit destinations at leisure. Regular taxis are good for simple point-to-point trips but if you're at all interested in a little more freedom and flexibility with sight seeing on multiple stops, consider renting a car in Goa.
            </p>
          </div>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Rental Car</th>
                  <th>Regular Taxi</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.self}</td>
                    <td>{row.cab}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "14.5px" }}>
            The more suitable option depends on your travel schedule, group size, driving preference, and overall budget.
          </p>
        </div>
      </section>

      {/* ---------- TIPS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tips for Renting a Car in Goa</h2>
              <p>
                Inspect the car and agree on the general state before taking over the car make a proper video to avoid any issue and sign the rental agreement. You should also get information about the fuel policy, mileage, rules for returning the car late, deposit, insurance or coverage conditions and with only in certain travel destinations.
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
              <h2>Book Car Rental in Goa with Grab Your Cab</h2>
              <p>
                Grab Your Cab is the best choice when you need car rental in Goa for local sightseeing, airport transfers, business travel, family vacations, or any other journey. Customers can make a selection based on the types of vehicle and duration of rental that best meet their needs.
              </p>
              <p>
                For all those travelers who love driving on their own, the self drive car rental in Goa is the best option to check the places at their own wanted speed. If you don't want to drive yourself, you can opt for a chauffeur driven service (where available).
              </p>
              <p>Book with Grab Your Cab your favorite rental car and make your travel to Goa more convenient.</p>
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
            <h2>Frequently Asked Questions</h2>
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
            <h2>Our Car Rental Office in Goa</h2>
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
                title="Grab Your Cab car rental office location"
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