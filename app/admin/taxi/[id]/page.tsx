import TaxiCabForm from "@/components/TaxiCabForm";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import type { TaxiCab } from "@/lib/taxi";

export const dynamic = "force-dynamic";

export default async function EditTaxiCab({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data } = await supabase.from("taxi_cabs").select("*").eq("id", params.id).single();
  if (!data) notFound();
  return (<><h1>Edit taxi cab</h1><div className="sub">{(data as TaxiCab).name}</div><TaxiCabForm cab={data as TaxiCab} /></>);
}
