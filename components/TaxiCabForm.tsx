"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { saveTaxiCab } from "@/app/admin/taxi/actions";
import type { TaxiCab } from "@/lib/taxi";

const TYPES = ["Sedan AC", "SUV AC", "Traveler"];

export default function TaxiCabForm({ cab }: { cab?: TaxiCab }) {
  const [photo, setPhoto] = useState(cab?.photo_url || "");
  const [uploading, setUploading] = useState(false);

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const supabase = createClient();
    const path = `taxi-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "-")}`;
    const { error } = await supabase.storage.from("cars").upload(path, file, { upsert: true });
    if (!error) {
      const { data } = supabase.storage.from("cars").getPublicUrl(path);
      setPhoto(data.publicUrl);
    } else alert("Upload failed: " + error.message);
    setUploading(false);
  }

  return (
    <form action={saveTaxiCab} className="card-form">
      {cab && <input type="hidden" name="id" value={cab.id} />}
      <input type="hidden" name="photo_url" value={photo} />

      <div className="field"><label>Cab name</label>
        <input name="name" required defaultValue={cab?.name} placeholder="e.g. Maruti Swift Dzire" /></div>

      <div className="row">
        <div className="field"><label>Cab type</label>
          <select name="cab_type" defaultValue={cab?.cab_type || "Sedan AC"}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select></div>
        <div className="field"><label>Sort order</label>
          <input name="sort_order" type="number" defaultValue={cab?.sort_order ?? 0} /></div>
      </div>

      <div className="row">
        <div className="field"><label>Seats</label><input name="seats" type="number" defaultValue={cab?.seats ?? 4} /></div>
        <div className="field"><label>Bags</label><input name="bags" type="number" defaultValue={cab?.bags ?? 2} /></div>
      </div>

      <div className="row">
        <div className="field"><label>Basic fare — 8Hrs/80Kms (₹, excl. GST)</label>
          <input name="base_fare" type="number" defaultValue={cab?.base_fare ?? 0} /></div>
        <div className="field"><label>Extra km (₹/km)</label>
          <input name="extra_km" type="number" defaultValue={cab?.extra_km ?? 0} /></div>
      </div>

      <div className="row">
        <div className="field"><label>Extra hour (₹/hr)</label>
          <input name="extra_hr" type="number" defaultValue={cab?.extra_hr ?? 0} /></div>
        <div className="field" />
      </div>
      <div className="sub" style={{ marginTop: 0 }}>
        Website shows: total = basic fare + 5% GST. 12Hrs/120Kms = basic + 4 extra hours + 40 extra kms.
      </div>

      <div className="field">
        <label>Photo</label>
        <input type="file" accept="image/*" onChange={upload} />
        {uploading && <div style={{ fontSize: 13, color: "#6A7180", marginTop: 6 }}>Uploading…</div>}
        {photo && <img src={photo} alt="" style={{ width: 180, borderRadius: 10, marginTop: 10, display: "block" }} />}
      </div>

      <div className="field">
        <label className="chks" style={{ display: "flex" }}>
          <input type="checkbox" name="available" defaultChecked={cab ? cab.available : true} /> Show on website
        </label>
      </div>

      <button className="btn" type="submit" style={{ marginTop: 8 }}>{cab ? "Save changes" : "Add taxi cab"}</button>
    </form>
  );
}
