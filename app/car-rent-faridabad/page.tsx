import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Car on Rent in Faridabad | Self Drive Car Rental",
  description:
    "Book a car on rent in Faridabad for local, airport and outstation travel. Choose rental cars, self-drive options and suitable vehicles with Grab Your Cab.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — car-on-rent-in-faridabad page styles
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

/* vehicle type grid */
.fleet-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.fleet-card{display:block;background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;text-align:left}
.fleet-card .img-wrap{width:100%;aspect-ratio:4/3;background:var(--grey);overflow:hidden}
.fleet-card .img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
.fleet-card .body{padding:20px 22px}
.fleet-card h3{display:block;width:100%;font-size:16px;font-weight:600;margin:0 0 8px 0;text-align:left}
.fleet-card p{display:block;width:100%;color:var(--muted);font-size:13.5px;line-height:1.6;margin:0;text-align:left}

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
  .fleet-grid{grid-template-columns:repeat(2,1fr)}
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
    title: "Hatchback Cars",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-lightning-lap-volkswagen-golf-gti-mu-105-1675446169.jpg?crop=0.629xw:0.630xh;0.121xw,0.199xh",
    text: "Hatchbacks are ideal for singles or small families who are looking for a basic vehicle for daily commuting and shorter trips.",
  },
  {
    title: "Sedan Cars",
    image: "https://cdn-s3.autocarindia.com/Mercedes/cla-electric/Mercedes-Benz_CLA_EV_Front_Quarter_Tracking.jpg?w=640&q=75&fm=auto",
    text: "Adding that a sedan has more space in the cabin and boot, it is perfect for business trips, airport transfers, family trips, and long distance travel.",
  },
  {
    title: "SUV Cars",
    image: "https://www.spinny.com/blog/wp-content/uploads/2025/11/New-Toyota-7-Seater-SUV.jpg",
    text: "SUVs make sense for families and groups with greater space and luggage requirements , especially for extended journeys on the road.",
  },
  {
    title: "Luxury Cars",
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls-rocyce-cullinan-top_10.jpg?itok=w_HPkyxC",
    text: "For premium travel experience for business meetings, wedding, celebrations or special events, you can also enquire for luxury car on rent in Faridabad, based on availability of vehicle and terms of the rent.",
  },
];

const bookingSteps = [
  { title: "Select Your Travel Date", text: "Tell us when you'll be needing the car and how long you'll be needing it for." },
  { title: "Select Your Vehicle", text: "Choose a Hatchback, Sedan, SUV, Luxury or any other category available as per your needs." },
  { title: "Details of Travel", text: "Input the location, date of travel, destination, how long you want to rent, the number of passengers, and your rental preferences." },
  { title: "Agree to the Terms", text: "You should confirm the availability, rental fees, deposit, fuel policy, distance restrictions and any other relevant terms." },
  { title: "Complete the Booking", text: "When everything looks good, book your car following the procedures on grabyourcab.com" },
];

const occasions = [
  "Business meetings and corporate travel",
  "Family outings and weekend trips",
  "Weddings and Parties",
  "Airport transfers",
  "local sightseeing",
  "Road trip",
  "Hotel transfers",
  "Outstation journeys",
  "Special events and celebrations",
];

const faqs = [
  {
    q: "How much does it cost to rent a car in Faridabad?",
    a: "Rental charges depend on the vehicle, duration, distance, rental type, destination, and applicable terms. Normally the most economic car rental starts from Rs. 65/hour, though the price may vary on other car options which you need to confirm while booking.",
  },
  {
    q: "Can I rent a car in Faridabad for one day?",
    a: "Yes, short-duration rentals may be available depending on the vehicle category and booking conditions. Although booking a car just for one day can be difficult to book well in advance.",
  },
  {
    q: "Is self-drive car rental available in Faridabad?",
    a: "Self-drive options is available 24 hours for eligible customers, subject to vehicle availability, documentation, and rental terms.",
  },
  {
    q: "Can I rent a car for an outstation trip from Faridabad?",
    a: "Yes, rental cars can be used for eligible outstation journeys. Confirm the route, duration, distance policy, and applicable charges before booking.",
  },
  {
    q: "What documents are required to rent a car?",
    a: "Requirements vary, but self-drive rentals generally require a valid driving license and approved documents along with applicable eligibility requirements.",
  },
  {
    q: "Can I rent an SUV in Faridabad?",
    a: "SUV rental may be available depending on the fleet and booking date. SUVs are suitable for families and groups requiring additional space with all type of transmissions.",
  },
  {
    q: "Can I rent a luxury car in Faridabad?",
    a: "Luxury vehicles may be available for special occasions, corporate travel, weddings, and events, subject to availability and rental conditions. However customers need to go though proper verification of their profile",
  },
  {
    q: "How can I book a rental car in Faridabad?",
    a: "Share your travel date, rental duration, pickup location, destination, preferred vehicle category, and rental requirement, then confirm availability and applicable terms.",
  },
  {
    q: "Can I take Self drive car rental on Monthly basis?",
    a: "Yes anyone can take Monthly car rental in Faridabad with varieties of car options depending one ones need. For corporate monthly car rentals customers get good discounts.",
  },
];

export default function CarOnRentInFaridabadPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="page-hero"
        style={{
          backgroundImage:"url('/pages_banners/faridabad.png')",
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
        <div className="container" style={{
    position: "relative",
    zIndex: 1,
  }}>
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <b>Car on Rent in Faridabad</b>
          </div>
          {/* <span className="eyebrow">Faridabad · Self Drive &amp; Rental Cars</span> */}
          <h1>Car on Rent in Faridabad <br/> Self Drive &amp; Rental Cars</h1>
          {/* <p className="lead">
            Grab Your Cab offers easy car on rent in Faridabad for local travel, outstation visit, Airport transfer from Faridabad to Noida International Airport, Jewar or Indira Gandhi International Airport, New Delhi, One way Cab, Luxury Car rental for Wedding or special occasion, Tempo Travelers for group tour or luxury bus for Corporate or Pilgrimage tours.
          </p> */}
          <div className="hero-ctas">
            <a href="https://wa.me/9175228 17555" className="btn btn-wa">
              Book on WhatsApp
            </a>
            <a href="tel:+917522817555" className="btn btn-ghost">
              Call to Book
            </a>
          </div>
          {/* <div className="loc-pills">
            <span>Faridabad</span>
            <span>Delhi NCR</span>
            <span>Noida Airport</span>
            <span>Delhi Airport</span>
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
                Grab Your Cab offers easy car on rent in Faridabad for local travel, outstation visit, Airport transfer from Faridabad to Noida International Airport, Jewar or Indira Gandhi International Airport, New Delhi, One way Cab, Luxury Car rental for Wedding or special occasion, Tempo Travelers for group tour or luxury bus for Corporate or Pilgrimage tours. Whether you want a vehicle in your city for a few hours, a full day or long outstation trip, or Monthly car renal you can select various rental option based on your travel plans, vehicle requirements, and the location.
              </p>
              <p>
                Renting a car are more important when you want a bit more freedom than public transport or app-based rides can offer. Subject to availability, customers can select from a variety of cars, different transmissions or fuel type and rental need, such as self-drive and car rental or rent a car with driver. The service caters to all individuals, families, business travellers and groups travelling from Faridabad to other cities or vice versa .
              </p>
            </div>

            <div className="seo-block">
              <h2>Car Rental in Faridabad for Local and Outstation Travel</h2>
              <p>
                A car rental in Faridabad is available for both local city travel as well as outstation trip. Local bookings are ideal for the office, shopping, sightseeing, events and day-to-day commuting. Grab your cab offers outstation cab for all types of personal, official and official trip with various vehicles options,may it be 5 seater or 7 seater based on your car preference and comfort.
              </p>
              <p>
                Travelers can also choose point-to-point, one-way and return trips, subject to their travel schedule. Faridabad is well connected to Delhi, Gurgaon, Noida, Greater Noida, Agra, Mathura, Jaipur, Haridwar, Rishikesh, Nainital, Khatushyam Baba and other parts of North India by road.
              </p>
            </div>

            <div className="seo-block">
              <h2>Why Rent a Car in Faridabad?</h2>
              <p>
                Renting a car gives tourists more freedom and flexibility on their trip, which they can enjoy especially while travelling with their family, carrying luggages or making multiple stops.
              </p>
              <h3>Convenient Travel</h3>
              <p>
                Rent a car is very convenient for all type of travel need as it gives you options to choose car as per your need and you can travel freely with your loved ones and colleagues.
              </p>
              <h3>Flexible Rental Duration</h3>
              <p>
                Based on availability and terms of rental, you will be able to reserve cars for short trip, long weekend trip or Monthly Car on rent for local and outstation travel.
              </p>
              <h3>Automatic car on rent</h3>
              <p>
                Enjoy a smooth and comfortable journey with our automatic car rental service in Faridabad. Choose from a varieties of well-maintained automatic cars which are easy to drive and perfect for city trips, business travel, or vacations. Book your rent a car today and enjoy a hassle-free driving experience.
              </p>
              <h3>Petrol, Diesel, CNG and Electric vehicles on rent</h3>
              <p>
                We have cars available in Petrol, Diesel, Electric, and CNG options. You can choose a car based on your travel needs, budget, and fuel preference. Our rental cars are clean, comfortable, and regularly maintained, so you can enjoy a smooth and easy journey.
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
            <h2>Types of Rental Cars Available in Faridabad</h2>
            <p>
              The right vehicle depends on your passenger count, luggage, destination, and travel requirements.
            </p>
          </div>
          <div className="fleet-grid">
            {fleetTypes.map((car) => (
              <div className="fleet-card" key={car.title}>
                <div className="img-wrap">
                  <img src={car.image} alt={`${car.title} car on rent in Faridabad`} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{car.title}</h3>
                  <p>{car.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE + DRIVER + OUTSTATION + AIRPORT ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Faridabad</h2>
              <p>
                Self drive car rental in Faridabad is a convenient option through which eligible customers can hire a vehicle and drive on their own instead of riding with a chauffeur. This setup works well for road trips, personal travel, weekend itineraries and more for those who want to be masters of their own schedule on the road.
              </p>
              <p>
                Prior to making a reservation for a self drive vehicle, the customers must review age, driving licence, identification, security deposit, rental period, usage limitation and other terms and conditions. Rental car types may not be available for all rates.
              </p>
              <p>
                In case you just need a faridabad car on rent without driver then confirm the vehicle category, booking duration, pickup &amp; dropoff arrangements and rental conditions with the company and with us before making the booking.
              </p>
            </div>
            <div className="seo-block">
              <h2>Car Rental with Driver in Faridabad</h2>
              <p>
                For travelers who want to drive, a car with a professional driver offers the possibility of a more comfortable travel experience. This is ideal for airport transfers, business meetings, family get-togethers, sightseeing, weddings and outstation trips.
              </p>
              <p>
                A chauffeur-driven hire also lets you work, chat, or relax on the go, rather than dealing with the hassles of traffic and unknown roads.
              </p>
            </div>
            <div className="seo-block">
              <h2>Car on Rent in Faridabad for Outstation Trips</h2>
              <p>
                Getting a car on hire can be the wise option if you are traveling far from Faridabad. Frequent road-trip destinations from Faridabad include Agra, Mathura, Vrindavan, Jaipur, Haridwar, Noida, Gurgaon and Delhi but it solely depends on the traveling plan of the client.
              </p>
              <p>
                You can ask if the car rental is available for one-way or round trip travel and clarify about the distance you are allowed to cover, the duration, the fees for fuel, tolls, parking, driver, and other fees for outstation booking.
              </p>
            </div>
            <div className="seo-block">
              <h2>Airport Car Rental from Faridabad</h2>
              <p>
                Grab Your Cab services are also available for the Faridabad to Airport distance. You get to enjoy the comfortable and smooth ride in the premium car or taxi from Faridabad to Delhi Airport and Noida Airport.
              </p>
              <p>
                Particularly for those with luggage, families, business travellers and those with early or late flights, as much as airports discourage using public transportation. Entering pickup location, more precise flight schedule, number of passengers and size of luggage ensures finding the perfect vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Any Occasion</span>
            <h2>Car Rental for Different Occasions in Faridabad</h2>
            <p>Car rental is not just for everyday transport. Customers can book a car for:</p>
          </div>
          <div className="need-grid">
            {occasions.map((item) => (
              <div className="need-card" key={item}>
                <p style={{ margin: 0, color: "var(--slate)", fontWeight: 600, fontSize: "14.5px" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Rent a Car in Faridabad</h2>
            <p>Renting one can be done with minimal hassle:</p>
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

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Faridabad Car?</h2>
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

      {/* ---------- CHARGES + DOCUMENTS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Car Rental Charges in Faridabad</h2>
              <p>
                The car rental rates in Faridabad may vary depending on a number of things like vehicle class, rental period, travel distance, whether with or without driver, rental terms, pick up and drop off location/ destination, etc. Grab Your cab car rental starts with Rs.1500/day like hatchbacks and the price of car rental for sedan, SUV, luxury cars are different.
              </p>
              <p>
                While taking car on rent customers are also advised to check that fuel, fast tag, tyre pressure etc. which need to be borne by customers. It is better to confirm the entire rent and fare structure before booking to avoid any later misunderstandings.
              </p>
            </div>
            <div className="seo-block">
              <h2>Documents and Requirements for Car Rental</h2>
              <p>
                The requirements differ based on the rental category. Self-drive customers are typically required to possess a valid driving licence and/or hold valid identification and comply with the eligibility requirements. A security deposit may also be required depending on the vehicle and rental terms.
              </p>
              <p>
                Always check the specific terms of your booking prior to picking up the vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Choose Grab Your Cab for Car Rental in Faridabad?</h2>
              <p>
                Grab Your Cab is all about simplifying the vehicle booking process by guiding users to the best car rental option based on their travel details. Customers can choose for several car options right from Hatch back, Sedan, Mini SUVs, SUVs and luxury cars. They also have choice to take automatic or manual whatever they are comfortable with in addition to different fuel types petrol, diesel, CNG and electric cars.
              </p>
              <p>
                Customer can expect full transparency for car rent, maintenance, delivery, fuel status, fast tag balance and security refund.
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
              <h2>Book a Car on Rent in Faridabad</h2>
              <p>
                From local transportation and airport transfer to business travel and an outstation road trip with the family, car rental in Faridabad offers a convenient solution for any trip. Select the appropriate vehicle category and rental option for your needs, fill in your travel information, and check for availability and applicable terms and conditions with Grab Your Cab before making a booking.
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
            <h2>Frequently Asked Questions About Car Rental in Faridabad</h2>
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
            <h2>Our Car Rental Office in Faridabad</h2>
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