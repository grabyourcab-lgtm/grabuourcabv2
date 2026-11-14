import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
// TODO: apni hero image yahan lagao (file name change kar lena)
import secondBlogImg from "../images/third-blog.webp"
import Footer from '@/components/site/Footer'
import Header from '@/components/site/Header'
import AuthorCard from '../components/AuthorCard'

/* ------------------------------------------------------------
   SEO
------------------------------------------------------------ */
// export const metadata: Metadata = {
//   title: 'Self Drive Car Rental in Noida: Cars, Charges & Booking Guide',
//   keywords: `self drive car rental in Noida,
// self drive cars on rent in Noida,
// car rental without driver in Noida,
// self drive car hire in Noida,
// self drive car rental charges in Noida,
// self drive car rental for outstation,
// documents required for self drive car rental.
// `,
//   alternates: {
//     canonical: "/blogs/self-drive-car-rental-noida-guide",
//   },
//   description:
//     'Looking for self drive car rental in Noida? Explore car options, rental charges, documents, booking terms and tips before booking with Grab Your Cab.',
// }

export const metadata: Metadata = {
  title: 'Self Drive Car Rental in Noida: Cars, Charges & Booking Guide',
  keywords: `self drive car rental in Noida,
self drive cars on rent in Noida,
car rental without driver in Noida,
self drive car hire in Noida,
self drive car rental charges in Noida,
self drive car rental for outstation,
documents required for self drive car rental.
`,
  alternates: {
    canonical: "/blogs/self-drive-car-rental-noida-guide",
  },
  description:
    'Explore self drive car rental in Noida, including car options, rental charges, required documents, kilometre limits and essential booking tips from Grab Your Cab.',
}

const heroAlt = 'Self drive car rental in Noida'

/* ------------------------------------------------------------
   MORE BLOGS: khali array = section render nahi hoga
------------------------------------------------------------ */
type RelatedBlog = {
  title: string
  slug: string
  excerpt: string
  image?: string
}

const relatedBlogs: RelatedBlog[] = [
  // { title: '...', slug: '...', excerpt: '...', image: '/images/blog/....jpg' },
]

/* ------------------------------------------------------------
   CONTENT (as per doc)
------------------------------------------------------------ */
const processSteps = [
  "Selecting a suitable vehicle and rental duration.",
  "Checking availability for the required dates.",
  "Submitting the documents requested by the provider.",
  "Reviewing the rental agreement, charges and policies.",
  "Completing payment and any applicable deposit.",
  "Inspecting the vehicle before taking possession.",
  "Returning the vehicle according to the agreed terms.",
]

const whyNoida: [string, string][] = [
  ["Flexible travel:", "Plan your journey and stops according to your schedule."],
  ["Personal convenience:", "Travel with family, friends or colleagues without arranging a driver."],
  ["Privacy:", "Enjoy the journey with your chosen travel companions."],
  ["Vehicle choice:", "Select a suitable category based on passenger numbers and luggage."],
  ["Planned road trips:", "Consider a rental vehicle for outstation journeys when the provider permits them."],
]

const vehicleTable = [
  ["Hatchback", "Short city journeys and small groups", "Passenger space and luggage capacity"],
  ["Sedan", "Everyday travel and comfortable journeys", "Boot space and seating"],
  ["SUV", "Longer journeys and larger groups", "Vehicle dimensions, luggage and fuel requirements"],
  ["Automatic car", "Drivers who prefer automatic transmission", "Transmission type and driving familiarity"],
  ["Premium car", "Customers seeking a particular vehicle experience", "Availability and applicable rental terms"],
]

const quotationItems = [
  "Rental price and booking duration.",
  "Included kilometres, if applicable, and extra-kilometre charges.",
  "Security deposit and refund conditions.",
  "Fuel policy, tolls and parking expenses.",
  "Late-return charges.",
  "Cancellation and booking modification terms.",
  "Applicable taxes and any additional fees.",
]

const depositQuestions = [
  "Is a security deposit applicable, and how and when is it refunded?",
  "Is there a daily kilometre allowance? What is the extra-kilometre rate?",
  "Who is responsible for fuel, tolls and parking?",
  "What happens if the vehicle is returned late?",
  "Are cancellation or extension fees applicable?",
]

const documents = [
  "A valid driving licence.",
  "Identity proof.",
  "Address proof, if required.",
  "Booking and payment details.",
  "Additional documents for verification, where applicable.",
]

const outstationChecks = [
  "Whether outstation travel is permitted and which destinations or states are covered.",
  "Whether interstate travel requires prior approval.",
  "Applicable kilometre limits and additional charges.",
  "Roadside assistance and breakdown arrangements.",
  "Vehicle return location and timing.",
  "Any restrictions mentioned in the rental agreement.",
]

const comparison = [
  ["Driving", "Customer drives", "Professional driver drives"],
  ["Privacy", "Personal travel arrangement", "Depends on journey and vehicle"],
  ["Responsibility", "Customer follows driving and rental terms", "Driver handles driving"],
  ["Best suited for", "People who prefer driving themselves", "People who prefer not to drive"],
  ["Planning", "Customer manages the route", "Driver-assisted travel"],
]

const deliveryChecks = [
  "Check the exterior for scratches, dents and visible damage.",
  "Inspect the tyres and ensure they appear properly inflated.",
  "Check headlights, indicators, brake lights and mirrors.",
  "Confirm that the fuel level matches the agreement.",
  "Check the brakes, steering, air conditioning and other essential controls.",
  "Verify the vehicle documents and emergency contact details.",
  "Record existing damage with photographs or videos.",
  "Confirm the return time, location and handover process.",
]

const beforeProceeding = [
  "Available vehicle categories.",
  "Pickup and return arrangements.",
  "Rental charges.",
  "Deposit requirements.",
  "Kilometre limits.",
  "Insurance details.",
  "Outstation permissions.",
]

const faqs = [
  {
    q: "What is self-drive car rental in Noida?",
    a: "It is a rental arrangement in which an eligible customer hires a car and drives it independently, subject to the provider's terms.",
  },
  {
    q: "What documents are required for self-drive car rental?",
    a: "A valid driving licence and identity proof may be required. Confirm the complete document list with the rental provider.",
  },
  {
    q: "How much does self-drive car rental cost in Noida?",
    a: "Charges depend on the vehicle, rental duration and booking terms. Request a detailed quotation before confirming.",
  },
  {
    q: "Is a security deposit required?",
    a: "Deposit requirements vary by provider. Ask about the amount, payment method and refund timeline before booking.",
  },
  {
    q: "Can I take a self-drive rental car outstation?",
    a: "This depends on the rental agreement. Confirm interstate permissions, distance limits and additional charges in advance.",
  },
  {
    q: "Are extra kilometres charged separately?",
    a: "Some rental plans may have kilometre limits and additional charges. Check the applicable allowance and rate before booking.",
  },
  {
    q: "Can I extend my car rental period?",
    a: "An extension may depend on vehicle availability and provider approval. Request confirmation before the original return time.",
  },
  {
    q: "What should I check before taking the rental car?",
    a: "Inspect the vehicle's exterior, tyres, lights, fuel level and essential controls. Record existing damage and report it before departure.",
  },
  {
    q: "Does self-drive car rental include insurance?",
    a: "Insurance arrangements and customer liability vary. Ask for the policy details, exclusions and damage-related terms before signing the agreement.",
  },
  {
    q: "How can I enquire about self-drive car rental with Grab Your Cab?",
    a: "Visit www.grabyourcab.com and contact the team to confirm current Noida service availability and booking conditions.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

/* ------------------------------------------------------------
   STYLES (Grab Your Cab theme: maroon + slate)
------------------------------------------------------------ */
const pageCss = `
:root{
  --red:#9f1c33;--red-dark:#7e1628;--slate:#33414f;
  --ink:#212529;--text:#444;--muted:#666;
  --line:#e1e1e1;--bg:#ffffff;--grey:#f5f5f5;
  --maxw:1200px;--r:6px;--shadow:0 2px 10px rgba(0,0,0,.08);
}
.blog *{box-sizing:border-box}
.blog{font-family:"Inter","Segoe UI",Roboto,Arial,sans-serif;color:var(--text);background:var(--bg);line-height:1.6;font-size:15px;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.blog h1,.blog h2,.blog h3{font-family:"Poppins","Inter",sans-serif;color:var(--ink);line-height:1.25}
.blog a{color:inherit;text-decoration:none}
.blog .container{max-width:var(--maxw);margin:0 auto;padding:0 20px;width:100%}
.blog .sec{padding:55px 0}
.blog .sec.grey{background:var(--grey)}

/* hero (title only, slim strip, centered single line) */
.blog .page-hero{position:relative;background:var(--slate);color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;isolation:isolate}
.blog .page-hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(33,43,54,.45) 0%,rgba(33,43,54,.85) 100%)}
.blog .page-hero .container{padding-top:0px;padding-bottom:0px;display:flex;justify-content:center}
.blog .page-hero h1{color:#fff;font-size:clamp(18px,2.4vw,28px);font-weight:700;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}

/* hero image (content width) */
.blog .hero-img{max-width:840px;margin:0 auto 30px;border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
.blog .hero-img img{display:block;width:100%;height:auto}

/* article */
.blog .article{max-width:840px;margin:0 auto}
.blog .article section{margin-bottom:38px}
.blog .article h2{font-size:clamp(20px,2.6vw,26px);font-weight:700;margin-bottom:14px;position:relative;padding-bottom:10px}
.blog .article h2::after{content:"";position:absolute;left:0;bottom:0;width:54px;height:3px;background:var(--red)}
.blog .article h3{font-size:17px;font-weight:600;margin:18px 0 6px}
.blog .article p{font-size:15px;line-height:1.8;margin-bottom:12px}
.blog .article a.inline{color:var(--red);font-weight:600;border-bottom:1px solid rgba(159,28,51,.35)}
.blog .article a.inline:hover{border-color:var(--red)}

/* lists (card style) */
.blog .article ul{list-style:none;margin:0 0 18px;padding:0;display:flex;flex-direction:column;gap:10px}
.blog .article ul li{position:relative;margin:0;padding:12px 16px 12px 44px;background:#fff;border:1px solid var(--line);border-left:3px solid var(--red);border-radius:var(--r);font-size:15px;line-height:1.7;color:var(--text);transition:box-shadow .18s,transform .18s}
.blog .article ul li:hover{box-shadow:var(--shadow);transform:translateX(2px)}
.blog .article ul li::before{content:"";position:absolute;left:18px;top:20px;width:8px;height:8px;border-radius:50%;background:var(--red);box-shadow:0 0 0 4px rgba(159,28,51,.15)}
.blog .article ul li b{color:var(--red);font-weight:600}

/* table */
.blog .table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);margin:16px 0 18px;box-shadow:var(--shadow)}
.blog table{width:100%;border-collapse:collapse;min-width:560px;font-size:14.5px;background:#fff}
.blog thead th{background:var(--slate);color:#fff;text-align:left;font-weight:600;padding:13px 16px;font-family:"Poppins","Inter",sans-serif;font-size:14px}
.blog tbody td{padding:12px 16px;border-top:1px solid var(--line);vertical-align:top;color:var(--text)}
.blog tbody tr:nth-child(even) td{background:var(--grey)}
.blog tbody td:first-child{font-weight:600;color:var(--ink);border-left:3px solid var(--red)}

/* steps */
.blog .steps{list-style:none;margin:0 0 14px;padding:0;counter-reset:s;display:flex;flex-direction:column;gap:10px}
.blog .steps li{counter-increment:s;display:flex;gap:14px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:14px 16px;margin:0;font-size:15px}
.blog .steps li::before{content:counter(s);flex:none;width:32px;height:32px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center;font-weight:700;font-size:14px}

/* cta box */
.blog .cta-box{background:var(--slate);color:#fff;border-radius:var(--r);padding:22px 24px;margin:18px 0;border-left:4px solid var(--red);box-shadow:var(--shadow)}
.blog .article .cta-box p{color:#fff;margin:0;font-size:15px;line-height:1.75}
.blog .article .cta-box a.inline{color:#fff;border-bottom:1px solid rgba(255,255,255,.6)}

/* faq */
.blog .faq{display:flex;flex-direction:column;gap:10px;max-width:840px;margin:0 auto}
.blog .faq details{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:0 18px}
.blog .faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:15px 0;font-weight:600;font-size:15px;font-family:"Poppins","Inter",sans-serif;color:var(--ink)}
.blog .faq summary::-webkit-details-marker{display:none}
.blog .faq .chev{width:28px;height:28px;border-radius:50%;background:var(--grey);display:grid;place-items:center;flex:none;transition:transform .2s;font-weight:700;color:var(--red)}
.blog .faq details[open] .chev{transform:rotate(45deg)}
.blog .faq details p{color:var(--muted);font-size:14px;padding:0 0 16px;max-width:68ch;margin:0}

/* more blogs */
.blog .sec-head{text-align:center;margin-bottom:32px}
.blog .sec-head h2{font-size:clamp(24px,3.2vw,32px);font-weight:700;display:inline-block;position:relative;padding-bottom:14px}
.blog .sec-head h2::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:0;width:70px;height:3px;background:var(--red)}
.blog .blog-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.blog .blog-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .18s,border-color .18s}
.blog .blog-card:hover{box-shadow:var(--shadow);border-color:var(--red)}
.blog .blog-card .thumb{aspect-ratio:16/10;background:var(--slate);overflow:hidden}
.blog .blog-card .thumb img{width:100%;height:100%;object-fit:cover;display:block}
.blog .blog-card .body{padding:18px 20px 20px;display:flex;flex-direction:column;gap:8px;flex:1}
.blog .blog-card h3{font-size:16.5px;font-weight:600}
.blog .blog-card p{font-size:13.5px;color:var(--muted);line-height:1.65}
.blog .blog-card .more{margin-top:auto;color:var(--red);font-weight:600;font-size:13.5px}

@media (max-width:620px){
  .blog .container{padding:0 16px}
  .blog .sec{padding:36px 0}
  .blog .page-hero .container{padding-top:18px;padding-bottom:18px}
  .blog .page-hero h1{white-space:normal;font-size:16px}
  .blog .article ul li{padding:12px 14px 12px 40px}
  .blog .article ul li::before{left:15px}
}
`

/* ------------------------------------------------------------
   PAGE
------------------------------------------------------------ */
const Page = () => {
  return (
    <>
      <Header />
      <main className="blog">
        <style dangerouslySetInnerHTML={{ __html: pageCss }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* HERO (slim strip, centered single line) */}
        <header className="page-hero">
          <div className="container">
            <h1>{"Self Drive Car Rental in Noida: How to Choose and Book the Right Car"}</h1>
          </div>
        </header>

        {/* ARTICLE */}
        <div className="sec">
          <div className="container">
            <article className="article">
              {/* HERO IMAGE - content width */}
              <div className="hero-img">
                <Image
                  src={secondBlogImg}
                  alt={heroAlt}
                  priority
                  sizes="(max-width: 880px) 100vw, 840px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

             <section>
  <p>{"If you are looking for an easy way to get around Noida without relying on drivers or public transport then a self drive car rental in Noida is something to consider. Eligible customers can rent a car based on the terms of the rental company."}</p>
  <p>{"You may need a car for a variety of reasons. Whether it is for commuting around locally, a family day out, your own business or a planned road trip. When looking at car rentals it is important to understand what type of car you need, how long you want to hire it for, how many kilometers you can drive, the security deposit required, insurance and return terms."}</p>
  <p>{"This guide will explain how self drive car hire works, what to look out for and questions to ask when booking with a company like Grab Your Cab."}</p>
</section>

              <section>
                <h2>{"1. How Does Self Drive Car Rental Work?"}</h2>
                <p>{"Self-drive car rental is a service in which a customer hires a vehicle and drives it independently instead of travelling with a professional driver."}</p>
                <p>{"The process generally involves:"}</p>
                <ul>
                  {processSteps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p>{"The exact process, eligibility conditions and payment requirements can vary between rental providers. Read the booking terms and rental agreement before making a payment."}</p>
              </section>

              <section>
                <h2>{"2. Why Consider Renting a Self-Drive Car in Noida?"}</h2>
                <p>{"Noida has residential sectors, commercial centres, educational institutions, shopping destinations and connections to Greater Noida and Delhi. Depending on your travel plans, having access to a car can make it easier to organise multiple stops."}</p>
                <ul>
                  {whyNoida.map(([t, d]) => (
                    <li key={t}>
                      <b>{t}</b> {d}
                    </li>
                  ))}
                </ul>
                <p>{"Before booking, confirm whether the provider serves your particular pickup and return location in Noida, Greater Noida or Noida Extension. Do not assume that every locality is covered."}</p>
              </section>

              <section>
                <h2>{"3. Which Self-Drive Car Should You Choose?"}</h2>
                <p>{"The right vehicle depends on the number of passengers, luggage, route and driving preferences. Rental providers may offer different models and categories depending on their fleet."}</p>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>{"Vehicle category"}</th>
                        <th>{"Suitable for"}</th>
                        <th>{"What to consider"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicleTable.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>{"These are general vehicle categories, not a confirmed list of Grab Your Cab's available fleet. Ask the team for current vehicle options, model details, seating capacity and transmission before booking."}</p>
              </section>
            

                      {/* ---------- EXPLORE SELF DRIVE CARS (cards) ---------- */}
<section style={{ marginBottom: 38 }}>
  <style>{`.blog .article h2.cars-heading::after{display:none}`}</style>

  <h2
    className="cars-heading"
    style={{
      textAlign: 'center',
      fontFamily: '"Poppins","Inter",sans-serif',
      fontSize: 'clamp(20px,2.6vw,26px)',
      fontWeight: 700,
      color: '#212529',
      lineHeight: 1.25,
      margin: '0 0 24px',
      paddingBottom: 0,
    }}
  >
    {"Explore Self Drive Cars in Noida for Every Travel Need"}
  </h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 18,
    }}
  >
    {[
      { name: 'Hatchback', img: '/cars/hatchback.jpeg' },
      { name: 'Sedan', img: '/cars/sedan.jpeg' },
      { name: 'SUV', img: '/cars/suv.jpeg' },
      { name: 'Automatic car', img: '/cars/automatic.jpeg' },
      { name: 'Premium car', img: '/cars/premium.jpeg' },
    ].map((car) => (
      <div
        key={car.name}
        style={{
          background: '#fff',
          border: '1px solid #e1e1e1',
          borderRadius: 6,
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,.08)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            aspectRatio: '16/10',
            background: '#33414f',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={car.img}
            alt={`${car.name} self drive car rental in Noida`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
        <div
          style={{
            padding: '14px 16px',
            textAlign: 'center',
            borderTop: '3px solid #9f1c33',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: '"Poppins","Inter",sans-serif',
              fontSize: 16.5,
              fontWeight: 600,
              color: '#212529',
            }}
          >
            {car.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>

              <section>
                <h2>{"4. Self Drive Car Rental Charges in Noida"}</h2>
                <p>{"Self-drive car rental charges in Noida can depend on the vehicle, rental period, booking dates and provider's pricing structure. A low advertised rental price does not necessarily represent the complete cost of the journey."}</p>
                <p>{"Before confirming your booking, request a clear quotation covering:"}</p>
                <ul>
                  {quotationItems.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
                <p>{"Ask the provider to share the final payable amount and important conditions in writing. Grab Your Cab's current self-drive rates and applicable charges should be confirmed directly with the team. Do not rely on outdated prices or estimates when planning your booking."}</p>
              </section>

              <section>
                <h2>{"5. Security Deposit, Kilometre Limits and Extra Charges"}</h2>
                <p>{"A rental agreement may include conditions relating to deposits, distance limits and additional expenses. These can affect the overall cost, so review them carefully."}</p>
                <ul>
                  {depositQuestions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p>{"Ask for written confirmation of the terms rather than relying only on a verbal explanation."}</p>
              </section>

              <section>
                <h2>{"6. Documents and Eligibility Requirements"}</h2>
                <p>{"The documents required for self-drive car rental depend on the rental provider's verification process and applicable rules."}</p>
                <p>{"You may be asked to provide:"}</p>
                <ul>
                  {documents.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p>{"Minimum age, licence validity, driving experience requirements and accepted documents can differ between providers. International visitors should confirm whether an International Driving Permit or other documentation is required for their circumstances."}</p>
                <p>{"Before booking with Grab Your Cab, contact the team to confirm the current eligibility conditions and accepted documents."}</p>
              </section>

              <section>
                <h2>{"7. Can You Take a Self-Drive Rental Car Outstation?"}</h2>
                <p>{"A self-drive car rental for outstation travel may suit customers planning trips beyond Noida. However, not every rental agreement automatically permits interstate or long-distance travel."}</p>
                <p>{"Before planning your route, confirm:"}</p>
                <ul>
                  {outstationChecks.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <p>{"Never take a rental vehicle outside the permitted area without the provider's approval."}</p>
              </section>

              <section>
                <h2>{"8. Self-Drive Rental vs Chauffeur-Driven Taxi"}</h2>
                <p>{"Both options serve different travel needs. Your choice should depend on whether you prefer to drive or have someone else handle the journey."}</p>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>{"Factor"}</th>
                        <th>{"Self-drive rental"}</th>
                        <th>{"Chauffeur-driven taxi"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>{"If you do not want the responsibility of driving, a chauffeur-driven taxi may be a more suitable alternative."}</p>
              </section>

              <section>
                <h2>{"9. What to Check Before Taking Delivery"}</h2>
                <p>{"Inspect the vehicle before starting your journey. A few minutes of checking can help prevent misunderstandings when you return it."}</p>
                <ul>
                  {deliveryChecks.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p>{"Report any issue to the provider before driving away. Keep a copy of the inspection record and rental agreement."}</p>
              </section>

              <section>
                <h2>{"10. Why Consider Grab Your Cab for Self-Drive Rental?"}</h2>
               <p>{"Choosing the right hiring company is very important. You need to ensure they offer good vehicles, easy booking, proper documentation and reliable support."}</p>
<p>{"Contact the Grab Your Cab team to find out what is available in Noida at the moment."}</p>
<p>{"Ask them what categories of vehicle they can provide, how they will collect and drop off, hire rates, deposits, miles allowed, insurance and whether you can hire out of town."}</p>
                
                
             
              </section>

              <section>
                <h2>{"Conclusion"}</h2>
                <p>{"To choose the best self drive car rental in Noida, you should know what your requirements are and look over the rental contract. Check out the vehicle category, cost of rental, km limit, deposit details, documents and insurance."}</p>
                <p>{"If you’re thinking about hiring from Grab Your Cab ask them about their current availability for self drive cars in Noida. Get clear details on booking conditions with them so you can plan your journey accordingly."}</p>
              </section>
            </article>
          </div>
        </div>

        {/* FAQ */}
        <section className="sec grey">
          <div className="container">
            <div className="sec-head">
              <h2>{"Frequently Asked Questions"}</h2>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <span className="chev">+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <AuthorCard />
          </div>
        </section>

        {/* MORE BLOGS: sirf tab render hoga jab relatedBlogs me data ho */}
        {relatedBlogs.length > 0 && (
          <section className="sec">
            <div className="container">
              <div className="sec-head">
                <h2>{"More Blogs"}</h2>
              </div>
              <div className="blog-grid">
                {relatedBlogs.map((b) => (
                  <Link href={`/blog/${b.slug}`} className="blog-card" key={b.slug}>
                    {b.image && (
                      <div className="thumb">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={b.image} alt={b.title} loading="lazy" />
                      </div>
                    )}
                    <div className="body">
                      <h3>{b.title}</h3>
                      <p>{b.excerpt}</p>
                      <span className="more">{"Read more"}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Page