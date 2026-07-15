"use client";
import { useState } from "react";
import Icon from "./Icon";
import { WA } from "@/lib/site";

export default function BookingBar() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Any vehicle");
  function book() {
    const msg = `Hello Grab Your Cab! I'd like to book a ride.\nPickup: ${pickup || "-"}\nDrop: ${drop || "-"}\nDate: ${date || "-"}\nVehicle: ${type}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  return (
    <div className="booking">
      <div className="bhead"><Icon name="bolt" /> Instant booking — confirmed on WhatsApp</div>
      <div className="grid">
        <div className="f"><label>Pickup location</label><input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="e.g. Sector 62, Noida" /></div>
        <div className="f"><label>Drop location</label><input value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="e.g. IGI Airport" /></div>
        <div className="f"><label>Pickup date</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
        <div className="f"><label>Vehicle</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Any vehicle</option><option>Hatchback</option><option>Sedan</option><option>SUV</option>
            <option>Luxury car</option><option>Tempo Traveller</option><option>Luxury Bus</option>
          </select>
        </div>
        <button className="btn btn-wa" onClick={book}><Icon name="chat" />Search &amp; Book</button>
      </div>
    </div>
  );
}
