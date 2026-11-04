import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import secondBlogImg from "../images/second-blog.webp"
import Footer from '@/components/site/Footer'
import Header from '@/components/site/Header'
import AuthorCard from '../components/AuthorCard'

/* ------------------------------------------------------------
   SEO (doc se same)
------------------------------------------------------------ */
export const metadata: Metadata = {
  title: '15 Best Places to Visit Near Delhi in One Day & Weekend',
  keywords: `Best places to visit near Delhi,
Places to visit near Delhi in one day,
one day trip from Delhi,
weekend getaways near Delhi,
places near Delhi within 100 km,
places to visit near Delhi by cab,
outstation cab from Delhi.
`,
  alternates: {
    canonical: "/blogs/best-places-to-visit-near-delhi-by-cab",
  },
  description:
    ' Explore 15 best places to visit near Delhi with distances, travel times, attractions and travel tips. Plan family trips and weekend getaways with Grab Your Cab.',
}

const heroAlt = 'Best places to visit near Delhi'

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
const quickGuide = [
  ["Surajkund", "20–30 km", "Culture and heritage", "Half day"],
  ["Sultanpur National Park", "45–60 km", "Birdwatching", "Half day"],
  ["Damdama Lake", "50–70 km", "Family outings", "Half/full day"],
  ["Murthal", "45–60 km", "Food and road trips", "Half day"],
  ["Neemrana", "120–130 km", "Heritage and couples", "Full day/overnight"],
  ["Mathura-Vrindavan", "150–180 km", "Spiritual travel", "Full day"],
  ["Agra", "200–230 km", "History and architecture", "Full day"],
  ["Bharatpur", "180–210 km", "Wildlife and nature", "Full/long day"],
  ["Kurukshetra", "160–180 km", "History and spirituality", "Full day"],
  ["Garhmukteshwar", "90–110 km", "Riverside and religious travel", "Full day"],
  ["Jaipur", "270–290 km", "Heritage and shopping", "2–3 days"],
  ["Haridwar", "200–220 km", "Pilgrimage", "1–2 days"],
  ["Rishikesh", "230–250 km", "Adventure and spirituality", "2–3 days"],
  ["Alwar and Sariska", "160–220 km", "Heritage and wildlife", "1–2 days"],
  ["Jim Corbett", "240–280 km", "Wildlife and nature", "2–3 days"],
]

type Place = {
  h: string
  dist: string
  time: string
  dur: string
  label: string
  items: string[]
  tip: string
}

type Group = {
  h: string
  intro: string
  places: Place[]
}

const groups: Group[] = [
  {
    h: "Best Places to Visit Near Delhi Within 100 KM",
    intro:
      "If you have limited time and want to return home the same day, destinations within approximately 100 km are a good starting point. These places are suitable for short drives, family outings and relaxed weekends.",
    places: [
      {
        h: "1. Surajkund, Faridabad – Culture and Heritage",
        dist: "20–30 km from Delhi",
        time: "45 minutes to 1.5 hours",
        dur: "Half day",
        label: "Things to explore:",
        items: [
          "Surajkund Lake and its historic surroundings.",
          "Traditional handicraft exhibitions during the fair.",
          "Regional food and cultural performances.",
          "Nearby attractions in Faridabad.",
        ],
        tip: "If you are planning to visit during the annual crafts fair, check the official event dates, entry arrangements and parking information in advance. Surajkund is a convenient choice for people looking for a short cultural outing without spending too much time travelling.",
      },
      {
        h: "2. Sultanpur National Park, Gurugram – A Nature and Birdwatching Escape",
        dist: "45–60 km",
        time: "1–2 hours",
        dur: "Half day",
        label: "Things to explore:",
        items: [
          "Birdwatching and nature photography.",
          "Walking along designated park trails.",
          "Observing the wetland ecosystem.",
          "Spending a peaceful morning away from city traffic.",
        ],
        tip: "The cooler months, particularly during the migratory bird season, are popular for birdwatching. Arrive early and check the park's current opening arrangements, entry rules and seasonal visitor information before travelling.",
      },
      {
        h: "3. Damdama Lake, Haryana – A Relaxing Family Getaway",
        dist: "50–70 km",
        time: "1.5–2.5 hours",
        dur: "Half day to full day",
        label: "Things to explore:",
        items: [
          "Enjoy the scenic surroundings.",
          "Explore boating facilities where available.",
          "Plan an outdoor family outing.",
          "Visit nearby resorts and restaurants.",
          "Enjoy photography and the natural landscape.",
        ],
        tip: "October to March is generally more comfortable for outdoor activities. Activity availability depends on weather, water conditions and individual operators. Confirm arrangements before starting your journey. Damdama Lake is particularly suitable for families, couples and groups.",
      },
      {
        h: "4. Murthal, Haryana – A Popular Food Road Trip",
        dist: "45–60 km",
        time: "1–1.5 hours",
        dur: "Half day",
        label: "Things to explore:",
        items: [
          "Traditional Punjabi parathas.",
          "Local dhaba-style food.",
          "A relaxed breakfast or lunch drive.",
          "A short road trip with friends and family.",
        ],
        tip: "Weekends can be busy, so an early morning visit may offer a more comfortable experience. Murthal is ideal for people who want a short drive without planning a full-day sightseeing itinerary.",
      },
    ],
  },
  {
    h: "Best One-Day Trips Near Delhi Within 200 KM",
    intro:
      "These destinations require a little more planning but offer rewarding experiences, from royal heritage and temples to wildlife and riverside attractions.",
    places: [
      {
        h: "5. Neemrana Fort Palace, Rajasthan – Experience Royal Heritage",
        dist: "120–130 km",
        time: "2.5–3 hours",
        dur: "Full day or overnight stay",
        label: "Places or experiences to consider:",
        items: [
          "Neemrana Fort Palace.",
          "Heritage architecture and courtyards.",
          "Scenic views of the surrounding hills.",
          "Dining and leisure experiences, subject to property arrangements.",
          "Ziplining and other activities, where available.",
        ],
        tip: "Check the property's day-visitor policy, restaurant access and activity availability before visiting. Not all hotel facilities are necessarily accessible without prior arrangements. Neemrana is an attractive choice for couples, families and travellers looking for a heritage-inspired road trip.",
      },
      {
        h: "6. Mathura and Vrindavan, Uttar Pradesh – A Spiritual Journey",
        dist: "150–180 km",
        time: "3–4 hours",
        dur: "Full day",
        label: "Places or experiences to consider:",
        items: [
          "Shri Krishna Janmabhoomi area, Mathura.",
          "Banke Bihari Temple, Vrindavan.",
          "Prem Mandir, Vrindavan.",
          "ISKCON Temple, Vrindavan.",
          "Vishram Ghat, Mathura.",
        ],
        tip: "Start early from Delhi and visit the main attractions in Mathura. Continue towards Vrindavan for temple visits and other sightseeing. Temple timings, crowd conditions and local traffic can vary, especially during Janmashtami, Holi, weekends and other religious occasions.",
      },
      {
        h: "7. Agra, Uttar Pradesh – Explore the City of the Taj Mahal",
        dist: "200–230 km",
        time: "3.5–5 hours",
        dur: "Full day",
        label: "Places or experiences to consider:",
        items: [
          "Taj Mahal.",
          "Agra Fort.",
          "Mehtab Bagh.",
          "Itimad-ud-Daulah.",
          "Local markets and traditional food.",
        ],
        tip: "Suggested itinerary: leave Delhi early, visit the Taj Mahal, explore Agra Fort, enjoy lunch, visit Mehtab Bagh if time permits and then return. The Taj Mahal is closed for general visitors every Friday. Check official ticket and visitor information before travelling.",
      },
      {
        h: "8. Bharatpur, Rajasthan – Discover Keoladeo National Park",
        dist: "180–210 km",
        time: "3.5–5 hours",
        dur: "Full or long day",
        label: "Places or experiences to consider:",
        items: [
          "Birdwatching.",
          "Nature photography.",
          "Exploring designated park routes.",
          "Observing wetland habitats and wildlife.",
        ],
        tip: "October to March is generally popular for migratory birdwatching. Check current park timings, entry arrangements, weather conditions and available guided activities. Allow enough time for the return journey.",
      },
      {
        h: "9. Kurukshetra, Haryana – History, Culture and Spirituality",
        dist: "160–180 km",
        time: "3–4 hours",
        dur: "Full day",
        label: "Places or experiences to consider:",
        items: [
          "Brahma Sarovar.",
          "Jyotisar.",
          "Sri Krishna Museum.",
          "Sannihit Sarovar.",
          "Other religious and historical sites.",
        ],
        tip: "Check the timings of individual attractions and plan your visits according to the time available. Kurukshetra is a good choice for families, spiritual travellers and people interested in Indian history and mythology.",
      },
      {
        h: "10. Garhmukteshwar, Uttar Pradesh – A Riverside and Religious Escape",
        dist: "90–110 km",
        time: "2–3 hours",
        dur: "Full day",
        label: "Places or experiences to consider:",
        items: [
          "Brijghat.",
          "Ganga riverside surroundings.",
          "Local temples.",
          "Religious activities and seasonal gatherings.",
        ],
        tip: "Check local conditions, bathing arrangements and crowd levels before travelling. Exercise caution near the river and follow local safety instructions.",
      },
    ],
  },
  {
    h: "Best Weekend Getaways Near Delhi",
    intro:
      "Some destinations are technically reachable in a day, but the journey can become tiring if you try to return the same evening. These places are better enjoyed with an overnight stay.",
    places: [
      {
        h: "11. Jaipur, Rajasthan – Explore the Pink City",
        dist: "270–290 km",
        time: "4.5–6 hours",
        dur: "2–3 days",
        label: "Things to experience:",
        items: [
          "Hawa Mahal.",
          "Amber Fort.",
          "City Palace.",
          "Jantar Mantar.",
          "Jal Mahal.",
          "Local markets and traditional restaurants.",
        ],
        tip: "Jaipur deserves more than a rushed sightseeing visit. Plan at least two days if you want to explore its main attractions comfortably.",
      },
      {
        h: "12. Haridwar, Uttarakhand – Experience the Ganga Aarti",
        dist: "200–220 km",
        time: "4–5.5 hours",
        dur: "1–2 days",
        label: "Things to experience:",
        items: [
          "Har Ki Pauri.",
          "Mansa Devi Temple.",
          "Chandi Devi Temple.",
          "Local religious markets.",
          "Ganga riverside areas.",
        ],
        tip: "Aarti schedules and crowd conditions can vary. Check the timings for your travel date and consider an overnight stay if you want to enjoy the city without rushing.",
      },
      {
        h: "13. Rishikesh, Uttarakhand – Adventure, Yoga and Riverside Experiences",
        dist: "230–250 km",
        time: "5–6.5 hours or more",
        dur: "2–3 days",
        label: "Things to experience:",
        items: [
          "Ram Jhula area.",
          "Triveni Ghat.",
          "Beatles Ashram.",
          "Riverside cafés.",
          "Yoga and meditation centres.",
          "River rafting, subject to seasonal availability and operator regulations.",
        ],
        tip: "Check current road conditions and activity availability before travelling. River rafting is subject to seasonal restrictions and safety requirements. Rishikesh is best explored over a weekend.",
      },
      {
        h: "14. Alwar and Sariska, Rajasthan – Heritage and Wildlife",
        dist: "160–220 km, depending on the attraction",
        time: "3.5–5 hours",
        dur: "1–2 days",
        label: "Things to experience:",
        items: [
          "Bala Quila.",
          "City Palace, Alwar.",
          "Siliserh Lake.",
          "Sariska Tiger Reserve.",
          "Local heritage attractions.",
        ],
        tip: "Wildlife safaris require advance planning and are subject to availability, permitted safari zones and forest department regulations. Check official booking information before making your travel plans.",
      },
      {
        h: "15. Jim Corbett National Park, Uttarakhand – A Wildlife Holiday",
        dist: "240–280 km, depending on the resort or park zone",
        time: "5–7 hours",
        dur: "2–3 days",
        label: "Things to experience:",
        items: [
          "Permitted jeep safari experiences.",
          "Birdwatching.",
          "Nature photography.",
          "Riverside resort stays.",
          "Exploring the surrounding forest region.",
        ],
        tip: "Safari bookings, entry zones, permits and operating seasons are regulated. Confirm availability through authorised channels. Wildlife sightings are never guaranteed. Plan at least two nights rather than attempting a rushed return journey.",
      },
    ],
  },
]

const preferences = [
  ["Family outing", "Damdama Lake, Agra, Neemrana"],
  ["Couples", "Neemrana, Damdama Lake, Agra"],
  ["Spiritual travel", "Mathura, Vrindavan, Haridwar"],
  ["Nature and birdwatching", "Sultanpur, Bharatpur"],
  ["History and architecture", "Agra, Jaipur, Kurukshetra"],
  ["Adventure", "Rishikesh, Jim Corbett"],
  ["Short road trip", "Murthal, Surajkund"],
  ["Wildlife experience", "Sariska, Jim Corbett"],
  ["Group outing", "Damdama Lake, Jaipur, Rishikesh"],
]

const planSteps: [string, string][] = [
  ["Choose a destination according to your available time", "Do not select a destination based only on its distance. Consider the total time required for travelling, sightseeing, meals and the return journey. Damdama Lake may be suitable for a relaxed half-day outing, while Agra requires an early departure and a properly planned itinerary."],
  ["Start early", "An early departure can help you avoid some traffic and make better use of the visiting hours at your destination. For longer journeys, plan suitable breaks and avoid driving when tired."],
  ["Prepare a realistic itinerary", "Choose two or three main attractions rather than trying to cover everything. Check opening hours, entry requirements, parking arrangements and ticket availability in advance."],
  ["Select the right vehicle", "Your vehicle should match the number of passengers, luggage requirements and journey duration. A sedan may suit couples and small families. Larger families can consider an SUV or Innova Crysta, while groups can consider a Tempo Traveller."],
  ["Confirm all cab charges before booking", "Before finalising an outstation taxi, confirm pickup and drop-off locations, permitted kilometres, trip duration, extra kilometre charges, driver allowance, tolls, parking, state taxes, waiting charges, cancellation terms and payment conditions."],
  ["Carry essential travel items", "Keep identification documents, drinking water, medicines, phone charger, travel tickets and weather-appropriate clothing. For religious destinations, wildlife parks and monuments, check the relevant visitor guidelines."],
]

const costItems: [string, string][] = [
  ["Distance:", "Longer journeys generally involve higher travel costs."],
  ["Vehicle category:", "Hatchbacks, sedans, SUVs and Tempo Travellers have different rental rates."],
  ["Duration:", "The total booking period and sightseeing time can affect the fare."],
  ["Additional charges:", "Tolls, parking, state taxes, driver allowance and extra kilometres may apply depending on the booking."],
  ["Booking type:", "One-way, round-trip and multi-day outstation bookings may have different pricing structures."],
]

const vehicles: [string, string][] = [
  ["Hatchback:", "Suitable for a small group travelling light and looking for an economical option."],
  ["Sedan:", "A practical choice for couples and small families."],
  ["SUV:", "Offers additional cabin space and is worth considering for longer journeys and family travel."],
  ["Innova Crysta or similar MPV:", "Suitable for families who prefer additional passenger comfort and luggage space."],
  ["Tempo Traveller:", "A convenient option for larger families, friends, group outings and organised trips."],
  ["Luxury cars:", "Suitable for premium journeys, special occasions and travellers who prefer a more exclusive experience."],
  ["Self-drive cars:", "An option for eligible travellers who prefer to manage their own journey and meet the rental terms."],
]

const ourOptions = [
  "Chauffeur-driven sedan and hatchback rentals.",
  "SUV and family vehicle rentals.",
  "Innova Crysta and other premium MPVs.",
  "Luxury car rental services.",
  "Tempo Traveller rentals for group travel.",
  "Luxury bus and group transportation.",
  "Self-drive car rentals for eligible customers.",
  "Outstation and round-trip taxi services.",
]

const whyPlan = [
  "Convenient pickup and drop-off arrangements.",
  "Vehicle choices for different group sizes.",
  "Options for one-way and round-trip journeys.",
  "Transportation for families, couples and corporate groups.",
  "Travel arrangements based on your destination and itinerary.",
]

const faqs = [
  {
    q: "What are the best places to visit near Delhi in one day?",
    a: "Some popular options include Damdama Lake, Sultanpur National Park, Surajkund, Neemrana, Mathura-Vrindavan and Agra. The best choice depends on your starting location, interests and available travel time.",
  },
  {
    q: "Which tourist places are within 100 km of Delhi?",
    a: "Surajkund, Sultanpur National Park, Damdama Lake, Murthal and Garhmukteshwar are some destinations to consider within approximately 100 km of Delhi. Actual distances depend on the pickup location and route.",
  },
  {
    q: "Which is the best one-day trip from Delhi for families?",
    a: "Damdama Lake, Neemrana, Agra and Mathura-Vrindavan are popular choices for family outings. Consider the age of travellers, journey duration and sightseeing requirements before selecting a destination.",
  },
  {
    q: "Which places near Delhi are best for couples?",
    a: "Neemrana, Damdama Lake, Agra and Jaipur are popular choices for couples. They offer different experiences, including heritage architecture, relaxing surroundings and sightseeing.",
  },
  {
    q: "Can I book a cab from Delhi for a same-day round trip?",
    a: "Yes, you can enquire about a same-day round-trip cab, subject to vehicle availability, destination, travel schedule and booking terms. Confirm the total kilometres, duration and additional charges before booking.",
  },
  {
    q: "How much does a one-day outstation cab from Delhi cost?",
    a: "The fare depends on the destination, total kilometres, vehicle category, trip duration, tolls, parking and applicable driver charges. Request a quotation based on your complete itinerary for accurate pricing.",
  },
  {
    q: "Which car is best for a family road trip from Delhi?",
    a: "A sedan may suit a small family, while an SUV or Innova Crysta can be considered for additional passenger and luggage space. Tempo Travellers are suitable for larger groups.",
  },
  {
    q: "Which places near Delhi are best for a weekend getaway?",
    a: "Jaipur, Rishikesh, Haridwar, Jim Corbett, Alwar and Sariska are popular weekend options. Most are better explored with an overnight stay.",
  },
  {
    q: "Is Agra possible as a one-day trip from Delhi?",
    a: "Yes. Agra can be visited in one day with an early departure. You can explore the Taj Mahal and Agra Fort, depending on traffic and available time. Remember that the Taj Mahal is closed on Fridays for general visitors.",
  },
  {
    q: "Can I book a Tempo Traveller for a trip near Delhi?",
    a: "You can enquire about a Tempo Traveller for family outings, group road trips and longer journeys. Choose the seating capacity according to your group size and luggage requirements.",
  },
  {
    q: "Is it better to hire a cab or drive my own car for a day trip?",
    a: "Both options have advantages. Driving your own car offers independence, while hiring a chauffeur-driven cab allows you to relax during the journey and avoid managing the driving yourself. Your choice depends on budget, comfort and personal preference.",
  },
  {
    q: "What should I check before booking an outstation taxi?",
    a: "Check the vehicle category, pickup and drop-off locations, total kilometre allowance, trip duration, tolls, parking, driver allowance, cancellation terms and additional kilometre charges.",
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
.blog .article p.meta{margin-bottom:2px}
.blog .article p.meta b,.blog .article p.tip b{color:var(--red);font-weight:600}
.blog .article p.tip{margin-top:8px}
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
.blog .steps li b{display:block;color:var(--ink);margin-bottom:4px}

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
            <h1>{"15 Best Places to Visit Near Delhi: One-Day Trips and Weekend Getaways"}</h1>
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
                <p>{"Delhi is surrounded by some of North India's most interesting travel destinations, making it easy to plan a refreshing break from everyday city life. Whether you are looking for a peaceful lakeside outing, a historical monument, a spiritual journey, a wildlife experience or a weekend escape, there are plenty of places to explore within a few hours of the capital."}</p>
                <p>{"From the beautiful Taj Mahal in Agra and the spiritual atmosphere of Mathura-Vrindavan to the natural surroundings of Damdama Lake and Sultanpur National Park, these destinations offer something for every kind of traveller."}</p>
                <p>{"The best part is that many of these places can be explored by road. You can travel in your own car, hire a chauffeur-driven taxi or book a suitable vehicle for your family or group."}</p>
                <p>{"In this guide, we explore 15 of the best places to visit near Delhi, including approximate distances, driving times, popular attractions, suggested travel durations and useful tips to help you plan your next trip."}</p>
              </section>

              <section>
                <h2>{"Quick Guide: Best Places to Visit Near Delhi"}</h2>
                <p>{"Here is a quick comparison of popular destinations based on distance and travel experience."}</p>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>{"Destination"}</th>
                        <th>{"Approx. distance one way"}</th>
                        <th>{"Best for"}</th>
                        <th>{"Ideal duration"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quickGuide.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                          <td>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>{"Distances are indicative road estimates from Delhi and vary with the exact pickup location and route. Travel times depend on traffic, road conditions, stops and seasonal factors. Longer destinations are better explored with an overnight stay."}</p>
              </section>

              {groups.map((g) => (
                <section key={g.h}>
                  <h2>{g.h}</h2>
                  <p>{g.intro}</p>
                  {g.places.map((p) => (
                    <React.Fragment key={p.h}>
                      <h3>{p.h}</h3>
                      <p className="meta"><b>{"Approximate distance:"}</b> {p.dist}</p>
                      <p className="meta"><b>{"Estimated driving time:"}</b> {p.time}</p>
                      <p className="meta"><b>{"Ideal duration:"}</b> {p.dur}</p>
                      <p className="tip"><b>{p.label}</b></p>
                      <ul>
                        {p.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                      <p className="tip"><b>{"Travel tip:"}</b> {p.tip}</p>
                    </React.Fragment>
                  ))}
                </section>
              ))}

              <section>
                <h2>{"Which Places Near Delhi Are Best for Families, Couples and Friends?"}</h2>
                <p>{"The best destination depends on your interests, available time and travel companions."}</p>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>{"Travel preference"}</th>
                        <th>{"Recommended destinations"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {preferences.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2>{"How to Plan a One-Day Trip from Delhi by Cab"}</h2>
                <p>{"A well-planned road trip can make your travel experience much more comfortable. Before leaving Delhi, consider the following points."}</p>
                <ol className="steps">
                  {planSteps.map(([t, d]) => (
                    <li key={t}>
                      <div>
                        <b>{t}</b>
                        {d}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2>{"How Much Does It Cost to Hire a Cab from Delhi for a One-Day Trip?"}</h2>
                <p>{"The cost of a one-day taxi trip from Delhi depends on several factors, including the destination, vehicle category, total kilometres, trip duration and applicable booking terms."}</p>
                <ul>
                  {costItems.map(([t, d]) => (
                    <li key={t}>
                      <b>{t}</b> {d}
                    </li>
                  ))}
                </ul>
                <p>{"Rather than relying on a generic online estimate, request a quotation based on your actual pickup location, destination and travel schedule. Always confirm the inclusions and exclusions before booking."}</p>
              </section>

              <section>
                <h2>{"Which Vehicle Should You Choose for a Road Trip Near Delhi?"}</h2>
                <p>{"Choosing the right vehicle can make a significant difference to your travel comfort."}</p>
                <ul>
                  {vehicles.map(([t, d]) => (
                    <li key={t}>
                      <b>{t}</b> {d}
                    </li>
                  ))}
                </ul>
                <p>{"Before choosing, compare passenger capacity, luggage space, comfort, vehicle availability and the complete booking cost."}</p>
              </section>

              <section>
                <h2>{"Why Choose Grab Your Cab for Your Next Road Trip?"}</h2>
                <p>{"Planning a road trip is not just about selecting a destination. Choosing suitable transportation is equally important."}</p>
                <p>{"Grab Your Cab provides travel and vehicle rental options for customers planning local outings, family holidays, outstation journeys and group travel."}</p>
                <p>{"Whether you are planning a short drive to Damdama Lake, a spiritual visit to Mathura-Vrindavan or a longer journey to Jaipur and Rishikesh, you can explore suitable transportation options according to your travel requirements."}</p>
                <p>{"Our travel and vehicle options include:"}</p>
                <ul>
                  {ourOptions.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <h3>{"Why plan your journey with Grab Your Cab?"}</h3>
                <ul>
                  {whyPlan.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
                <p>{"Whether you are travelling with family, friends or colleagues, our aim is to help you plan a comfortable road journey."}</p>
              </section>

              <section>
                <h2>{"Plan Your Next Trip with Grab Your Cab"}</h2>
                <p>{"Share your pickup location, destination, travel date, number of passengers and expected return time. Our team can help you explore suitable vehicle options and request a quotation for your journey."}</p>
                <p>
                  {"Website: "}
                  <a className="inline" href="https://www.grabyourcab.com" target="_blank" rel="noopener noreferrer">
                    {"www.grabyourcab.com"}
                  </a>
                </p>
              </section>

              <section>
                <h2>{"Final Thoughts"}</h2>
                <p>{"There are plenty of wonderful places to visit near Delhi, whether you have just a few hours or an entire weekend. From the peaceful surroundings of Damdama Lake and Sultanpur National Park to the historical attractions of Agra and the spiritual destinations of Mathura and Vrindavan, every journey offers a different experience."}</p>
                <p>{"If you have more time, destinations like Jaipur, Haridwar, Rishikesh and Jim Corbett are worth considering for a longer holiday."}</p>
                <p>{"The key is to choose a destination that matches your available time, plan your route carefully and select the right vehicle for your journey."}</p>
                <p>{"So, the next time you feel like taking a break from city life, plan a road trip and discover something new. With Grab Your Cab, you can explore suitable taxi, car rental and group travel options for your next journey."}</p>
              </section>
            </article>
              <div className="sec">
          <div className="container">
            <article className="article">
              <section>
                <h2>{"About Grab Your Cab"}</h2>
                <p>{"Grab Your Cab is a travel and vehicle rental company offering self-drive car rentals, chauffeur-driven taxi services, luxury car rentals, Tempo Travellers, luxury buses and other transportation solutions."}</p>
                <p>
                  {"Website: "}
                  <a className="inline" href="https://www.grabyourcab.com" target="_blank" rel="noopener noreferrer">
                    {"www.grabyourcab.com"}
                  </a>
                </p>
                <p>{"Plan your next journey with Grab Your Cab."}</p>
              </section>
            </article>
          </div>
        </div>
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
          <div className='flex justify-center items-center p-4'>

           <AuthorCard/>
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