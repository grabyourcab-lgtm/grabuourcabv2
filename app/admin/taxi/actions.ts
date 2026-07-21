"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveTaxiCab(formData: FormData) {
  const supabase = createClient();
  const id = (formData.get("id") as string) || "";
  const record: any = {
    name: (formData.get("name") as string).trim(),
    cab_type: formData.get("cab_type"),
    seats: Number(formData.get("seats")) || 4,
    bags: Number(formData.get("bags")) || 2,
    base_fare: Number(formData.get("base_fare")) || 0,
    extra_km: Number(formData.get("extra_km")) || 0,
    extra_hr: Number(formData.get("extra_hr")) || 0,
    photo_url: formData.get("photo_url") || "",
    available: formData.get("available") === "on",
    sort_order: Number(formData.get("sort_order")) || 0,
  };
  if (id) {
    await supabase.from("taxi_cabs").update(record).eq("id", id);
  } else {
    await supabase.from("taxi_cabs").insert(record);
  }
  revalidatePath("/admin/taxi");
  redirect("/admin/taxi");
}

export async function deleteTaxiCab(formData: FormData) {
  const supabase = createClient();
  await supabase.from("taxi_cabs").delete().eq("id", formData.get("id") as string);
  revalidatePath("/admin/taxi");
}
