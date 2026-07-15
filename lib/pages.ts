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
    cats: ["MUV", "SUV"],
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
    cats: ["MUV", "SUV"],
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
    cats: ["Luxury", "SUV", "MUV"],
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
    cats: ["Sedan", "MUV", "SUV"],
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
