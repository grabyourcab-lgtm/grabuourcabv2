"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { SERVICES, SERVICE_TABS, waLink } from "@/lib/site";

export default function ServicesSection() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? SERVICES : SERVICES.filter((s) => s.group === tab);
  return (
    <section className="sec" id="services" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="sec-head"><span className="eyebrow">What we do</span><h2>Our services</h2>
          <p>Pick a service, choose your vehicle, and book in seconds on WhatsApp.</p></div>
        <div className="svc-tabs">{SERVICE_TABS.map((t) => (
          <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>))}</div>
        <div className="svc-grid">
          {list.map((s) => (
            <a className="svc" key={s.slug} href={waLink(`Hi Grab Your Cab! I want to book: ${s.name}.`)} target="_blank" rel="noopener">
              <div className="pic"><img src={s.img} alt={s.name} loading="lazy" /></div>
              <div className="sb">
                <h3><Icon name={s.icon} />{s.name}</h3>
                <p>{s.blurb}</p>
                <span className="go">View &amp; Book <Icon name="arrow" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
