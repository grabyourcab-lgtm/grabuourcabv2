"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { saveCar } from "@/app/admin/cars/actions";
import type { Car } from "@/lib/types";

const CATS = ["Hatchback", "Sedan", "Compact SUV", "MUV", "SUV", "Luxury"];
const BADGES = ["", "Popular", "New", "Luxury"];
const CITIES = [
  ["delhi-ncr", "Delhi NCR"],
  ["goa", "Goa"],
  ["noida-international-airport-jewar", "Jewar Airport"],
];

export default function CarForm({ car }: { car?: Car }) {
  const [photo, setPhoto] = useState(car?.photo_url || "");
  const [uploading, setUploading] = useState(false);

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const supabase = createClient();
    const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "-")}`;
    const { error } = await supabase.storage.from("cars").upload(path, file, { upsert: true });
    if (!error) {
      const { data } = supabase.storage.from("cars").getPublicUrl(path);
      setPhoto(data.publicUrl);
    } else {
      alert("Upload failed: " + error.message);
    }
    setUploading(false);
  }

  return (
    <form action={saveCar} className="card-form">
      {car && <input type="hidden" name="id" value={car.id} />}
      <input type="hidden" name="photo_url" value={photo} />

      <div className="field">
        <label>Car name</label>
        <input name="name" required defaultValue={car?.name} placeholder="e.g. Maruti Swift Dzire" />
      </div>

      <div className="row">
        <div className="field"><label>Category</label>
          <select name="category" defaultValue={car?.category || "Sedan"}>{CATS.map((c) => <option key={c}>{c}</option>)}</select>
        </div>
        <div className="field"><label>Model year</label>
          <input name="model_year" defaultValue={car?.model_year || ""} placeholder="2025" />
        </div>
      </div>

      <div className="row">
        <div className="field"><label>Seats</label><input name="seats" type="number" defaultValue={car?.seats ?? 4} /></div>
        <div className="field"><label>Luggage</label><input name="luggage" type="number" defaultValue={car?.luggage ?? 2} /></div>
      </div>

      <div className="row">
        <div className="field"><label>Fuel</label><input name="fuel" defaultValue={car?.fuel || ""} placeholder="Petrol / Diesel / CNG" /></div>
        <div className="field"><label>Transmission</label><input name="transmission" defaultValue={car?.transmission || ""} placeholder="Manual / Automatic" /></div>
      </div>

      <div className="row">
        <div className="field"><label>Price (₹, from)</label><input name="price" type="number" defaultValue={car?.price ?? 0} /></div>
        <div className="field"><label>Badge</label>
          <select name="badge" defaultValue={car?.badge || ""}>{BADGES.map((b) => <option key={b} value={b}>{b || "None"}</option>)}</select>
        </div>
      </div>

      <div className="field">
        <label>Photo</label>
        <input type="file" accept="image/*" onChange={upload} />
        {uploading && <div style={{ fontSize: 13, color: "#6A7180", marginTop: 6 }}>Uploading…</div>}
        {photo && <img src={photo} alt="" style={{ width: 180, borderRadius: 10, marginTop: 10, display: "block" }} />}
      </div>

      <div className="field">
        <label>Available in cities</label>
        <div className="chks">
          {CITIES.map(([slug, label]) => (
            <label key={slug}>
              <input type="checkbox" name="cities" value={slug}
                defaultChecked={car ? car.cities?.includes(slug) : true} /> {label}
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label className="chks" style={{ display: "flex" }}>
          <input type="checkbox" name="available" defaultChecked={car ? car.available : true} /> Show on website
        </label>
      </div>

      <button className="btn" type="submit" style={{ marginTop: 8 }}>{car ? "Save changes" : "Add car"}</button>
    </form>
  );
}
