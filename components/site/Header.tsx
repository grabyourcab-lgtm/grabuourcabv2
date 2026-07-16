"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

const LINKS = [
  ["Home", "/"], ["All Cars", "/fleet"], ["Services", "/#services"],
  ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      {/* white top bar: logo + phone + hours */}
      <div className="topbar">
        <div className="container in">
          <Link href="/" className="logo" aria-label="Grab Your Cab — Home">
            <img src="/images/logo.png" alt="Grab Your Cab" />
          </Link>
          <div className="top-info">
            <a className="tinfo" href={`tel:+${WA}`}>
              <span className="i"><Icon name="phone" /></span>
              <span><small>Dial / Request a call</small><b>{PHONE_DISPLAY}</b></span>
            </a>
            <div className="tinfo hours">
              <span className="i"><Icon name="clock" /></span>
              <span><small>Open Hours</small><b>24x7</b></span>
            </div>
          </div>
        </div>
      </div>
      {/* maroon nav strip */}
      <div className="mainnav">
        <div className="container in">
          <nav className="nav">{LINKS.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</nav>
          <div className="hdr-cta">
            <a className="btn btn-wa btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
            <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" /></button>
          </div>
        </div>
      </div>
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
    </header>
  );
}
