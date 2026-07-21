// Taxi flow data: trip types, packages, fixed cab tariffs, T&C, tour packages.

export type TaxiCab = {
  id: string;
  name: string;
  cab_type: string;   // "Sedan AC" | "SUV AC" | "Traveler"
  seats: number;
  bags: number;
  base_fare: number;  // 8Hrs/80Kms basic fare, EXCLUDING GST
  extra_km: number;   // ₹ per extra km
  extra_hr: number;   // ₹ per extra hour
  photo_url: string;
  available: boolean;
  sort_order: number;
};

export const TRIP_TYPES = ["Local Rental", "One Way", "Round Trip", "Road Trip", "Local Transfer"];
export const PACKAGES = ["8Hrs/80Kms", "12Hrs/120Kms"];
export const TAXI_CITIES = ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurgaon", "Faridabad", "Meerut", "Goa", "Jewar Airport"];

export const GST_RATE = 0.05;

// Exact tariffs approved by the owner — do not add more cabs here.
export const DEFAULT_TAXI_CABS: TaxiCab[] = [
  { id: "dzire", name: "Maruti Swift Dzire", cab_type: "Sedan AC", seats: 4, bags: 2, base_fare: 2700, extra_km: 20, extra_hr: 200, photo_url: "/images/cars/taxi-dzire.png", available: true, sort_order: 0 },
  { id: "etios", name: "Toyota Etios", cab_type: "Sedan AC", seats: 4, bags: 2, base_fare: 2750, extra_km: 20, extra_hr: 200, photo_url: "/images/cars/taxi-etios.png", available: true, sort_order: 1 },
  { id: "ertiga", name: "Maruti Ertiga", cab_type: "SUV AC", seats: 7, bags: 3, base_fare: 3250, extra_km: 22, extra_hr: 200, photo_url: "/images/cars/taxi-ertiga.png", available: true, sort_order: 2 },
  { id: "innova", name: "Toyota Innova", cab_type: "SUV AC", seats: 7, bags: 2, base_fare: 3550, extra_km: 25, extra_hr: 200, photo_url: "/images/cars/taxi-innova.png", available: true, sort_order: 3 },
  { id: "crysta", name: "Toyota Crysta", cab_type: "SUV AC", seats: 6, bags: 2, base_fare: 5000, extra_km: 40, extra_hr: 350, photo_url: "/images/cars/taxi-crysta.png", available: true, sort_order: 4 },
  { id: "tempo13", name: "Tempo Traveller (13 Seater)", cab_type: "Traveler", seats: 13, bags: 15, base_fare: 7200, extra_km: 30, extra_hr: 300, photo_url: "/images/tempo.jpg", available: true, sort_order: 5 },
];

// 12Hrs/120Kms basic fare = 8/80 basic + 4 extra hours + 40 extra kms (own tariff).
export function basicFare(cab: TaxiCab, pkg: string) {
  if (pkg === "12Hrs/120Kms") return cab.base_fare + 4 * cab.extra_hr + 40 * cab.extra_km;
  return cab.base_fare;
}
export function gstAmount(basic: number) { return Math.round(basic * GST_RATE); }
export function totalFare(cab: TaxiCab, pkg: string) {
  const b = basicFare(cab, pkg);
  return b + gstAmount(b);
}

export const TAXI_EXCLUSIONS = ["Toll Tax", "Parking"];
export const TAXI_TERMS = [
  "One day means one calendar day (12 midnight to 12 midnight).",
  "Kilometers and Hours will be calculated from garage to garage.",
  "Toll, Parking, Inter State Permit etc. not include in the above cost, you have to pay extra as applicable.",
  "Both extra hours and km are applicable.",
  "Extra driver allowance if cab used before 6:00AM and after 10:00PM",
];

export const TOUR_PACKAGES = [
  { title: "North Goa Darshan Car Tour Package", img: "/images/city-goa.jpg" },
  { title: "South Goa Darshan Car Tour Package", img: "/images/special.jpg" },
  { title: "Agra Same-Day Taj Mahal Tour from Delhi", img: "/images/city-delhi.jpg" },
  { title: "Jaipur Same-Day Car Tour from Delhi", img: "/images/taxi-service.jpg" },
  { title: "Haridwar & Rishikesh Weekend Package", img: "/images/hero.jpg" },
  { title: "Mathura Vrindavan Darshan Package", img: "/images/city-jewar.jpg" },
];
