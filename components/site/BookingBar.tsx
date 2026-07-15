"use client";
import { useState } from "react";
import Icon from "./Icon";
import { WA } from "@/lib/site";

export default function BookingBar() {
  const [mode, setMode] = useState("New Cab");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Any vehicle");

  function swap() { setPickup(drop); setDrop(pickup); }
  function book() {
    const msg = `Hello Grab Your Cab! I'd like to book (${mode}).\nPickup: ${pickup || "-"}\nDrop: ${drop || "-"}\nDate: ${date || "-"}\nVehicle: ${type}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="booking">
      <div className="tabs">
        {["New Cab", "Self Drive"].map((m) => (
          <button key={m} className={mode === m ? "active" : ""} onClick={() => setMode(m)}>{m}</button>
        ))}
      </div>
      <div className="fields">
        <div className="f"><label>Pickup location</label>
          <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Sector 62, Noida" /></div>
        <button className="swap" onClick={swap} aria-label="Swap"><Icon name="swap" /></button>
        <div className="f"><label>Drop location</label>
          <input value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="IGI Airport, Delhi" /></div>
        <div className="f"><label>Pickup date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
        <button className="btn btn-wa go" onClick={book}><Icon name="chat" />Search &amp; Book</button>
      </div>
    </div>
  );
}
