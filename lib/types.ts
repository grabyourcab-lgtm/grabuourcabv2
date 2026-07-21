export type Car = {
  id: string;
  slug: string;
  name: string;
  category: string;
  model_year: string | null;
  seats: number | null;
  luggage: number | null;
  fuel: string | null;
  transmission: string | null;
  price: number | null;
  badge: string;
  photo_url: string;
  cities: string[];
  available: boolean;
  sort_order: number;
  service_type?: string; // 'taxi' | 'self-drive' | 'both'
};

// Filter helper — treats missing column/value as 'both' so the site
// keeps working even before add-service-type.sql has been run.
export function forService(cars: Car[], type: "taxi" | "self-drive") {
  return cars.filter((c) => {
    const t = c.service_type || "both";
    return t === "both" || t === type;
  });
}

export type Enquiry = {
  id: string;
  name: string; phone: string; city: string; service: string;
  pickup: string; dropoff: string; travel_date: string; message: string;
  status: "new" | "contacted" | "closed";
  created_at: string;
};
