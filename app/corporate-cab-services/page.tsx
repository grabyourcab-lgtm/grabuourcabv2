import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Corporate Cab Services & Corporate Car Rental in Delhi NCR | Grab Your Cab",
  description:
    "Corporate cab services, corporate taxi services, corporate car rental, employee transportation, airport transfers, executive travel, self drive cars, tempo travellers and buses across Delhi NCR and major cities in India.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — corporate-cab-services page styles
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

/* vehicle type grid (fills the "cars available" section) */
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

/* checklist grid (fills the "included / excluded" section) */
.check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 24px}
.check-grid .item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:12px 14px}
.check-grid .item .dot{width:8px;height:8px;border-radius:50%;background:var(--red);margin-top:6px;flex:none}
.check-grid .item p{color:var(--text);font-size:14px;margin:0}

/* list block (2-column bullet list) */
.list-block{display:grid;grid-template-columns:repeat(2,1fr);gap:10px 30px;margin:0 0 12px;padding:0;list-style:none}
.list-block li{position:relative;padding-left:22px;color:var(--text);font-size:14.5px;line-height:1.8}
.list-block li::before{content:"";position:absolute;left:0;top:9px;width:8px;height:8px;border-radius:50%;background:var(--red)}

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
  .list-block{grid-template-columns:1fr}
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
    title: "Corporate Cab Services",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-lightning-lap-volkswagen-golf-gti-mu-105-1675446169.jpg?crop=0.629xw:0.630xh;0.121xw,0.199xh",
    text: "Grab your Cab focus and provide customized corporate cab service for businesses looking for reliable employee transportation, office commute solutions, shift transportation and official travel requirements. Whether you need transportation for a few employees or an entire workforce, we can help businesses manage daily travel requirements efficiently.",
  },
  {
    title: "Corporate Taxi Services",
    image: "https://cdn-s3.autocarindia.com/Mercedes/cla-electric/Mercedes-Benz_CLA_EV_Front_Quarter_Tracking.jpg?w=640&q=75&fm=auto",
    text: "Grab Your Cab offers corporate taxi services for business meetings, client visits, executive travel, airport transfers and official transportation requirements and market visit for sales force. Companies can book taxis for employees, visiting delegates, clients, consultants and senior management personnel. We provide taxi service",
  },
  {
    title: "Corporate Car Rental",
    image: "https://www.spinny.com/blog/wp-content/uploads/2025/11/New-Toyota-7-Seater-SUV.jpg",
    text: "Looking for a corporate car rental company in Delhi NCR? Grab Your Cab provides flexible corporate car rental solutions for business tour, rural project sites, market visits, executive transportation and long-term Monthly corporate taxis. Whether you need a vehicle for a day, a week, a month or an ongoing assignment, we can assist with suitable transportation options.",
  },
  {
    title: "Corporate Cars for Executives & Business Leaders",
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls-rocyce-cullinan-top_10.jpg?itok=w_HPkyxC",
    text: "Senior management, directors, CXOs, international delegates and VIP guests often require premium transportation. Grab Your Cab offers executive and luxury vehicle options including Mercedes, BMW, Audi, Toyota Vellfire, Fortuner and other premium vehicles for business meetings, conferences, airport transfers and corporate events, subject to availability. The most important advantage of Grab your cab as they provide highly experienced, proper dressed, well behaved, highly educated English speaking drivers to co-ordinate specially with VIPs and foreign delegates.",
  },
];

const bookingSteps = [
  { title: "Choose a Car", text: "Select the car category or model according to your need and trip." },
  { title: "Enter Travel Details", text: "Fill in the Pickup date/time, the duration of the rental, and the pickup location." },
  { title: "Complete Verification", text: "Submit the required driving licence and identity documents." },
  { title: "Confirm the Booking", text: "Check a vehicle availability, rental rates, km allowance and Terms & conditions." },
  { title: "Collect the Car", text: "Finalize the handover and check the car before you begin your trip." },
];

const comparisonRows = [
  { feature: "Who drives?", self: "Customer", cab: "Professional driver" },
  { feature: "Schedule control", self: "High", cab: "Depends on booking" },
  { feature: "Privacy", self: "More private", cab: "Driver present" },
  { feature: "Road-trip flexibility", self: "High", cab: "Depends on itinerary" },
  { feature: "Driver included", self: "No", cab: "Yes" },
  { feature: "Best suited for", self: "Independent travel", cab: "Convenient point-to-point travel" },
];

const whyChoose = [
  {
    title: "Corporate cab and taxi services",
    text: "Corporate cab and taxi services",
  },
  {
    title: "Corporate car rental solutions",
    text: "Corporate car rental solutions",
  },
  {
    title: "Employee pickup and drop services",
    text: "Employee pickup and drop services",
  },
  {
    title: "Airport transfer services",
    text: "Airport transfer services",
  },
  {
    title: "Self-drive car rental for business travel",
    text: "Self-drive car rental for business travel",
  },
  {
    title: "Executive and luxury vehicle options",
    text: "Executive and luxury vehicle options",
  },
  {
    title: "Tempo travellers and luxury buses",
    text: "Tempo travellers and luxury buses",
  },
  {
    title: "Pan India travel support",
    text: "Pan India travel support",
  },
  {
    title: "Single point of contact for multiple transportation requirements",
    text: "Single point of contact for multiple transportation requirements",
  },
  {
    title: "Flexible solutions for businesses of all sizes",
    text: "Flexible solutions for businesses of all sizes",
  },
];

const partnerServices = [
  "Corporate Cab Services",
  "Corporate Taxi Services",
  "Corporate Car Rental",
  "Employee Transportation",
  "Airport Transfers",
  "Executive Travel",
  "Self Drive Car Rental",
  "Luxury Car Rental",
  "Tempo Traveller Rental",
  "Luxury Bus Rental",
  "Event Transportation",
  "Pan India Travel Support",
];

const industries = [
  "IT & Software Companies",
  "Startups",
  "MNCs",
  "BPO & KPO Companies",
  "Manufacturing Units",
  "Construction Companies",
  "Educational Institutions",
  "Hospitals & Healthcare Organizations",
  "Event Management Companies",
  "Media & Production Houses",
  "Consulting Firms",
  "Corporate Offices",
];

const faqs = [
  {
    q: "What are corporate cab services?",
    a: "Corporate cab services are transportation solutions designed for employee travel, office commute, airport transfers, business meetings, client visits and official travel requirements.",
  },
  {
    q: "Do you provide corporate taxi services in Delhi NCR?",
    a: "Yes. Grab Your Cab provides corporate taxi services for employees, executives, clients, consultants and business travelers across Delhi NCR.",
  },
  {
    q: "What is corporate car rental?",
    a: "Corporate car rental allows businesses to hire vehicles for employee transportation, executive travel, airport transfers, project assignments, conferences and official travel requirements.",
  },
  {
    q: "Do you provide employee pickup and drop services?",
    a: "Yes. We provide employee pickup and drop services for office commute, shift transportation, corporate travel and staff transportation requirements.",
  },
  {
    q: "Do you provide transportation for women employees?",
    a: "Yes. Grab Your Cab provides transportation solutions for women employees with safety-focused features such as verified drivers, GPS trip tracking, driver and vehicle details shared before pickup and emergency assistance support.",
  },
  {
    q: "Do you provide airport transfer services for corporate employees?",
    a: "Yes. We provide airport transfers for employees, executives, corporate guests and business travelers to and from Delhi Airport and Noida International Airport (Jewar Airport).",
  },
  {
    q: "Can companies hire self-drive cars for business travel?",
    a: "Yes. Companies and business travelers can enquire about self-drive car rental options for business trips, project assignments, temporary deployments and executive travel requirements.",
  },
  {
    q: "Do you provide luxury cars for corporate executives?",
    a: "Yes. Companies can enquire about Mercedes, BMW, Audi, Toyota Vellfire, Fortuner and other luxury vehicles for executive travel, VIP guests, airport transfers and business meetings, subject to availability.",
  },
  {
    q: "Do you provide corporate transportation for conferences and events?",
    a: "Yes. We provide taxis, luxury cars, tempo travellers and luxury buses for conferences, exhibitions, corporate events, annual meetings and business gatherings.",
  },
  {
    q: "Do you provide Tempo Traveller on rent for corporate travel?",
    a: "Yes. Companies can enquire about Tempo Traveller rental for employee transportation, team outings, conferences, training programs, business events and group travel requirements.",
  },
  {
    q: "Do you provide luxury bus rental for corporate events?",
    a: "Yes. Businesses can enquire about luxury bus rental and luxury Volvo bus rental for employee transportation, conferences, corporate events, annual meetings and group travel requirements.",
  },
  {
    q: "Can companies book transportation for VIP guests and international delegates?",
    a: "Yes. We provide executive transportation solutions for senior management, VIP guests, international delegates, visiting clients and corporate leaders.",
  },
  {
    q: "Do you provide transportation for movie shoots, production teams and media companies?",
    a: "Yes. Production houses, media companies, event organizers and advertising agencies can enquire about taxis, self-drive cars, luxury vehicles, tempo travellers and buses for project requirements.",
  },
  {
    q: "Can companies use a single transportation partner across multiple cities in India?",
    a: "Yes. Grab Your Cab can assist businesses with transportation requirements across major cities in India through a single point of contact, helping reduce the need to coordinate with multiple local vendors.",
  },
  {
    q: "Can you arrange transportation when employees travel to other cities?",
    a: "Yes. Subject to service availability, transportation can be coordinated for airport transfers, local travel and business travel requirements in major cities across India.",
  },
  {
    q: "Which industries do you serve?",
    a: "We provide transportation solutions for IT companies, startups, MNCs, BPOs, manufacturing units, hospitals, educational institutions, event management companies, media houses and other businesses.",
  },
  {
    q: "Why do companies choose Grab Your Cab?",
    a: "Businesses choose Grab Your Cab for corporate cab services, corporate taxi services, self-drive car rental, luxury car rental, employee transportation, airport transfers, tempo travellers, luxury buses and Pan India travel support through a single transportation partner.",
  },
  {
    q: "Do you provide monthly corporate transportation contracts?",
    a: "Yes. Companies can enquire about customized transportation solutions for ongoing employee transportation, executive travel and business mobility requirements.",
  },
  {
    q: "How can my company book corporate transportation services?",
    a: "Businesses can contact Grab Your Cab with their travel requirements, employee count, travel locations and service preferences to receive suitable transportation solutions based on their needs.",
  },
];

export default function CorporateCabServicesPage() {
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
            <b>Corporate Cab Services</b>
          </div>
          <span className="eyebrow">Delhi NCR · Corporate Transportation</span>
          <h1>Corporate Cab Services &amp; Corporate Car Rental in Delhi NCR</h1>
          <p className="lead">
            The need of Businesses today is much more than just a taxi provider.
            Business entityt need a reliable transportation partner capable of
            managing employee travel, executive transportation, airport transfers,
            corporate events and business mobility requirements. Grab Your Cab
            provides corporate cab services, corporate taxi services and corporate
            car rental solutions for startups, SMEs, MNCs, IT companies,
            manufacturing units, educational institutions, hospitals, event
            companies and business travelers across Delhi NCR and major cities in
            India.
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
            <span>Delhi</span>
            <span>Noida</span>
            <span>Gurugram</span>
            <span>Ghaziabad</span>
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
                Grab Your Cab provides corporate cab services, corporate taxi services and corporate
                car rental solutions for startups, SMEs, MNCs, IT companies, manufacturing units,
                educational institutions, hospitals, event companies and business travelers across
                Delhi NCR and major cities in India.
              </p>
              <p>
                Instead of coordinating with different local vendors in every city, companies can
                rely on Grab Your Cab for employee transportation, airport transfers and business
                travel support across major cities in India through a single point of contact.
              </p>
              <p>
                Managing employee travel across multiple cities often requires dealing with
                different local vendors. Grab Your Cab provide professional corporate car rental
                which simplify travel management by providing a single point of contact for
                transportation requirements across major business destinations in India.
              </p>
              <p>
                For example, if an employee travels from Delhi NCR to Bengaluru, transportation
                can be arranged for the airport transfer in Delhi, airport pickup in Bengaluru and
                local travel requirements during his Bengaluru visit, subject to service
                availability. Similar support can be coordinated across major cities such as
                Mumbai, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata and any other business
                destinations across India.
              </p>
              <p>
                This helps businesses reduce vendor management efforts while providing employees
                with a more consistent travel experience across locations.
              </p>
            </div>

            <div className="seo-block">
              <h2>Corporate Cab Services</h2>
              <p>
                Grab your Cab focus and provide customized corporate cab service for businesses
                looking for reliable employee transportation, office commute solutions, shift
                transportation and official travel requirements. Whether you need transportation
                for a few employees or an entire workforce, we can help businesses manage daily
                travel requirements efficiently.
              </p>
            </div>

            <div className="seo-block">
              <h2>Corporate Taxi Services</h2>
              <p>
                Grab Your Cab offers corporate taxi services for business meetings, client visits,
                executive travel, airport transfers and official transportation requirements and
                market visit for sales force. Companies can book taxis for employees, visiting
                delegates, clients, consultants and senior management personnel. We provide taxi
                service
              </p>
            </div>

            <div className="seo-block">
              <h2>Corporate Car Rental</h2>
              <p>
                Looking for a corporate car rental company in Delhi NCR? Grab Your Cab provides
                flexible corporate car rental solutions for business tour, rural project sites,
                market visits, executive transportation and long-term Monthly corporate taxis.
                Whether you need a vehicle for a day, a week, a month or an ongoing assignment, we
                can assist with suitable transportation options.
              </p>
            </div>

            <div className="seo-block">
              <h2>Corporate Transportation Across Major Cities in India</h2>
              <p>
                Instead of coordinating with different local vendors in every city, companies can
                rely on Grab Your Cab for employee transportation, airport transfers and business
                travel support across major cities in India through a single point of contact.
              </p>
            </div>

            <div className="seo-block">
              <h2>Corporate Cars for Executives &amp; Business Leaders</h2>
              <p>
                Senior management, directors, CXOs, international delegates and VIP guests often
                require premium transportation. Grab Your Cab offers executive and luxury vehicle
                options including Mercedes, BMW, Audi, Toyota Vellfire, Fortuner and other premium
                vehicles for business meetings, conferences, airport transfers and corporate
                events, subject to availability. The most important advantage of Grab your cab as
                they provide highly experienced, proper dressed, well behaved, highly educated
                English speaking drivers to co-ordinate specially with VIPs and foreign delegates.
              </p>
            </div>

            <div className="seo-block">
              <h2>Employee Transportation Services</h2>
              <p>
                The productivity of employees is mainly dependant on timely reporting therefore
                Reliable employee transportation plays an important role for workforce management.
                We provide corporate taxi for employee pickup and drop services, office commute
                solutions, shift transportation, women employee transportation and staff travel
                support for businesses across Delhi NCR.
              </p>
            </div>

            <div className="seo-block">
              <h2>Safe Women Employee Transportation Services</h2>
              <p>
                The most important challenge for any corporate is to ensure safety of women
                employees. Grab Your Cab provides safe car rental services for women employees
                with verified drivers, GPS-enabled trip tracking, driver and vehicle details
                shared before pickup, emergency SOS/panic button support and real-time trip
                monitoring. Suitable for office commute, shift transportation, airport transfers
                and business travel, our services help companies enhance employee safety,
                confidence and compliance.
              </p>
            </div>

            <div className="seo-block">
              <h2>Corporate Airport Transfer Services</h2>
              <p>
                We provide airport transfer services for business travellers, employees, visiting
                delegates and corporate guests. Transportation can be arranged to and from Delhi
                Airport and Noida International Airport (Jewar Airport), helping companies ensure
                a smooth travel experience for employees and clients.
              </p>
            </div>

            <div className="seo-block">
              <h2>Self Drive Cars for Corporate Travel</h2>
              <p>
                Grab Your Cab is among the few transportation providers offering both corporate
                taxi services and self-drive car rental solutions. Self-drive cars can be useful
                for visiting consultants, project teams, business travelers, senior management and
                employees who prefer independent travel during business assignments. Grab your Cab
                gives special corporate discount for car rental on Monthly subscription.
              </p>
            </div>

            <div className="seo-block">
              <h2>Tempo Traveller on Rent for Corporate Travel &amp; Events</h2>
              <p>
                Grab Your Cab offers Tempo Traveller on rent for corporate travel, employee
                transportation, office outings, business tours, conferences, training programs,
                team-building activities and business events across Delhi NCR and nearby
                locations. Whether you need group transportation for employees, corporate guests
                or company events, our Tempo Traveller rental solutions offer a convenient and
                cost-effective travel option for businesses of all sizes.
              </p>
            </div>

            <div className="seo-block">
              <h2>Luxury Bus Rental for Corporate Travel, Events &amp; Group Tours</h2>
              <p>
                Looking for a luxury bus on rent for corporate travel, employee transportation or
                group tours? Grab Your Cab provides luxury bus rental solutions for corporate
                events, conferences, annual meetings, destination weddings, educational tours and
                large group travel requirements. Customers can also enquire about luxury Volvo
                buses for outstation trips, company outings, pilgrimage tours and group tours
                across Delhi NCR and major destinations in India
              </p>
            </div>

            <div className="seo-block">
              <h2>Pan India Corporate Transportation Solutions</h2>
              <p>
                Managing employee travel across multiple cities often requires dealing with
                different local vendors. Grab Your Cab provide professional corporate car rental
                which simplify travel management by providing a single point of contact for
                transportation requirements across major business destinations in India.
              </p>
              <p>
                For example, if an employee travels from Delhi NCR to Bengaluru, transportation
                can be arranged for the airport transfer in Delhi, airport pickup in Bengaluru and
                local travel requirements during his Bengaluru visit, subject to service
                availability. Similar support can be coordinated across major cities such as
                Mumbai, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata and any other business
                destinations across India.
              </p>
              <p>
                This helps businesses reduce vendor management efforts while providing employees
                with a more consistent travel experience across locations.
              </p>
            </div>

            {/* ---------- ONE TRANSPORTATION PARTNER (list block) ---------- */}
            <div className="seo-block">
              <h2>One Transportation Partner for All Corporate Travel Requirements</h2>
              <p>
                One of the key advantages of choosing Grab Your Cab is access to multiple
                transportation solutions under one roof. Companies can enquire about:
              </p>
              <ul className="list-block">
                {partnerServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <p>
                Whether the requirement is for a single airport transfer, daily employee
                transportation, executive mobility, corporate events or multi-city travel
                management, businesses can work with a single transportation partner for diverse
                travel requirements.
              </p>
            </div>

            {/* ---------- INDUSTRIES WE SERVE (list block) ---------- */}
            <div className="seo-block">
              <h2>Industries We Serve</h2>
              <p>We provide transportation solutions for:</p>
              <ul className="list-block">
                {industries.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
              </ul>
            </div>

            <div className="seo-block">
              <h2>Corporate Event Transportation &amp; Mobility Solutions</h2>
              <p>
                From airport pickups and executive transfers to luxury cars, Tempo Travellers,
                Force Urbania, luxury buses and Volvo coaches, Grab Your Cab helps businesses
                manage transportation for dealer meets, annual functions, award ceremonies,
                conferences, training programs, product launches and corporate events. With
                multiple vehicle categories and a single point of contact, companies can
                coordinate employee travel, VIP movement and group transportation more efficiently
                across Delhi NCR and major cities in India.
              </p>
              <p>
                This heading is powerful because it naturally includes: Corporate Events, Dealer
                Meets, Conferences, Airport Transfers, Executive Travel, Tempo Traveller, Force
                Urbania, Luxury Bus, Volvo Bus all in one section while emphasizing your biggest
                strength: the ability to provide multiple fleet categories through a single
                vendor, which is a recurring need in corporate event logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE GRID ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why Grab Your Cab</span>
            <h2>Why Choose Grab Your Cab for Corporate Transportation?</h2>
            <p>
              Businesses choose Grab Your Cab for corporate cab services, corporate taxi services,
              self-drive car rental, luxury car rental, employee transportation, airport
              transfers, tempo travellers, luxury buses and Pan India travel support through a
              single transportation partner.
            </p>
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

      {/* ---------- INDUSTRIES ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Industries We Serve</span>
            <h2>Industries We Serve</h2>
            <p>We provide transportation solutions for:</p>
          </div>
          <ul className="list-block" style={{ maxWidth: 840, margin: "0 auto" }}>
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- BOOK NOW BANNER ---------- */}
      <section className="sec">
        <div className="container">
          <div className="banner">
            <div className="in">
              <h2>One Transportation Partner for All Corporate Travel Requirements</h2>
              <p>
                Whether the requirement is for a single airport transfer, daily employee
                transportation, executive mobility, corporate events or multi-city travel
                management, businesses can work with a single transportation partner for diverse
                travel requirements.
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
      {/* <section className="sec">
        <div className="container">
          <div className="garage-head">
            <h2>Our Corporate Cab Services Office in Delhi</h2>
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
                title="Grab Your Cab corporate cab services office location"
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