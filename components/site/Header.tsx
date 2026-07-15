"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

const LINKS = [
  ["Home", "/"], ["Our Cars", "/#fleet"], ["Services", "/#services"],
  ["Cities", "/#cities"], ["Routes", "/#routes"], ["Contact", "/#locations"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="container row">
        <Link href="/" className="brand"><span className="m">GC</span>
          <span>Grab Your Cab<small>Delhi NCR · Goa · Jewar</small></span></Link>
        <nav className="nav">{LINKS.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</nav>
        <div className="hdr-cta">
          <a className="hdr-phone" href={`tel:+${WA}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
          <a className="btn btn-amber btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener">Book a Taxi</a>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" /></button>
        </div>
      </div>
      <div className={"mobile-nav" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <div className="x"><button onClick={() => setOpen(false)}><Icon name="close" /></button></div>
          {LINKS.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <a className="btn btn-amber btn-block" style={{ marginTop: 16 }} href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener">Book on WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
