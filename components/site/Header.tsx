// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Icon from "./Icon";
// import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

// const LINKS = [
//   ["Home", "/"], ["Taxi Services", "/taxi"], ["Self Drive", "/self-drive"], ["Services", "/#services"],
//   ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
//   ["Contact Us", "/contact"], ["About", "about-us"]
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="hdr">
//       {/* top bar: (mobile) hamburger left · logo center · phone right */}
//       <div className="topbar">
//         <div className="container in">
//           <button className="hamburger hb-top" onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" /></button>
//           <Link href="/" className="logo" aria-label="Grab Your Cab — Home">
//             <img src="/images/logo.png" alt="Grab Your Cab" />
//           </Link>
//           <div className="top-info">
//             <a className="tinfo" href={`tel:+${WA}`}>
//               <span className="i"><Icon name="phone" /></span>
//               <span className="ttxt"><small>Dial / Request a call</small><b>{PHONE_DISPLAY}</b></span>
//             </a>
//             <div className="tinfo hours">
//               <span className="i"><Icon name="clock" /></span>
//               <span><small>Open Hours</small><b>24x7</b></span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* maroon nav strip (desktop / tablet) */}
//       <div className="mainnav">
//         <div className="container in">
//           <nav className="nav">{LINKS.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</nav>
//           <div className="hdr-cta">
//             <a className="btn btn-wa btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
//           </div>
//         </div>
//       </div>
//       {/* slide-in menu */}
//       <div className={"mobile-nav" + (open ? " open" : "")} onClick={() => setOpen(false)}>
//         <div className="panel" onClick={(e) => e.stopPropagation()}>
//           <div className="x">
//             <img src="/images/logo.png" alt="Grab Your Cab" />
//             <button onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" /></button>
//           </div>
//           {LINKS.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
//           <a className="btn btn-wa btn-block" style={{ marginTop: 16 }} href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
//           <a className="btn btn-ghost btn-block" style={{ marginTop: 10 }} href={`tel:+${WA}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
//         </div>
//       </div>
//       {/* floating WhatsApp pill (mobile) */}
//       <a className="wa-fab" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener" aria-label="Book on WhatsApp">
//         <Icon name="chat" />WhatsApp bro
//       </a>
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

const LINKS = [
  ["Home", "/"], ["Taxi Services", "/taxi"], ["Self Drive", "/self-drive"], ["Services", "/#services"],
  ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
  ["Contact Us", "/contact"], ["About US", "about-us"]
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

      {/* bottom action bar (mobile) — call + whatsapp, flush to bottom edge */}
      <div className="gyc-fabbar">
        <a className="gyc-fabbtn gyc-fab-call" href={`tel:+${WA}`} aria-label="Call us">
          <Icon name="phone" /><span>Call</span>
        </a>
        <a className="gyc-fabbtn gyc-fab-wa" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener" aria-label="Book on WhatsApp">
          <Icon name="chat" /><span>WhatsApp</span>
        </a>
      </div>

      <style jsx>{`
        .gyc-fabbar {
          position: fixed !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          top: auto !important;
          width: 100% !important;
          display: flex !important;
          margin: 0 !important;
          border-radius: 0 !important;
          z-index: 999 !important;
        }

        .gyc-fabbtn {
          flex: 1 1 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          padding: 14px 0 !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #fff !important;
          border-radius: 0 !important;
          width: auto !important;
          height: auto !important;
        }

        .gyc-fab-call {
          background: var(--red) !important;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
        }

        .gyc-fab-wa {
          background: #25d366 !important;
        }

        @media (min-width: 769px) {
          .gyc-fabbar {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}