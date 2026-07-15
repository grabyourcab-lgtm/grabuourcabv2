"use client";
import { useState } from "react";
import Icon from "./Icon";
import { ROUTES, waLink } from "@/lib/site";

export default function RoutesSection() {
  const [tab, setTab] = useState("Airport");
  return (
    <section className="sec" id="routes">
      <div className="container">
        <div className="sec-head"><span className="eyebrow">Loved by riders</span><h2>Popular routes &amp; trips</h2></div>
        <div className="route-tabs">{Object.keys(ROUTES).map((t) => (
          <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>))}</div>
        <div className="routes">
          {ROUTES[tab].map((r) => (
            <a className="route" key={r.from} href={waLink(`Hi! I want to book: ${r.from}`)} target="_blank" rel="noopener">
              <span className="ri"><Icon name={tab === "Airport" ? "plane" : tab === "Local" ? "city" : "road"} /></span>
              <div className="rm"><b>{r.from}</b><div>{r.sub}</div></div>
              <div className="rp"><b>{r.price}</b><span>onwards</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
