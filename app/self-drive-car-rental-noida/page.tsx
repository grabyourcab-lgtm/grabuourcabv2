// import Footer from "@/components/site/Footer";
// import Header from "@/components/site/Header";
// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Self Drive Car Rental in Noida | Flexible Car Hire",
//   description:
//     "Book self drive cars in Noida with flexible rental durations and vehicle options. Check requirements, pricing, availability and terms before booking.",
// };

// const pageCss = `
// /* ============================================================
//    GRAB YOUR CAB — self-drive-car-rental-noida page styles
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

// /* vehicle / service type grid */
// .fleet-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
// .fleet-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;text-align:left}
// .fleet-card .img-wrap{width:100%;aspect-ratio:4/3;background:var(--grey);overflow:hidden}
// .fleet-card .img-wrap img{width:100%;height:100%;object-fit:cover;display:block}
// .fleet-card .body{padding:20px 22px}
// .fleet-card h3{font-size:16px;font-weight:600;margin-bottom:8px}
// .fleet-card p{color:var(--muted);font-size:13.5px;line-height:1.6}

// /* steps */
// .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
// .step{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:26px 20px;text-align:center}
// .step .n{width:44px;height:44px;border-radius:50%;background:var(--grey);border:1px solid var(--line);display:grid;place-items:center;margin:0 auto 14px;font-family:"Poppins";font-weight:700;color:var(--red)}
// .step h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
// .step p{color:var(--muted);font-size:13px}

// /* checklist grid */
// .check-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 24px}
// .check-grid .item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:12px 14px}
// .check-grid .item .dot{width:8px;height:8px;border-radius:50%;background:var(--red);margin-top:6px;flex:none}
// .check-grid .item p{color:var(--text);font-size:14px;margin:0}

// /* comparison table */
// .cmp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:#fff}
// table.cmp-table{width:100%;border-collapse:collapse;font-size:14px;min-width:420px}
// table.cmp-table thead th{background:var(--slate);color:#fff;text-align:left;padding:14px 18px;font-family:"Poppins";font-weight:600;font-size:13.5px;text-transform:uppercase;letter-spacing:.03em}
// table.cmp-table tbody td{padding:14px 18px;border-top:1px solid var(--line);color:var(--text);vertical-align:top}
// table.cmp-table tbody tr:nth-child(even){background:var(--grey)}
// table.cmp-table tbody td:first-child{font-weight:700;color:var(--ink);font-family:"Poppins"}

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
//   .fleet-grid{grid-template-columns:repeat(2,1fr)}
//   .steps{grid-template-columns:repeat(2,1fr)}
//   .check-grid{grid-template-columns:1fr}
//   .garage-grid{grid-template-columns:1fr}
//   .garage-map{min-height:300px}
//   .garage-map iframe{min-height:300px}
// }
// @media (max-width:620px){
//   .container{padding:0 16px}
//   .sec{padding:36px 0}
//   .page-hero{padding:32px 0}
//   .hero-ctas .btn{flex:1;padding:12px 8px;font-size:13px}
//   .fleet-grid{grid-template-columns:1fr}
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

// /* Why Choose a Self Drive Car Rental in Noida? */
// const whyChooseChecklist = [
//   "Freedom to design your own itinerary",
//   "More privacy and personal space",
//   "Easy to travel to many places in one trip",
//   "Perfect for rural as well as urban travel",
//   "Option to rent for varying lengths of time",
//   "Vehicle categories you can select from according to your needs",
// ];

// /* Self Drive Cars Available for Rent in Noida */
// const carsAvailable = [
//   { title: "Maruti Cars", text: "Maruti are great for singles, couples and small families. Their small size enable finger-friendly city driving with easy daily commuting." },
//   { title: "Kia Cars", text: "Kia have more cabin and boot room and so are appropriate for business travel, family travel and long drives." },
//   { title: "Mahindra Cars", text: "Mahindra cars can be a more practical option for families and groups with more passengers and luggage, especially on a road trip." },
//   { title: "Luxury Cars", text: "There are certain benefits to owning an automatic, they can be easier to drive especially in stop and go city traffic. Car rental availability varies, so please check." },
// ];

// /* How to Book a Self Drive Car in Noida */
// const bookingSteps = [
//   { title: "Choose Your Car", text: "Choose an available car that meets your needs." },
//   { title: "Select Date & Duration", text: "Select the date and length of your hire." },
//   { title: "Complete the Form", text: "Complete the form with your driving and customer information." },
//   { title: "Confirm Price & Terms", text: "Confirm the rental price, security deposit, and terms and conditions." },
//   { title: "Finalize Reservation", text: "Finalize your reservation and make the necessary transportation arrangements." },
//   { title: "Return the Car", text: "You should return the car at the end of the rental period." },
// ];

// /* Self Drive Car Rental Terms and Conditions */
// const termsChecklist = [
//   "Age and licence requirements",
//   "The security deposit",
//   "Policy on fuel",
//   "Allowance in kilometres",
//   "Late return fines",
//   "Cancelation and refund policy",
//   "Rental Extension Rules",
//   "Damage to and condition of the vehicle",
//   "Restrictions on interstate travel",
// ];

// /* Self Drive Car Rental in Noida vs Cab Service */
// const comparisonRows = [
//   { self: "Customer drives the vehicle", cab: "Professional driver operates the vehicle" },
//   { self: "Greater control over route and schedule", cab: "Driver handles driving and navigation" },
//   { self: "More personal privacy", cab: "Convenient when you do not want to drive" },
//   { self: "Suitable for people who enjoy driving", cab: "Suitable for passengers who prefer driver" },
// ];

// const faqs = [
//   {
//     q: "What is self drive car rental in Noida?",
//     a: "Self-drive car rental allows you to rent a vehicle and drive it yourself for an agreed rental period without a professional driver.",
//   },
//   {
//     q: "How much does self drive car rental cost in Noida?",
//     a: "Pricing depends on the car type, rental duration, demand, kilometre limits, and applicable charges. Confirm the current rental price before booking.",
//   },
//   {
//     q: "What documents are required?",
//     a: "A valid driving licence and identity or address proof may be required. Exact documentation depends on the rental provider's verification policy.",
//   },
//   {
//     q: "Can I rent a self drive car for one day?",
//     a: "Yes, one-day rentals may be available depending on vehicle availability and the rental provider's terms.",
//   },
//   {
//     q: "Can I rent a self drive car for a week?",
//     a: "Weekly rental options may be available. Confirm the vehicle, pricing, kilometre limit, and applicable weekly rental terms before booking.",
//   },
//   {
//     q: "Is a security deposit required?",
//     a: "A security deposit may be required depending on the vehicle and rental policy. Confirm the amount and refund conditions before booking.",
//   },
//   {
//     q: "Can I take a rental car from Noida to another state?",
//     a: "Outstation or interstate travel depends on the rental agreement. Confirm permitted destinations, documentation, permits, and additional charges in advance.",
//   },
//   {
//     q: "Are fuel, tolls, and parking included?",
//     a: "These expenses may be separate from the rental amount. Always check the booking terms for specific inclusions and exclusions.",
//   },
//   {
//     q: "Can I book a self drive car online in Noida?",
//     a: "Yes, customers can enquire about available vehicles, rental duration, requirements, and pricing before confirming a booking.",
//   },
// ];

// export default function SelfDriveCarRentalNoidaPage() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: pageCss }} />
//       <Header />

//       {/* ---------- HERO ---------- */}
//       <section className="page-hero">
//         <div className="container">
//           <div className="crumbs">
//             <Link href="/">Home</Link>
//             <span>/</span>
//             <b>Self Drive Car Rental in Noida</b>
//           </div>
//           <span className="eyebrow">Flexible · Self Drive · Noida</span>
//           <h1>Affordable Self Drive Car Rental in Noida</h1>
//           <p className="lead">
//             Grab Your Cab provides self drive car rental in Noida for those customers who want
//             to experience the pleasure of driving on the go but don't like to depend on someone
//             for driving. Local travel, business meetings, weekend trip, or outstation journeys,
//             self-drive rental gives you more freedom when it comes to deciding the route and
//             schedule.
//           </p>
//           <p className="lead">
//             With the rental periods are flexible and the vehicle types are diverse, travelers
//             are able to rent a car that suits their needs because of the diversity. Prior to
//             your reservation you have to check following things about vehicle availability
//             rental period documentation kilometer limits security deposit and terms applicable.
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
//             <span>Sector 18</span>
//             <span>Sector 62</span>
//             <span>Sector 137</span>
//             <span>Noida Extension</span>
//           </div>
//         </div>
//       </section>

//       {/* ---------- INTRO ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental in Noida for Flexible Travel</h2>
//               <p>
//                 Self-drive car rental means you take the car on your own and drive it. Unlike
//                 traditional cab services, here you are the driver and so the owner of the
//                 vehicle, and you get to decide on the route, how many stops and when you travel.
//               </p>
//               <p>
//                 A self drive car in Noida can be a great alternative, be it for your daily
//                 commutes, your business trip, or your family outing, cool getaways, or road
//                 trips with friends! Rental companies offer the convenience of one-day, weekend,
//                 weekly or monthly rentals but it depends on the policy for the rental and the
//                 types of vehicles available.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- WHY CHOOSE (CHECKLIST) ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Drive on Your Own Terms</span>
//             <h2>Why Choose a Self Drive Car Rental in Noida?</h2>
//             <p>
//               Self-drive travel gives you more flexibility and convenience during travel. You
//               don't have to plan around a driver, or rely on public transportation. Among the
//               features are:
//             </p>
//           </div>
//           <div className="check-grid">
//             {whyChooseChecklist.map((point) => (
//               <div className="item" key={point}>
//                 <span className="dot" />
//                 <p>{point}</p>
//               </div>
//             ))}
//           </div>
//           <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
//             Self-driving cars services are a perfect choice for those who love to drive and want
//             to get the wheel for their short as well as long trips.
//           </p>
//         </div>
//       </section>

//       {/* ---------- CARS AVAILABLE ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Fleet Options</span>
//             <h2>Self Drive Cars Available for Rent in Noida</h2>
//             <p>
//               Choosing the right car depends on the number of passengers, amount of luggage,
//               destination and the type of trip. Vehicle options are subject to change customers
//               would be advised to check for current options when booking.
//             </p>
//           </div>
//           <div className="check-grid">
//             {carsAvailable.map((c) => (
//               <div className="item" key={c.title}>
//                 <span className="dot" />
//                 <p>
//                   <b>{c.title}:</b> {c.text}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="banner alt" style={{ marginTop: 40 }}>
//             <div className="in">
//               <h2>Ready to Rent a Self Drive Car in Noida?</h2>
//               <p>Choose your car, pick your rental period and confirm your booking in minutes.</p>
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

//       {/* ---------- RENTAL OPTIONS ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental Options in Noida</h2>
//               <p>
//                 Rental period can be decided based on your trip. One day rentals are ideal for
//                 meet a local person's needs while weekend and weekly rentals are perfect for
//                 vacation goers and road trippers.
//               </p>
//               <p>
//                 For extended business or personal transportation needs, a longer rental term
//                 might be needed. Self drive outstation car hire may also be taken into
//                 consideration if the vehicle and rental terms allow you to travel from one city
//                 to another state or throughout the country. Confirm the permitted routes, papers
//                 needed, km limits, extra charges (if any) before you proceed with an outstation
//                 trip.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- POPULAR AREAS ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental in Popular Noida Areas</h2>
//               <p>
//                 Self drive needs can be seen in different areas of Noida like Sector 18, Sector
//                 62, Sector 137, Noida Extension, and near residential and commercial complexes
//                 and flats.
//               </p>
//               <p>
//                 Riders travelling between Noida, Greater Noida, Delhi, Ghaziabad and other ncr
//                 locations can now avail a ncr car rental package as per their travel in service.
//               </p>
//               <p>
//                 Pick up and drop-off facilities must be always confirmed with the rental company
//                 prior booking.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- OUTSTATION TRIPS ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental for Outstation Trips from Noida</h2>
//               <p>
//                 Hire a rental car for your next roadtrip, family trip, business travel, or
//                 weekend getaway from Noida. You can decide your route and stop when you want
//                 instead of following a fixed cab itinerary.
//               </p>
//               <p>
//                 For travelling from state to state, check if the vehicle is allowed to go to
//                 your destination and if you will need any additional paperwork, taxes, permits,
//                 km payments, or any other requirements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- HOW TO BOOK (STEPS) ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Simple Process</span>
//             <h2>How to Book a Self Drive Car in Noida</h2>
//             <p>Generally, booking a self-drive car is a straightforward process:</p>
//           </div>
//           <div className="steps">
//             {bookingSteps.map((step, i) => (
//               <div className="step" key={step.title}>
//                 <div className="n">{i + 1}</div>
//                 <h3>{step.title}</h3>
//                 <p>{step.text}</p>
//               </div>
//             ))}
//           </div>
//           <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
//             The exact reservation process and requirements may vary from one rental company to
//             the other.
//           </p>
//         </div>
//       </section>

//       {/* ---------- DOCUMENTS REQUIRED ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Documents Required for Self Drive Car Rental in Noida</h2>
//               <p>
//                 A valid driving license is required to rent and drive a self drive vehicle.
//                 Customers should be aware that they may also be asked to submit Government
//                 approved Identification/ Address proof and to undergo any type of verification.
//               </p>
//               <p>
//                 The required documents, minimum age, deposit and verification process can vary
//                 depending on the rental company. So be sure to double check the requirements
//                 when booking.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- PRICE + WHAT'S INCLUDED ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental Price in Noida</h2>
//               <p>
//                 The rental price of a car in noida with no driver is not fixed, as there are
//                 many factors affecting the price. Vehicle type, rental period, booking time,
//                 customer volume, vehicle stock, mileage limits, and deposit amount can all
//                 affect the total price. Extra kilometers, late returns, extensions, outstation
//                 as well as interstate travels will attract additional charges. Fueling, tolls,
//                 parking and other costs related to the journey could also be separate according
//                 to the hire contract.
//               </p>
//               <p>
//                 In order to get a correct actual rate you should confirm the actual vehicle
//                 availability and rental term before making your reservation.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>What Is Included in a Self Drive Car Rental?</h2>
//               <p>
//                 Inclusions vary according to the provider and the chosen rental plan. The
//                 reservation may detail the vehicle, rental period, allowed kilometres, and any
//                 relevant pickup or drop off arrangements.
//               </p>
//               <p>
//                 They should also see if fuel, tolls, parking, extra kilometers, fines, late
//                 returns, and other costs are not included in the rental rate quoted. Knowing
//                 these things in advance will avoid surprises.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- TERMS AND CONDITIONS (CHECKLIST) ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Know Before You Book</span>
//             <h2>Self Drive Car Rental Terms and Conditions</h2>
//             <p>
//               View the relevant Terms and Conditions before you accept your rental car. Includes
//               essential information such as:
//             </p>
//           </div>
//           <div className="check-grid">
//             {termsChecklist.map((point) => (
//               <div className="item" key={point}>
//                 <span className="dot" />
//                 <p>{point}</p>
//               </div>
//             ))}
//           </div>
//           <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
//             Transparent knowledge of these terms and conditions helps customers to make the
//             right choices in self drive car rental services.
//           </p>
//         </div>
//       </section>

//       {/* ---------- WHY CHOOSE GRAB YOUR CAB ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block" style={{ marginBottom: 0 }}>
//               <h2>Why Choose Grab Your Cab for Self Drive Car Rental in Noida?</h2>
//               <p>
//                 Grab Your Cab provides an easy access for people who want to get door-to-door
//                 self drive cars in Noida. The service is designed to offer appropriate rental
//                 options depending on the availability of the vehicle, the rental period, the
//                 traveling needs, and the terms and conditions.
//               </p>
//               <p>
//                 Passengers can view all options under a delivery method and select an option
//                 that best suits their plans. For some vehicle types, locations, pricing or
//                 outstation needs, please verify availability prior to booking.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- COMPARISON TABLE ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Which Suits You?</span>
//             <h2>Self Drive Car Rental in Noida vs Cab Service</h2>
//           </div>
//           <div className="cmp-table-wrap">
//             <table className="cmp-table">
//               <thead>
//                 <tr>
//                   <th>Self Drive Car</th>
//                   <th>Cab Service</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonRows.map((row) => (
//                   <tr key={row.self}>
//                     <td>{row.self}</td>
//                     <td>{row.cab}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* ---------- BOOK NOW BANNER ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap" style={{ marginBottom: 30 }}>
//             <div className="seo-block" style={{ marginBottom: 0 }}>
//               <h2>Book a Self Drive Car Rental in Noida</h2>
//               <p>
//                 Select car as per your need, confirmation rental period and terms and conditions
//                 and have ready the document as required for booking. Be it for city travel,
//                 business use, short weekend trip or even for an eligible outstation travel, Grab
//                 Your Cab takes you through the best self-drive rental cars in Noida.
//               </p>
//             </div>
//           </div>
//           <div className="banner">
//             <div className="in">
//               <h2>Book Your Self Drive Car in Noida</h2>
//               <p>Plan your journey with the flexibility of driving yourself.</p>
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

//       {/* ---------- OFFICE / LOCATION ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="garage-head">
//             <h2>Our Cab Service Office</h2>
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
//                 title="Grab Your Cab office location"
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
//                   <p>Rz-1110/A gali no 10 sadh nagar palam colony new delhi -110045</p>
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
//       <Footer />
//     </>
//   );
// }

import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self Drive Car Rental in Noida | Flexible Car Hire",
  description:
    "Book self drive cars in Noida with flexible rental durations and vehicle options. Check requirements, pricing, availability and terms before booking.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — self-drive-car-rental-noida page styles
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

/* Why Choose a Self Drive Car Rental in Noida? - EXACT MATCH from document */
const whyChooseChecklist = [
  "Freedom to design your own itinerary",
  "More privacy and personal space",
  "Easy to travel to many places in one trip",
  "Save driver seat to accommodate more people",
  "Perfect for rural as well as urban travel",
  "Drive like your own car in any city you travel.",
  "Flexibility to be owner of your dream car witout buying",
  "Option to rent for varying lengths of time",
  "Vehicle categories you can select from according to your needs.",
];

/* Self Drive Cars Available for Rent in Noida - EXACT MATCH from document */
const selfDriveCarTypes = [
  { title: "Manual Transmission Cars", text: "Perfect if you enjoy driving and want more control. Great for city drives and road trips around Noida and Greater Noida." },
  { title: "Automatic Cars", text: "ideal for busy Noida and Greater Noida traffic. Enjoy a smoother, more relaxed drive without frequent gear changes." },
  { title: "Petrol Cars", text: "Smooth and easy to drive, petrol cars are a popular choice for city travel and short trips specially for those who enjoy their favorite car rentalbrather than fuel affordability." },
  { title: "Diesel Cars", text: "A good option for long-distance and outstation journeys, especially when covering more kilometres and love power." },
  { title: "CNG Cars", text: "An economical choice for regular city travel and everyday use in Noida and Greater Noida where getting CNG is not a big issue.." },
  { title: "Electric Cars", text: "EV car rental in Noida are Quiet, modern and comfortable. A great option for city travel when charging is planned properly specially in Metro cities." },
  { title: "Hybrid Cars", text: "A smart choice for those looking for modern technology and better fuel efficiency." },
  { title: "Cars with Sunroof", text: "Make your drive more enjoyable with a sunroof, especially on weekend getaways and road trips." },
  { title: "Hatchbacks, Sedans & SUVs", text: "Choose according to your needs. Hatchbacks are convenient for city use, sedans offer extra comfort, while SUVs provide more space for families and luggage." },
];

/* How to Book a Self Drive Car in Noida - EXACT MATCH from document */
const bookingSteps = [
  { title: "Choose an available car", text: "Choose an available car that meets your needs." },
  { title: "Select the date and length", text: "Select the date and length of your hire." },
  { title: "Complete the form", text: "Complete the form with your driving and customer information." },
  { title: "Confirm the rental price", text: "Confirm the rental price, security deposit, and terms and conditions." },
  { title: "Finalize your reservation", text: "Finalize your reservation and make the necessary transportation arrangements." },
  { title: "Return the car", text: "You should return the car at the end of the rental period." },
];

/* Self Drive Car Rental Terms and Conditions - EXACT MATCH from document */
const termsChecklist = [
  "Age and licence requirements",
  "The security deposit",
  "Policy on fuel",
  "Allowed kilometres",
  "Late return charges",
  "Cancelation and refund policy",
  "Rental Extension Rules",
  "Damage condition of the vehicle and company policy",
  "Fast tag and vehicle documents",
];

/* Self Drive Car Rental in Noida vs Cab Service - EXACT MATCH from document */
const comparisonRows = [
  { self: "Customer drives the vehicle", cab: "Professional driver operates the vehicle" },
  { self: "Greater control over route and schedule", cab: "Driver handles driving and navigation" },
  { self: "More personal privacy", cab: "Convenient when you do not want to drive" },
  { self: "Suitable for people who enjoy driving", cab: "Suitable for passengers who prefer driver" },
  { self: "Suitable when need more seats", cab: "Suitable for less passengers" },
];

const faqs = [
  {
    q: "What is self drive car rental in Noida?",
    a: "Self-drive car rental allows you to rent a vehicle and drive it yourself for an agreed rental period without a professional driver.",
  },
  {
    q: "How much does self drive car rental cost in Noida?",
    a: "Pricing depends on the car type, rental duration, demand, kilometre limits, and applicable charges. Confirm the current rental price before booking.",
  },
  {
    q: "What documents are required?",
    a: "A valid driving licence and identity or address proof may be required. Exact documentation depends on the rental provider's verification policy.",
  },
  {
    q: "Can I rent a self drive car for one day?",
    a: "Yes, one-day rentals may be available depending on vehicle availability and the rental provider's terms.",
  },
  {
    q: "Can I rent a self drive car for a week?",
    a: "Weekly rental options may be available. Confirm the vehicle, pricing, kilometre limit, and applicable weekly rental terms before booking.",
  },
  {
    q: "Is self drive drive car available on Monthly rental or monthly subscription ?",
    a: "You can easily book self drive cars from various option to choose between, fuel type transmission type on affordable Monthly car rental options. There are saperate offers for Monthly car rental subscription for corporate.",
  },
  {
    q: "Is a security deposit required?",
    a: "A security deposit may be required depending on the vehicle and rental policy. Confirm the amount and refund conditions before booking.",
  },
  {
    q: "Can I take a rental car from Noida to another state?",
    a: "Outstation or interstate travel depends on the rental agreement. Confirm permitted destinations, documentation, permits, and additional charges in advance.",
  },
  {
    q: "Are fuel, tolls, and parking included?",
    a: "These expenses may be separate from the rental amount. Always check the booking terms for specific inclusions and exclusions.",
  },
  {
    q: "Can I book a self drive car online in Noida?",
    a: "Yes, customers can enquire about available vehicles, rental duration, requirements, and pricing before confirming a booking.",
  },
];

export default function SelfDriveCarRentalNoidaPage() {
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
            <b>Self Drive Car Rental in Noida</b>
          </div>
          <span className="eyebrow">Flexible · Self Drive · Noida</span>
          <h1>Affordable Self Drive Car Rental in Noida</h1>
          <p className="lead">
            Grab Your Cab provides self drive car rental in Noida for those customers who want to experience the pleasure of driving on the go but don't like to depend on someone for driving. Local travel, business meetings, weekend trip, or outstation journeys, self-drive rental gives you more freedom when it comes to deciding the route and schedule.
          </p>
          <p className="lead">
            With the rental periods are flexible and the vehicle types are diverse, travelers are able to rent a car that suits their needs because of the diversity. Prior to your reservation you have to check following things about vehicle availability rental period documentation kilometer limits security deposit and terms applicable.
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
            <span>Sector 137</span>
            <span>Noida Extension</span>
          </div>
        </div>
      </section>

      {/* ---------- H2: SELF DRIVE CAR RENTAL IN NOIDA FOR FLEXIBLE TRAVEL - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Noida for Flexible Travel</h2>
              <p>
                Self-drive car rental means you take the car on your own and drive it. Unlike traditional cab services, here you are the driver and so the owner of the vehicle, and you get to decide on the route, how many stops and when you travel.
              </p>
              <p>
                A self drive car in Noida can be a great alternative, be it for your daily commutes, your business trip, or your family outing, cool getaways, or road trips with friends! Rental companies offer the convenience of one-day, weekend, weekly or monthly rentals but it depends on the policy for the rental and the types of vehicles available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE (CHECKLIST) - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Drive on Your Own Terms</span>
            <h2>Why Choose a Self Drive Car Rental in Noida?</h2>
            <p>
              Self-drive travel gives you more flexibility and convenience during travel. You don't have to plan around a driver, or rely on public transportation.
            </p>
            <p style={{ marginTop: 8, color: "var(--muted)", fontSize: "14.5px" }}>
              Among the features are:
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
            Self-driving cars services are a perfect choice for those who love to drive and want to get the wheel for their short as well as long trips.
          </p>
        </div>
      </section>

      {/* ---------- SELF DRIVE CARS AVAILABLE FOR RENT - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Fleet Options</span>
            <h2>Self Drive Cars Available for Rent in Noida</h2>
            <p>
              Choosing the right car depends on the number of passengers, amount of luggage, destination and the type of trip. Vehicle options are subject to change customers would be advised to check for current options when booking.
            </p>
          </div>
          <div className="check-grid">
            {selfDriveCarTypes.map((c) => (
              <div className="item" key={c.title}>
                <span className="dot" />
                <p>
                  <b>{c.title}:</b> {c.text}
                </p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            Choose the car that fits your journey, budget and driving style. Availability may vary by date, location and rental duration.
          </p>
        </div>
      </section>

      {/* ---------- SELF DRIVE CAR RENTAL OPTIONS IN NOIDA - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental Options in Noida</h2>
              <p>
                Rental period can be decided based on your trip. One day rentals are ideal for meet a local person's needs while weekend and weekly rentals are perfect for vacation goers and road trippers.
              </p>
              <p>
                For extended business or personal transportation needs, a longer rental term might be needed. Self drive outstation car hire may also be taken into consideration if the vehicle and rental terms allow you to travel from one city to another state or throughout the country. Confirm the permitted routes, papers needed, km limits, extra charges (if any) before you proceed with an outstation trip. Self Drive Car on Monthly rental also save lots of money when you need a car for longer duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- POPULAR AREAS - EXACT MATCH FROM DOCUMENT ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental in Popular Noida Areas</h2>
              <p>
                Self-drive car rental demand can be found across major residential, commercial and business areas of Noida, including Sector 18, Sector 62, Sector 63, Film City, Sectors 125, 132, 135, 137, 142 and 144, Gaur City, Ek Murti in Noida Extension (Greater Noida West).
              </p>
              <p>
                In Greater Noida, popular areas include Pari Chowk, Knowledge Park, Alpha, Beta, Gamma, Ecotech and the Greater Noida Expressway corridor. These locations are surrounded by business parks, educational institutions, residential societies and commercial developments.
              </p>
              <p>
                In Ghaziabad, self-drive requirements are common around Kaushambi, Indirapuram, Vaishali, Sahibabad, Mohan Nagar, Raj Nagar Extension, Crossing Republik and Wave City, along with nearby residential and commercial areas.
              </p>
              <p>
                Customers travelling between Noida, Greater Noida, Ghaziabad, Delhi and other NCR locations can select a self-drive car rental package as per requirements, whether they need a car for a few hours, a day, a week, a month or longer.
              </p>
              <p>
                With a wide range of hatchbacks, sedans, SUVs and Luxury car rental, customers can choose a vehicle according to their budget, travel plans, number of passengers and driving preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OUTSTATION TRIPS - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental for Outstation Trips from Noida</h2>
              <p>
                Hire a rental car for your next roadtrip, family trip, business travel, or weekend getaway from Noida. You can decide your route and stop when you want instead of following a fixed cab itinerary.
              </p>
              <p>
                For travelling from state to state, check if the vehicle is allowed to go to your destination and if you will need any additional paperwork, taxes, permits, km payments, or any other requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK (STEPS) - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Simple Process</span>
            <h2>How to Book a Self Drive Car in Noida</h2>
            <p>Generally, booking a self-drive car is a straightforward process:</p>
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
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            The exact reservation process and requirements may vary from one rental company to the other.
          </p>
        </div>
      </section>

      {/* ---------- DOCUMENTS REQUIRED - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Documents Required for Self Drive Car Rental in Noida</h2>
              <p>
                A valid driving license is required to rent and drive a self drive vehicle. Customers should be aware that they may also be asked to submit Government approved Identification/ Address proof and to undergo any type of verification.
              </p>
              <p>
                The required documents, minimum age, deposit and verification process can vary depending on the rental company. So be sure to double check the requirements when booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PRICE - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental Price in Noida</h2>
              <p>
                The rental price of a car in noida with no driver is not fixed, as there are many factors affecting the price. Vehicle type, rental period, booking time, customer volume, vehicle stock, mileage limits, and deposit amount can all affect the total price. Extra kilometers, late returns, extensions, outstation as well as interstate travels will attract additional charges. Fueling, tolls, parking and other costs related to the journey could also be separate according to the hire contract.
              </p>
              <p>
                In order to get a correct actual rate you should confirm the actual vehicle availability and rental term before making your reservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHAT IS INCLUDED - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>What Is Included in a Self Drive Car Rental?</h2>
              <p>
                Inclusions vary according to the provider and the chosen rental plan. The reservation may detail the vehicle, rental period, allowed kilometres, and any relevant pickup or drop off arrangements.
              </p>
              <p>
                They should also see if fuel, tolls, parking, extra kilometers, challans, late returns, and other costs are not included in the rental rate quoted. Knowing these things in advance will avoid surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TERMS AND CONDITIONS (CHECKLIST) - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Know Before You Book</span>
            <h2>Self Drive Car Rental Terms and Conditions</h2>
            <p>
              View the relevant Terms and Conditions before you accept your rental car. Includes essential information such as:
            </p>
          </div>
          <div className="check-grid">
            {termsChecklist.map((point) => (
              <div className="item" key={point}>
                <span className="dot" />
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            Transparent knowledge of these terms and conditions helps customers to make the right choices in self drive car rental services.
          </p>
        </div>
      </section>

      {/* ---------- WHY CHOOSE GRAB YOUR CAB - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Why Choose Grab Your Cab for Self Drive Car Rental in Noida?</h2>
              <p>
                Grab Your Cab provides an easy access for people who want to get on door delivery for self drive cars in Noida. Passengers can choose transmssion type, fuel type and have many options to choose car whether need a hatchback, sedan, SUVs, luxury cars under one roof.
              </p>
              <p>
                Also, due to multiple office locations, customers can select a convenient car delivery and pickup option based on their location, travel plans and rental requirements.
              </p>
              <p>
                Grab your cab car rental policy is very transparent and security refund process us hasske free, For more safety they have tie ups with Good Road side assistance facility almost in every city and locations. Each car is tested, and sanitized properly before given to clients. For some vehicle types, locations, pricing or outstation needs, please verify availability prior to booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMPARISON TABLE - EXACT MATCH ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Which Suits You?</span>
            <h2>Self Drive Car Rental in Noida vs Cab Service</h2>
          </div>
          <div className="cmp-table-wrap">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th>Self Drive Car</th>
                  <th>Cab Service</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.self}>
                    <td>{row.self}</td>
                    <td>{row.cab}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- BOOK A SELF DRIVE CAR RENTAL - EXACT MATCH ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Book a Self Drive Car Rental in Noida</h2>
              <p>
                Select car as per your need, confirmation rental period and terms and conditions and have ready the document as required for booking. Be it for city travel, business use, short weekend trip or even for an eligible outstation travel, Grab Your Cab takes you through the best self-drive rental cars in Noida.
              </p>
              <p>
                Book Your Self Drive Car in Noida and plan your journey with the flexibility of driving yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOOK NOW BANNER ---------- */}
      <section className="sec">
        <div className="container">
          <div className="banner alt">
            <div className="in">
              <h2>Book Your Self Drive Car in Noida</h2>
              <p>Plan your journey with the flexibility of driving yourself.</p>
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

      {/* ---------- FAQ - EXACT MATCH ---------- */}
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

      {/* ---------- OFFICE / LOCATION ---------- */}
      <section className="sec">
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