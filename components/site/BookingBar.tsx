"use client";
import { useState } from "react";
import Icon from "./Icon";
import { WA } from "@/lib/site";

export default function BookingBar() {
  const [mode, setMode] = useState("Taxi Service");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [sdLocation, setSdLocation] = useState("");
  const [sdWhen, setSdWhen] = useState("");

  const taxi = mode === "Taxi Service";
  function swap() { setPickup(drop); setDrop(pickup); }
  function book() {
    const msg = taxi
      ? `Hello Grab Your Cab! I'd like to book a Taxi.\nPickup: ${pickup || "-"}\nDrop: ${drop || "-"}\nDate: ${date || "-"}`
      : `Hello Grab Your Cab! I'd like a Self Drive car.\nLocation: ${sdLocation || "-"}\nPickup date & time: ${sdWhen ? sdWhen.replace("T", " ") : "-"}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="booking">
      <div className="bk-title"><Icon name="taxi" />Book a car</div>
      <div className="tabs">
        {["Taxi Service", "Self Drive"].map((m) => (
          <button key={m} className={mode === m ? "active" : ""} onClick={() => setMode(m)}>{m}</button>
        ))}
      </div>
      {taxi ? (
        <div className="fields">
          <div className="f"><label>Pickup location</label>
            <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Sector 62, Noida" /></div>
          <button className="swap" onClick={swap} aria-label="Swap"><Icon name="swap" /></button>
          <div className="f"><label>Drop location</label>
            <input value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="IGI Airport, Delhi" /></div>
          <div className="f"><label>Pickup date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
          <button className="btn btn-amber go" onClick={book}><Icon name="search" />Search</button>
        </div>
      ) : (
        <div className="fields sd">
          <div className="f"><label>Car location</label>
            <input value={sdLocation} onChange={(e) => setSdLocation(e.target.value)} placeholder="Noida / Delhi / Goa" /></div>
          <div className="f"><label>Pickup date &amp; time</label>
            <input type="datetime-local" value={sdWhen} onChange={(e) => setSdWhen(e.target.value)} /></div>
          <button className="btn btn-amber go" onClick={book}><Icon name="search" />Search</button>
        </div>
      )}
    </div>
  );
}
