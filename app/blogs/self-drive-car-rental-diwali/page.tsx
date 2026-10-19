import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import firstBlogImg from "../images/first-blog.png"
import Footer from '@/components/site/Footer'
import Header from '@/components/site/Header'

/* ------------------------------------------------------------
   SEO (doc se same)
------------------------------------------------------------ */
export const metadata: Metadata = {
  title: 'Self-Drive Car Rental for Diwali: Family Travel Guide',
  keywords:`self drive car rental for family trips
diwali road trip,
car rental for family travel,
self drive car rental Delhi NCR,
self drive car rental Delhi,
self drive car rental Gurgaon,
self drive car rental Noida.
`,
  description:
    'Plan a family Diwali trip with a self-drive car rental. Explore car options, booking tips, travel costs and road trip ideas from Delhi NCR.',
}

const heroAlt = 'Self-drive car rental for Diwali'

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
   CONTENT (word to word as per doc)
------------------------------------------------------------ */
const useCases = [
  "Visiting family members in nearby cities.",
  "Travelling to religious places and local attractions.",
  "Carrying gifts, shopping bags and luggage.",
  "Planning a weekend holiday without being tied to fixed transport schedules.",
  "Making multiple stops during a family outing.",
]

const benefits: [string, string][] = [
  ["Flexible schedules:", "When you can make your own travel plans, you decide when to travel and rest. This is really useful when travelling with children or elderly members of family."],
  ["Space for luggage:", "A good car has space for suitcases, festive presents and shopping bags. Check the boot size before you book, especially if you’ve got luggage."],
  ["Privacy and convenience:", "Your family can travel together without sharing the vehicle with strangers. You can also take breaks when needed, provided you park safely and follow local rules."],
  ["More control over the itinerary:", "A rental car also comes in handy if you're planning multiple stops on a single trip. For instance, a family travelling from Delhi to Agra might want to take a break for meals or visit attractions on the way."],
]

const comparison = [
  ["Driving responsibility", "You drive", "Professional driver drives"],
  ["Itinerary", "Greater personal control", "Depends on the booking terms"],
  ["Best suited for", "Road trips and flexible outings", "Airport transfers and relaxed travel"],
  ["Cost considerations", "Rental, fuel, tolls and applicable fees", "Fare, distance, waiting and applicable charges"],
  ["Driving experience", "A valid licence and confidence are essential", "No need to drive yourself"],
  ["Convenience", "Useful for multiple stops", "Helpful when you want to avoid driving"],
]

const carTypes: [string, string][] = [
  ["Hatchback:", "Good for families with small kids visiting the city or minimal traveling luggage."],
  ["Sedan:", "A sensible rental for a road trip on the highway with decent luggage."],
  ["SUV:", "An SUV may be suitable for a larger family or an outing requiring extra passenger and luggage, though this depends on the passenger and luggage capacity of the particular model."],
]

const carChecklist = [
  "Passenger capacity and boot space.",
  "Air conditioning, seat belts and essential safety equipment.",
  "Vehicle condition, tyres, lights and brakes.",
  "Fuel policy and included kilometres.",
  "Rental duration, late-return charges and permitted travel areas.",
]

const documents = [
  "A valid driving licence accepted for the rental and vehicle category.",
  "Government-approved identification, as requested by the provider.",
  "A valid payment method and any required security deposit.",
  "Minimum-age and driving-experience requirements.",
  "Terms covering cancellations, damage, insurance and roadside assistance.",
]

const bookingSteps: [string, string][] = [
  ["Choose your dates:", "Festive demand can affect availability, so book as early as practical."],
  ["Compare vehicles:", "Review capacity, rental duration, kilometre limits and total charges."],
  ["Read the terms:", "Check deposit refunds, fuel rules, late returns and cancellation conditions."],
  ["Inspect the car:", "Photograph existing scratches, dents, tyres and the dashboard before departure."],
  ["Confirm support:", "Save the provider's contact number and understand the breakdown procedure."],
]

const destinations: [string, string][] = [
  ["Agra:", "Consider the Taj Mahal and other heritage attractions. Check monument opening schedules and travel restrictions before departure."],
  ["Jaipur:", "Explore historic forts, markets and local food on a longer trip."],
  ["Neemrana:", "A possible choice for a short heritage-focused getaway."],
  ["Mathura and Vrindavan:", "Consider a spiritual visit, while checking local crowd management and traffic advisories."],
  ["Rishikesh:", "Suitable for travellers planning a longer break, subject to route conditions and available time."],
]

const budgetItems = [
  "Base rental charge.",
  "Fuel or charging costs, depending on the vehicle.",
  "Tolls and parking.",
  "Security deposit and any applicable fees.",
  "Extra kilometres or additional rental hours.",
  "Cleaning, damage or late-return charges, where applicable under the contract.",
]

const faqs = [
  {
    q: "Is self-drive car rental a good option for Diwali?",
    a: "Yes, it can suit families who want flexible schedules, privacy and multiple stops. It works best when the driver is confident and the rental terms are clear.",
  },
  {
    q: "What should I check before booking a self-drive car?",
    a: "Check the licence requirements, vehicle condition, passenger capacity, kilometre limits, fuel policy, deposit, insurance terms and roadside assistance arrangements before paying.",
  },
  {
    q: "Is advance booking necessary during Diwali?",
    a: "Advance booking is advisable because festive demand may reduce vehicle availability or affect prices. Confirm the reservation and pickup instructions directly with the provider.",
  },
  {
    q: "Can I take a rental car outside Delhi NCR?",
    a: "That depends on the provider's contract, permitted travel areas and applicable vehicle requirements. Confirm interstate travel permission, documentation and any additional charges before leaving.",
  },
  {
    q: "How much does a self-drive rental cost during Diwali?",
    a: "Prices vary by car category, dates, rental duration and demand. Compare the complete estimated cost, including fuel, tolls, extra kilometres and applicable fees.",
  },
  {
    q: "Is a self-drive car better than a cab for family trips?",
    a: "A self-drive car offers flexibility if you enjoy driving. A cab may be more convenient when you prefer not to handle traffic, parking or navigation.",
  },
  {
    q: "What type of car is best for a family Diwali trip?",
    a: "Choose based on passenger numbers, luggage and distance. A hatchback may suit small families, while a sedan or SUV may better fit larger groups.",
  },
  {
    q: "What should I do if the rental car breaks down?",
    a: "Move to a safe location if possible, contact the rental provider's roadside assistance and follow their instructions. Avoid arranging unauthorised repairs before checking the contract.",
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
.blog .page-hero .container{padding-top:24px;padding-bottom:24px;display:flex;justify-content:center}
.blog .page-hero h1{color:#fff;font-size:clamp(18px,2.4vw,26px);font-weight:700;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}

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
            <h1>{"Self-Drive Car Rental for Diwali: A Complete Family Travel Guide"}</h1>
          </div>
        </header>

        {/* ARTICLE */}
        <div className="sec">
          <div className="container">
            <article className="article">
              {/* HERO IMAGE - content width */}
              <div className="hero-img">
                <Image
                  src={firstBlogImg}
                  alt={heroAlt}
                  priority
                  sizes="(max-width: 880px) 100vw, 840px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <section>
                <p>{"Diwali is a time for family gatherings, festive shopping, visiting relatives and taking a short holiday. But travelling during the festive season can be tough with crowded public transport, traffic jams and last-minute changes to travel plans. For the families who want more freedom, diwali self drive car rental would be a viable option."}</p>
                <p>{"When you rent a car, you can decide your own itinerary, take your own time, and travel with your family! Grab Your Cab provides a guide ahead to begin your search on the self drive rental in delhi ncr. It is necessary to do some comparison of attribute sizes, rental conditions, prices, safety standards, etc. before placing an order."}</p>
                <p>{"This guide explains how to choose a suitable car, plan your budget and prepare for a comfortable diwali road trip."}</p>
              </section>

              <section>
                <h2>{"Why Consider Self-Drive Car Rental for Diwali?"}</h2>
                <p>{"Self-drive car rental means you hire a car and drive it yourself for a specified duration. You can rent a car for a few hours, a day, a weekend or a longer holiday, depending on the terms of the provider."}</p>
                <p>{"For Diwali, this can be a great option for families travelling between cities, visiting relatives or planning a festive getaway."}</p>
                <p>{"Common uses include:"}</p>
                <ul>
                  {useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
                <p>{"However, availability, rental prices and traffic conditions may change during the festive period. Booking early and confirming the terms can help you avoid last-minute surprises."}</p>
              </section>

              <section>
                <h2>{"Benefits of Self-Drive Cars for Family Travel"}</h2>
                <p>{"A self-drive car can be a family travel facilitator when flexibility and space to yourself are important."}</p>
                {benefits.map(([t, d]) => (
                  <React.Fragment key={t}>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </React.Fragment>
                ))}
                <p>{"Still, self-driving requires attention, rest and responsible planning. It may not be the best choice if you are uncomfortable driving in heavy traffic or unfamiliar areas."}</p>
              </section>

              <section>
                <h2>{"Self-Drive Car vs Cab: Which Is Better for Diwali?"}</h2>
                <p>{"Both options have advantages. The right option for you really depends on where you're going, how much money you're willing to spend, whether you want to drive, and how you get around."}</p>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>{"Factor"}</th>
                        <th>{"Self-drive rental"}</th>
                        <th>{"Cab with driver"}</th>
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
                <p>{"You should go for a self-drive car if you like to drive and for the freedom. Take a cab if you want to sit back, don’t know the way or think you’re going to get caught in festive traffic hell."}</p>
              </section>

              <section>
                <h2>{"How to Choose the Right Rental Car for Your Family"}</h2>
                <p>{"The best car for a family trip depends on passenger numbers, luggage, route conditions and comfort requirements."}</p>
                <ul>
                  {carTypes.map(([t, d]) => (
                    <li key={t}>
                      <b>{t}</b> {d}
                    </li>
                  ))}
                </ul>
                <p>{"Make sure you have everything you need checked off your list before finalising your family car hire."}</p>
                <ul>
                  {carChecklist.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <p>{"Do not choose a car based on price alone. A slightly more suitable vehicle may provide better comfort and practicality for a long journey."}</p>
              </section>

              <section>
                <h2>{"Documents, Security Deposit and Booking Tips"}</h2>
                <p>{"Rental companies typically require drivers to satisfy a series of eligibility criteria and provide certain documents. Specific criteria differ depending on the company and the vehicle classification."}</p>
                <p>{"Before booking, prepare to check:"}</p>
                <ul>
                  {documents.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <h3>{"How to book a self drive car"}</h3>
                <ol className="steps">
                  {bookingSteps.map(([t, d]) => (
                    <li key={t}>
                      <div>
                        <b>{t}</b> {d}
                      </div>
                    </li>
                  ))}
                </ol>
                <p>
                  {"You can explore options through Grab Your Cab, "}
                  <Link className="inline" href="/self-drive-car-rental-delhi">
                    {"Self Drive car rental in Delhi"}
                  </Link>
                  {", "}
                  <Link className="inline" href="/self-drive-car-rental-gurgaon">
                    {"Self Drive Car Rental in Gurgaon"}
                  </Link>
                  {" and "}
                  <Link className="inline" href="/self-drive-car-rental-noida">
                    {"Self Drive Car Rental in Noida"}
                  </Link>
                </p>
              </section>

              <section>
                <h2>{"Best Road Trip Ideas from Delhi NCR During Diwali"}</h2>
                <p>{"A diwali road trip can turn a family visit into a vacation of sorts. Plan destinations based on the time you have available, weather conditions, and how far you’re willing to drive."}</p>
                <ul>
                  {destinations.map(([t, d]) => (
                    <li key={t}>
                      <b>{t}</b> {d}
                    </li>
                  ))}
                </ul>
                <p>{"These are suggestions and not guarantees of journey times or accessibility. Check out current traffic advisories/weather/destination opening hours over Diwali. When necessary, start early, break journey and avoid travelling when tired."}</p>
              </section>

              <section>
                <h2>{"How to Plan Your Diwali Travel Budget"}</h2>
                <p>{"Self drive car rental Delhi NCR cost varies as per the car, rental duration, company, demand and travel distance. No one price fits all for all diwali bookings."}</p>
                <p>{"Build your budget around these expenses:"}</p>
                <ul>
                  {budgetItems.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p>{"Ask for the total estimated cost before payment, including taxes and optional services. Confirm if the security deposit is refundable and when it will be refunded."}</p>
                <p>{"For a fair comparison, you can calculate the estimated cost per person and compare it to a cab fare for the same itinerary. Factor in the cost of your time and the responsibility of driving."}</p>
              </section>

              <section>
                <h2>{"Conclusion"}</h2>
                <p>{"Self-drive car rental in diwali will offer flexibility to go to relatives home, nearby places and plan festive holiday for the family. The secret is the selection of the right car, knowledge of the rental contract and the cost of a full trip."}</p>
                <p>{"Check the car before you leave, check traffic reports, and allow plenty of time for breaks. When it comes to hire deals in delhi ncr, just go through the services of Grab Your Cab and check the terms on offer for peace of mind. A little prior thought can ensure that your family journey is more comfortable and more ordered."}</p>
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