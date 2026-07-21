// Content for city hub pages and service-in-city pages.
import { SERVICES, WA, WA_JEWAR } from "./site";

export type CityInfo = {
  slug: string; name: string; short: string; img: string; phone: string;
  heroTitle: string; heroDesc: string; localities: string[];
  faqs: { q: string; a: string }[];
};

export const CITY_INFO: CityInfo[] = [
  {
    slug: "delhi-ncr", name: "Delhi NCR", short: "Delhi", img: "/images/city-delhi.jpg", phone: WA,
    heroTitle: "Cabs & car rental in Delhi NCR",
    heroDesc: "Local rides, airport transfers, outstation trips, self-drive and luxury cars — anywhere in Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon and Faridabad, any hour of the day.",
    localities: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurgaon", "Faridabad", "Meerut"],
    faqs: [
      { q: "How do I book a cab in Delhi NCR?", a: "Message us on WhatsApp or call +91-75228 17555 with your pickup, drop and time. We confirm your car and driver within minutes, 24/7." },
      { q: "What does a local cab cost?", a: "Local packages start at ₹1,800 for 8 hours / 80 km in a CNG hatchback. Sedans, SUVs and luxury cars are priced transparently — no hidden charges." },
      { q: "Do you cover IGI Airport and Jewar Airport?", a: "Yes — fixed-fare transfers to and from both Delhi IGI and Noida International Airport (Jewar), from anywhere in NCR." },
    ],
  },
  {
    slug: "goa", name: "Goa", short: "Goa", img: "/images/city-goa.jpg", phone: "919108617014",
    heroTitle: "Cabs & car rental in Goa",
    heroDesc: "Beach hops, airport pickups, sightseeing and self-drive across North and South Goa — clean cars, honest fares and drivers who know every shortcut.",
    localities: ["Calangute", "Baga", "Candolim", "Panjim", "Vasco", "Madgaon", "Colva", "Palolem", "Dabolim Airport", "Mopa Airport"],
    faqs: [
      { q: "Do you pick up from Goa's airports?", a: "Yes — we cover both Dabolim (GOI) and Mopa (GOX) airports with fixed fares to any beach or resort in North or South Goa." },
      { q: "Can I rent a self-drive car in Goa?", a: "Yes. Hatchbacks, SUVs and convertibles are available per day with unlimited options — message us on WhatsApp for today's availability." },
      { q: "Do you do full-day sightseeing?", a: "Our most popular option — a car with driver for the day, North or South Goa itinerary, at a fixed package price." },
    ],
  },
  {
    slug: "noida-international-airport-jewar", name: "Jewar Airport", short: "Jewar", img: "/images/city-jewar.jpg", phone: WA_JEWAR,
    heroTitle: "Noida International Airport (Jewar) taxi",
    heroDesc: "Fixed-fare transfers to and from Noida International Airport — on-time pickups from Delhi, Noida, Greater Noida, Ghaziabad, Agra and beyond, day or night.",
    localities: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurgaon", "Aligarh", "Mathura", "Agra"],
    faqs: [
      { q: "How much is a taxi from Jewar Airport to Delhi?", a: "SUV transfers start around ₹2,499 fixed — the exact fare depends on your drop location. Message us on WhatsApp for an instant quote." },
      { q: "Will the driver be there when my flight lands?", a: "Yes — share your flight number and we track it. Your driver waits at arrivals with a name board, even for delayed or late-night flights." },
      { q: "Can I pre-book a drop to the airport?", a: "Absolutely. Book on WhatsApp or call +91-99535 99735, and we'll pick you up with enough buffer for your flight." },
    ],
  },
];

export type ServiceInfo = {
  slug: string; name: string; icon: string; img: string;
  desc: (city: string) => string;
  features: [string, string][]; // [icon, text]
  cats: string[];
  faqs: (city: string) => { q: string; a: string }[];
  noCars?: boolean; // content-only page: no car listings shown
  seo?: (city: string) => { h: string; ps: string[] }[];
};

export const SERVICE_INFO: ServiceInfo[] = [
  {
    slug: "taxi-service", name: "Taxi Service", icon: "taxi", img: "/images/taxi-service.jpg",
    desc: (c) => `Reliable cabs with verified drivers across ${c} — local 8hr/80km packages, airport transfers and outstation trips. Booked in seconds on WhatsApp, confirmed instantly.`,
    features: [["shield", "Verified, trained drivers"], ["wallet", "Transparent fixed fares"], ["clock", "24/7 — any hour, any day"], ["check", "Free cancellation"]],
    cats: ["Hatchback", "Sedan", "Compact SUV", "MUV", "SUV"],
    faqs: (c) => [
      { q: `What does a taxi in ${c} cost?`, a: "Local packages start at ₹1,800 for 8 hours / 80 km. Airport and outstation trips are fixed-fare — you know the price before you ride." },
      { q: "How fast can a cab reach me?", a: "For city rides we can usually reach you within 30–60 minutes. Pre-book on WhatsApp for guaranteed on-time pickups." },
      { q: "Are your drivers verified?", a: "Every driver is background-checked, trained and carries valid permits. Cars are cleaned and inspected before each trip." },
    ],
  },
  {
    slug: "self-drive-car-rental", name: "Self Drive Car Rental", icon: "key", img: "/images/self-drive.jpg",
    desc: (c) => `Take the wheel in ${c} — well-maintained hatchbacks, sedans and SUVs on hourly, daily and weekly self-drive rental. Simple documents, quick handover.`,
    features: [["key", "Hourly, daily & weekly plans"], ["car", "Well-serviced, clean cars"], ["bolt", "Quick document check & handover"], ["wallet", "No hidden charges"]],
    cats: ["Hatchback", "Sedan", "Compact SUV", "SUV", "MUV"],
    faqs: (c) => [
      { q: "What documents do I need?", a: "A valid driving licence and a government ID (Aadhaar/passport). A refundable security deposit applies — details shared on WhatsApp at booking." },
      { q: `Where can I take the car in ${c}?`, a: "Anywhere — city and highway. For interstate trips, tell us in advance so we can arrange the right permits." },
      { q: "Is fuel included?", a: "Cars are handed over with a noted fuel level — return at the same level. Fuel used is on you; everything else is in the rental." },
    ],
  },
  {
    slug: "luxury-cars-on-rent", name: "Luxury Cars on Rent", icon: "sparkle", img: "/images/luxury-cars.jpg",
    desc: (c) => `Mercedes, BMW, Audi, Jaguar and more — chauffeur-driven luxury cars in ${c} for weddings, corporate events and special occasions. Immaculate cars, professional chauffeurs.`,
    features: [["sparkle", "Mercedes · BMW · Audi · Jaguar"], ["medal", "Professional chauffeurs"], ["shield", "Fully insured & detailed"], ["clock", "Hourly & full-day packages"]],
    cats: ["Luxury"],
    faqs: (c) => [
      { q: "Which luxury cars are available?", a: "Mercedes C/E-Class and convertibles, BMW 5 Series, Audi A3/A4, Jaguar XF, Fortuner Legender, G-Wagon, Defender — up to Rolls Royce and vintage wedding cars." },
      { q: "Can I book for a wedding?", a: "Yes — wedding cars with decoration on request are our specialty. Book early for wedding season dates, they go fast." },
      { q: `Is the price per day in ${c}?`, a: "Luxury cars are priced per day (8hr/80km for chauffeur-driven). Exact quotes on WhatsApp — tell us the car, date and occasion." },
    ],
  },
  {
    slug: "tempo-travellers", name: "Tempo Travellers", icon: "van", img: "/images/tempo.jpg",
    desc: (c) => `9 to 26 seater tempo travellers in ${c} for group tours, family functions and corporate outings — push-back seats, AC, ample luggage space and experienced drivers.`,
    features: [["van", "9 to 26 seater options"], ["seat", "Push-back seats & AC"], ["road", "Outstation tour specialists"], ["shield", "Experienced hill & highway drivers"]],
    cats: [], noCars: true,
    seo: (c) => [
      { h: `Tempo Traveller on Rent in ${c}`, ps: [
        `Planning a group trip from ${c}? A tempo traveller is the most comfortable and economical way to move 9 to 26 people together — one vehicle, one driver, everyone in the same conversation. Grab Your Cab operates one of the most trusted tempo traveller rental services in ${c}, with well-maintained 9, 12, 17, 20 and 26 seater vehicles available for local functions, outstation tours and multi-day itineraries.`,
        `Every tempo traveller in our fleet comes with push-back reclining seats, powerful air conditioning, ample luggage racks and first-aid kits. Our drivers are experienced on both highways and hill routes — Haridwar, Rishikesh, Shimla, Manali, Nainital, Agra, Jaipur and Chardham are routes our team drives every week.`,
      ]},
      { h: "Tempo traveller options & seating", ps: [
        `Choose a 9-seater or 12-seater tempo traveller for family trips and small groups, a 17-seater for extended families and friend circles, or 20 and 26 seater maxi cabs for weddings, corporate outings and school or college tours. Maharaja-style seating with extra legroom is available on request for premium group travel.`,
        `Rentals are priced transparently on a per-kilometre basis with a clear daily driver allowance — the quote we send you on WhatsApp is the price you pay. Night halts, tolls and state permits are all itemised upfront, so there are no surprises at the end of your trip.`,
      ]},
      { h: `Why groups in ${c} choose Grab Your Cab`, ps: [
        `Ten years of group travel experience means we plan for the details that make or break a tour: on-time reporting, clean interiors before every departure, backup vehicle support and a coordinator you can reach 24/7 during your trip. Whether it is a one-day darshan, a wedding baraat or a week-long family holiday, your group travels together, safely and on schedule.`,
        `Booking takes minutes — send us your travel date, route and headcount on WhatsApp, and we will recommend the right vehicle and share a fixed quote the same day. Advance booking is recommended for weekends, wedding dates and holiday seasons.`,
      ]},
    ],
    faqs: (c) => [
      { q: "What sizes are available?", a: "9, 12, 17, 20 and 26 seaters — from compact groups to full family functions. Tell us your headcount and we'll suggest the right one." },
      { q: `Can we take one outstation from ${c}?`, a: "Yes — outstation group tours are what tempo travellers do best. Fixed per-km rates with driver allowance included in your quote." },
      { q: "Do they have luggage space?", a: "Yes — dedicated luggage racks and boot space. For big trips, tell us your luggage load and we'll plan the right vehicle." },
    ],
  },
  {
    slug: "luxury-bus", name: "Luxury Bus", icon: "bus", img: "/images/luxury-bus.jpg",
    desc: (c) => `27 to 55 seater luxury coaches in ${c} for weddings, corporate movements and large group tours — reclining seats, AC, entertainment systems and professional crews.`,
    features: [["bus", "27–55 seater coaches"], ["seat", "Reclining seats & AC"], ["medal", "Uniformed professional crew"], ["clock", "On-time, every time"]],
    cats: [], noCars: true,
    seo: (c) => [
      { h: `Luxury Bus Hire in ${c}`, ps: [
        `When your group is too big for cars and tempo travellers, Grab Your Cab's luxury bus rental in ${c} keeps everyone together in comfort. We provide 27, 35, 41, 49 and 55 seater luxury coaches for weddings, corporate movements, school and college excursions, religious yatras and large family functions — with uniformed, professional crews who report on time, every time.`,
        `Our coaches are built for long, comfortable journeys: reclining pushback seats, powerful air conditioning, music and entertainment systems, generous luggage holds and well-serviced engines that make highway travel smooth and safe.`,
      ]},
      { h: "Weddings, corporate events & group tours", ps: [
        `Wedding guest movement is our specialty — multi-pickup schedules across ${c}, baraat coordination, and a single point of contact who manages every bus and driver so the family can focus on the celebration. For corporate clients we run employee shuttles, conference transfers, offsite movements and airport group pickups with GST invoicing and consolidated billing.`,
        `For tours and yatras — Haridwar, Vrindavan, Agra, Jaipur, Chardham and beyond — our crews know the routes, the halts and the parking, and a trip coordinator stays reachable throughout your journey.`,
      ]},
      { h: `Luxury bus rental prices in ${c}`, ps: [
        `Luxury bus pricing depends on coach size, route and duration, and is always quoted as a fixed package — per-day or per-trip — with driver, fuel and standard running costs clearly itemised. Tolls, state taxes and parking are listed separately in your quote so you know the full cost before you confirm.`,
        `Send your date, route and expected headcount on WhatsApp and we'll recommend the right coach — or a combination of buses and tempo travellers — with a same-day quote. For wedding season dates, we recommend booking 3–4 weeks in advance.`,
      ]},
    ],
    faqs: (c) => [
      { q: "What group sizes can you handle?", a: "From 27-seater mini coaches to 55-seater luxury buses — and multiple buses for big events like weddings and corporate offsites." },
      { q: "Can you manage wedding guest movement?", a: "Yes — multi-pickup guest transport with coordinators is one of our most-booked services in wedding season." },
      { q: `How do I get a quote in ${c}?`, a: "Message us on WhatsApp with your date, route and headcount — we'll send options and a fixed quote the same day." },
    ],
  },
  {
    slug: "special-customized", name: "Special & Customized", icon: "map", img: "/images/special.jpg",
    desc: (c) => `Weddings, events, film shoots, religious yatras and bespoke itineraries in ${c} — tell us the plan and we build the fleet and schedule around it.`,
    features: [["map", "Custom multi-day itineraries"], ["sparkle", "Wedding & event fleets"], ["taxi", "Mixed fleet — hatchback to coach"], ["clock", "Dedicated trip coordinator"]],
    cats: [], noCars: true,
    seo: (c) => [
      { h: `Special & Customized Travel in ${c}`, ps: [
        `Some journeys don't fit a standard package — a three-city wedding, a film shoot that moves locations every day, a Chardham yatra for the whole family, a corporate roadshow. Grab Your Cab's special and customized travel service in ${c} builds the exact fleet and schedule your plan needs, managed end-to-end by a dedicated trip coordinator.`,
        `Tell us the occasion, the dates and the number of people, and we design the rest: the right mix of vehicles, driver rosters, pickup schedules, night halts and backup plans. You get one point of contact, one consolidated bill, and a team that has organised trips like yours for ten years.`,
      ]},
      { h: "Weddings, events, shoots & yatras", ps: [
        `For weddings we combine decorated luxury cars for the couple, tempo travellers for the family and coaches for guests — with multi-pickup coordination across ${c} so nobody waits. For corporate events and conferences we manage delegate movement, airport transfers and VIP cars with professional chauffeurs.`,
        `Film and photo shoots get vehicles on location on time, every day of the schedule. Pilgrimage groups travel to Haridwar, Rishikesh, Vaishno Devi, Mathura-Vrindavan and Chardham with experienced hill drivers and sensible, comfortable itineraries.`,
      ]},
      { h: "How customized booking works", ps: [
        `Start with a WhatsApp message describing your plan — dates, places, people. Within a day we come back with a recommended fleet, a day-by-day schedule and a fixed, itemised quote. Adjust anything you like; we re-plan until it fits.`,
        `During the trip your coordinator tracks every vehicle and stays reachable 24/7, so schedule changes, extra pickups or late-night requirements are handled in minutes — not excuses.`,
      ]},
    ],
    faqs: (c) => [
      { q: "What kind of trips can you customize?", a: "Weddings, corporate events, film shoots, pilgrimages (Chardham, Haridwar, Vaishno Devi), multi-city tours — if it moves people, we plan it." },
      { q: "Can you mix vehicle types?", a: "Yes — a luxury car for the couple, tempo travellers for family, a coach for guests. One coordinator, one bill, one point of contact." },
      { q: `How early should I book in ${c}?`, a: "For weddings and event dates, 2–4 weeks ahead is ideal. For everything else, even same-week works — message us on WhatsApp." },
    ],
  },
  {
    slug: "corporate-taxi-car-rental", name: "Corporate Taxi", icon: "building", img: "/images/corporate.jpg",
    desc: (c) => `Employee transport, airport runs and executive travel in ${c} — monthly billing, GST invoices, dedicated account manager and a fleet that scales with your team.`,
    features: [["building", "Monthly billing & GST invoices"], ["shield", "Verified drivers, tracked trips"], ["clock", "24/7 duty & airport desk"], ["medal", "Dedicated account manager"]],
    cats: [], noCars: true,
    seo: (c) => [
      { h: `Corporate Taxi & Car Rental in ${c}`, ps: [
        `Reliable employee transport is not a perk — it's infrastructure. Grab Your Cab provides corporate taxi and car rental services in ${c} for companies that need dependable daily commutes, airport runs and executive travel, backed by monthly GST invoicing and a dedicated account manager who actually answers the phone.`,
        `From startups needing a few airport pickups a month to companies running daily employee rosters, our corporate fleet of sedans, MUVs and SUVs scales with your team. Every driver is background-verified, every trip is logged, and every invoice is consolidated and reconciliation-ready.`,
      ]},
      { h: "Employee transport & airport transfers", ps: [
        `We run fixed-route employee pick-and-drop across ${c} — morning and night shifts, women-safety protocols, and standby vehicles for roster changes. Ad-hoc business travel is covered by an on-call desk that confirms cars within minutes, 24/7, including late-night and early-morning airport transfers with flight tracking.`,
        `Visiting leadership or clients? Our executive cars — premium sedans and luxury vehicles with professional chauffeurs — handle VIP movement with the discretion and punctuality your guests expect.`,
      ]},
      { h: "Simple corporate onboarding", ps: [
        `Getting started takes one conversation: share your routes, volumes and travel policy, and we send a corporate rate card within a day. No lock-ins, transparent per-km and package pricing, and monthly consolidated invoices with GST that keep your finance team happy.`,
        `Companies across ${c} have trusted Grab Your Cab for a decade because we measure ourselves on the same numbers you do: on-time arrival, zero no-shows and clean, safe cars — every single trip.`,
      ]},
    ],
    faqs: (c) => [
      { q: "Do you offer monthly corporate billing?", a: "Yes — consolidated monthly invoices with GST, trip-wise reporting and a dedicated account manager for your company." },
      { q: `Can you handle daily employee pick-drop in ${c}?`, a: "Yes — fixed routes, rosters and dedicated cars for employee transport, plus on-demand cabs for ad-hoc travel." },
      { q: "How do we get started?", a: "Message us on WhatsApp or call — we'll understand your routes and volumes and share a corporate rate card within a day." },
    ],
  },
];

// helpers -----------------------------------------------------------------
export function getCity(slug: string) {
  return CITY_INFO.find((c) => c.slug === slug) || null;
}
export function parseServiceCity(slug: string) {
  for (const s of SERVICE_INFO) {
    if (slug.startsWith(s.slug + "-")) {
      const city = getCity(slug.slice(s.slug.length + 1));
      if (city) return { service: s, city };
    }
  }
  return null;
}
export function serviceHref(serviceSlug: string, citySlug = "delhi-ncr") {
  return `/${serviceSlug}-${citySlug}`;
}
export const ALL_PAGE_SLUGS = [
  ...CITY_INFO.map((c) => c.slug),
  ...SERVICE_INFO.flatMap((s) => CITY_INFO.map((c) => `${s.slug}-${c.slug}`)),
];
