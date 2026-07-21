"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { WA, waLink } from "@/lib/site";
import {
  type TaxiCab, basicFare, gstAmount, totalFare,
  TAXI_EXCLUSIONS, TAXI_TERMS, TOUR_PACKAGES,
} from "@/lib/taxi";

type Params = { type: string; city: string; to: string; pkg: string; date: string };

function CabCard({ cab, params }: { cab: TaxiCab; params: Params }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Fare Details");
  const local = params.type === "Local Rental";
  const pkg = params.pkg || "8Hrs/80Kms";
  const basic = basicFare(cab, pkg);
  const gst = gstAmount(basic);
  const total = basic + gst;
  const photo = cab.photo_url && (cab.photo_url.startsWith("http") || cab.photo_url.startsWith("/")) ? cab.photo_url : "";

  const waMsg = `Hello Grab Your Cab! I want to BOOK A TAXI.\nTrip: ${params.type}\nCity: ${params.city || "-"}${params.to ? `\nTo: ${params.to}` : ""}${local ? `\nPackage: ${pkg}` : ""}\nPickup: ${params.date || "-"}\nCab: ${cab.name} (${cab.cab_type})${local ? `\nFare: ₹${total} (Inc. GST & DA)` : ""}\nPlease confirm my booking.`;

  return (
    <div className="tx-cardwrap">
      <div className="tx-card">
        <div className="tx-top">
          <div className="tx-img">
            {photo ? <img src={photo} alt={cab.name} loading="lazy" /> : <Icon name="car" className="ca-ic" />}
          </div>
          <div className="tx-title">
            <h3>{cab.name} <span className="oe">Or equivalent <Icon name="check" /></span></h3>
            <div className="tx-meta">
              <span className="type-pill">{cab.cab_type}</span>
              <span><Icon name="seat" />{cab.seats} seats</span>
              <span><Icon name="wallet" />{cab.bags} Bags</span>
            </div>
          </div>
          <div className="tx-rating">98 ratings <b>4.5/5</b></div>
        </div>
        <div className="tx-body">
          <div className="tx-details">
            <div className="dr"><span className="dl"><Icon name="map" />Packages</span><span className="dv">{local ? pkg : `${params.type} — on request`}</span></div>
            <div className="dr"><span className="dl"><Icon name="road" />Extra km</span><span className="dv">&#8377;{cab.extra_km}/Km</span></div>
            <div className="dr"><span className="dl"><Icon name="clock" />Extra Hour</span><span className="dv">&#8377;{cab.extra_hr}/hr</span></div>
            <button className="tx-view" onClick={() => setOpen(!open)}>View Details <Icon name="arrow" className={open ? "up" : "down"} /></button>
          </div>
          <div className="tx-price">
            {local ? (
              <>
                <b>&#8377;{total.toLocaleString("en-IN")}</b>
                <small>Inc. GST &amp; DA</small>
                <small>Exc. Toll Tax &amp; Parking</small>
              </>
            ) : (
              <>
                <b>On Request</b>
                <small>Fixed quote on WhatsApp</small>
                <small>Exc. Toll Tax &amp; Parking</small>
              </>
            )}
            <a className="btn btn-amber" href={waLink(waMsg)} target="_blank" rel="noopener">Book Now</a>
          </div>
        </div>
      </div>
      {open && (
        <div className="tx-expand">
          <div className="tx-tabs">
            {["Fare Details", "Exclusion", "Terms & Conditions"].map((t) => (
              <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
          {tab === "Fare Details" && (
            <div className="tx-fare">
              {local ? (
                <>
                  <div className="fr"><span>Basic Fare</span><b>&#8377;{basic.toLocaleString("en-IN")}</b></div>
                  <div className="fr"><span>GST (5%)</span><b>&#8377;{gst.toLocaleString("en-IN")}</b></div>
                  <div className="fr total"><span>Total Amount</span><b>&#8377;{total.toLocaleString("en-IN")}</b></div>
                </>
              ) : (
                <>
                  <div className="fr"><span>Fare basis</span><b>&#8377;{cab.extra_km}/Km + driver allowance</b></div>
                  <div className="fr"><span>GST</span><b>5% extra</b></div>
                  <div className="fr total"><span>Total</span><b>Fixed quote shared on WhatsApp before booking</b></div>
                </>
              )}
            </div>
          )}
          {tab === "Exclusion" && (
            <ul className="tx-list">{TAXI_EXCLUSIONS.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
          )}
          {tab === "Terms & Conditions" && (
            <ul className="tx-list">{TAXI_TERMS.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function TaxiResults({ cabs, params }: { cabs: TaxiCab[]; params: Params }) {
  const [types, setTypes] = useState<string[]>([]);
  const [seatsSel, setSeatsSel] = useState<number[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [pkgIdx, setPkgIdx] = useState(0);

  const allTypes = useMemo(() => Array.from(new Set(cabs.map((c) => c.cab_type))), [cabs]);
  const allSeats = useMemo(() => Array.from(new Set(cabs.map((c) => c.seats))).sort((a, b) => a - b), [cabs]);

  const list = cabs.filter((c) =>
    (types.length === 0 || types.includes(c.cab_type)) &&
    (seatsSel.length === 0 || seatsSel.includes(c.seats)) &&
    (models.length === 0 || models.includes(c.name)));

  function toggle<T>(arr: T[], v: T, set: (x: T[]) => void) {
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  }
  const local = params.type === "Local Rental";

  return (
    <section className="sec" style={{ paddingTop: 24 }}>
      <div className="container">
        {/* summary */}
        <div className="tx-summary">
          <div className="rs-info">
            <span className="rs-item"><Icon name="taxi" />{params.type}</span>
            {params.city ? <span className="rs-item"><Icon name="pin" />{params.city}{params.to ? ` → ${params.to}` : ""}</span> : null}
            {local ? <span className="rs-item"><Icon name="map" />{params.pkg}</span> : null}
            {params.date ? <span className="rs-item"><Icon name="clock" />{params.date}</span> : null}
          </div>
          <Link className="btn btn-ghost btn-sm" href="/taxi">Modify search</Link>
        </div>

        <div className="tx-layout">
          {/* filters */}
          <aside className="tx-filters">
            <div className="tf-head"><h4>Select Filters</h4>
              <button onClick={() => { setTypes([]); setSeatsSel([]); setModels([]); }}>Clear</button></div>
            <div className="tf-group">
              <h5>Cab Type</h5>
              {allTypes.map((t) => (
                <label key={t}><input type="checkbox" checked={types.includes(t)} onChange={() => toggle(types, t, setTypes)} />
                  {t}<span>({cabs.filter((c) => c.cab_type === t).length})</span></label>
              ))}
            </div>
            <div className="tf-group">
              <h5>Seat Capacity</h5>
              {allSeats.map((s) => (
                <label key={s}><input type="checkbox" checked={seatsSel.includes(s)} onChange={() => toggle(seatsSel, s, setSeatsSel)} />
                  {s} Seater<span>({cabs.filter((c) => c.seats === s).length})</span></label>
              ))}
            </div>
            <div className="tf-group">
              <h5>Cab Model</h5>
              {cabs.map((c) => (
                <label key={c.id}><input type="checkbox" checked={models.includes(c.name)} onChange={() => toggle(models, c.name, setModels)} />
                  {c.name}<span>(1)</span></label>
              ))}
            </div>
            {/* tour packages rail */}
            <div className="tp-rail">
              <div className="tp-head"><span className="bar" /><h4>Tour Package</h4>
                <div className="tp-nav">
                  <button onClick={() => setPkgIdx((pkgIdx - 1 + TOUR_PACKAGES.length) % TOUR_PACKAGES.length)} aria-label="Previous"><Icon name="arrow" className="back" /></button>
                  <button onClick={() => setPkgIdx((pkgIdx + 1) % TOUR_PACKAGES.length)} aria-label="Next"><Icon name="arrow" /></button>
                </div>
              </div>
              <a className="tp-card" href={waLink(`Hi Grab Your Cab! I want details of: ${TOUR_PACKAGES[pkgIdx].title}`)} target="_blank" rel="noopener">
                <img src={TOUR_PACKAGES[pkgIdx].img} alt={TOUR_PACKAGES[pkgIdx].title} />
                <div className="tp-cap"><h5>{TOUR_PACKAGES[pkgIdx].title}</h5><span className="go"><Icon name="arrow" /></span></div>
              </a>
            </div>
          </aside>

          {/* cab cards */}
          <div className="tx-list-col">
            {list.map((c) => <CabCard key={c.id} cab={c} params={params} />)}
            {list.length === 0 && <p style={{ color: "var(--muted)" }}>No cabs match the selected filters.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
