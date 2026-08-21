import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Best Cab Service in Noida | Local & Outstation Taxi",
  description:
    "Book a cab service in Noida for local travel, airport transfers, business trips, and outstation journeys. Enjoy convenient pickup, comfortable cars, and flexible travel options.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — cab-service-noida page styles
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
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

/* Types of Cab Services Available in Noida */
const cabServiceTypes = [
  {
    title: "Noida Local Cab Service",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
    text: "Local taxi service is ideal for you if you want to travel to daily places for shopping, meetings, appointment, family visit, place to place journeys. Book a cab as per your Noida pickup location and destination.",
  },
  {
    title: "Airport Cab Services in Noida",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600",
    text: "It is easy to travel from Noida to Delhi Airport when you hire your transportation ahead of time. An airport taxi may come in handy for early-morning departures, late-night arrivals, business travel, and trips involving luggage. Arrange for pickup and drop-off according to your flight timings.",
  },
  {
    title: "Outstation Taxi Service in Noida",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
    text: "If you are a tourist looking for an outstation taxi service in Noida, then we have got you covered. Agra, Jaipur, Mathura, Haridwar, Dehradun, Delhi and Gurgaon are some of the most preferred destinations. Depending on the trip, travellers have the option to opt for one-way and round-trip packages.",
  },
  {
    title: "One-Way Cab Service in Noida",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    text: "A every trip is helpful for you when you are only going to be driven to your destination and not taken back in the same car from Noida. It is also a useful option for on intercity trip, for moving, for some airport trip, or even for drop offs made according to in advance.",
  },
  {
    title: "Round-Trip Cab Service in Noida",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600",
    text: "Round-trip cabs are your best bet for work visits, family journeys, sightseeing, functions, or travels to such places where you will definitely need transport in both directions. The booking can be planned depending on when you want to leave and return.",
  },
];

/* Popular Cab Routes from Noida */
const popularRoutes = [
  "Noida to Delhi",
  "Noida to Gurgaon",
  "Noida to Delhi Airport",
  "Noida to Agra",
  "Noida to Jaipur",
  "Noida to Mathura",
  "Noida to Haridwar",
  "Noida to Dehradun",
];

/* Cab Options for Different Travel Needs */
const carsAvailable = [
  { title: "Maruti Cabs", text: "Maruti are ideal for singles, couples, small families, business travelers who like to travel comfortably in city/intercity transport." },
  { title: "Mahindra Cabs", text: "Mahindra rentals are a sensible choice for families and groups who need extra seats or luggage for longer trips." },
  { title: "Cars for Business Travel", text: "Business travelers need easy collection and drop-off to and from offices, hotels, airports and places of meetings; to a myriad of points in fact. Having a car and driver at your disposal can simply all transportation matters during a hectic day." },
];

/* How to Book a Cab in Noida */
const bookingSteps = [
  { title: "Enter Pickup & Destination", text: "Enter the location where you want to get picked and the destination." },
  { title: "Choose Vehicle / Travel Solution", text: "Choose a vehicle or a travel solution." },
  { title: "Tell Us Date & Time", text: "Tell us your date and time of pickup." },
  { title: "Verify Passenger & Trip Info", text: "Verify the passenger and trip information." },
  { title: "Make the Booking", text: "Make the booking and get the trip details you need." },
];

/* Cab Service in Noida for Airport, Railway Station & Business Travel */
const travelServices = [
  { title: "Airport Transfers", text: "Airport transfers etc are organized for passengers travelling from Noida to Delhi Airport and vice-versa. Please provide us your flight details while booking so that we can schedule your pick up accordingly." },
  { title: "Railway Station Transfers", text: "You can also take a taxi for direct taxi service from Noida to Delhi Railway Stations and other places in and around Delhi to travel light." },
  { title: "Corporate & Business Travel", text: "Business travellers can book rides for office travel, meetings, conferences, client appointments, and airport drop-offs." },
  { title: "Family & Group Travel", text: "Families and groups have the option of choosing a car based on the number of passengers as well as the amount of luggage they have, allowing them to more easily plan both local and outstation tours." },
];

const faqs = [
  {
    q: "What is the best way to book a cab in Noida?",
    a: "You can book a cab by sharing your pickup point, destination, travel date, time, and vehicle requirement with the service provider.",
  },
  {
    q: "How much does a cab cost in Noida?",
    a: "The fare depends on distance, vehicle type, trip duration, route, and applicable toll or parking charges. Confirm the fare before booking.",
  },
  {
    q: "Do you provide airport cab service from Noida?",
    a: "Yes, airport transfers can be arranged between Noida and Delhi Airport, subject to availability and the selected travel schedule.",
  },
  {
    q: "Do you provide outstation cab service from Noida?",
    a: "Yes, outstation travel can be arranged for destinations such as Agra, Jaipur, Mathura, Haridwar, and Dehradun.",
  },
  {
    q: "Can I book a one-way cab from Noida?",
    a: "Yes, one-way bookings are suitable when you need transportation to an outstation destination without requiring the same cab for the return journey.",
  },
  {
    q: "Can I book a cab for a round trip?",
    a: "Yes. Round-trip bookings are useful for business travel, family journeys, sightseeing, and other trips requiring transportation in both directions.",
  },
  {
    q: "Which areas of Noida are covered by the cab service?",
    a: "Cab bookings can be arranged across major Noida sectors, depending on the requested route, vehicle, and availability.",
  },
  {
    q: "Can I book a cab for a family or group?",
    a: "Yes. Select a vehicle according to the number of passengers and amount of luggage you need to carry.",
  },
  {
    q: "How can I book a cab in Noida online?",
    a: "Provide your journey details through the available booking channel, confirm the vehicle and fare information, and complete your reservation.",
  },
];

export default function CabServiceNoidaPage() {
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
            <b>Cab Service in Noida</b>
          </div>
          <span className="eyebrow">Local · Airport · Outstation</span>
          <h1>Cab Service in Noida for Local, Airport &amp; Outstation Travel</h1>
          <p className="lead">
            Grab Your Cab is your one stop cab / taxi that offers you the best cab service in
            noida for local travel, airport transfers, business trips and outstation journeys.
            Customer can book on their following Travels such as point to point, one way trip,
            round trip etc. Convenient pick up and drop off, professional drivers, multiple
            vehicle options, the premier service for individuals, families, business travellers
            and groups travelling in noida and around.
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
            <span>Sector 18</span>
            <span>Sector 62</span>
            <span>Sector 51</span>
            <span>Sector 76</span>
            <span>Sector 137</span>
            <span>Sector 142</span>
          </div>
        </div>
      </section>

      <TaxiSearch />

      {/* ---------- INTRO ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Trusted Cab Service in Noida for All Travelling Needs</h2>
              <p>
                A cab can make day-to-day travel easier when you want direct transportation
                without the hassle of driving, parking or navigating through unfamiliar routes.
                Grab Your Cab serves local traveling around Noida and also at the city exits to
                Delhi, Gurgaon, Greater Noida, airports, railway stations, and the most favourite
                outstation destinations.
              </p>
              <p>
                Whether you require a taxi for meetings in sector 62, an airport transfer from
                sector 137 or an intercity trip to Agra, on the basis of travel distance, time,
                number of passengers or luggage, you can opt for an appropriate travel package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE OUR CAB SERVICE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Choose Our Cab Service in Noida?</h2>
              <p>
                A convenient cab reservation is simple for you to complete at both ends, the
                booking and the dropping service should be straightforward. Important things to
                keep in mind include clear details about your trip, suitable vehicles, convenient
                pick-up locations, ability to communicate with the driver, and impartial details
                about any costs involved.
              </p>
              <p>
                We committed to simplifying these so that our customer can plan both their local
                and outstation trips with deliverance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TYPES OF CAB SERVICES ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Choose Your Ride</span>
            <h2>Types of Cab Services Available in Noida</h2>
          </div>
          <div className="fleet-grid">
            {cabServiceTypes.map((item) => (
              <div className="fleet-card" key={item.title}>
                <div className="img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Ready to Book Your Cab in Noida?</h2>
              <p>Choose your route, pick a vehicle and confirm your booking in minutes.</p>
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

      {/* ---------- POPULAR CAB ROUTES ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Well Connected</span>
            <h2>Popular Cab Routes from Noida</h2>
            <p>
              Noida is well connected with Delhi, Gurgaon, Greater Noida and various cities of
              north India through road. Frequently required routes include:
            </p>
          </div>
          <div className="check-grid">
            {popularRoutes.map((route) => (
              <div className="item" key={route}>
                <span className="dot" />
                <p>{route}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            The right size vehicle must be chosen for houseguests, bags and distance and length
            of travel when travelling long distances.
          </p>
        </div>
      </section>

      {/* ---------- CAB OPTIONS FOR DIFFERENT TRAVEL NEEDS ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Fleet Options</span>
            <h2>Cab Options for Different Travel Needs</h2>
          </div>
          <div className="check-grid">
            {carsAvailable.map((c) => (
              <div className="item" key={c.title}>
                <span className="dot" />
                <p>
                  <b>{c.title}:</b> {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK A CAB (STEPS) ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Book a Cab in Noida?</h2>
            <p>
              When you know you will be travelling to the airport or to another city for a
              planned trip, booking in advance allows you to organize the trip around your
              schedule.
            </p>
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

      {/* ---------- WHY BOOK A CAB INSTEAD OF DRIVING ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Why Book a Cab Instead of Driving Yourself?</h2>
              <p>
                Taking a cab can be more convenient if you want to stay away from parking,
                directions, traffic-related driving anxiety, or driving on an unfamiliar road. It
                is also helpful while traveling with family, all the baggage, business meetings
                or for a trip to the airport or outstation.
              </p>
              <p>
                For longer trips, traveling as a group in a single vehicle may be easier to
                coordinate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AREAS COVERED ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Areas Covered Under Cab Service in Noida</h2>
              <p>
                You can avail the benefits of your cab booking in Noida in all major
                residential, commercial, and business areas of the city like Sector 15, Sector
                16, Sector 18, Sector 27, Sector 37, Sector 44, Sector 50, Sector 51, Sector 61,
                Sector 62, Sector 63, Sector 75, Sector 76, Sector 137 and Sector 142.
              </p>
              <p>
                Also, the service can be availed for travel between Noida and Greater Noida, as
                well as to and from the satellite towns of the NCR, depending on the route and
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AIRPORT, RAILWAY STATION & BUSINESS TRAVEL ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">More Services</span>
            <h2>Cab Service in Noida for Airport, Railway Station &amp; Business Travel</h2>
          </div>
          <div className="check-grid">
            {travelServices.map((t) => (
              <div className="item" key={t.title}>
                <span className="dot" />
                <p>
                  <b>{t.title}:</b> {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT MAKES A GOOD CAB SERVICE + FARE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>What Makes a Good Cab Service in Noida?</h2>
              <p>
                Clear information on making a booking, a good choice of vehicles, timely
                communication from drivers and simple advice on fares and any extra charges all
                help make a transport service reliable. Customers should also be made aware of
                any relevant cancellation, waiting, toll, parking or trip-extend policies before
                confirming a booking.
              </p>
              <p>
                These are the elements that help travellers to make an informed decision instead
                of opting for something which has the lowest fare in the market.
              </p>
            </div>

            <div className="seo-block">
              <h2>Cab Fare in Noida</h2>
              <p>
                Taxi charges in Noida are subject to a number of factors such as pick-up and
                drop location, distance, type of vehicle, duration of travel, kind of trip and
                trip type such as local, airport, one way and round trip. Tolls, parking, and
                other charges may also be added to the final fare.
              </p>
              <p>
                Please don't just blindly pick the cheapest taxi in Noida, but compare the total
                fare, exclusions, vehicle suitability and booking term for your own route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOK CAB SERVICE WITH GRAB YOUR CAB ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Book Cab Service in Noida with Grab Your Cab</h2>
              <p>
                Grab Your Cab provides transportation from Noida for your local journeys,
                Intercity travel, outstation or airport transfers. For a short city ride, one
                along for an important meeting, or to an outside destination, pick the trip type
                and vehicle type that best suits your needs.
              </p>
              <p>
                Reserve your cab in Noida with Grab Your Cab and hop on your next trip on your
                own preferred time of the day.
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
              <h2>Book Your Cab in Noida</h2>
              <p>
                Choose from local, airport, one-way, round-trip or outstation cab services and
                confirm your booking in a few simple steps.
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
            <h2>Frequently Asked Questions About Cab Service in Noida</h2>
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
      <section className="sec grey">
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
      </section>
      <Footer />
    </>
  );
}