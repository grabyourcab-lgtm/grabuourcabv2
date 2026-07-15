export const WA = "917522817555";
export const WA_JEWAR = "919953599735";
export const PHONE_DISPLAY = "+91 75228 17555";

export function waLink(msg: string, num: string = WA) {
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

export const SERVICES = [
  { name: "Taxi Service", slug: "taxi-service", icon: "taxi", group: "Taxi", img: "/images/taxi-service.jpg", blurb: "City & outstation cabs, on call 24/7." },
  { name: "Self Drive Car Rental", slug: "self-drive-car-rental", icon: "key", group: "Self Drive", img: "/images/self-drive.jpg", blurb: "Take the wheel — hourly, daily, weekly." },
  { name: "Luxury Cars on Rent", slug: "luxury-cars-on-rent", icon: "sparkle", group: "Luxury", img: "/images/luxury-cars.jpg", blurb: "Audi, Mercedes & BMW for the occasion." },
  { name: "Tempo Travellers", slug: "tempo-travellers", icon: "van", group: "Group", img: "/images/tempo.jpg", blurb: "9 to 26 seaters for groups & tours." },
  { name: "Luxury Bus", slug: "luxury-bus", icon: "bus", group: "Group", img: "/images/luxury-bus.jpg", blurb: "27–55 seater coaches for large groups." },
  { name: "Special & Customized", slug: "special-customized", icon: "map", group: "Taxi", img: "/images/special.jpg", blurb: "Weddings, events & bespoke itineraries." },
  { name: "Corporate Taxi", slug: "corporate-taxi-car-rental", icon: "building", group: "Taxi", img: "/images/corporate.jpg", blurb: "Billed employee travel & airport runs." },
];
export const SERVICE_TABS = ["All", "Taxi", "Self Drive", "Luxury", "Group"];

export const CITIES = [
  { name: "Delhi NCR", slug: "delhi-ncr", img: "/images/city-delhi.jpg", pill: "Most Popular", cabs: "260+ cabs",
    blurb: "Delhi, Noida, Gurgaon, Ghaziabad & Faridabad — cabs anywhere, any hour." },
  { name: "Goa", slug: "goa", img: "/images/city-goa.jpg", pill: "Beaches", cabs: "120+ cabs",
    blurb: "North to South Goa — beach hops, resorts & sightseeing on your schedule." },
  { name: "Jewar Airport", slug: "noida-international-airport-jewar", img: "/images/city-jewar.jpg", pill: "Airport", cabs: "90+ cabs",
    blurb: "Fixed-fare transfers to & from Noida International Airport, Jewar." },
];

export const ROUTES: Record<string, { from: string; sub: string; price: string }[]> = {
  Airport: [
    { from: "Delhi (IGI) → Noida", sub: "Sedan · 45 min", price: "₹1,199" },
    { from: "Jewar Airport → Delhi", sub: "SUV · 75 min", price: "₹2,499" },
    { from: "Gurgaon → IGI Terminal 3", sub: "Sedan · 35 min", price: "₹899" },
    { from: "Noida → Jewar Airport", sub: "SUV · 60 min", price: "₹1,899" },
  ],
  Local: [
    { from: "Noida — 8 hr / 80 km", sub: "Sedan", price: "₹1,800" },
    { from: "Delhi — 8 hr / 80 km", sub: "SUV", price: "₹3,500" },
    { from: "Gurgaon — Full day", sub: "Innova Crysta", price: "₹3,500" },
    { from: "Ghaziabad — Half day", sub: "Sedan", price: "₹1,200" },
  ],
  Outstation: [
    { from: "Delhi → Agra", sub: "Sedan · one way", price: "₹3,499" },
    { from: "Delhi → Jaipur", sub: "SUV · one way", price: "₹4,999" },
    { from: "Noida → Haridwar", sub: "Tempo Traveller", price: "₹7,999" },
    { from: "Delhi → Shimla", sub: "SUV · 2 days", price: "₹12,999" },
  ],
};

export const TESTIMONIALS = [
  { name: "Rajesh Singh", role: "Advocate", text: "Airport drop on time, driver polite. Best cab service in Delhi NCR!" },
  { name: "Anita Verma", role: "IT Services", text: "Self drive car was spotless, AC perfect. Highly recommend for road trips." },
  { name: "Karan Singh", role: "Businessman", text: "Booked a Mercedes for my wedding — spotless car, professional chauffeur." },
];

export const OFFICES = [
  { city: "Noida Extension", addr: "SF-133, Galaxy Diamond Plaza, Gaur City-1, Sector-4, Greater Noida West – 201308" },
  { city: "Ghaziabad", addr: "1, JC4J+JM, Ghaziabad, Uttar Pradesh – 201016" },
  { city: "Gurgaon", addr: "C-4 206, PWO Apartments, Sector-43, Gurugram, Haryana – 122009" },
  { city: "Goa", addr: "MM Travels, H.No-66, Bogda, Vasco Da Gama, Goa – 403802" },
  { city: "Jewar", addr: "Front of primary school, Kishorpur, Uttar Pradesh – 203135" },
  { city: "Noida", addr: "A-152, Sector 63 Rd, A Block, Sector 63, Noida, UP – 201309" },
];
export const PHONES: [string, string][] = [
  ["Noida", "917522817555"], ["Noida Ext.", "917522817555"], ["Ghaziabad", "917522817555"],
  ["Gurgaon", "918368737081"], ["Meerut", "919108617014"], ["Goa", "919108617014"],
  ["Noida Office", "917522817555"], ["Jewar Airport", "919953599735"],
];
