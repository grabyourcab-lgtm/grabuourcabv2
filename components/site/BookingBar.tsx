"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { WA } from "@/lib/site";

export default function BookingBar() {
  const router = useRouter();
  const [mode, setMode] = useState("Taxi Service");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [sdLocation, setSdLocation] = useState("");

  const taxi = mode === "Taxi Service";
  function swap() { setPickup(drop); setDrop(pickup); }
  function book() {
    if (!taxi) {
      router.push(`/self-drive${sdLocation.trim() ? `?loc=${encodeURIComponent(sdLocation.trim())}` : ""}`);
      return;
    }
    const msg = `Hello Grab Your Cab! I'd like to book a Taxi.\nPickup: ${pickup || "-"}\nDrop: ${drop || "-"}\nDate: ${date || "-"}`;
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
            <input value={sdLocation} onChange={(e) => setSdLocation(e.target.value)} placeholder="Noida / Delhi / Goa"
              onKeyDown={(e) => { if (e.key === "Enter") book(); }} /></div>
          <button className="btn btn-amber go" onClick={book}><Icon name="search" />Select location to search</button>
        </div>
      )}
    </div>
  );
}
