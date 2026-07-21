"use server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export async function saveCar(formData: FormData) {
  const supabase = createClient();
  const id = (formData.get("id") as string) || "";
  const name = (formData.get("name") as string).trim();
  const record: any = {
    name,
    category: formData.get("category"),
    model_year: formData.get("model_year"),
    seats: Number(formData.get("seats")) || null,
    luggage: Number(formData.get("luggage")) || null,
    fuel: formData.get("fuel"),
    transmission: formData.get("transmission"),
    price: Number(formData.get("price")) || null,
    badge: formData.get("badge") || "",
    service_type: formData.get("service_type") || "both",
    photo_url: formData.get("photo_url") || "",
    available: formData.get("available") === "on",
    cities: formData.getAll("cities"),
  };

  if (id) {
    await supabase.from("cars").update(record).eq("id", id);
  } else {
    record.slug = slugify(name) + "-" + Math.random().toString(36).slice(2, 6);
    await supabase.from("cars").insert(record);
  }
  revalidatePath("/admin/cars");
  redirect("/admin/cars");
}

export async function deleteCar(formData: FormData) {
  const supabase = createClient();
  const id = formData.get("id") as string;
  await supabase.from("cars").delete().eq("id", id);
  revalidatePath("/admin/cars");
}
