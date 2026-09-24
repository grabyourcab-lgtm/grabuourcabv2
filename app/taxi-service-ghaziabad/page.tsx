import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Taxi Service in Ghaziabad | Cab Service & Self Drive Car Rental",
  description:
    "Book taxi service in Ghaziabad with reliable cab service and self drive car rental options. Local, airport and outstation cabs available for convenient travel.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — taxi-service-ghaziabad page styles
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

const bookingSteps = [
  {
    title: "Choose Your Car",
    text: "Check our inventory and rent a car that suits your travel needs from the economic type or sedan or SUV or luxury one.",
  },
  {
    title: "Choose Dates and Location",
    text: "Choose your rental dates and location.",
  },
  {
    title: "Complete Verification",
    text: "After authentication, your car is delivered to your doorstep—go wherever you want whenever you want to drive. Once you lock the deal, your car will be delivered to your doorstep.",
  },
  {
    title: "Drive Away",
    text: "Once confirmed, your car is delivered to your doorstep — ready for you to drive whenever and wherever you want.",
  },
];

const faqs = [
  {
    q: "What is included in the self-drive car rental amount?",
    a: "The rental amount generally includes the vehicle for the booked rental period. Fuel charges, tolls, state tax, parking fees, traffic fines, if any, may be additional as per the rental terms.",
  },
  {
    q: "How can I book a taxi service in Ghaziabad?",
    a: "You can contact Grab Your Cab with your pickup location, destination, travel date, time, and vehicle requirements to check available taxi options and booking details.",
  },
  {
    q: "Can I rent a self-drive car with a learner's driving license?",
    a: "No. Only a valid permanent driving licence is generally required to rent a self-drive car. However, in some cases for local travel a person with learning driving license can take car on guarantee of any known driving license holder who will sitting next to him during journey on front seat as per traffic rules of India. Please check with car rental company about the policy.",
  },
  {
    q: "Does Grab Your Cab provide cab service in Ghaziabad?",
    a: "Yes. Grab Your Cab provides cab services in Ghaziabad for local travel, airport transfers, one-way journeys, outstation travel, business travel, and other transportation requirements, subject to availability.",
  },
  {
    q: "Can I rent a self-drive car in Ghaziabad?",
    a: "Yes. Grab Your Cab provides self-drive car rental options in Ghaziabad. Vehicle availability, rental duration, eligibility, and applicable rental terms depend on your booking requirements.",
  },
  {
    q: "Can I get a car on rent in Ghaziabad for outstation travel?",
    a: "Yes. You can enquire about self-drive or chauffeur-driven car rental options for outstation travel from Ghaziabad, subject to vehicle availability and applicable rental terms.",
  },
  {
    q: "Do you provide Tempo Traveller on rent in Ghaziabad?",
    a: "Yes. Tempo Traveller rental options are available for group travel, family trips, weddings, corporate outings, events, and outstation journeys, subject to availability.",
  },
  {
    q: "Can I rent a luxury car in Ghaziabad?",
    a: "Yes. Grab Your Cab provides luxury car rental options for weddings, corporate events, business travel, special occasions, and other premium travel requirements, subject to availability.",
  },
  {
    q: "Is it possible to rent a car for one day in Ghaziabad?",
    a: "Yes, our rent a car in Ghaziabad packages include daily weekly and monthly plans rent a car in Ghaziabad even for one day.",
  },
  {
    q: "Can I rent a self drive car on Monthly basis or?",
    a: "Yes, Grab your Cab offers Monthly self drive car rental or Monthly car rental subscription from varieties of vehicle from all segment. One can choose a Hatch back, Sedan, Mini SUV, SUV & Luxury Car rental on a good discount.",
  },
  {
    q: "Do I need to pay security for self drive cars?",
    a: "Yes, customers need to pay some small amount as a security which is refundable and delivery of Car.",
  },
  {
    q: "In what conditions security may be deducted?",
    a: "Security can be adjusted if there is some damage, challan or fast tag or fuel balance is low compared to the status when it was given.",
  },
  {
    q: "Do I need a driver to rent a car in self drive?",
    a: "No, Our self drive car rental in Ghaziabad is focused on those clients who want to drive the car on their own without any chauffeur Service.",
  },
  {
    q: "What is the age limit for hiring a self drive car?",
    a: "Rules in many countries require that the renter is at least 21 years of age, and has a valid driving licence for both holders of International Driving Permit and Domestic License.",
  },
  {
    q: "Is there insurance in the price of the rent?",
    a: "Yes, Everybare's self drive cars are standardly covered with insurance as a part of the rental package insurance, hire a car with us for a safer drive today.",
  },
  {
    q: "Can I have the car delivered to my home in Ghaziabad?",
    a: "Absolutely! We offer delivery and collection from your home anywhere in Ghaziabad, so there's no need to come to a rental office.",
  },
  {
    q: "Do you have luxury cars for self-drive rental?",
    a: "Yes, Our self drive luxury car hire service features luxury vehicles from the world's best brands, including premium sedans and SUVs for special occasions, events and luxury travel needs.",
  },
  {
    q: "Do you provide corporate travel management in Ghaziabad?",
    a: "Yes. Grab Your Cab provides corporate travel solutions for employee transportation, airport transfers, business meetings, executive travel, events, and other corporate requirements.",
  },
  {
    q: "Can I book a self-drive car with an Armed Bodyguard / PSO?",
    a: "Yes, specialised self-drive car rental arrangements with an Armed Bodyguard / PSO may be available for eligible requirements, subject to availability and applicable legal and security requirements.",
  },
  {
    q: "Do you provide woman-only taxi service in Ghaziabad?",
    a: "Yes, woman-only taxi arrangements may be available subject to availability. Advance booking is recommended to confirm the required arrangement.",
  },
  {
    q: "What is wedding management transport service?",
    a: "",
  },
  {
    q: "Can I travel with my pet in your taxi?",
    a: "Yes, Grab Your Cab provides pet-friendly taxi arrangements in Ghaziabad, subject to the applicable vehicle and travel arrangements. Advance booking is recommended.",
  },
  {
    q: "Do you provide airport taxi service from Ghaziabad?",
    a: "Yes. You can book an airport taxi from Ghaziabad to Noida International Airport (Jewar Airport) and other airport destinations, subject to availability.",
  },
  {
    q: "Can I book a one-way cab from Ghaziabad?",
    a: "Yes. Grab Your Cab provides one-way cab services from Ghaziabad to various destinations. One-way fares are based on the applicable one-side journey.",
  },
  {
    q: "Do you provide outstation cabs from Ghaziabad?",
    a: "Yes. Outstation cab services are available from Ghaziabad for one-way and round-trip journeys, subject to destination, vehicle availability, and booking requirements.",
  },
];

export default function TaxiServiceGhaziabadPage() {
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
                <b>Taxi Service in Ghaziabad</b>
              </div>
              <h1>Taxi Service in Ghaziabad | Cab Service &amp; Self Drive Car Rental</h1>
              <p className="lead">
                Are you searching for a reliable taxi service in Ghaziabad, cab service, or
                self-drive car rental? Grab Your Cab offers a wide range of travel and
                transportation services in Ghaziabad for local travel, airport transfers,
                outstation journeys, corporate travel, family trips, events, and special travel
                requirements. Whether you need a chauffeur-driven taxi, a cab for one-way travel,
                a self-drive car, or a Tempo Traveller or a luxury bus for group transportation,
                you can opt a service according to all your travel needs.
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
                <span>Ghaziabad</span>
                <span>Noida</span>
                <span>Delhi</span>
                <span>Greater Noida</span>
                <span>Jewar Airport</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TaxiSearch />

      {/* ---------- TAXI / CAB SERVICE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Taxi Service in Ghaziabad</h2>
              <p>
                Grab Your Cab offers taxi services in Ghaziabad for local travel, airport pickup
                &amp; drop, business tour, outstation trip, family tour, railway station
                transfers or corporate events. You can book a taxi for point-to-point travel,
                one-way outstation trips, round trips, or other travel requirements.
              </p>
              <p>
                Whether you are travelling within Ghaziabad or in Noida, Delhi, Greater Noida,
                Noida International Airport (Jewar Airport), or outstation to any nearby
                destinations, you can choose a taxi according to your travel requirements.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Cab Service in Ghaziabad</h2>
              <p>
                Looking for a cab service in Ghaziabad? Grab Your Cab offers local, airport,
                one-way, and outstation cab services for individuals, families, business
                travellers, and groups.
              </p>
              <p>
                Our cab service can be used for daily travel, airport pickup and drop, railway
                station transfers, business meetings, family journeys, events, and intercity
                travel. Advance booking is recommended for planned journeys and specific vehicle
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE / CAR ON RENT ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Ghaziabad</h2>
              <p>
                Grab Your Cab also provide self drive car rental in Ghaziabad for customers who
                love to drive themselves. Self-drive cars can be suitable for local travel,
                business trips, family journeys, weekend travel, and outstation trips specially
                those wants privacy and extra space.
              </p>
              <p>
                If you prefer the flexibility of having your own vehicle during your trip without
                depending on a driver, you can choose a self-drive car a Hatchback, Sedan, Mini
                SUV, SUV &amp; Luxury cars according to your travel requirements, rental duration,
                and vehicle availability.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Car on Rent in Ghaziabad</h2>
              <p>
                Looking for a car on rent in Ghaziabad? Grab Your Cab provides wide range of
                travel options depending on whether you need a self-drive car or a
                chauffeur-driven vehicle under one roof.
              </p>
              <p>
                You can choose a rental solution for local travel, airport transportation,
                business travel, family trips, outstation journeys, events, or other personal or
                professional requirements. We have all segment cars on rent but availability may
                vary depending on your travel dates and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEMPO TRAVELLER / LUXURY CAR / LUXURY BUS ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Tempo Traveller on Rent in Ghaziabad</h2>
              <p>
                Planning a personal or official group tour from Ghaziabad? Grab Your Cab offers
                Tempo Traveller on rent in Ghaziabad for family trips, group tours, weddings,
                corporate outings, events, and outstation travel.
              </p>
              <p>
                A Tempo Traveller can be a convenient option when multiple passengers want to
                travel together in one vehicle. We have all seating capacity travellers, 9 seater
                Tempo Traveller, 12 Seater Maharaja Traveller, 16 Seater Maharaja Traveller, 20
                Seater Tempo Traveller &amp; 26 Seater Tempo Traveller with push back seats and
                centralised AC with Audio visual sound arrangements. Grab your Cab also offer
                varieties of customized luxury Force Urbania Tempo Travellers on rent in
                Ghaziabad. Advance booking is recommended for group travel and specific vehicle
                requirements.
              </p>
            </div>

            <div className="seo-block">
              <h2>Luxury Car on Rent in Ghaziabad</h2>
              <p>
                Grab your Cab offers almost all type of luxury car rental in Ghaziabad for
                weddings, corporate events, special occasions, business meetings, VIP guests, and
                premium travel requirements. We have varieties of premium brands like Kia, MG,
                Toyota, Audi, BMW, Mercedes, Jaguar, Range Rover, Defender, Hummer, Rolls Royce
                etc. for all your special occasion. If anyone is looking for Vintage wedding
                cars, one can book in advance.
              </p>
              <p>
                Choose a luxury car according to your occasion, travel requirements, and vehicle
                availability. Advance booking is recommended for events and planned travel.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Luxury Bus on Rent in Ghaziabad</h2>
              <p>
                Grab Your Cab provides luxury bus rental in Ghaziabad or Volvo Bus for larger
                groups travelling together. Luxury buses are most suitable for corporate events,
                weddings, conferences, group tours, functions, and other organised travel
                requirements. We have normal, semi luxury, Volvo &amp; Mercedes Bus, Sleeper Bus
                and Ultra luxury for foreign delegations most suitable for Corporate events or
                Government big events. Grab your Cab has dedicated event transport management
                team who have good experience of handling such big events.
              </p>
              <p>
                Group transportation can be planned according to the number of passengers,
                destination, travel duration, and vehicle availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CORPORATE / PSO / SELF DRIVE LUXURY ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Corporate Travel Management in Ghaziabad</h2>
              <p>
                Grab Your Cab provides corporate travel management services in Ghaziabad for
                businesses and organisations which requires reliable transportation for
                employees, executives, clients, guests, meetings, events, and airport transfers.
              </p>
              <p>
                Corporate travel solutions can include local transportation, employee pickup and
                drop, airport transfers, outstation travel, executive cars, group transportation,
                and event travel arrangements. Specific requirement can be discussed and we
                provide all type of Monthly Luxury car rental for Sr. Top Management, Tempo
                Travellers, Buses or car rental for day to day employees pickup and drop in
                advance to plan suitable transportation.
              </p>
            </div>

            <div className="seo-block">
              <h2>Self Drive Car Rental with Bodyguard / PSO</h2>
              <p>
                For clients with specialised travel and security requirements, Grab Your Cab
                offers self-drive car rental with Armed Bodyguard / PSO (Personal Security
                Officer), subject to availability and applicable legal and security requirements.
                In addition to this we also give bouncers for corporate events with proper SUVs
                or luxury cars for shooting and celebrities
              </p>
              <p>
                This service can be suitable for celebrities, social media influencers, event
                management companies, business executives, VIP guests, and other clients
                requiring independent mobility along with professional security support.
              </p>
              <p>
                Advance booking is recommended so that travel, vehicle, and security requirements
                can be discussed in advance.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Self Drive Luxury Car rental in Ghaziabad</h2>
              <p>
                Planning something special a wedding, corporate event, or a memorable weekend
                drive? With our self drive car rental services in Ghaziabad, you can drive top
                end cars which provide you with comfort, style and functionality. Rent a luxury
                sedan, a convertible or an SUV and complement your ride to fit the occasion, all
                while completely in control behind the wheel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW TO RESERVE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <h2>How to Reserve a Self Drive Car In Ghaziabad</h2>
            <p>You can make a reservation for your car within minutes :</p>
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
        </div>
      </section>

      {/* ---------- WOMAN ONLY / PET FRIENDLY ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Woman Only Taxi Service in Ghaziabad</h2>
              <p>
                Grab Your Cab offers woman-only taxi service in Ghaziabad for customers who
                prefer a specialised taxi arrangement for women passengers, to ensure safety.
              </p>
              <p>
                The service can be suitable for local travel, airport transfers, business travel,
                appointments, and other outstation journeys. We ensure all vehicles are GPS
                enabled with emergency SOS button and our dedicated staff personally track the
                vehicle. Advance booking is recommended to confirm availability and travel
                requirements.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Pet Friendly Taxi Service in Ghaziabad</h2>
              <p>
                Now a days pet lovers are increasingly day by day and so is the requirement of
                pet friendly taxi as not all taxi or local operators allow them to travel. These
                pets are an important part of the family, and travelling without them can be
                difficult. Grab Your Cab provides pet-friendly taxi service in Ghaziabad for
                customers who need to travel with their pets, subject to the applicable travel
                arrangements.
              </p>
              <p>
                Whether you need a local taxi, airport transfer, or other travel service
                including one way drop with your pet care professional. Advance booking is
                recommended to ensure a suitable vehicle arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AIRPORT / ONE WAY / OUTSTATION / LOCAL ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Airport Taxi &amp; Cab Service from Ghaziabad</h2>
              <p>
                Grab Your Cab provides airport taxi and cab services from Ghaziabad for
                convenient travel to and from major airports. This includes transportation
                between Ghaziabad and Noida International Airport (Jewar Airport), as well as
                other airport travel requirements.
              </p>
              <p>
                You can book an airport taxi for pickup or drop-off, including one-way and
                planned airport journeys. Advance booking is recommended, especially for
                early-morning flights, late-night arrivals, and scheduled travel.
              </p>
            </div>

            <div className="seo-block">
              <h2>One Way Cab from Ghaziabad</h2>
              <p>
                Are you planning one-way travel from Ghaziabad? Grab Your Cab provides one-way
                cab services for customers travelling to destinations such as Haridwar,
                Rishikesh, Massourie, Mathura, Vrindavan, Agra, Jaipur, Chandigarh, Nainital,
                Baba Neem Karoli, Khatushyam Baba, Garh Mukteshwar etc.
              </p>
              <p>
                Why pay for a return journey when you are travelling only one way? Our one-way
                cab service is based on the applicable one-side journey, helping make one-way
                travel more economical for customers.
              </p>
            </div>

            <div className="seo-block">
              <h2>Outstation Taxi &amp; Cab Service from Ghaziabad</h2>
              <p>
                Planning an outstation trip from Ghaziabad? Grab Your Cab provides outstation
                taxi and cab services for family tour, business trips, holidays, events, and
                intercity journey.
              </p>
              <p>
                Grab your cab offer verities of taxi service in Ghaziabad which includes 5 and 7
                seaters. Customers can easily get cabs like Swift Dezire, Hyundai Aura, Tata
                Nexon, Maruti Brezza, Honda City, Toyota Corolla Altis, Maruti Ertiga, Toyota
                Rumion, Kia Carrens, Innova Crysta, Innova Hycross, Mahindra Scoprio, XUV 700
                &amp; Toyota Fortuner etc. You can choose one-way or round-trip travel depending
                on your requirements. Outstation travel can also be planned with self-drive car
                rental options, subject to vehicle availability and rental terms.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Local Taxi Service in Ghaziabad</h2>
              <p>
                Grab Your Cab provides local taxi services for point-to-point journeys, Airport
                transfer, shopping, appointments, railway station travel, business meetings,
                events, and other local requirements.
              </p>
              <p>
                Whether you need a short local trip or a planned full-day travel arrangement, you
                can discuss your requirements and choose a suitable transportation option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AREAS WE SERVE / WHY CHOOSE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Areas We Serve in Ghaziabad</h2>
              <p>
                Grab Your Cab provides taxi, cab, self-drive car rental, and other transportation
                services across Ghaziabad and nearby areas. We cover nearby areas such as
                Indirapuram, Vaishali, Vasundhara, Kaushambi, Sahibabad, Raj Nagar, Raj Nagar
                Extension, Crossings Republik, Aditya World city, Wave city, Loni, and Modinagar,
                subject to service availability.
              </p>
              <p>
                We also provide travel between Ghaziabad and nearby NCR destinations including
                Noida, Greater Noida, Noida Extension, Delhi, Faridabad, and Gurugram, along with
                airport and outstation travel to other destinations.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Why Choose Grab Your Cab in Ghaziabad?</h2>
              <p>
                Grab Your Cab brings multiple travel and mobility solutions together under one
                platform. Instead of arranging different providers for different travel
                requirements, customers can explore taxi, cab, self-drive car rental, luxury
                vehicles, group transportation, corporate travel, and specialised travel services
                through one service provider.
              </p>
              <p>
                Whether you are an individual traveller, family, corporate client, event
                organiser, celebrity, influencer, or business professional, you can choose a
                transportation solution based on your journey and requirements.
              </p>
              <p>
                Our services are designed to provide flexibility for local travel, airport
                transfers, one-way journeys, outstation trips, corporate transportation, group
                travel, and specialised travel requirements across Ghaziabad and beyond.
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
              <h2>Book Taxi, Cab or Self Drive Car Rental in Ghaziabad</h2>
              <p>
                Looking for a taxi service, cab service, self-drive car rental, or car on rent in
                Ghaziabad? Contact Grab Your Cab with your travel requirements to check available
                vehicles, rental options, and booking details.
              </p>
              <p>
                Whether you need a local taxi, airport cab, one-way journey, outstation vehicle,
                self-drive car, luxury car, Tempo Traveller, luxury bus, or specialised travel
                arrangement, you can choose a service according to your requirements and travel
                plans.
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
            <h2>Our Taxi Service Office</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              <a
                className="maps-link"
                href="https://www.google.com/maps/place/%F0%9D%90%86%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%9B+%F0%9D%90%98%F0%9D%90%A8%F0%9D%90%AE%F0%9D%90%AB+%F0%9D%90%82%F0%9D%90%9A%F0%9D%90%9B+-+%F0%9D%90%93%F0%9D%90%9A%F0%9D%90%B1%F0%9D%90%A2+%26+%F0%9D%90%82%F0%9D%90%9A%F0%9D%90%AB+%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%9A%F0%9D%90%A5+%F0%9D%90%92%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%AF%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%9E+%F0%9D%90%A2%F0%9D%90%A7+%F0%9D%90%86%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%B3%F0%9D%90%A2%F0%9D%90%9A%F0%9D%90%9B%F0%9D%90%9A%F0%9D%90%9D,+1,+Jc4J%2BJm+Ghaziabad+Delhi,+Ghaziabad,+Uttar+Pradesh+201016/data=!4m2!3m1!1s0x390cee51a1056b87:0xbdbbad9c274da0c9!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjM3LjUYACCIJyrHASwxMDA4Mzc1MjgsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODA1NzYsMTAwODExOTU5LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDgzNTcwNCwxMDA4MjUwMjEsMTAwODIwMjM3LDEwMDgyMjQ5NCwxMDA4Mjc5NzVCAklO&skid=12147b67-7ee0-4294-a289-81318988757c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps ↗
              </a>
              <iframe
                title="Grab Your Cab taxi service office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7735900371795!2d77.43171099999999!3d28.606568300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee51a1056b87%3A0xbdbbad9c274da0c9!2z8J2QhvCdkKvwnZCa8J2QmyDwnZCY8J2QqPCdkK7wnZCrIPCdkILwnZCa8J2QmyAtIPCdkJPwnZCa8J2QsfCdkKIgJiDwnZCC8J2QmvCdkKsg8J2QkfCdkJ7wnZCn8J2QrfCdkJrwnZClIPCdkJLwnZCe8J2Qq_CdkK_wnZCi8J2QnPCdkJ4g8J2QovCdkKcg8J2QhvCdkKHwnZCa8J2Qs_CdkKLwnZCa8J2Qm_CdkJrwnZCd!5e0!3m2!1sen!2sin!4v1790074001963!5m2!1sen!2sin"
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
                  <p>1, Jc4J+Jm Ghaziabad Delhi, Ghaziabad, Uttar Pradesh 201016</p>
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