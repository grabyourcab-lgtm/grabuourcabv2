import CarForm from "@/components/CarForm";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import type { Car } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function EditCar({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data } = await supabase.from("cars").select("*").eq("id", params.id).single();
  if (!data) notFound();
  return (<><h1>Edit car</h1><div className="sub">{(data as Car).name}</div><CarForm car={data as Car} /></>);
}
