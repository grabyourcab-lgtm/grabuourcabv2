"use client";
import { useState } from "react";
import Icon from "./Icon";
import { SERVICES, SERVICE_TABS, waLink } from "@/lib/site";

export default function ServicesSection() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? SERVICES : SERVICES.filter((s) => s.group === tab);
  const featured = list[0];
  const rest = list.slice(1);

  return (
    <section className="sec" id="services">
      <div className="container">
        <div className="sec-head split">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>Our services</h2>
            <p>Pick a service, choose your vehicle, and book in seconds on WhatsApp.</p>
          </div>
        </div>
        <div className="chips" style={{ marginTop: 0 }}>
          {SERVICE_TABS.map((t) => (
            <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="stories">
          {featured && (
            <a className="story-feat" href={waLink(`Hi Grab Your Cab! I want to book: ${featured.name}.`)} target="_blank" rel="noopener">
              <div className="pic"><img src={featured.img} alt={featured.name} loading="lazy" /></div>
              <div className="sb">
                <span className="story-tag">{featured.group}</span>
                <h3><Icon name={featured.icon} />{featured.name}</h3>
                <p>{featured.blurb}</p>
                <span className="go">View &amp; Book <Icon name="arrow" /></span>
              </div>
            </a>
          )}
          <div className="story-list">
            {rest.map((s) => (
              <a className="story-row" key={s.slug} href={waLink(`Hi Grab Your Cab! I want to book: ${s.name}.`)} target="_blank" rel="noopener">
                <div className="pic"><img src={s.img} alt={s.name} loading="lazy" /></div>
                <div>
                  <span className="story-tag">{s.group}</span>
                  <h4><Icon name={s.icon} />{s.name}</h4>
                  <p>{s.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
