import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Self Drive Car Rental in Delhi | Book Your Car Today",
  description:
    "Book a self drive car rental in Delhi for convenient local and outstation travel. Explore hatchbacks, sedans, SUVs and other available vehicles with Grab Your Cab.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — self-drive-car-rental-delhi page styles
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
    text: "Perfect for daily city driving, road-trips, or even those who like to drive smaller vehicles. Also, these are a good pick for Delhi NCR traffic.",
  },
  {
    title: "Sedans",
    image: "https://cdn-s3.autocarindia.com/Mercedes/cla-electric/Mercedes-Benz_CLA_EV_Front_Quarter_Tracking.jpg?w=640&q=75&fm=auto",
    text: "With extra cabin and boot space, sedans are ideal for family travel, business trip and long distance travel. There may also be automatic transmission options, depending upon the availability of the fleet at the moment.",
  },
  {
    title: "SUVs and MUVs",
    image: "https://www.spinny.com/blog/wp-content/uploads/2025/11/New-Toyota-7-Seater-SUV.jpg",
    text: "SUVs and MUVs are handy for more passengers and luggage. They are also for the taking if you are on a road trip and find yourself needing more space or a higher driving position.",
  },
  {
    title: "Luxury Cars",
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rolls-rocyce-cullinan-top_10.jpg?itok=w_HPkyxC",
    text: "In case of self drive luxury car rental delhi for the prospective customers, the availability for that particular luxury model and hire terms should be checked. Grab Your Cab's wider fleet include the likes of Audi, Mercedes and BMW.",
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
    title: "A Decade in Business",
    text: "Grab Your Cab is a cab and car rental provider in Delhi NCR, Goa and Noida International Airport (Jewar), backed by claimed experience of a decade in business.",
  },
  {
    title: "Support at All Times",
    text: "The company provides support at all times of the day.",
  },
  {
    title: "In-House Maintenance",
    text: "Grab Your Cab claim they own and operate their own in-house maintenance team to make sure the vehicles are regularly maintained.",
  },
  {
    title: "Delhi NCR Coverage",
    text: "The company also has a Delhi NCR presence including Delhi, Noida, Gurugram, Ghaziabad and Faridabad, which adds convenience for travellers who require a self drive car rental in Delhi while travelling all through the NCR.",
  },
];

const inclusionChecklist = [
  "Length of rental and pick up / return time",
  "Allowed kilometres",
  "Extra kilometre fee",
  "Fuel requirements",
  "Security deposit",
  "Cancellation policy",
  "Late-return penalties",
  "Damage and cleaning policies",
  "Tolls, parking and other travel expenses",
  "Outstation permission and other charges applicable to this booking",
];

const faqs = [
  {
    q: "What is self drive car rental in Delhi?",
    a: "Self drive car rental lets you rent a vehicle and drive it yourself without a chauffeur. You can choose a suitable car and rental duration.",
  },
  {
    q: "How much does it cost to rent a self drive car in Delhi?",
    a: "Rental prices depend on the car model, duration, kilometre allowance and package. Additional charges may apply for extra kilometres or other services.",
  },
  {
    q: "What documents are required to rent a self drive car?",
    a: "A valid driving licence and government-issued identity proof are generally required. Additional documents or verification may apply according to the rental company's policy.",
  },
  {
    q: "Can I take a self drive rental car outside Delhi?",
    a: "Yes, outstation travel may be permitted for selected vehicles and destinations. Always confirm the approved route and applicable charges before starting your journey.",
  },
  {
    q: "Are automatic cars available for self drive rental in Delhi?",
    a: "Yes, automatic self drive cars may be available depending on the current fleet. Check availability for your preferred model and travel dates before booking.",
  },
  {
    q: "Is a security deposit required?",
    a: "A security deposit may be required depending on the vehicle and rental agreement. Confirm the deposit amount, payment method and refund conditions before booking.",
  },
  {
    q: "Are fuel and toll charges included in the rental price?",
    a: "Fuel, tolls and parking are not necessarily included in rental prices. Check your selected package carefully for inclusions, exclusions and additional travel-related charges.",
  },
  {
    q: "What happens if the car breaks down?",
    a: "Contact the rental provider immediately if the vehicle breaks down. Follow their instructions for roadside assistance, vehicle support or other approved arrangements.",
  },
  {
    q: "Can I extend my rental period?",
    a: "Yes, rental extensions may be possible subject to vehicle availability and provider approval. Additional rental charges and revised kilometre limits may apply.",
  },
  {
    q: "Can I cancel my self drive car booking?",
    a: "Yes, bookings may be cancelled according to the applicable cancellation policy. Refund eligibility and cancellation charges depend on the booking terms and cancellation timing.",
  },
];

export default function SelfDriveCarRentalDelhiPage() {
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
            <b>Self Drive Car Rental in Delhi</b>
          </div>
          <span className="eyebrow">Delhi NCR · Hourly, Daily &amp; Weekly</span>
          <h1>Self Drive Car Rental in Delhi – Flexible Cars for Local &amp; Outstation Travel</h1>
          <p className="lead">
            Get around Delhi on your own pace with our self drive car rental service at Grab Your
            Cab. Whether you are looking for a car for a few hours, a day, a weekend road trip, or
            an outstation trip, self drive has the best of both worlds as you can decide the
            route, the stop, and the schedule.
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
            <span>Delhi</span>
            <span>Noida</span>
            <span>Gurugram</span>
            <span>Ghaziabad</span>
          </div>
        </div>
      </section>

      <TaxiSearch/>

      {/* ---------- INTRO ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <p>
                Grab Your Cab now provides a gamut of hourly, daily and weekly self-drive car
                rentals, giving you access to a wide range of cars from mini hatchbacks and
                sedans to SUVs and luxury vehicles.
              </p>
              <p>
                Self-drive cars are great for local travel in and around Delhi NCR, business
                travel or a family outing, or even for a day at the airport, and road trips to
                nearby destinations like Noida, Gurugram, Ghaziabad, and such permitted
                outstation places. Best rental for you depends on your dates, vehicle, rental
                duration, number of kilometers, and terms and conditions.
              </p>
              <p>
                The experience itself is seamless: just pick a car, confirm your booking via the
                provided booking channels, get verified, and you're ready to drive. The company
                claims its rental business is backed by a fleet of well-maintained vehicles and a
                24/7 support service.
              </p>
            </div>

            <div className="seo-block">
              <h2>What Is Self Drive Car Rental In Delhi?</h2>
              <p>
                Self Drive Car Rental in Delhi provides you the flexibility to rent a car and
                drive on your own within the city or country roads without any driver. You can
                take as many breaks as you want or just enjoy a little more privacy.
              </p>
              <p>
                You are self-hired and in the driver's seat rather than taking a taxi or bus.
                Depending on the car type, rental conditions, and your needs, you can rent a car
                for different periods of time. Why not discover the city at your own pace? You
                grab the car, you're the driver, and you make the rules.
              </p>
              <p>
                Grab Your Cab is a whole lot different from the other car rental apps we've
                looked at. It allows you to choose the vehicle of your choice and grab a car for
                rent on hourly, daily, weekly, monthly etc basis.
              </p>
              <p>
                For those customers who intend to travel beyond Delhi, please ensure that the
                respective make of vehicle, destination, and time of booking has the option of
                self drive outstation car rental available before making the payment.
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
            <h2>Self Drive Cars Available in Delhi</h2>
            <p>
              Grab Your Cab's fleet is composed of affordable cars, sedans, compact SUVs, SUVs,
              and luxury cars. Its currently shown fleet consists of the likes of Maruti Wagon R,
              Maruti Celerio, Maruti Swift Dzire, Hyundai Aura, Honda City, Toyota Corolla Altis,
              Tata Nexon and Maruti Brezza.
            </p>
          </div>
          <div className="fleet-grid">
            {fleetTypes.map((car) => (
              <div className="fleet-card" key={car.title}>
                <div className="img-wrap">
                  <img src={car.image} alt={`${car.title} self drive rental in Delhi`} loading="lazy" />
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

      {/* ---------- HOW TO BOOK ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Book a Self Drive Car in Delhi?</h2>
            <p>Booking a self drive car in Delhi can be completed through a straightforward process.</p>
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
            Grab Your Cab customers can choose between services, vehicles, and confirm bookings
            using WhatsApp.
          </p>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Drive Delhi on Your Own Terms?</h2>
              <p>Choose a car, confirm your booking and get verified in minutes.</p>
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

      {/* ---------- ELIGIBILITY ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Who Is Eligible to Rent a Self Drive Car?</h2>
              <p>
                A customer renting a self-drive car normally requires an active driving license
                and government issued identity proof. There may be some more verification, or
                eligibility terms, or security deposit, or documents according to the vehicle and
                rental contract.
              </p>
              <p>
                When you hire your self drive car, please check with the rental company to
                confirm the minimum age, what documents are accepted, whether a deposit is
                required, where you can drive the car, fuel policy, km limits and any other
                terms. This avoids surprise fees or trouble at delivery of the cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SELF DRIVE VS CAB TABLE ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Compare Your Options</span>
            <h2>Self Drive Car vs Cab in Delhi</h2>
            <p>
              A self-drive rental and a traditional cab serve different travel needs. If you
              prefer to control the route and driving schedule, a self-drive rental can be more
              suitable. If you would rather relax during the journey, a chauffeur-driven cab may
              be the better option.
            </p>
          </div>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Self Drive Car</th>
                  <th>Cab</th>
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
        </div>
      </section>

      {/* ---------- WHY CHOOSE GRID ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why Grab Your Cab</span>
            <h2>Why Choose Grab Your Cab for Self Drive Car Rental?</h2>
            <p>
              Practical issues that matter for self-drive customers include the condition of the
              vehicle, availability, transparency of rental terms and responsive customer
              support.
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

      {/* ---------- INCLUSIONS / EXCLUSIONS CHECKLIST GRID ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Read Before You Book</span>
            <h2>What's Included or Excluded in Your Rental?</h2>
            <p>
              The available inclusions vary based on the vehicle, rental offer, and booking
              conditions. Before booking a rental car, make sure to ask about:
            </p>
          </div>
          <div className="check-grid">
            {inclusionChecklist.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <div className="seo-wrap" style={{ marginTop: 26 }}>
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <p>
                Do not assume that fuel, tolls, parking, costs associated with insurance or
                additional miles are included, unless your rental terms specifically state so.
                Customers planning to hire the cheapest self drive car rental in Delhi are
                advised to compare the overall cost of the rent and not just the beginning rate
                in the list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- RULES & POLICIES ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Rental Rules &amp; Policies</h2>
              <p>
                Each self drive car rental is subject to its own terms and conditions, which
                protect both you and the vehicle. When you receive the car, read the rental
                agreement.
              </p>
              <p>
                Make sure you know the area (boundaries for driving), return condition, fuel
                level, km allowance, documents you should carry and how to report damage. Before
                driving away, check out the outside and inside of the car, take note of any
                existing scratches or dents, and verify the odometer and petrol tank.
              </p>
              <p>
                When you hire a self-drive car in Delhi for outstation travel, make sure your
                destination is allowed for travel before you hit the road. Likewise, customers
                who require a one way self drive car rental should check if the one way return is
                possible for their choice of vehicle; do not just assume from the availability of
                the standard rental.
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
              <h2>Book Your Self Drive Car in Delhi</h2>
              <p>
                Take charge of your next trip with a self-drive rental from Grab Your Cab. Select
                from available hatchbacks, sedans, SUVs, and other vehicle class options, choose
                an appropriate rental duration, provide the required verifications, then accept
                the rental terms. Whether it's a Self Drive Car in New Delhi for local
                sightseeing or a Self Drive Car for a road trip beyond city limits, check the
                availability and price for your dates.
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
            <h2>Our Self Drive Car Rental Office in Delhi</h2>
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
                title="Grab Your Cab self drive car rental office location"
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

