"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

const LINKS = [
  ["Home", "/"], ["Our Cars", "/fleet"], ["Services", "/#services"],
  ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="container row">
        <Link href="/" className="logo" aria-label="Grab Your Cab — Home">
          <img src="/images/logo.png" alt="Grab Your Cab" />
        </Link>
        <nav className="nav">{LINKS.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</nav>
        <div className="hdr-cta">
          <a className="hdr-phone" href={`tel:+${WA}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
          <a className="btn btn-dark btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener">Book a Taxi</a>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" /></button>
        </div>
      </div>
      <div className={"mobile-nav" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <div className="x">
            <img src="/images/logo.png" alt="Grab Your Cab" style={{ height: 30, width: "auto" }} />
            <button onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" /></button>
          </div>
          {LINKS.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <a className="btn btn-amber btn-block" style={{ marginTop: 18 }} href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener">Book on WhatsApp</a>
          <a className="btn btn-ghost btn-block" style={{ marginTop: 10 }} href={`tel:+${WA}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
        </div>
      </div>
    </header>
  );
}
