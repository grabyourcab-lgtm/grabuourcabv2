import { createClient } from "@/lib/supabase/server";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import TaxiResults from "@/components/site/TaxiResults";
import { DEFAULT_TAXI_CABS, type TaxiCab } from "@/lib/taxi";

export const dynamic = "force-dynamic";
export const metadata = { title: "Book a Taxi | Grab Your Cab", description: "AC taxis with verified drivers — transparent packages, GST-inclusive fares. Delhi NCR, Goa & Jewar Airport." };

export default async function Results({ searchParams }: {
  searchParams: { type?: string; city?: string; to?: string; pkg?: string; date?: string };
}) {
  let cabs: TaxiCab[] = [];
  try {
    const supabase = createClient();
    const { data } = await supabase.from("taxi_cabs").select("*").eq("available", true).order("sort_order");
    cabs = (data as TaxiCab[]) ?? [];
  } catch { cabs = []; }
  if (!cabs.length) cabs = DEFAULT_TAXI_CABS;

  return (
    <>
      <Header />
      <TaxiResults cabs={cabs} params={{
        type: searchParams.type || "Local Rental",
        city: searchParams.city || "",
        to: searchParams.to || "",
        pkg: searchParams.pkg || "8Hrs/80Kms",
        date: searchParams.date || "",
      }} />
      <Footer />
    </>
  );
}
