// import Footer from "@/components/site/Footer";
// import Header from "@/components/site/Header";
// import type { Metadata } from "next";
// import Link from "next/link";
// import TaxiSearch from "../taxi/page";

// export const metadata: Metadata = {
//   title: "Self Drive Car Rental Gurgaon | Easy Car Hire Service",
//   description:
//     "Explore self drive car rental in Gurgaon with flexible rental durations and vehicle options. Book a car without a driver for your next journey with Grab Your Cab.",
// };

// const pageCss = `
// /* ============================================================
//    GRAB YOUR CAB — self-drive-car-rental-gurgaon page styles
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

// /* vehicle type grid */
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

// /* duration cards grid */
// .dur-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
// .dur-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:22px 20px;text-align:center}
// .dur-card .badge{display:inline-block;background:var(--grey);color:var(--red);font-family:"Poppins";font-weight:700;font-size:12px;
//   text-transform:uppercase;letter-spacing:.04em;padding:6px 12px;border-radius:20px;margin-bottom:12px}
// .dur-card h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
// .dur-card p{color:var(--muted);font-size:13px}

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
//   .dur-grid{grid-template-columns:repeat(2,1fr)}
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
//   .dur-grid{grid-template-columns:1fr}
//   .banner{min-height:200px;padding:34px 16px}
//   .banner .hbtns{width:100%}
//   .banner .hbtns .btn{width:100%}
//   .garage-map{min-height:240px}
//   .garage-map iframe{min-height:240px}
//   .info-block .ico{width:42px;height:42px}
// }
// `;

// /* Why Choose a Self Drive Car Rental in Gurgaon? */
// const whyChooseChecklist = [
//   "Travel on your own terms",
//   "No driver is needed",
//   "More privacy on the travel",
//   "Varied rental lengths",
//   "Local and weekend travel made easy",
//   "For the business traveler or for those who travel for pleasure",
//   "Options available for long and outstation trips subject to terms and conditions",
//   "Easy booking process",
// ];

// /* Self Drive Cars Available in Gurgaon */
// const fleetTypes = [
//   {
//     title: "Maruti",
//     image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
//     text: "Great for day-to-day city drive, for short trips and for users who wish to drive a compact vehicle.",
//   },
//   {
//     title: "Kia",
//     image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600",
//     text: "More spacious in terms of cabin and boot space — business travellers, families and long distance drivers can benefit.",
//   },
//   {
//     title: "Mahindra",
//     image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
//     text: "A blessing for families, friends, even road trips where more space, a larger wheel base and stronger vehicle are preferable.",
//   },
//   {
//     title: "Luxury Cars",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
//     text: "Can also allow easier driving experience, especially for customers who pass through heavy traffic roads every day.",
//   },
// ];

// /* Documents Required for Self Drive Car Rental in Gurgaon */
// const documentsRequired = [
//   "A valid driving license",
//   "Government-issued identity proof",
//   "Proof of Address or any other such documents where applicable",
//   "Any other information required under the rental agreement",
// ];

// /* How to Book a Self Drive Car in Gurgaon */
// const bookingSteps = [
//   { title: "Choose Your Car", text: "Based on the nature of your trip, the number of passengers and the vehicle category you can select an appropriate car." },
//   { title: "Select Rental Dates", text: "Enter your pickup location, and pickup and return dates and times." },
//   { title: "Submit Required Details", text: "Fill your identity, driving licence and verification details." },
//   { title: "Confirm Your Booking", text: "Confirm after you have seen the rental price with your included charges and with your terms and conditions." },
//   { title: "Collect the Car", text: "Do the verification and the vehicle handover before starting on your trip." },
// ];

// /* Self Drive Car Rental for Different Rental Durations */
// const rentalDurations = [
//   { badge: "1 Day", title: "One Day Rental", text: "Helpful if you are attending meetings, running errands, making short trips or just out for the day." },
//   { badge: "Weekend", title: "Weekend Rental", text: "Holds extra freedom for short outings and weekend plans." },
//   { badge: "Weekly", title: "Weekly Rental", text: "Useful for business needs, long visits or travel itineraries that span weeks." },
//   { badge: "Monthly", title: "Monthly Rental", text: "Long term rental options for people looking for a vehicle for the longer term, subject to availability." },
// ];

// const faqs = [
//   { q: "What is self drive car rental in Gurgaon?", a: "Self-drive car rental allows you to rent a vehicle and drive it yourself without hiring a driver, subject to eligibility, documentation and applicable rental terms." },
//   { q: "How much does self drive car rental cost in Gurgaon?", a: "Rental prices vary according to the vehicle, rental duration, availability, mileage limits and applicable terms. Confirm the final price before booking." },
//   { q: "What documents are required to rent a self drive car?", a: "A valid driving licence and government-issued identity proof may be required. Additional verification documents can depend on the rental policy." },
//   { q: "Can I rent a self drive car for one day?", a: "Yes, one-day rental may be available depending on vehicle availability and the applicable rental terms for your selected dates." },
//   { q: "Can I rent a self drive car for a week?", a: "Weekly self-drive rentals may be available. Pricing and vehicle options depend on availability, rental duration and the selected vehicle category." },
//   { q: "Can I take a self drive rental car from Gurgaon to another city?", a: "Outstation travel may be possible for eligible vehicles, but destination permissions and other conditions should be confirmed before booking." },
//   { q: "Are luxury self drive cars available in Gurgaon?", a: "Luxury cars may be available depending on the current fleet. Confirm the available luxury vehicles for your required rental dates." },
//   { q: "Is a security deposit required for self drive car rental?", a: "A security deposit may apply depending on the vehicle and rental policy. Confirm the applicable amount and refund conditions before booking." },
//   { q: "Are fuel, tolls and parking included in the rental price?", a: "Fuel, tolls and parking may be separate from the rental amount. Review the booking terms to understand which expenses are the renter's responsibility." },
//   { q: "Can I extend my self drive car rental period?", a: "An extension may be possible if the vehicle is available. Contact the rental provider before the original return time to confirm an extension." },
// ];

// export default function SelfDriveCarRentalGurgaonPage() {
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
//             <b>Self Drive Car Rental Gurgaon</b>
//           </div>
//           <span className="eyebrow">Gurgaon · Delhi NCR</span>
//           <h1>Self Drive Car Rental Gurgaon - Hire a Car and Drive Yourself</h1>
//           <p className="lead">
//             A self drive car rental in Gurgaon is a better choice for you if you are tired of
//             dependability on a driver or fixed schedules while travelling. Be it local shopping,
//             on business meetings, for a couple of day excursions or outstation journey, renting a
//             car and driving it yourself can add more convenience and privacy to your trips. Grab
//             Your Cab offers the best self drive cars rental in India and we are confident that
//             you will find the best deals as well as the widest range of options.
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
//             <span>Golf Course Road</span>
//             <span>Sohna Road</span>
//             <span>MG Road</span>
//             <span>DLF Cyber City</span>
//             <span>Sector 29</span>
//             <span>Udyog Vihar</span>
//             <span>Manesar</span>
//             <span>Dwarka Expressway</span>
//           </div>
//         </div>
//       </section>

//       <TaxiSearch />

//       {/* ---------- INTRO ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <p>
//                 Since you have the option of different vehicle types and rental periods, you can
//                 choose the car that fits your travel needs, trip length and budget the best.
//                 Whether you have a short-term need or a longer requirement, the right self-drive
//                 vehicle can make everyday travel and road trips easier.
//               </p>
//             </div>

//             <div className="seo-block">
//               <h2>Self Drive Car Rental in Gurgaon</h2>
//               <p>
//                 A self drive car rental in Gurgaon means you lease the car but drive it yourself
//                 and the driver is not chauffeur driven. It's ideal for those who want to stay in
//                 control, and enjoy the convenience and the freedom to go wherever they like.
//               </p>
//               <p>
//                 Subject to availability and rental terms, you can select from a wide range of
//                 vehicles suitable for your personal, business or leisure needs. You can select
//                 your rental dates, do the necessary verification and pick up the vehicle on
//                 arrival as per the pickup procedure.
//               </p>
//               <p>
//                 When you want to hire a car without driver in Gurgaon for a day, before booking,
//                 make sure to check the rental terms that apply, mileage limits, security
//                 requirements, and travel destination.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- WHY CHOOSE (CHECKLIST) ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Advantage of Self Drive</span>
//             <h2>Why Choose a Self Drive Car Rental in Gurgaon?</h2>
//             <p>
//               Self drive at your own pace — when you are driving by yourself, you have the power
//               to decide when to stop and start as well as where to go. Rather than coordinating
//               with a driver for your trip, you can set your route and schedule your itinerary.
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
//             For those who frequently require a vehicle for brief intervals, self drive car rental
//             in Gurgaon is often a more feasible option than having a car of their own.
//           </p>
//         </div>
//       </section>

//       {/* ---------- FLEET / CAR TYPES GRID ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Pick Your Ride</span>
//             <h2>Self Drive Cars Available in Gurgaon</h2>
//             <p>
//               The right vehicle for you will vary based on the number of passengers, type of
//               trip and driving needs. Options may include some of the following categories
//               depending on the choices available.
//             </p>
//           </div>
//           <div className="fleet-grid">
//             {fleetTypes.map((car) => (
//               <div className="fleet-card" key={car.title}>
//                 <div className="img-wrap">
//                   <img src={car.image} alt={`${car.title} self drive rental in Gurgaon`} loading="lazy" />
//                 </div>
//                 <div className="body">
//                   <h3>{car.title}</h3>
//                   <p>{car.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
//             Due to the differences of date and booking conditions, the availability of vehicles
//             is subject to change. Please confirm the available fleet before making a booking.
//           </p>
//         </div>
//       </section>

//       {/* ---------- ELIGIBILITY + DOCUMENTS ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Who Can Rent a Self Drive Car in Gurgaon?</h2>
//               <p>
//                 Self drive rentals are subject to the customer's fulfilling the applicable
//                 eligibility and verification requirements. In general, renters must have a valid
//                 driver's license and some form of accepted identification.
//               </p>
//               <p>
//                 Depending on the terms of the rental there may be additional requirements for
//                 proof of address, a deposit or other papers. The minimum age and other
//                 eligibility criteria may differ based on the rental policy and vehicle type and
//                 hence we suggest you to confirm them before booking.
//               </p>
//             </div>

//             <div className="seo-block" style={{ marginBottom: 0 }}>
//               <h2>Documents Required for Self Drive Car Rental in Gurgaon</h2>
//               <p>Customers may be required to provide:</p>
//               <div className="check-grid" style={{ marginTop: 14 }}>
//                 {documentsRequired.map((doc) => (
//                   <div className="item" key={doc}>
//                     <span className="dot" />
//                     <p>{doc}</p>
//                   </div>
//                 ))}
//               </div>
//               <p style={{ marginTop: 14 }}>
//                 Before booking, you may confirm the exact documents with Grab Your Cab to avoid
//                 any delays at the time of collection of the vehicle.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- HOW TO BOOK ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Simple Process</span>
//             <h2>How to Book a Self Drive Car in Gurgaon</h2>
//             <p>Booking a self-drive rental can be completed through a straightforward process.</p>
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

//           <div className="banner alt" style={{ marginTop: 40 }}>
//             <div className="in">
//               <h2>Ready to Drive Gurgaon on Your Own Terms?</h2>
//               <p>Choose a car, confirm your booking and get verified in minutes.</p>
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

//       {/* ---------- RENTAL DURATIONS ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Choose Your Duration</span>
//             <h2>Self Drive Car Rental for Different Rental Durations</h2>
//             <p>Different travel plans require different rental periods.</p>
//           </div>
//           <div className="dur-grid">
//             {rentalDurations.map((d) => (
//               <div className="dur-card" key={d.title}>
//                 <span className="badge">{d.badge}</span>
//                 <h3>{d.title}</h3>
//                 <p>{d.text}</p>
//               </div>
//             ))}
//           </div>
//           <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
//             People looking for a vehicle for the longer term can also enquire about the monthly
//             car rental in Gurgaon and the long term rental options that might be available. The
//             availability and price are subject to the selected vehicle and rental period.
//           </p>
//         </div>
//       </section>

//       {/* ---------- LOCAL & OUTSTATION + NEAR GURGAON ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental for Local &amp; Outstation Trips</h2>
//               <p>
//                 A self-drive car can be used for travel in Gurgaon city, Delhi travel, Delhi NCR
//                 trips and even for weekend road journeys. Outstation customers planning on
//                 travelling to Delhi from any other city are required to check if their vehicle
//                 has permission to travel to the destination.
//               </p>
//               <p>
//                 Trips outside the city are made available in accordance with the terms of use,
//                 vehicle eligibility and mileage restrictions. Verify this information when
//                 traveling across the country or if you are going a long distance.
//               </p>
//             </div>

//             <div className="seo-block" style={{ marginBottom: 0 }}>
//               <h2>Self Drive Car Rental Near Gurgaon</h2>
//               <p>
//                 Gurgaon, being a corporate hub of India sees a lot of demand for self-drive
//                 rentals from different regions of Delhi NCR. Service coverage and vehicle
//                 availability may vary by location, and the following are the areas you may
//                 inquire about if necessary: Golf Course Road, Sohna Road, MG Road, DLF Cyber
//                 City, Sector 29, Udyog Vihar, Manesar and Dwarka Expressway.
//               </p>
//               <p>
//                 Local availability should always be confirmed before booking especially if you
//                 have a particular pick up or return location in mind.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- PRICE + INCLUSIONS ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block">
//               <h2>Self Drive Car Rental Price in Gurgaon</h2>
//               <p>
//                 A self-drive rental is priced based on a number of components and not just one.
//                 These may vary by category such as car type, duration of the rental,
//                 availability, pickup and drop-off location, miles or minutes limit, deposit and
//                 add-on services, etc.
//               </p>
//               <p>
//                 Outstation charges, late returns, etc may also influence the final rental amount.
//                 Review full rental terms and fees before confirming your booking instead of
//                 choosing a rental based on the lowest advertised price only.
//               </p>
//               <p>
//                 Please get in touch with Grab Your Cab for availability and price with your
//                 travel dates and vehicle preferences.
//               </p>
//             </div>

//             <div className="seo-block" style={{ marginBottom: 0 }}>
//               <h2>What Is Included in a Self Drive Car Rental?</h2>
//               <p>
//                 The inclusions are based on the selected rental package and rental agreement. The
//                 renting may be for the use of a personal vehicle for a specified period, with or
//                 without services or a mileage allowance.
//               </p>
//               <p>
//                 Details relating to fuel, tolls, parking, fines, extra kilometres, security
//                 deposits, taxes and any other applicable fees have to be confirmed separately by
//                 customers. It is important to note these terms before pickup and so that they
//                 won't surprise you with extra charges during or after your rental.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- WHY CHOOSE GRAB YOUR CAB ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="seo-wrap">
//             <div className="seo-block" style={{ marginBottom: 0 }}>
//               <h2>Why Choose Grab Your Cab for Self Drive Car Rental in Gurgaon?</h2>
//               <p>
//                 Grab Your Cab focuses on providing a convenient rental experience for customers
//                 who want flexible transportation in Gurgaon and the wider Delhi NCR region.
//               </p>
//               <p>
//                 Users can chat about their preferred car, desired rental period and travelling
//                 needs before they confirm a booking. A transparent rental policy, availability of
//                 vehicles and the charges to be applied must be clearly defined so that the car
//                 picked matches the journey to be made.
//               </p>
//               <p>
//                 Be it for a short local commute, business trip, weekend plan or an outstation
//                 journey, selecting the right rental duration and vehicle category will make your
//                 travel more comfortable.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- BOOK NOW BANNER ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="banner">
//             <div className="in">
//               <h2>Book a Self Drive Car Rental in Gurgaon with Grab Your Cab</h2>
//               <p>
//                 A self-drive car rental in Gurgaon allows you to manage your local trips,
//                 business or leisure travel, weekend ride and even qualified outstation drives at
//                 your own pace. Select the vehicle category that suits your journey, confirm the
//                 rental terms and complete the required booking process before pickup. Book your
//                 self drive car in Gurgaon with Grab Your Cab and enjoy the freedom to travel on
//                 your own schedule.
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
//       <section className="sec">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">Got Questions?</span>
//             <h2>Frequently Asked Questions About Self Drive Car Rental in Gurgaon</h2>
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
//       <section className="sec grey">
//         <div className="container">
//           <div className="garage-head">
//             <h2>Our Self Drive Car Rental Office</h2>
//             <hr />
//           </div>
//           <div className="garage-grid">
//             <div className="garage-map">
              
//                <a className="maps-link"
//                 href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11783.605329844395!2d77.07465289560535!3d28.591170980090418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRz-1110%2FA%20gali%20no%2010%20sadh%20nagar%20palam%20colony%20new%20delhi%20-110045!5e0!3m2!1sen!2sin!4v1786448913035!5m2!1sen!2sin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Open in Maps ↗
//               </a>
//               <iframe
//                 title="Grab Your Cab self drive car rental office location"
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
import TaxiSearch from "../taxi/page";

export const metadata: Metadata = {
  title: "Self Drive Car Rental Gurgaon | Easy Car Hire Service",
  description:
    "Explore self drive car rental in Gurgaon with flexible rental durations and vehicle options. Book a car without a driver for your next journey with Grab Your Cab.",
};

const pageCss = `
/* ============================================================
   GRAB YOUR CAB — self-drive-car-rental-gurgaon page styles
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
.seo-block h3{font-size:16px;font-weight:700;margin:18px 0 10px}
.seo-block p{color:var(--text);font-size:14.5px;margin-bottom:12px;line-height:1.75}
.seo-block ul{margin:0 0 12px 20px}
.seo-block ul li{color:var(--text);font-size:14.5px;line-height:1.8}

.sec-head{text-align:center;margin-bottom:34px}
.sec-head .eyebrow{display:block;color:var(--red);font-weight:600;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px}
.sec-head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700;display:inline-block;position:relative;padding-bottom:14px}
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
.check-grid .item p b{color:var(--ink)}

/* duration cards grid */
.dur-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.dur-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:22px 20px;text-align:center}
.dur-card .badge{display:inline-block;background:var(--grey);color:var(--red);font-family:"Poppins";font-weight:700;font-size:12px;
  text-transform:uppercase;letter-spacing:.04em;padding:6px 12px;border-radius:20px;margin-bottom:12px}
.dur-card h3{font-size:15.5px;font-weight:600;margin-bottom:6px}
.dur-card p{color:var(--muted);font-size:13px}

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
  .dur-grid{grid-template-columns:repeat(2,1fr)}
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
  .dur-grid{grid-template-columns:1fr}
  .banner{min-height:200px;padding:34px 16px}
  .banner .hbtns{width:100%}
  .banner .hbtns .btn{width:100%}
  .garage-map{min-height:240px}
  .garage-map iframe{min-height:240px}
  .info-block .ico{width:42px;height:42px}
}
`;

/* Why Choose a Self Drive Car Rental in Gurgaon? — Advantages of Self Drive Car Rental */
const whyChooseChecklist = [
  {
    title: "Travel Whenever You Want",
    text: "Start your journey at your preferred time and follow your own schedule.",
  },
  {
    title: "No Need to Own a Car",
    text: "Enjoy the convenience of having a car without worrying about buying and maintaining one.",
  },
  {
    title: "Choose a Car as Per Your Requirement",
    text: "Need a small car for city travel or an SUV for a family trip? You can choose accordingly.",
  },
  {
    title: "Enjoy Your Privacy",
    text: "Travel comfortably with your family, friends or colleagues without a driver being present in the car.",
  },
  {
    title: "Good for Weekend Plans",
    text: "Planning a quick getaway or road trip? A self drive car gives you the flexibility to travel wherever you want.",
  },
  {
    title: "Useful for Business Travel",
    text: "You can use the car for meetings, client visits or travelling between different locations.",
  },
  {
    title: "No Need to Book Multiple Cabs",
    text: "If you need a car for several hours or an entire day, a self drive car can be more convenient than booking taxis again and again.",
  },
  {
    title: "Rent for the Time You Need",
    text: "Whether you need a car for a few hours, a day or several days, you can choose the rental duration according to your requirement.",
  },
  {
    title: "You Are in Control",
    text: "You decide the route, the stops and the pace of your journey.",
  },
];

/* Self Drive Cars Available in Gurgaon */
const fleetTypes = [
  {
    title: "Manual Transmission Cars",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    text: "Some people wants to have more control on the car,, a manual transmission can be a good choice. These cars are more suitabl3 for regular city travel as well as long road trips.",
  },
  {
    title: "Automatic Transmission Cars",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600",
    text: "Automatic cars are especially convenient when you have to drive through heavy Gurgaon or Delhi NCR traffic. There is no need to keep changing gears, making the overall driving experience more relaxed. Grab Your cab has all varities of Automatic cars.",
  },
  {
    title: "Petrol Cars",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
    text: "Petrol cars are smooth and easy to drive, making them a popular choice for city travel and short trips. They are suitable when you want a comfortable and straightforward driving experience.",
  },
  {
    title: "Diesel Cars",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    text: "Diesel cars are generally preferred by people planning longer journeys. If you are travelling out of the city or covering a longer distance, a diesel vehicle can be a suitable option.",
  },
  {
    title: "CNG Cars",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    text: "For customers looking for a more economical option for local travel, CNG cars can be worth considering. They can be suitable for regular city use and planned journeys.",
  },
  {
    title: "Electric Cars",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600",
    text: "Electric cars offer a quiet and modern driving experience. They can be a good choice for city travel, provided the journey is planned according to the vehicle's driving range and charging requirements.",
  },
  {
    title: "Hybrid Cars",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
    text: "Hybrid cars offer the benefits of modern technology and improved fuel efficiency. They can be suitable for customers who want a more advanced and efficient option for their journey.",
  },
  {
    title: "Cars with Sunroof",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    text: "A sunroof can make a drive feel more enjoyable, especially during long journeys and road trips. It is a popular feature among customers who want a little extra comfort and a more premium experience.",
  },
  {
    title: "Hatchbacks, Sedans and SUVs",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    text: "The choice of car also depends on how many people are travelling and how much luggage you have. Hatchbacks are convenient for city use, sedans offer extra comfort, while SUVs provide more space and are often preferred for family trips and longer journeys.",
  },
];

/* Documents Required for Self Drive Car Rental in Gurgaon */
const documentsRequired = [
  "A valid driving license",
  "Government-issued identity proof",
  "Proof of Address or any other such documents where applicable",
  "Any other information required under the rental agreement",
];

/* How to Book a Self Drive Car in Gurgaon */
const bookingSteps = [
  { title: "Choose Your Car", text: "Based on the nature of your trip, the number of passengers and the vehicle category you can select an appropriate car." },
  { title: "Select Rental Dates", text: "Enter your pickup location, and pickup and return dates and times." },
  { title: "Submit Required Details", text: "Fill your identity, driving licence and verification details." },
  { title: "Confirm Your Booking", text: "Confirm after you have seen the rental price with your included charges and with your terms and conditions." },
  { title: "Collect the Car", text: "Do the verification and the vehicle handover before busy on your trip." },
];

/* Self Drive Car Rental for Different Rental Durations */
const rentalDurations = [
  { badge: "1 Day", title: "One Day Rental", text: "A one day self drive car rental in Gurgaon can be helpful if you are attending meetings, running errands, making short trips or just out for the day." },
  { badge: "Weekend", title: "Weekend Rental", text: "For weekend trips plans, a weekend rental holds extra freedom for short outings." },
  { badge: "Weekly", title: "Weekly Rental", text: "Weekly rentals are useful for business needs, long visits or travel itineraries that span weeks." },
  { badge: "Monthly", title: "Monthly Rental", text: "People looking for a vehicle for the longer term can also enquire about the monthly car rental in Gurgaon and the long term rental options that might be available." },
];

const faqs = [
  { q: "What is self drive car rental in Gurgaon?", a: "Self-drive car rental allows you to rent a vehicle and drive it yourself without hiring a driver, subject to eligibility, documentation and applicable rental terms." },
  { q: "How much does self drive car rental cost in Gurgaon?", a: "Rental prices vary according to the vehicle, rental duration, availability, mileage limits and applicable terms. Confirm the final price before booking." },
  { q: "What documents are required to rent a self drive car?", a: "A valid driving licence and government-issued identity proof may be required. Additional verification documents can depend on the rental policy." },
  { q: "Can I rent a self drive car for one day?", a: "Yes, one-day rental may be available depending on vehicle availability and the applicable rental terms for your selected dates." },
  { q: "Can I rent a self drive car for a week?", a: "Weekly self-drive rentals are easily available. Pricing and vehicle options depend on availability, rental duration and the selected vehicle category." },
  { q: "Can I take a self drive rental car from Gurgaon to another city?", a: "Outstation travel may be possible for eligible vehicles, but destination permissions and other conditions should be confirmed before booking." },
  { q: "Are luxury self drive cars available in Gurgaon?", a: "Luxury cars are available depending on the current fleet and profile. Confirm the available luxury vehicles for your required rental dates." },
  { q: "Is a security deposit required for self drive car rental?", a: "A security deposit may apply depending on the vehicle and rental policy. Confirm the applicable amount and refund conditions before booking." },
  { q: "Are fuel, tolls and parking included in the rental price?", a: "Fuel, tolls and parking may be separate from the rental amount. Review the booking terms to understand which expenses are the renter's responsibility." },
  { q: "Can I extend my self drive car rental period?", a: "An extension may be possible if the vehicle is available. Contact the rental provider before the original return time to confirm an extension." },
  { q: "Can I Hire a Self Drive Car on a Monthly Basis?", a: "Yes, you can hire a self drive car on a monthly or subscription basis. You can choose the type of car you prefer and enjoy attractive discounts compared to regular per-day rental rates." },
];

export default function SelfDriveCarRentalGurgaonPage() {
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
            <b>Self Drive Car Rental Gurgaon</b>
          </div>
          <span className="eyebrow">Gurgaon · Delhi NCR</span>
          <h1>Self Drive Car Rental Gurgaon - Hire a Car and Drive Yourself</h1>
          <p className="lead">
            A self drive car rental in Gurgaon is a better choice for you if you are tired of
            dependability on a driver or fixed schedules while travelling. Be it local shopping,
            on business meetings, for a couple of day excursions or outstation journey, renting a
            car and driving it yourself can add more convenience and privacy to your trips. Grab
            Your Cab offers the best self drive cars rental in India and we are confident that
            you will find the best deals as well as the widest range of options.
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
            <span>Golf Course Road</span>
            <span>Sohna Road</span>
            <span>MG Road</span>
            <span>DLF Cyber City</span>
            <span>Sector 29</span>
            <span>Udyog Vihar</span>
            <span>Manesar</span>
            <span>Dwarka Expressway</span>
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
                Since you have the option of different vehicle types and rental periods, you can
                choose the car that fits your travel needs, trip length and budget the best.
                Whether you have a short-term need or a longer requirement, the right self-drive
                vehicle can make everyday travel and road trips easier.
              </p>
            </div>

            <div className="seo-block">
              <h2>Self Drive Car Rental in Gurgaon</h2>
              <p>
                A self drive car rental in Gurgaon means you lease the car but drive it yourself
                and the driver is not chauffeur driven. It's ideal for those who want to stay in
                control, and enjoy the convenience and the freedom to go wherever they like.
              </p>
              <p>
                Subject to availability and rental terms, you can select from a wide range of
                vehicles suitable for your personal, business or leisure needs. You can select
                your rental dates, do the necessary verification and pick up the vehicle on
                arrival as per the pickup procedure.
              </p>
              <p>
                When you want to hire a car without driver in Gurgaon for a day. Before booking,
                make sure to check the rental terms that apply, mileage limits, security
                requirements, and travel destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE (CHECKLIST) ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Advantage of Self Drive</span>
            <h2>Why Choose a Self Drive Car Rental in Gurgaon?</h2>
            <p>
              Sometimes you need a car, but not necessary you own. A self drive car rental gives
              you the comfort of taking a car whenever you need it, whether it is for a family
              trip, business meeting, weekend trip or an outstation journey.
            </p>
            <p>
              You can select the car that suits your requirement and travel according to your
              plan, without depending on a driver or booking multiple taxis.
            </p>
          </div>
          <h3 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
            Advantages of Self Drive Car Rental
          </h3>
          <div className="check-grid">
            {whyChooseChecklist.map((point) => (
              <div className="item" key={point.title}>
                <span className="dot" />
                <p>
                  <b>{point.title}:</b> {point.text}
                </p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            For people who need a car from time to time but do not want the responsibility of
            owning one, yourself drive car rental in Gurgaon is a simple and practical option. You
            get the freedom and comfort of having a car when you need it, without the long-term
            responsibilities that come with owning one.
          </p>
        </div>
      </section>

      {/* ---------- FLEET / CAR TYPES GRID ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Pick Your Ride</span>
            <h2>Self Drive Cars Available in Gurgaon</h2>
            <p>
              Every trip and your requirement to drive a car is different. A hatchback may be
              enough for travelling within the city, while a sedan or SUV can be more suitable
              for a family trip or an outstation journey. At Grab Your Cab, you can choose from
              different types of self drive cars depending on your travel plan, driving
              preference and availability.
            </p>
          </div>
          <div className="fleet-grid">
            {fleetTypes.map((car) => (
              <div className="fleet-card" key={car.title}>
                <div className="img-wrap">
                  <img src={car.image} alt={`${car.title} self drive rental in Gurgaon`} loading="lazy" />
                </div>
                <div className="body">
                  <h3>{car.title}</h3>
                  <p>{car.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            Vehicle availability can change depending on the date, location and booking duration.
            It is always a good idea to check the available cars before booking so you can choose
            the one that best suits your journey.
          </p>
        </div>
      </section>

      {/* ---------- ELIGIBILITY + DOCUMENTS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Who Can Rent a Self Drive Car in Gurgaon?</h2>
              <p>
                Self drive rentals are subject to the customer's fulfilling the applicable
                eligibility and verification requirements. In general, traveler must have a valid
                driver's license and some form of accepted identification.
              </p>
              <p>
                Depending on the terms of the rental there may be additional requirements for
                proof of address, a deposit or other papers. The minimum age and other
                eligibility criteria may differ based on the rental policy and vehicle type and
                hence we suggest you to confirm them before booking.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Documents Required for Self Drive Car Rental in Gurgaon</h2>
              <p>Customers may be required to provide:</p>
              <div className="check-grid" style={{ marginTop: 14 }}>
                {documentsRequired.map((doc) => (
                  <div className="item" key={doc}>
                    <span className="dot" />
                    <p>{doc}</p>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 14 }}>
                Before booking, you may confirm the exact documents with Grab Your Cab to avoid
                any delays at the time of collection of the vehicle.
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
            <h2>How to Book a Self Drive Car in Gurgaon</h2>
            <p>Booking a self-drive rental can be completed through a straightforward process.</p>
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
              <h2>Ready to Drive Gurgaon on Your Own Terms?</h2>
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

      {/* ---------- RENTAL DURATIONS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Choose Your Duration</span>
            <h2>Self Drive Car Rental for Different Rental Durations</h2>
            <p>Different travel plans require different rental periods.</p>
          </div>
          <div className="dur-grid">
            {rentalDurations.map((d) => (
              <div className="dur-card" key={d.title}>
                <span className="badge">{d.badge}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--muted)", fontSize: "13.5px" }}>
            People looking for a vehicle for the longer term can also enquire about the monthly
            car rental in Gurgaon and the long term rental options that might be available. The
            availability and price are subject to the selected vehicle and rental period.
          </p>
        </div>
      </section>

      {/* ---------- LOCAL & OUTSTATION + NEAR GURGAON ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental for Local &amp; Outstation Trips</h2>
              <p>
                A self-drive car can be used for travel in Gurgaon city, Delhi travel, Delhi NCR
                trips and even for weekend road journeys. Outstation customers planning on
                travelling to Delhi from any other city are required to check if their vehicle
                has permission to travel to the destination.
              </p>
              <p>
                Trips outside the city are made available in accordance with the terms of use,
                vehicle eligibility and mileage restrictions. Verify this information when
                traveling across the country or if you are going a long distance.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Self Drive Car Rental Near Gurgaon</h2>
              <p>
                Gurgaon, being a corporate hub of India sees a lot of demand for self-drive
                rentals from different regions of Delhi NCR. Service coverage and vehicle
                availability may vary by location, and the following are the areas you may
                inquire about if necessary: Golf Course Road, Sohna Road, MG Road, DLF Cyber
                City, Sector 29, Udyog Vihar, Manesar and Dwarka Expressway.
              </p>
              <p>
                Local availability should always be confirmed before booking especially if you
                have a particular pick up or return location in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PRICE + INCLUSIONS ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block">
              <h2>Self Drive Car Rental Price in Gurgaon</h2>
              <p>
                A self-drive rental is priced based on a number of components and not just one.
                These may vary by category such as car type, duration of the rental,
                availability, pickup and drop-off location, miles or minutes limit, deposit and
                add-on services, etc.
              </p>
              <p>
                Outstation charges, late returns, etc may also influence the final rental amount.
                Review full rental terms and fees before confirming your booking instead of
                choosing a rental based on the lowest advertised price only.
              </p>
              <p>
                Please get in touch with Grab Your Cab for availability and price with your
                travel dates and vehicle preferences.
              </p>
            </div>

            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>What Is Included in a Self Drive Car Rental?</h2>
              <p>
                The inclusions are based on the selected rental package and rental agreement. The
                renting may be for the use of a personal vehicle for a specified period, with or
                without services or a mileage allowance.
              </p>
              <p>
                Details relating to fuel, tolls, parking, challan, extra kilometres, security
                deposits, taxes and any other applicable fees have to be confirmed separately by
                customers. It is important to note these terms before pickup and so that they
                won't surprise you with extra charges during or after your rental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE GRAB YOUR CAB ---------- */}
      <section className="sec">
        <div className="container">
          <div className="seo-wrap">
            <div className="seo-block" style={{ marginBottom: 0 }}>
              <h2>Why Choose Grab Your Cab for Self Drive Car Rental in Gurgaon?</h2>
              <p>
                Grab Your Cab provides flexible and convenient car rental options for customers
                in Gurgaon and across Delhi NCR. Before booking, customers can discuss their
                preferred car, rental duration and travel requirements to choose a suitable
                option for their journey.
              </p>
              <p>
                Depending on availability, Grab Your Cab offers a wide range of vehicles,
                including hatchbacks, sedans, mini SUVs, SUVs and luxury cars. Customers can also
                choose between manual and automatic transmission vehicles.
              </p>
              <p>
                Different fuel options are also available, including petrol, diesel, CNG, hybrid
                and electric cars, giving customers more flexibility based on their travel needs
                and driving preference.
              </p>
              <p>
                Whether it is a local trip, business travel, a weekend plan or an outstation
                journey, choosing the right car and rental duration can make the journey more
                comfortable and convenient.
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
              <h2>Book a Self Drive Car Rental in Gurgaon with Grab Your Cab</h2>
              <p>
                A self-drive car rental in Gurgaon allows you to manage your local trips,
                business or leisure travel, weekend ride and even qualified outstation drives at
                your own pace. Grab Your Cab offers customers a convenient way to enquire about
                available vehicles and rental durations based on their requirements. Select the
                vehicle category that suits your journey, confirm the rental terms and complete
                the required booking process before pickup. Book your self drive car in Gurgaon
                with Grab Your Cab and enjoy the freedom to travel on your own schedule.
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
            <h2>Frequently Asked Questions About Self Drive Car Rental in Gurgaon</h2>
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
            <h2>Our Self Drive Car Rental Office</h2>
            <hr />
          </div>
          <div className="garage-grid">
            <div className="garage-map">
              
               <a className="maps-link"
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