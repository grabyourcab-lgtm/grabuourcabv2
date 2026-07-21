"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

const LINKS = [
  ["Home", "/"], ["Taxi Services", "/taxi"], ["Self Drive", "/self-drive"], ["Services", "/#services"],
  ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      {/* top bar: (mobile) hamburger left · logo center · phone right */}
      <div className="topbar">
        <div className="container in">
          <button className="hamburger hb-top" onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" /></button>
          <Link href="/" className="logo" aria-label="Grab Your Cab — Home">
            <img src="/images/logo.png" alt="Grab Your Cab" />
          </Link>
          <div className="top-info">
            <a className="tinfo" href={`tel:+${WA}`}>
              <span className="i"><Icon name="phone" /></span>
              <span className="ttxt"><small>Dial / Request a call</small><b>{PHONE_DISPLAY}</b></span>
            </a>
            <div className="tinfo hours">
              <span className="i"><Icon name="clock" /></span>
              <span><small>Open Hours</small><b>24x7</b></span>
            </div>
          </div>
        </div>
      </div>
      {/* maroon nav strip (desktop / tablet) */}
      <div className="mainnav">
        <div className="container in">
          <nav className="nav">{LINKS.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</nav>
          <div className="hdr-cta">
            <a className="btn btn-wa btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
          </div>
        </div>
      </div>
      {/* slide-in menu */}
      <div className={"mobile-nav" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <div className="x">
            <img src="/images/logo.png" alt="Grab Your Cab" />
            <button onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" /></button>
          </div>
          {LINKS.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
          <a className="btn btn-wa btn-block" style={{ marginTop: 16 }} href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
          <a className="btn btn-ghost btn-block" style={{ marginTop: 10 }} href={`tel:+${WA}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
        </div>
      </div>
      {/* floating WhatsApp pill (mobile) */}
      <a className="wa-fab" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener" aria-label="Book on WhatsApp">
        <Icon name="chat" />WhatsApp
      </a>
    </header>
  );
}
