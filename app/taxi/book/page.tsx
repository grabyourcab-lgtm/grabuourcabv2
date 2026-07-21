"use client";
import { useEffect, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Icon from "@/components/site/Icon";
import { WA } from "@/lib/site";

const TIMES = ["06:00", "08:00", "10:00", "12:00", "15:00", "18:00", "21:00"];

function todayPlus(d: number) {
  const t = new Date(); t.setDate(t.getDate() + d);
  return t.toISOString().slice(0, 10);
}

export default function TaxiBook() {
  const [car, setCar] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState(todayPlus(1));
  const [time, setTime] = useState("08:00");

  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("car");
    if (c) setCar(c);
  }, []);

  function book() {
    const msg = `Hello Grab Your Cab! I'd like to book a TAXI.\nCar: ${car || "Any car"}\nDate: ${date} at ${time}\nPickup: ${pickup || "-"}\nDrop: ${drop || "-"}\nPlease confirm availability & fare.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <>
      <Header />
      <div className="wiz">
        <div className="container">
          <div className="wiz-head">
            <button className="wiz-back" onClick={() => history.back()} aria-label="Back"><Icon name="arrow" /></button>
            <h1>Booking details</h1>
          </div>
          {car ? (
            <div className="wiz-loc-chip"><Icon name="taxi" />{car}<button onClick={() => (window.location.href = "/taxi")}>Change car</button></div>
          ) : null}
          <div className="wiz-card">
            <h4>Booking date</h4>
            <input type="date" min={todayPlus(0)} value={date} onChange={(e) => setDate(e.target.value)} />
            <div className="slots">
              {TIMES.map((t) => (
                <button key={t} className={time === t ? "active" : ""} onClick={() => setTime(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="wiz-card">
            <h4>Pickup location</h4>
            <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="e.g. Sector 62, Noida" className="wiz-input" />
          </div>
          <div className="wiz-card">
            <h4>Drop location</h4>
            <input type="text" value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="e.g. IGI Airport, Delhi" className="wiz-input" />
          </div>
          <button className="btn btn-wa btn-block wiz-go" onClick={book}><Icon name="chat" />Book on WhatsApp</button>
          <p className="wiz-note">We confirm your car, driver and a fixed fare on WhatsApp within minutes — no advance payment needed.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
