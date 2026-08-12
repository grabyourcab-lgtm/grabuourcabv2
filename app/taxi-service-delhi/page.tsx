// import Footer from "@/components/site/Footer";
// import Header from "@/components/site/Header";
// import type { Metadata } from "next";
// import Link from "next/link";
// import TaxiCabsPage from "../admin/taxi/page";
// import TaxiCabForm from "@/components/TaxiCabForm";
// import TaxiSearch from "../taxi/page";

// export const metadata: Metadata = {
//   title: "Taxi Service in Delhi | Cab Booking & Outstation Taxi",
//   description:
//     "Book a reliable taxi service in Delhi with Grab Your Cab. Get local, airport, one-way and outstation cabs across Delhi NCR with easy booking.",
// };

// const pageCss = `
// /* ============================================================
//    GRAB YOUR CAB — taxi-service-delhi page styles
//    Maroon red #9f1c33 · slate #33414f · white/grey sections
//    ============================================================ */
// :root{
//   --red:#9f1c33;--red-dark:#7e1628;--slate:#33414f;--slate-dark:#2c2e36;
//   --ink:#212529;--text:#444;--muted:#666;--soft:#888;
//   --line:#e1e1e1;--line-2:#ddd;--bg:#ffffff;--grey:#f5f5f5;
//   --wa:#29ad00;--maxw:1200px;--r:6px;
//   --shadow:0 2px 10px rgba(0,0,0,.08);--shadow-lg:0 10px 30px rgba(0,0,0,.14);
// }
// *{margin:0;padding:0;box-sizing:border-box}
// html{scroll-behavior:smooth}
// body{font-family:"Inter","Segoe UI",Roboto,Arial,sans-serif;color:var(--text);background:var(--bg);
//   line-height:1.6;font-size:15px;-webkit-font-smoothing:antialiased;overflow-x:hidden}
// h1,h2,h3,h4{font-family:"Poppins","Inter",sans-serif;color:var(--ink);line-height:1.25}
// a{color:inherit;text-decoration:none}
// img{max-width:100%;display:block}
// .container{max-width:var(--maxw);margin:0 auto;padding:0 20px;width:100%}
// .sec{padding:55px 0}
// .sec.grey{background:var(--grey)}

// .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:14px;
//   padding:11px 24px;border-radius:4px;cursor:pointer;border:1px solid transparent;font-family:inherit;
//   white-space:nowrap;text-transform:uppercase;letter-spacing:.03em;transition:all .18s}
// .btn:active{transform:translateY(1px)}
// .btn-amber{background:var(--red);color:#fff}
// .btn-amber:hover{background:var(--red-dark);box-shadow:var(--shadow)}
// .btn-dark{background:var(--slate);color:#fff}
// .btn-dark:hover{background:var(--slate-dark)}
// .btn-wa{background:var(--wa);color:#fff}
// .btn-wa:hover{background:#218a00;box-shadow:var(--shadow)}
// .btn-ghost{background:#fff;color:var(--red);border-color:var(--red)}
// .btn-ghost:hover{background:var(--red);color:#fff}

// .crumbs{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--muted);margin-bottom:14px;flex-wrap:wrap}
// .crumbs a:hover{color:var(--red)}
// .crumbs b{color:var(--ink);font-weight:600}

// .page-hero{background:var(--slate);color:#fff;padding:44px 0}
// .page-hero .eyebrow{display:block;color:#ffb3c1;font-weight:600;font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:6px}
// .page-hero h1{color:#fff;font-size:clamp(26px,3.8vw,40px);font-weight:700}
// .page-hero .lead{color:#cfd6dd;font-size:15px;margin-top:12px;max-width:60ch}
// .page-hero .crumbs{margin-bottom:14px;color:#aab6c0}
// .page-hero .crumbs a{color:#cfd6dd}
// .page-hero .crumbs b{color:#fff}
// .page-hero .btn-ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.5)}
// .page-hero .btn-ghost:hover{background:#fff;color:var(--slate);border-color:#fff}
// .hero-ctas{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-top:20px}
// .loc-pills{display:flex;gap:8px;flex-wrap:wrap;margin-top:22px}
// .loc-pills span{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);
//   border-radius:3px;padding:6px 12px;font-size:12px;font-weight:600;color:#fff}

// /* SEO content blocks */
// .seo-wrap{max-width:840px}
// .seo-block{margin-bottom:30px}
// .seo-block h2{font-size:clamp(19px,2.6vw,25px);font-weight:700;margin-bottom:12px;position:relative;padding-bottom:10px}
// .seo-block h2::after{content:"";position:absolute;left:0;bottom:0;width:54px;height:3px;background:var(--red)}
// .seo-block p{color:var(--text);font-size:14.5px;margin-bottom:12px;line-height:1.75}
// .seo-block ul{margin:0 0 12px 20px}
// .seo-block ul li{color:var(--text);font-size:14.5px;line-height:1.8}

// .sec-head{text-align:center;margin-bottom:34px}
// .sec-head .eyebrow{display:block;color:var(--red);font-weight:600;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
// .sec-head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700;display:inline-block;position:relative;padding-bottom:14px}
// .sec-head h2::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:70px;height:3px;background:var(--red)}
// .sec-head p{color:var(--muted);margin:12px auto 0;max-width:64ch;font-size:14.5px}

// /* comparison table */
// .cmp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:#fff}
// table.cmp-table{width:100%;border-collapse:collapse;font-size:14px;min-width:520px}
// table.cmp-table thead th{background:var(--slate);color:#fff;text-align:left;padding:14px 18px;font-family:"Poppins";font-weight:600;font-size:13.5px;text-transform:uppercase;letter-spacing:.03em}
// table.cmp-table tbody td{padding:14px 18px;border-top:1px solid var(--line);color:var(--text);vertical-align:top}
// table.cmp-table tbody tr:nth-child(even){background:var(--grey)}
// table.cmp-table tbody td:first-child{font-weight:700;color:var(--ink);font-family:"Poppins";white-space:nowrap}

// /* steps */
// .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
// .step{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:26px 20px;text-align:center}
// .step .n{width:44px;height:44px;border-radius:50%;background:var(--grey);border:1px solid var(--line);display:grid;place-items:center;margin:0 auto 14px;font-family:"Poppins";font-weight:700;color:var(--red)}
// .step h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
// .step p{color:var(--muted);font-size:13px}

// /* faq */
// .faq{display:flex;flex-direction:column;gap:10px;max-width:840px;margin:0 auto}
// .faq details{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:0 18px}
// .faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;
//   padding:15px 0;font-weight:600;font-size:14.5px;font-family:"Poppins";color:var(--ink)}
// .faq summary::-webkit-details-marker{display:none}
// .faq .chev{width:28px;height:28px;border-radius:50%;background:var(--grey);display:grid;place-items:center;flex:none;transition:transform .2s;font-weight:700;color:var(--red)}
// .faq details[open] .chev{transform:rotate(45deg)}
// .faq details p{color:var(--muted);font-size:13.5px;padding:0 0 16px;max-width:66ch}

// /* banner */
// .banner{position:relative;border-radius:var(--r);overflow:hidden;min-height:220px;display:grid;place-items:center;text-align:center;padding:50px 24px;background:var(--red)}
// .banner.alt{background:var(--slate)}
// .banner .in{position:relative;z-index:2;color:#fff;max-width:640px}
// .banner h2{font-size:clamp(22px,3.2vw,32px);font-weight:700;color:#fff}
// .banner p{color:rgba(255,255,255,.85);margin:10px 0 20px;font-size:14.5px}
// .banner .hbtns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

// /* garage / location section */
// .garage-head{margin-bottom:30px}
// .garage-head h2{font-size:clamp(22px,3vw,30px);font-weight:700;color:var(--red)}
// .garage-head hr{border:0;border-top:1px solid var(--line);margin-top:16px}
// .garage-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:30px;align-items:stretch}
// .garage-map{position:relative;border-radius:var(--r);overflow:hidden;border:1px solid var(--line);min-height:360px;background:var(--grey)}
// .garage-map iframe{width:100%;height:100%;min-height:360px;border:0;display:block}
// .garage-map .maps-link{position:absolute;top:14px;left:14px;z-index:2;background:#fff;border:1px solid var(--line);border-radius:4px;
//   padding:8px 14px;font-weight:600;font-size:13px;color:var(--red);display:inline-flex;align-items:center;gap:6px;box-shadow:var(--shadow)}
// .garage-info{display:flex;flex-direction:column;gap:26px;justify-content:center}
// .info-block{display:flex;gap:16px;align-items:flex-start}
// .info-block .ico{width:48px;height:48px;border-radius:10px;border:1.5px solid var(--red);display:grid;place-items:center;flex:none;color:var(--red)}
// .info-block .ico svg{width:20px;height:20px}
// .info-block h3{font-size:19px;font-weight:700;margin-bottom:6px}
// .info-block p{color:var(--muted);font-size:14.5px;line-height:1.6;margin:0}
// .info-block a{color:var(--muted)}
// .info-block a:hover{color:var(--red)}

// @media (max-width:1000px){
//   .steps{grid-template-columns:repeat(2,1fr)}
//   .garage-grid{grid-template-columns:1fr}
//   .garage-map{min-height:300px}
//   .garage-map iframe{min-height:300px}
// }
// @media (max-width:620px){
//   .container{padding:0 16px}
//   .sec{padding:36px 0}
//   .page-hero{padding:32px 0}
//   .hero-ctas .btn{flex:1;padding:12px 8px;font-size:13px}
//   .steps{grid-template-columns:1fr}
//   .banner{min-height:200px;padding:34px 16px}
//   .banner .hbtns{width:100%}
//   .banner .hbtns .btn{width:100%}
//   table.cmp-table{font-size:13px}
//   .garage-map{min-height:240px}
//   .garage-map iframe{min-height:240px}
//   .info-block .ico{width:42px;height:42px}
// }
// `;

// const whyChoose = [
//   { title: "24/7 Service", text: "Taxi bookings and support are available 24 hours a day." },
//   { title: "WhatsApp Booking", text: "Travellers can send their trip details and book a trip on WhatsApp." },
//   { title: "Verified Drivers", text: "The company claims that its taxi services come with verified drivers." },
//   { title: "Tended Vehicles", text: "Vehicle maintenance is a Grab Your Cab priority." },
//   { title: "Different Vehicle Categories", text: "Budget cars, sedans, SUVs/MUVs and luxury cars." },
//   { title: "Transparent Fares", text: "Clear fares with select fixed-fare routes shown on the website." },
// ];

// const bookingSteps = [
//   "Choose taxi service and the vehicle that best suits your needs.",
//   "Enter your pick up and drop location.",
//   "Mention the date of travel and the time of pick up.",
//   "Share return-trip or vehicle details, then confirm on WhatsApp.",
// ];

// const whoCanUse = [
//   "Airport passengers travelling to and from Delhi",
//   "Families travelling in and around Delhi NCR",
//   "Business and corporate travellers",
//   "Tourists visiting Delhi and its neighbourhoods",
//   "Travellers from Delhi to NCR cities",
//   "Outstation travellers planning road trips",
//   "Larger groups needing tailored travel plans",
// ];

// const comparisonRows = [
//   { option: "Private Cab", best: "Door-to-door travel", consider: "Fare varies by route and vehicle" },
//   { option: "Metro", best: "Regular city travel", consider: "Limited to metro stations and routes" },
//   { option: "Auto Rickshaw", best: "Short local journeys", consider: "Less suitable for large luggage or groups" },
//   { option: "Bus", best: "Budget public transport", consider: "Fixed routes and schedules" },
// ];

// const advice = [
//   "Know the exact pick up location before you start your journey.",
//   "Provide your flight/train details while booking an airport/station transfer.",
//   "Reserve your space early for early morning, late night, or busy-time travel.",
//   "Check the type of vehicle before confirming.",
//   "Enquire about outstation fares in advance.",
//   "Keep the driver's details and booking confirmation with you at all times.",
//   "Mention if you have luggage or need special travel arrangements.",
// ];

// const faqs = [
//   {
//     q: "How can I book a taxi in Delhi?",
//     a: "You can request a taxi from Grab Your Cab using the booking interface on its website, where you provide pickup, destination, date, time and car-type details. Bookings can also be confirmed through WhatsApp.",
//   },
//   {
//     q: "Does Grab Your Cab provide 24-hour taxi service in Delhi?",
//     a: "Yes. The taxi service is available 24/7, making it suitable for early-morning airport transfers, late-night journeys, and travel outside conventional business hours.",
//   },
//   {
//     q: "Can I hire a taxi from Delhi for an outstation trip?",
//     a: "Yes. Grab Your Cab provides outstation taxi services from Delhi to destinations outside the city. Fare depends on route, vehicle category, distance, travel requirements and applicable charges.",
//   },
//   {
//     q: "Does Grab Your Cab provide airport taxi service in Delhi?",
//     a: "Yes. Airport transfer services cover Delhi's Indira Gandhi International Airport and other listed airport routes. You can share flight information and pickup/drop-off requirements while booking.",
//   },
//   {
//     q: "Does Grab Your Cab offer one-way taxi service from Delhi?",
//     a: "Yes. One-way and inter-city travel options are available for suitable routes. Share your exact pickup and destination for a quotation confirming vehicle and fare.",
//   },
//   {
//     q: "What areas does Grab Your Cab cover in Delhi NCR?",
//     a: "Coverage includes Delhi, Noida, Greater Noida West, Ghaziabad, Gurugram, and Faridabad, and can vary depending on the specific journey.",
//   },
//   {
//     q: "What types of cabs are available in Delhi?",
//     a: "The fleet includes hatchbacks, sedans, compact SUVs, SUVs/MUVs, and luxury vehicles. Larger groups can request tempo travellers and luxury buses.",
//   },
//   {
//     q: "What information should I provide when booking a Delhi taxi?",
//     a: "Provide pickup location, destination, travel date, preferred pickup time, number of passengers, vehicle preference, and any luggage or travel requirements. Flight/train details help with station and airport transfers.",
//   },
//   {
//     q: "Is a private taxi better than public transport in Delhi?",
//     a: "A private taxi is convenient for door-to-door transport, flexible pickup/drop locations, luggage space, or travel between points not directly connected by public transport. Metro and buses suit fixed, regular routes.",
//   },
//   {
//     q: "Can I book a cab online in Delhi?",
//     a: "Yes. Grab Your Cab supports online booking via its website and also accepts enquiries on WhatsApp, where you can confirm the vehicle and fare.",
//   },
// ];

// export default function TaxiServiceDelhiPage() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: pageCss }} />
//     <Header/>
//       {/* ---------- HERO ---------- */}
//       <section className="page-hero">
//         <div className="container">
//           <div className="crumbs">
//             <Link href="/">Home</Link>
//             <span>/</span>
//             <b>Taxi Service in Delhi</b>
//           </div>
//           <span className="eyebrow">Delhi NCR · 24/7 Cabs</span>
//           <h1>Taxi Service in Delhi – Book Now from Grab Your Cab</h1>
//           <p className="lead">
//             Local trips, airport transfers, business travel or an outstation run — Grab Your Cab
//             offers verified drivers, well-maintained cars and transparent fares across Delhi NCR,
//             24/7.
//           </p>
//           <div className="hero-ctas">
//             <a href="https://wa.me/910000000000" className="btn btn-wa">
//               Book on WhatsApp
//             </a>
//             <a href="tel:+910000000000" className="btn btn-ghost">
//               Call to Book
//             </a>
//           </div>
//           <div className="loc-pills">
//             <span>Delhi</span>
//             <span>Noida</span>
//             <span>Gurugram</span>
//             <span>Ghaziabad</span>
//             <span>Faridabad</span>
//           </div>
//         </div>
//       </section>

//       <TaxiSearch/>

//       {/* ---------- INTRO + CONTENT ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <p>
//                 For all your travel needs in and around Delhi, be it a local trip, airport
//                 transfer, business travel, or an outing, Grab Your Cab provides the best taxi
//                 service in Delhi across the Delhi NCR. The company operates 24/7 and lets users
//                 book taxis via its website and on WhatsApp, with verified drivers, well-maintained
//                 vehicles and transparent fares.
//               </p>
//               <p>
//                 Grab Your Cab offers discounted taxi services from Delhi to NCR hubs such as
//                 Noida, Gurugram, Ghaziabad and Faridabad. Users can select the appropriate
//                 vehicle and enter their pickup, destination, date and travel details before
//                 booking the ride.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>What Does the Taxi Service in Delhi Include?</h2>
//               <p>
//                 The taxi service in Delhi covers point-to-point city travel as well as drives to
//                 and from Delhi between nearby locations. Unlike public transport, a private cab
//                 can take passengers directly to their destination from the exact pickup point —
//                 handy when you're carrying luggage, travelling with family, or heading to a
//                 meeting or the airport.
//               </p>
//               <p>
//                 Grab Your Cab offers city taxis, inter-city cabs, local cab packages, and airport
//                 and outstation travel solutions, available 24/7 with bookings confirmed over
//                 WhatsApp along with vehicle, driver and fare details.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>Cab Service in Delhi for Local and Outstation Travel</h2>
//               <p>
//                 Residential enclaves, commercial hubs, railway stations, airports and major NCR
//                 cities are all connected through Delhi's road network, making a private cab
//                 convenient for short city hops as well as long road trips.
//               </p>
//               <p>
//                 Grab Your Cab's Delhi NCR coverage spans Delhi, Noida, Gurugram, Ghaziabad and
//                 Faridabad — suitable for commuters across the wider National Capital Region, not
//                 just within Delhi's administrative boundary. For airport journeys, it also serves
//                 IGI Airport and Noida International Airport, Jewar; the final fare depends on the
//                 route and car selected.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>Why Choose Grab Your Cab for Taxi Service in Delhi?</h2>
//               <p>Selecting a cab is often about more than getting from point A to point B:</p>
//               <ul>
//                 {whyChoose.map((item) => (
//                   <li key={item.title}>
//                     <b>{item.title}:</b> {item.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- HOW TO BOOK ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Simple Process</span>
//             <h2>How to Book a Taxi in Delhi?</h2>
//             <p>Booking a cab with Grab Your Cab is hassle-free — no separate app required.</p>
//           </div>
//           <div className="steps">
//             {bookingSteps.map((step, i) => (
//               <div className="step" key={step}>
//                 <div className="n">{i + 1}</div>
//                 <p>{step}</p>
//               </div>
//             ))}
//           </div>

//           <div className="banner alt" style={{ marginTop: 40 }}>
//             <div className="in">
//               <h2>Heading to the Airport or a Meeting?</h2>
//               <p>
//                 Share your pickup and drop details on WhatsApp and get a verified driver,
//                 vehicle and fare confirmed in minutes.
//               </p>
//               <div className="hbtns">
//                 <a href="https://wa.me/910000000000" className="btn btn-wa">
//                   Book on WhatsApp
//                 </a>
//                 <a href="tel:+910000000000" className="btn btn-ghost">
//                   Call Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- WHO CAN USE + AVAILABILITY ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Who Can Use a Delhi Taxi Service?</h2>
//               <p>Private taxis are suitable for all kinds of trips, including:</p>
//               <ul>
//                 {whoCanUse.map((item) => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//               <p>
//                 Grab Your Cab also caters to corporate clients and larger group-transportation
//                 needs such as tempo travellers and luxury buses whenever required.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>Service Availability in Delhi NCR Region</h2>
//               <p>
//                 Grab Your Cab's cab service in Delhi covers travel within the city and across
//                 Delhi NCR. Presently listed coverage areas are Delhi, Noida, Greater Noida West,
//                 Ghaziabad, Gurugram and Faridabad, with more locations expected to be added over
//                 time.
//               </p>
//               <p>
//                 For a Delhi-to-NCR ride, travellers can enter the precise pickup and destination
//                 for a quotation — important for trips to and from residential areas, offices,
//                 hotels, airports and railway stations, where exact distance determines the fare.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>Options for Cab and Vehicle Type</h2>
//               <p>
//                 Vehicle availability is subject to route and booking conditions. Grab Your Cab's
//                 fleet ranges from hatchbacks, sedans and compact SUVs to SUVs/MUVs and luxury
//                 cars, with brands like Maruti Suzuki, Hyundai, Toyota, Tata, Mahindra, Kia, Audi,
//                 Mercedes and BMW.
//               </p>
//               <p>
//                 For larger groups, tempo travellers ranging from 9 to 26 seaters and luxury buses
//                 with 27 to 55 seaters are also available.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>Rates for Outstation Cabs in Delhi</h2>
//               <p>
//                 There is no fixed taxi rate in Delhi for outstation trips — fares vary with
//                 distance, vehicle type, travel time and booking demand. When comparing the
//                 cheapest cab services in Delhi, factor in the entire journey cost rather than just
//                 the first-mile fare: tolls, parking, waiting time and route-specific charges all
//                 play a part.
//               </p>
//               <p>
//                 Grab Your Cab displays selected route fares online and confirms the vehicle and
//                 fare at the time of booking, with quotes available for outstation destinations
//                 before you confirm the ride.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- COMPARISON TABLE ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Compare Your Options</span>
//             <h2>Private Cab vs Other Travel Options</h2>
//             <p>
//               A private cab is especially convenient when direct pickup, luggage space, flexible
//               timing or inter-city travel matters.
//             </p>
//           </div>
//           <div className="cmp-table-wrap">
//             <table className="cmp-table">
//               <thead>
//                 <tr>
//                   <th>Option</th>
//                   <th>Best For</th>
//                   <th>Main Consideration</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonRows.map((row) => (
//                   <tr key={row.option}>
//                     <td>{row.option}</td>
//                     <td>{row.best}</td>
//                     <td>{row.consider}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* ---------- MID BANNER: OUTSTATION ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="banner">
//             <div className="in">
//               <h2>Planning an Outstation Trip from Delhi?</h2>
//               <p>
//                 Get an upfront quote for your route before you travel — no surprises on
//                 distance, tolls or waiting charges.
//               </p>
//               <div className="hbtns">
//                 <a href="https://wa.me/910000000000" className="btn btn-dark">
//                   Get a Quote on WhatsApp
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- ADVICE + BANNER ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Advice When Booking a Cab in Delhi</h2>
//               <ul>
//                 {advice.map((tip) => (
//                   <li key={tip}>{tip}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="banner">
//             <div className="in">
//               <h2>Book a Taxi in Delhi with Grab Your Cab</h2>
//               <p>
//                 Local trips, airport transfers, one-way rides or outstation cabs — Grab Your Cab
//                 covers all your Delhi NCR travel needs with 24/7 support.
//               </p>
//               <div className="hbtns">
//                 <a href="https://wa.me/910000000000" className="btn btn-wa">
//                   Book on WhatsApp
//                 </a>
//                 <a href="tel:+910000000000" className="btn btn-ghost">
//                   Call Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- FAQ ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Got Questions?</span>
//             <h2>Frequently Asked Questions</h2>
//           </div>
//           <div className="faq">
//             {faqs.map((item) => (
//               <details key={item.q}>
//                 <summary>
//                   {item.q}
//                   <span className="chev">+</span>
//                 </summary>
//                 <p>{item.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- OUR GARAGE / LOCATION ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="garage-head">
//             <h2>Our Taxi Service Office in Delhi</h2>
//             <hr />
//           </div>
//           <div className="garage-grid">
//             <div className="garage-map">
//               <a
//                 className="maps-link"
//                 href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Open in Maps ↗
//               </a>
//               <iframe
//                 title="Grab Your Cab garage location"
//                 src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>

//             <div className="garage-info">
//               <div className="info-block">
//                 <span className="ico">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                 </span>
//                 <div>
//                   <h3>Our Location</h3>
//                   <p>
//                    Rz-1110/A gali no 10 sadh nagar palam colony new delhi -110045
//                   </p>
//                 </div>
//               </div>

//               <div className="info-block">
//                 <span className="ico">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
//                   </svg>
//                 </span>
//                 <div>
//                   <h3>Phone Number</h3>
//                   <p>
//                     <a href="tel:+917522817555">+91-7522817555</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer/>
//     </>
//   );
// }

import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";
import TaxiCabsPage from "../admin/taxi/page";
import TaxiCabForm from "@/components/TaxiCabForm";
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Taxi Service in Delhi | Cab Booking & Outstation Taxi",
  description:
    "Book a reliable taxi service in Delhi with Grab Your Cab. Get local, airport, one-way and outstation cabs across Delhi NCR with easy booking.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — taxi-service-delhi page styles
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

/* comparison table */
.cmp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:#fff}
table.cmp-table{width:100%;border-collapse:collapse;font-size:14px;min-width:520px}
table.cmp-table thead th{background:var(--slate);color:#fff;text-align:left;padding:14px 18px;font-family:"Poppins";font-weight:600;font-size:13.5px;text-transform:uppercase;letter-spacing:.03em}
table.cmp-table tbody td{padding:14px 18px;border-top:1px solid var(--line);color:var(--text);vertical-align:top}
table.cmp-table tbody tr:nth-child(even){background:var(--grey)}
table.cmp-table tbody td:first-child{font-weight:700;color:var(--ink);font-family:"Poppins";white-space:nowrap}

/* steps */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.step{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:26px 20px;text-align:center}
.step .n{width:44px;height:44px;border-radius:50%;background:var(--grey);border:1px solid var(--line);display:grid;place-items:center;margin:0 auto 14px;font-family:"Poppins";font-weight:700;color:var(--red)}
.step h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
.step p{color:var(--muted);font-size:13px}

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
  .steps{grid-template-columns:repeat(2,1fr)}
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
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  table.cmp-table{font-size:13px}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

const whyChoose = [
  { title: "24/7 Service", text: "Taxi bookings and support are available 24 hours a day." },
  { title: "WhatsApp Booking", text: "Travellers can send their trip details and book a trip on WhatsApp." },
  { title: "Verified Drivers", text: "The company claims that its taxi services come with verified drivers." },
  { title: "Tended Vehicles", text: "Vehicle maintenance is a Grab Your Cab priority." },
  { title: "Different Categories of Vehicles", text: "Budget cars, sedans, SUVs/MUVs and luxury cars." },
  { title: "City and Inter-City Trips", text: "Passengers can book city rides as well as long haul rides." },
  { title: "Transparent Fares", text: "Clear fares with select fixed-fare routes shown on the website." },
];

const bookingSteps = [
  "Choose taxi service and the vehicle that best suits your needs.",
  "Enter your pick up and drop location.",
  "Mention the date of travel and the time of pick up.",
  "Share any relevant details about your return trip or vehicle.",
  "Book via WhatsApp to confirm.",
  "Receive details of the vehicle, the driver and the fare.",
];

const whoCanUse = [
  "Airport passengers travelling to and from Delhi",
  "Families travelling in and around Delhi NCR",
  "Business and corporate travellers",
  "Tourists visiting Delhi and its neighbourhoods",
  "Travellers from Delhi to NCR cities",
  "Outstation travellers planning road trips",
  "Larger groups needing tailored travel plans",
];

const comparisonRows = [
  { option: "Booked Cab", best: "Door-to-door travel", consider: "Fare varies by route and vehicle" },
  { option: "Metro", best: "Regular city travel", consider: "Limited to metro stations and routes" },
  { option: "Auto Rickshaw", best: "Short local journeys", consider: "Less suitable for large luggage or groups" },
  { option: "Bus", best: "Budget public transport", consider: "Fixed routes and schedules" },
];

const advice = [
  "Know the exact pick up location before you start your journey.",
  "Provide your flight/train details while booking the transfer from airport/station.",
  "Reserve your space early for travel during the early morning, late night, or busy times.",
  "Before confirming, check the type of vehicle.",
  "Enquire about the outstation fares in advance.",
  "Keep the driver's details and booking confirmation with you at all times.",
  "Please indicate if you have luggage or require special travel arrangements.",
];

const faqs = [
  {
    q: "How can I book a taxi in Delhi?",
    a: "You can request a taxi from Grab Your Cab by using the booking interface on its website, where you can provide pickup, destination, date, time and car-type details. Bookings can also be confirmed through WhatsApp.",
  },
  {
    q: "Does Grab Your Cab provide 24-hour taxi service in Delhi?",
    a: "Yes. Grab Your Cab states that its taxi service is available 24/7, making it suitable for early-morning airport transfers, late-night journeys, and travel outside conventional business hours.",
  },
  {
    q: "Can I hire a taxi from Delhi for an outstation trip?",
    a: "Yes. Grab Your Cab provides outstation taxi services from Delhi to destinations outside the city. The applicable fare depends on factors such as route, vehicle category, distance, travel requirements and applicable charges.",
  },
  {
    q: "Does Grab Your Cab provide airport taxi service in Delhi?",
    a: "Yes. Grab Your Cab provides airport transfer services involving Delhi's Indira Gandhi International Airport and other listed airport routes. Customers can provide their flight information and pickup or drop-off requirements when making a booking.",
  },
  {
    q: "Does Grab Your Cab offer one-way taxi service from Delhi?",
    a: "Yes. One-way and inter-city travel options are available for suitable routes. Customers should provide their exact pickup and destination when requesting a quotation so the applicable vehicle and fare can be confirmed.",
  },
  {
    q: "What areas does Grab Your Cab cover in Delhi NCR?",
    a: "Grab Your Cab provides services across Delhi NCR, including Delhi, Noida, Greater Noida West, Ghaziabad, Gurugram, and Faridabad. Coverage can vary depending on the specific journey and destination.",
  },
  {
    q: "What types of cabs are available in Delhi?",
    a: "Grab Your Cab's listed fleet includes hatchbacks, sedans, compact SUVs, SUVs/MUVs, and luxury vehicles. Vehicle availability depends on the travel requirement and booking conditions. Larger groups can also request tempo travellers and luxury buses.",
  },
  {
    q: "What information should I provide when booking a Delhi taxi?",
    a: "For an accurate booking, provide the pickup location, destination, travel date, preferred pickup time, number of passengers, vehicle preference if applicable, and any important luggage or travel requirements. Flight or train details are useful for airport and railway-station transfers.",
  },
  {
    q: "Is a pre-booked taxi better than public transport in Delhi?",
    a: "A pre-booked taxi can be more convenient when you need door-to-door transportation, flexible pickup and drop-off locations, luggage space, or travel between destinations not directly connected by public transport. Metro and buses can be practical alternatives for fixed routes and regular city travel.",
  },
  {
    q: "Can I book a cab online in Delhi?",
    a: "Yes. Grab Your Cab supports online cab booking through its website and also accepts booking enquiries through WhatsApp. Customers can provide their journey details and confirm the available vehicle and fare.",
  },
];

export default function TaxiServiceDelhiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
    <Header/>
      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <b>Taxi Service in Delhi</b>
          </div>
          <span className="eyebrow">Delhi NCR · 24/7 Cabs</span>
          <h1>Taxi Service in Delhi – Book Now from Grab Your Cab</h1>
          <p className="lead">
            Local trips, airport transfers, business travel or an outstation run — Grab Your Cab
            offers verified drivers, well-maintained cars and transparent fares across Delhi NCR,
            24/7.
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
            <span>Faridabad</span>
          </div>
        </div>
      </section>

      <TaxiSearch/>

      {/* ---------- INTRO + CONTENT ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <p>
                For all your travel needs in and around Delhi, be it a local trip, airport
                transfer, business travel, or an outing, Grab Your Cab provides the best taxi
                service in Delhi across the Delhi NCR. The company functions 24/7 and allows
                users to book taxis via its website and on WhatsApp, with verified drivers,
                well-maintained vehicles and transparent fares.
              </p>
              <p>
                Grab Your Cab provides discounted taxi services from Delhi to NCR hubs such as
                Noida, Gurugram, Ghaziabad and Faridabad for the flexible use of your money.
                Users can select the appropriate vehicle and input their pickup, destination,
                date and travel specifics before booking the ride.
              </p>
            </div>

            <div className="seo-block">
              <h2>What Does the Taxi Service in Delhi Include?</h2>
              <p>
                The taxi service in Delhi covers point-to-point city travel as well as drives to
                and from Delhi between nearby locations. In contrast to public transport, a
                personal cab can take passengers directly to their destination from the exact
                location they want to be picked up — that can come handy if you have luggage,
                are travelling with family, or are heading for a meeting or the airport.
              </p>
              <p>
                We have city taxis, inter-city cabs, local cab packages, and airport and
                outstation travel solutions. Its taxi service is available 24/7 and bookings can
                be confirmed via WhatsApp with details of the vehicle, driver and fare.
              </p>
            </div>

            <div className="seo-block">
              <h2>Cab Service in Delhi for Local and Outstation Travel</h2>
              <p>
                Residential enclaves, commercial hubs, railway stations, airports and major NCR
                cities are all connected through Delhi's road map, so a dedicated cab can be
                convenient for short jaunts within the city as much as for a long road trip.
              </p>
              <p>
                Grab Your Cab's Delhi NCR coverage spans Delhi, Noida, Gurugram, Ghaziabad and
                Faridabad — that makes this service suitable for commuters within the broader
                National Capital Region, and not just those within the administrative boundary
                of Delhi. As for airport journeys, it also offers services to Delhi's IGI Airport
                and the Noida International Airport, Jewar; the website currently shows selected
                route-specific airport fares, but the final fare depends on the route and the car.
              </p>
            </div>

            <div className="seo-block">
              <h2>Why Choose Grab Your Cab for Taxi Service in Delhi?</h2>
              <p>
                Selecting a cab is frequently about more than just getting from point A to point
                B. Grab Your Cab caters to realistic travelling needs:
              </p>
              <ul>
                {whyChoose.map((item) => (
                  <li key={item.title}>
                    <b>{item.title}:</b> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Book a Taxi in Delhi?</h2>
            <p>
              Booking a cab with Grab Your Cab is hassle-free — this is the procedure for those
              who wish to book a cab online in Delhi without using any other application.
            </p>
          </div>
          <div className="steps">
            {bookingSteps.map((step, i) => (
              <div className="step" key={step}>
                <div className="n">{i + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <div className="banner alt" style={{ marginTop: 40 }}>
            <div className="in">
              <h2>Heading to the Airport or a Meeting?</h2>
              <p>
                Share your pickup and drop details on WhatsApp and get a verified driver,
                vehicle and fare confirmed in minutes.
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

      {/* ---------- WHO CAN USE + AVAILABILITY ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Who Can Use a Delhi Taxi Service?</h2>
              <p>Point-to-point taxis are suitable for all kinds of trips, for example:</p>
              <ul>
                {whoCanUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Grab Your Cab also caters to the needs of corporate clients and provides an
                option for larger group-transportation needs such as tempo travellers and
                luxury buses, whenever the need arises.
              </p>
            </div>

            <div className="seo-block">
              <h2>Service Availability in Delhi NCR Region</h2>
              <p>
                Grab Your Cab's cab service in Delhi provides travel to all around the places,
                within the city and in the Delhi NCR. Presently the listed coverage areas are
                Delhi, Noida, Greater Noida West, Ghaziabad, Gurugram and Faridabad, with more
                service locations perhaps to be added to the list in the future.
              </p>
              <p>
                For a Delhi-to-NCR ride, travellers can enter the precise location of pickup and
                destination for a quotation — important for trips to and from residential areas,
                offices, hotels, airports and railway stations, where the exact distance
                determines the particular requirement of the trip.
              </p>
            </div>

            <div className="seo-block">
              <h2>Options for Cab and Vehicle Type</h2>
              <p>
                Vehicle availability is subject to the route and booking conditions. Grab Your
                Cab has a diverse fleet of vehicles ranging from hatchbacks, sedans, compact
                SUVs, SUVs/MUVs and luxury cars, with brands like Maruti Suzuki, Hyundai, Toyota,
                Tata, Mahindra, Kia, Audi, Mercedes and BMW.
              </p>
              <p>
                For a big party, the company has tempo travellers ranging from 9 to 26 seaters
                and luxury buses with 27 to 55 seaters.
              </p>
            </div>

            <div className="seo-block">
              <h2>Rates for Outstation Cabs in Delhi</h2>
              <p>
                There is no fixed taxi fare in Delhi for outstation trips, as it varies with
                distance, vehicle type, travel time and booking demand. While comparing cab
                fares from the cheapest cab services in Delhi, customers should take into
                account the entire journey cost instead of just the first-mile fare — the final
                amount may be influenced by distance, type of vehicle, tolls, parking, waiting
                time and any other charges specific to the route.
              </p>
              <p>
                Grab Your Cab shows you the best selected route fares online and confirms the
                vehicle and fare on booking. Customers can even get a quote for their outstation
                destination before confirming the ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMPARISON TABLE ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Compare Your Options</span>
            <h2>Booked Cab vs Other Travel Options</h2>
            <p>
              A booked cab can be especially convenient when direct pickup, luggage space,
              flexible timing or inter-city travel is important.
            </p>
          </div>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Best For</th>
                  <th>Main Consideration</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.option}>
                    <td>{row.option}</td>
                    <td>{row.best}</td>
                    <td>{row.consider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- MID BANNER: OUTSTATION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="banner">
            <div className="in">
              <h2>Planning an Outstation Trip from Delhi?</h2>
              <p>
                Get an upfront quote for your route before you travel — no surprises on
                distance, tolls or waiting charges.
              </p>
              <div className="hbtns">
                <a href="https://wa.me/910000000000" className="btn btn-dark">
                  Get a Quote on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ADVICE + BANNER ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Advice When Booking a Cab in Delhi</h2>
              <ul>
                {advice.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="banner">
            <div className="in">
              <h2>Book a Taxi in Delhi with Grab Your Cab</h2>
              <p>
                If you are looking for a Delhi taxi service for a local trip, an airport
                transfer, a one-way taxi route, or an outstation cab, Grab Your Cab has all your
                needs covered across Delhi NCR with 24/7 support. Through its booking service
                you can send your travel details and get to know your vehicle, driver and fare
                before the journey.
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

      {/* ---------- OUR GARAGE / LOCATION ---------- */}
      <section className="sec">
        <div className="container">
          <div className="garage-head">
            <h2>Our Taxi Service Office in Delhi</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              
                className="maps-link"
                href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
             <a >
                Open in Maps ↗
              </a>
              <iframe
                title="Grab Your Cab garage location"
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
                  <p>
                   Rz-1110/A gali no 10 sadh nagar palam colony new delhi -110045
                  </p>
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
      <Footer/>
    </>
  );
}