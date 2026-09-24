import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Car on Rent in Delhi NCR | Self Drive, Wedding & Corporate Rental",
  description:
    "Book luxury cars on rent in Delhi NCR for weddings, self-drive trips, corporate travel, airport transfers, VIP guests, movie shoots and special occasions. Mercedes, BMW, Audi, Defender, Rolls Royce, Vellfire and more.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — luxury-car-rental page styles
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

/* comparison table */
.cmp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:#fff}
table.cmp-table{width:100%;border-collapse:collapse;font-size:14px;min-width:420px}
table.cmp-table thead th{background:var(--slate);color:#fff;text-align:left;padding:14px 18px;font-family:"Poppins";font-weight:600;font-size:13.5px;text-transform:uppercase;letter-spacing:.03em}
table.cmp-table tbody td{padding:14px 18px;border-top:1px solid var(--line);color:var(--text);vertical-align:top}
table.cmp-table tbody tr:nth-child(even){background:var(--grey)}
table.cmp-table tbody td:first-child{font-weight:700;color:var(--ink);font-family:"Poppins"}

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

/* Why Choose Grab Your Cab for Luxury Car Rental? - EXACT MATCH from document */
const whyChooseChecklist = [
  "Luxury chauffeur-driven cars",
  "Luxury self-drive car rental options",
  "Wedding and event cars",
  "Cars for movie, TV and web-series shoots",
  "Celebrity and VIP event transportation",
  "Corporate transportation",
  "Airport transfers",
  "Premium SUVs",
  "Luxury sedans",
  "Special and premium vehicles",
  "Multiple pickup locations across Delhi NCR",
  "Local and outstation travel requirements",
];

/* Popular Uses of Convertible Cars - EXACT MATCH from document */
const convertibleUses = [
  "Weddings and grand entries",
  "Pre-wedding and fashion shoots",
  "Movie, TV serial and web-series shoots",
  "Music videos and advertising campaigns",
  "Celebrity appearances and luxury events",
  "Special occasions and weekend experiences",
];

/* Areas We Serve for Luxury Car Rental in Delhi NCR - EXACT MATCH from document */
const areasServed = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Noida Extension",
  "Ghaziabad",
  "Gurgaon / Gurugram",
  "Faridabad",
  "Nearby NCR locations",
];

/* FAQs – Luxury Car Rental in Delhi NCR - EXACT MATCH from document */
const faqs = [
  {
    q: "Can I rent a luxury car in Delhi NCR?",
    a: "Yes. Grab Your Cab provides luxury car rental options across Delhi NCR for weddings, corporate travel, airport transfers, movie shoots, events, VIP guests, special occasions and personal travel, subject to vehicle availability.",
  },
  {
    q: "Do you provide luxury self-drive cars in Delhi NCR?",
    a: "Yes. Grab Your Cab offers selected luxury self-drive car rental options for eligible customers. Availability depends on the vehicle, rental dates, location and applicable rental requirements.",
  },
  {
    q: "Can I rent a luxury car for self-drive in Noida?",
    a: "Yes. Luxury self-drive car rental options can be enquired about in Noida, Greater Noida, Gurgaon and other NCR locations, subject to vehicle availability and rental eligibility.",
  },
  {
    q: "Can I rent a luxury car for a movie shoot in Delhi NCR?",
    a: "Yes. Grab Your Cab provides luxury and premium car rental options for movie shoots, TV serials, web series, music videos, advertising campaigns and other production requirements, subject to vehicle availability.",
  },
  {
    q: "Can I rent a luxury car for a celebrity event?",
    a: "Yes. Luxury cars can be arranged for celebrity appearances, VIP guests, award functions, promotional activities, brand launches and other special events, subject to vehicle availability.",
  },
  {
    q: "Can production houses rent Mercedes, BMW or Audi cars for shooting?",
    a: "Yes. Production houses, photographers, advertising agencies and event companies can enquire about Mercedes, BMW, Audi and other luxury vehicles for shooting requirements, subject to availability.",
  },
  {
    q: "Which luxury car brands are available on rent?",
    a: "Depending on availability, customers can enquire about Mercedes, BMW, Audi, Jaguar, Defender, Toyota Fortuner, Toyota Vellfire, Hummer, Rolls Royce, limousine and other luxury vehicles.",
  },
  {
    q: "Can I get a Mercedes car on rent in Delhi NCR?",
    a: "Yes. Customers can enquire about Mercedes car rental options for weddings, airport transfers, corporate travel, events and special occasions, subject to availability.",
  },
  {
    q: "Can I get a BMW car on rent in Delhi NCR?",
    a: "Yes. BMW rental options may be available for weddings, business travel, luxury airport transfers, events and premium transportation requirements.",
  },
  {
    q: "Can I rent an Audi car in Delhi NCR?",
    a: "Yes. Audi rental options may be available for airport transfers, weddings, business meetings, events and corporate travel.",
  },
  {
    q: "Can I rent a Defender in Delhi NCR?",
    a: "Yes. Customers can enquire about Defender rental options for weddings, special occasions, VIP transportation, business travel and luxury SUV requirements.",
  },
  {
    q: "Can I rent a Toyota Fortuner in Delhi NCR?",
    a: "Yes. Toyota Fortuner rental options may be available for airport transfers, family travel, corporate transportation, weddings and outstation journeys.",
  },
  {
    q: "Can I rent a Toyota Vellfire in Delhi NCR?",
    a: "Yes. Toyota Vellfire is a popular choice for VIP guests, airport transfers, executive transportation, luxury family travel and business requirements.",
  },
  {
    q: "Can I rent a Rolls Royce in Delhi NCR?",
    a: "Yes. Customers can enquire about Rolls Royce rental options for weddings, luxury events, VIP transportation and special occasions, subject to availability.",
  },
  {
    q: "Can I rent a limousine in Delhi NCR?",
    a: "Yes. Limousine rental options may be available for weddings, parties, corporate events, celebrity appearances, promotions and special celebrations.",
  },
  {
    q: "Can I rent a convertible car in Delhi NCR?",
    a: "Yes. Customers can enquire about convertible car rental options in Delhi NCR for weddings, pre-wedding shoots, movie shoots, photoshoots, celebrity events and special occasions, subject to availability.",
  },
  {
    q: "Can I book a convertible car for a wedding?",
    a: "Yes. Convertible cars are popular for bridal and groom entries, wedding photography, pre-wedding shoots and luxury wedding transportation.",
  },
  {
    q: "Do you provide luxury wedding cars in Delhi NCR?",
    a: "Yes. Luxury and premium wedding car rental options are available for weddings, receptions, engagements and other special occasions, subject to availability.",
  },
  {
    q: "Do you provide vintage wedding cars in Noida and Greater Noida?",
    a: "Yes. Customers can enquire about vintage wedding car rental options for weddings, themed events, photoshoots and special celebrations, subject to availability.",
  },
  {
    q: "Can I rent a luxury car in Greater Noida or Noida Extension?",
    a: "Yes. Grab Your Cab provides luxury car rental options in Greater Noida and Noida Extension, subject to vehicle and service availability.",
  },
  {
    q: "Can I rent a luxury car in Gurgaon?",
    a: "Yes. Luxury car rental options may be available in Gurgaon for airport transfers, business travel, weddings, events and special occasions.",
  },
  {
    q: "Can I rent a luxury car in Ghaziabad?",
    a: "Yes. Customers can enquire about luxury car rental options in Ghaziabad for weddings, airport transfers, business travel, events and VIP transportation.",
  },
  {
    q: "Do you provide luxury cars for corporate travel?",
    a: "Yes. Luxury cars can be arranged for executive transportation, client visits, business meetings, conferences, corporate events and airport transfers.",
  },
  {
    q: "Do you provide luxury airport transfer services?",
    a: "Yes. Luxury airport transfer options may be available for Delhi Airport, Noida International Airport (Jewar Airport) and other airport transportation requirements.",
  },
  {
    q: "Can I rent a luxury car with a driver?",
    a: "Yes. Chauffeur-driven luxury car rental options can be arranged for weddings, airport transfers, business travel, events and special occasions, subject to availability.",
  },
  {
    q: "Can I take a luxury self-drive rental car for an outstation trip?",
    a: "Selected self-drive luxury vehicles may be available for outstation travel, subject to rental eligibility, travel destination and applicable rental terms.",
  },
  {
    q: "How can I book a luxury car on rent in Delhi NCR?",
    a: "You can contact Grab Your Cab with your pickup location, travel date, rental duration, preferred vehicle and whether you require self-drive or chauffeur-driven service. Available options and applicable rental terms can then be shared based on your requirements.",
  },
];

export default function LuxuryCarRentalPage() {
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
            <b>Luxury Car Rental</b>
          </div>
          <span className="eyebrow">Luxury · Chauffeur & Self Drive · Delhi NCR</span>
          <h1>Luxury Car on Rent in Delhi NCR</h1>
          <p className="lead">
            Looking for a luxury car on rent in Delhi NCR for a wedding, corporate tour, airport transfer, movie shoot, TV serial, web series, celebrity event, special occasion or personal trip? Grab Your Cab offers luxury car rental options across Delhi, Noida, Greater Noida, Noida Extension, Ghaziabad, Gurgaon, Faridabad, Meerut and other NCR locations.
          </p>
          <p className="lead">
            Depending on availability and rental requirements, customers can enquire about chauffeur-driven luxury cars as well in addition to luxury self-drive car rental options. Whether you need a luxury car for a few hours, a full day, Monthly subscription, an event, shooting, airport travel, business meetings or an outstation trip, you can enquire about available vehicles according to your requirements.
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
            <span>Gurgaon</span>
            <span>Ghaziabad</span>
            <span>Faridabad</span>
          </div>
        </div>
      </section>

      {/* ---------- H2: LUXURY CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on Rent in Delhi NCR</h2>
              <p>
                Customers can enquire about luxury cars in Delhi, Noida, Greater Noida, Noida Extension, Gurgaon, Ghaziabad and Faridabad, subject to vehicle and service availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY SELF DRIVE CAR RENTAL IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Self Drive Car Rental in Delhi NCR</h2>
              <p>
                Looking for a luxury car on rent that you can drive yourself? Grab Your Cab provide selected luxury self-drive car rental options for customers who prefer privacy, flexibility and the freedom to drive themselves.
              </p>
              <p>
                Luxury self-drive cars can be suitable for personal travel, romantic date, business trips, special occasions, weekend travel, events and selected outstation journeys. Customers can enquire about available self-drive luxury cars based on their preferred vehicle, travel dates, rental duration and pickup location.
              </p>
              <p>
                Self-drive vehicle availability and rental eligibility may vary by vehicle and applicable rental terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR ON RENT IN DELHI - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on Rent in Delhi</h2>
              <p>
                Need a luxury car on rent in Delhi for a wedding, corporate event, airport transfer, VIP guest, movie shoot or special occasion? Grab Your Cab provides luxury car rental options in Delhi, subject to vehicle availability.
              </p>
              <p>
                Customers can choose between chauffeur-driven luxury cars and self-drive luxury car options based on their travel requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR ON RENT IN GURGAON - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on Rent in Gurgaon</h2>
              <p>
                Grab Your Cab provides luxury car rental options in Gurgaon for corporate travel, business meetings, weddings, airport transfers, events, shooting requirements and special occasions.
              </p>
              <p>
                Luxury self-drive options may also be available for eligible customers in self-drive car segment subject to vehicle availability and rental terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY SELF DRIVE CARS IN GURGAON - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Self Drive Cars in Gurgaon</h2>
              <p>
                We provide all types of luxury self-drive cars in Gurgaon and on door delivery in areas like Sushant Lok, Huda City Centre, Sector 29 Gurgaon, Golf Course Road, DLF area, Sohna Road, Dwarka Expressway and Manesar.
              </p>
              <p>
                Customers can easily get brands like Toyota Fortuner, Mercedes, BMW, Defender, etc. on easy terms but need to book in adance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR ON RENT IN NOIDA - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on Rent in Noida</h2>
              <p>
                Looking for a luxury car on rent in Noida? Grab Your Cab offers luxury car rental options for weddings, corporate travel, airport transfers, movie and advertising shoots, events, VIP guests and personal travel.
              </p>
              <p>
                Customers in Noida can enquire about chauffeur-driven luxury cars and available luxury self-drive cars according to their travel requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY SELF DRIVE CARS IN NOIDA - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Self Drive Cars in Noida</h2>
              <p>
                For customers who prefer to drive themselves, Grab Your Cab offers luxury self-drive car rental options in Noida, subject to availability and rental eligibility, however Toyota Fortuner car on rent in Noida is most popular among all.
              </p>
              <p>
                Whether you need a luxury car for a special occasion, business travel, personal use or an outstation journey, you can enquire about available self-drive luxury vehicles based on your dates and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR ON RENT IN NOIDA EXTENSION - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on rent in Noida Extension</h2>
              <p>
                Looking for luxury car on rent in Noida Extension? Grab Your Cab provides luxury car rental options for residents, businesses, events, weddings, shooting requirements and visitors in Noida Extension and nearby Greater Noida areas. It is observed customers living in Gaur city, Ek Murti, Sector 1 &amp; 4, Bishrakh area prefer Mercedes car on rent in Noida Extension.
              </p>
              <p>
                Customers can enquire about chauffeur-driven and selected self-drive luxury cars based on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CARS IN GREATER NOIDA - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Cars in Greater Noida</h2>
              <p>
                Grab Your Cab provide luxury car rental options in Greater Noida for weddings, corporate travel, events, airport transfers, shooting requirements, special occasions and personal travel.
              </p>
              <p>
                Luxury self-drive options are also available for customers who prefer independent travel, subject to vehicle availability and applicable rental requirements. Often Grab your Cab gives special discount on Fortuner on rent in Greater Noida on weekdays, so plan accordingly and save money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR ON RENT IN GHAZIABAD - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on Rent in Ghaziabad</h2>
              <p>
                Looking for a luxury car on rent in Ghaziabad? Grab Your Cab provides luxury car rental options for weddings, business travel, corporate requirements, airport transfers, movie and advertising shoots, events and special occasions. We offer special discount on Fortuner on rent in Ghaziabad for corporate discount upto 20% only on weekdays on for Monthly subscription.
              </p>
              <p>
                Customers can enquire about available chauffeur-driven luxury cars and self-drive luxury car options according to their travel need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CAR ON RENT IN FARIDABAD - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Car on Rent in Faridabad</h2>
              <p>
                Grab Your Cab provides luxury car rental options in Faridabad for weddings, corporate travel, airport transfers, events, shooting requirements, VIP guests and special occasions.
              </p>
              <p>
                Customers can enquire about luxury chauffeur-driven cars and available self-drive luxury cars based on vehicle availability and rental eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CARS ON RENT FOR MOVIE, TV, WEB SERIES & CELEBRITY SHOOTS - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Cars on Rent for Movie, TV, Web Series &amp; Celebrity Shoots</h2>
              <p>
                Luxury cars are often required for movie shoots, TV serials, web series, music videos, advertising campaigns, fashion shoots, photography projects and celebrity events. Grab Your Cab provides luxury and premium car rental options in Delhi NCR for production houses, event companies, advertising agencies, photographers, filmmakers and event organisers, subject to vehicle availability.
              </p>
              <p>
                Whether you need a Convertible car, Mercedes, BMW, Audi, Defender, Jaguar, Toyota Vellfire, Fortuner, limousine, Hummer, Rolls Royce or another premium vehicle for a shooting requirement, customers can enquire about available cars based on the project, shooting location, dates and rental duration.
              </p>
              <p>
                We can cater to shooting and event requirements across Delhi, Noida, Greater Noida, Noida Extension, Gurgaon, Ghaziabad, Faridabad, Meerut and nearby NCR locations. Luxury cars can be arranged for movie scenes, TV serials, web series, music videos, brand campaigns, promotional shoots, celebrity appearances, award functions and other production or event requirements, subject to availability.
              </p>
              <p>
                For production requirements, advance booking is recommended so that the required vehicle type, shooting dates, location and rental duration can be discussed in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY WEDDING CARS IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Wedding Cars in Delhi NCR</h2>
              <p>
                Make your wedding transportation memorable with a luxury wedding car in Delhi NCR. Grab Your Cab offers luxury car rental options for weddings, receptions, engagements, bride and groom transportation, wedding guests and special events.
              </p>
              <p>
                Luxury wedding cars can be arranged in Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad, Faridabad, Meerut and nearby NCR locations, subject to availability. Grab your Cab also provide convertible cars on rent .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PREMIUM WEDDING CARS ON RENT IN DELHI, NOIDA & FARIDABAD - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Premium Wedding Cars on Rent in Delhi, Noida &amp; Faridabad</h2>
              <p>
                Looking for premium wedding cars on rent in Delhi, Noida or Faridabad? Grab Your Cab provides premium and luxury car rental options for wedding ceremonies, receptions, pre-wedding events and other special occasions.
              </p>
              <p>
                Customers can enquire about available vehicles, rental duration and travel requirements in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VINTAGE WEDDING CARS IN NOIDA & GREATER NOIDA - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Vintage Wedding Cars in Noida &amp; Greater Noida</h2>
              <p>
                For couples looking for a distinctive wedding experience, vintage wedding cars can add a classic touch to wedding transportation. Grab Your Cab provides vintage and special wedding car rental options in Noida, Greater Noida and nearby NCR areas, subject to vehicle availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONVERTIBLE CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Convertible Car on Rent in Delhi NCR</h2>
              <p>
                Looking for a convertible car on rent in Delhi NCR? Convertible cars offer a unique open-top luxury driving experience and are a popular choice for weddings, pre-wedding shoots, movie shoots, music videos, celebrity events, photoshoots and special occasions.
              </p>
              <p>
                Grab Your Cab can assist customers looking for convertible car rental options in Delhi, Noida, Greater Noida, Noida Extension, Gurgaon, Ghaziabad and Faridabad and Meerut, subject to vehicle availability. Customers may enquire about convertible luxury vehicles such as BMW, Audi, Mercedes, Mini Cooper, Porsche Cabriolet models.
              </p>
              <p>
                Convertible cars are especially popular for bridal and groom entries, luxury events, fashion shoots, advertising campaigns, web series and premium celebrations. Due to limited availability, advance booking is recommended for weddings, events and production requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- POPULAR USES OF CONVERTIBLE CARS - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Convertible Car Rental</span>
            <h2>Popular Uses of Convertible Cars</h2>
          </div>
          <div className="check-grid">
            {convertibleUses.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONVERTIBLE CAR RENTAL FOR SHOOTS & EVENTS - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Convertible Car Rental for Shoots &amp; Events</h2>
              <p>
                Production houses, event organisers, photographers, advertising agencies, influencers and wedding planners frequently look for convertible cars for luxury shoots and promotional campaigns. Customers can enquire about convertible cars for movie shoots, web series, TV serials, music videos, celebrity events and brand promotions across Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MERCEDES CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Mercedes Car on Rent in Delhi NCR</h2>
              <p>
                Looking for a Mercedes car on rent in Delhi NCR? Grab Your Cab offers Mercedes rental options for weddings, corporate travel, airport transfers, VIP guests, events, special occasions and shooting requirements.
              </p>
              <p>
                Customers can enquire about available Mercedes vehicles for chauffeur-driven travel and selected self-drive requirements, subject to availability and rental eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BMW CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>BMW Car on Rent in Delhi NCR</h2>
              <p>
                Grab Your Cab provides BMW car rental options in Delhi NCR for customers looking for luxury transportation for business travel, weddings, airport transfers, events, shooting requirements and special occasions.
              </p>
              <p>
                Available BMW models and self-drive options may vary depending on vehicle availability and rental requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AUDI CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Audi Car on Rent in Delhi NCR</h2>
              <p>
                Looking for an Audi car on rent in Delhi NCR? Grab Your Cab offers Audi rental options for corporate travel, weddings, airport transfers, special occasions, events and movie, advertising or photography shoots.
              </p>
              <p>
                Customers can enquire about available Audi vehicles and whether a self-drive option is available for their selected dates and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- JAGUAR CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Jaguar Car on Rent in Delhi NCR</h2>
              <p>
                Grab Your Cab offers Jaguar car rental options in Delhi NCR for special occasions, corporate travel, weddings, events, shooting requirements and premium transportation needs.
              </p>
              <p>
                Customers can enquire about available Jaguar vehicles, rental duration and chauffeur-driven or self-drive options, subject to availability and applicable rental terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DEFENDER CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Defender Car on Rent in Delhi NCR</h2>
              <p>
                Looking for a Defender car on rent in Delhi NCR? Grab Your Cab provides Defender rental options for customers looking for a premium SUV for events, weddings, corporate travel, special occasions, movie shoots and personal journeys.
              </p>
              <p>
                Self-drive availability depends on the vehicle, rental requirements and eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TOYOTA FORTUNER CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Toyota Fortuner Car on Rent in Delhi NCR</h2>
              <p>
                Looking for a Toyota Fortuner car on rent in Delhi NCR? Grab Your Cab provides Toyota Fortuner rental options for airport transfers, corporate travel, family trips, weddings, events, shooting requirements and outstation journeys.
              </p>
              <p>
                Customers can enquire about Toyota Fortuner availability in Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad and Faridabad based on their travel requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TOYOTA VELLFIRE CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Toyota Vellfire Car on Rent in Delhi NCR</h2>
              <p>
                Toyota Vellfire is a popular choice for premium family travel, corporate transportation, airport transfers, VIP guests, events and special requirements. Grab Your Cab provides Toyota Vellfire rental options in Delhi NCR, subject to vehicle availability.
              </p>
              <p>
                Customers can enquire about Toyota Vellfire for airport transfers, business travel, weddings, events, celebrity transportation and other premium travel requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HUMMER CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Hummer Car on Rent in Delhi NCR</h2>
              <p>
                Looking for a Hummer car on rent in Delhi NCR for a wedding, event, special occasion, movie shoot or advertising project? Grab Your Cab offers Hummer rental options subject to vehicle availability.
              </p>
              <p>
                Advance enquiry is recommended for special and production-based vehicle requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ROLLS ROYCE CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Rolls Royce Car on Rent in Delhi NCR</h2>
              <p>
                A Rolls Royce can add a distinctive luxury experience to weddings, VIP events, movie shoots, celebrity events, special occasions and premium transportation requirements. Grab Your Cab offers Rolls Royce rental options in Delhi NCR, subject to vehicle availability and booking requirements.
              </p>
              <p>
                Customers should enquire in advance regarding the available vehicle, rental duration and service arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LIMOUSINE CAR ON RENT IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Limousine Car on Rent in Delhi NCR</h2>
              <p>
                Looking for a limousine car on rent in Delhi NCR? Grab Your Cab provides limousine rental options for weddings, corporate events, VIP guests, celebrations, special occasions, movie shoots and premium transportation requirements.
              </p>
              <p>
                Advance booking is recommended for limousine and event-specific requirements, subject to availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CARS FOR CORPORATE TRAVEL IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Cars for Corporate Travel in Delhi NCR</h2>
              <p>
                Luxury cars can be a suitable choice for corporate executives, business meetings, conferences, client transportation, corporate events and VIP guests.
              </p>
              <p>
                Grab Your Cab provides luxury car rental options across Delhi NCR for corporate travel requirements. Customers can enquire about chauffeur-driven luxury cars and selected self-drive options based on their requirements and vehicle availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY AIRPORT TRANSFERS IN DELHI NCR - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Airport Transfers in Delhi NCR</h2>
              <p>
                Need a luxury car for airport pickup or drop-off? Grab Your Cab provides luxury airport transfer options from major Delhi NCR locations, including Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad and Faridabad.
              </p>
              <p>
                Luxury airport cars can be booked for business travellers, families, VIP guests, corporate executives and customers looking for a more premium airport travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY SELF DRIVE CARS FOR SPECIAL OCCASIONS - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Self Drive Cars for Special Occasions</h2>
              <p>
                Want to drive a luxury car yourself for a special occasion? Grab Your Cab offers selected luxury self-drive car rental options for customers who prefer an independent driving experience.
              </p>
              <p>
                Whether you are planning a special event, personal trip, business journey or weekend travel, you can enquire about available luxury self-drive vehicles based on your travel dates, location and rental requirements.
              </p>
              <p>
                Vehicle availability, rental eligibility and applicable terms may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CARS FOR WEDDINGS, EVENTS & SPECIAL OCCASIONS - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Cars for Weddings, Events &amp; Special Occasions</h2>
              <p>
                Luxury cars can make a memorable addition to weddings, receptions, engagements, corporate events, celebrations, photo shoots and other special occasions.
              </p>
              <p>
                Grab Your Cab provides luxury and premium car rental options across Delhi NCR, with vehicle choices depending on availability and the requirements of the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LUXURY CARS FOR VIP GUESTS & CELEBRITY EVENTS - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Luxury Cars for VIP Guests &amp; Celebrity Events</h2>
              <p>
                When travelling with VIP guests, business executives, celebrities, event guests or important clients, comfortable and premium transportation can be an important part of the travel arrangement.
              </p>
              <p>
                Grab Your Cab offers luxury car rental options across Delhi NCR for VIP transportation, celebrity events, corporate requirements, airport transfers and special travel arrangements, subject to availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE GRAB YOUR CAB FOR LUXURY CAR RENTAL - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Grab Your Cab for Luxury Car Rental?</h2>
            <p>
              Grab Your Cab brings together multiple travel and transportation solutions under one platform, including taxi services, self-drive car rental and luxury car rental.
            </p>
            <p style={{ marginTop: 8, color: "var(--muted)", fontSize: "14.5px" }}>
              Customers can enquire about:
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
            Our luxury car options may include vehicles such as Mercedes, BMW, Audi, Jaguar, Defender, Toyota Fortuner, Toyota Vellfire, Hummer, Rolls Royce, limousine and other premium vehicles, subject to availability.
          </p>
        </div>
      </section>

      {/* ---------- AREAS WE SERVE - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Service Locations</span>
            <h2>Areas We Serve for Luxury Car Rental in Delhi NCR</h2>
            <p>
              Grab Your Cab provides luxury car rental services across Delhi NCR and nearby areas, including:
            </p>
          </div>
          <div className="check-grid">
            {areasServed.map((area) => (
              <div className="item" key={area}>
                <span className="dot" />
                <p>{area}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            Customers can contact us with their pickup location, travel date, preferred vehicle and rental requirement to check availability.
          </p>
        </div>
      </section>

      {/* ---------- BOOK NOW BANNER ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="banner alt">
            <div className="in">
              <h2>Book Your Luxury Car in Delhi NCR</h2>
              <p>Contact us with your pickup location, travel date, preferred vehicle and rental requirement.</p>
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

      {/* ---------- FAQ - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Got Questions?</span>
            <h2>FAQs – Luxury Car Rental in Delhi NCR</h2>
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
      {/* <section className="sec grey">
        <div className="container">
          <div className="garage-head">
            <h2>Our Cab Service Office</h2>
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
                title="Grab Your Cab office location"
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