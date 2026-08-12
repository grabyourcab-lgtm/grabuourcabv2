

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Icon from "./Icon";
// import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

// const LINKS = [
//   ["Home", "/"], ["Taxi Services", "/taxi"], ["Self Drive", "/self-drive"], ["Services", "/#services"],
//   ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
//   ["Contact Us", "/contact"], ["About US", "about-us"]
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

//       {/* bottom action bar (mobile) — call + whatsapp, flush to bottom edge */}
//       <div className="gyc-fabbar">
//         <a className="gyc-fabbtn gyc-fab-call" href={`tel:+${WA}`} aria-label="Call us">
//           <Icon name="phone" /><span>Call</span>
//         </a>
//         <a className="gyc-fabbtn gyc-fab-wa" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener" aria-label="Book on WhatsApp">
//           <Icon name="chat" /><span>WhatsApp</span>
//         </a>
//       </div>

//       <style jsx>{`
//         .gyc-fabbar {
//           position: fixed !important;
//           left: 0 !important;
//           right: 0 !important;
//           bottom: 0 !important;
//           top: auto !important;
//           width: 100% !important;
//           display: flex !important;
//           margin: 0 !important;
//           border-radius: 0 !important;
//           z-index: 999 !important;
//         }

//         .gyc-fabbtn {
//           flex: 1 1 50% !important;
//           display: flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           gap: 8px !important;
//           padding: 14px 0 !important;
//           font-size: 14px !important;
//           font-weight: 600 !important;
//           color: #fff !important;
//           border-radius: 0 !important;
//           width: auto !important;
//           height: auto !important;
//         }

//         .gyc-fab-call {
//           background: var(--red) !important;
//           border-right: 1px solid rgba(255, 255, 255, 0.3);
//         }

//         .gyc-fab-wa {
//           background: #25d366 !important;
//         }

//         @media (min-width: 769px) {
//           .gyc-fabbar {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </header>
//   );
// }




// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Icon from "./Icon";
// import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

// // const LINKS = [
// //   ["Home", "/"], ["Taxi Services", "/taxi"], ["Self Drive", "/self-drive"], ["Services", "/#services"],
// //   ["Delhi NCR", "/delhi-ncr"], ["Goa", "/goa"], ["Jewar Airport", "/noida-international-airport-jewar"],
// //   ["Contact Us", "/contact"], ["About US", "about-us"]
// // ];

// // Locations with hover sub-menu (2 items each)
// const LOCATIONS = [
//   {
//     label: "DELHI",
//     sub: [
//       ["Taxi Service in Delhi", "/taxi-service-delhi"],
//       ["Self Drive Car Rental Delhi", "/self-drive-car-rental-delhi"],
//     ],
//   },
//   {
//     label: "GURGAON",
//     sub: [
//       ["Cab Service in Gurgaon", "/cab-service-in-gurgaon"],
//       ["Self Drive Car Rental Gurgaon", "/self-drive-car-rental-gurgaon"],
//     ],
//   },
//   {
//     label: "NOIDA",
//     sub: [
//       ["Taxi Service in Noida", "/taxi-service-in-noida"],
//       ["Self Drive Car Rental Noida", "/self-drive-car-rental-noida"],
//     ],
//   },
// ];

// // Flat location items (no sub-menu) — shown at the end of the Locations dropdown
// const LOCATIONS_FLAT = [
//   ["Taxi Service in Greater Noida", "/taxi-service-in-greater-noida"],
//   ["Taxi Services in Noida International Airport Jewar", "/taxi-service-noida-international-airport-jewar"],
//   ["Taxi Service in Ghaziabad", "/taxi-service-in-ghaziabad"],
//   ["Taxi Service in Faridabad", "/taxi-service-in-faridabad"],
//   ["Taxi Service in Meerut", "/taxi-service-in-meerut"],
//   ["Taxi Service in Goa", "/taxi-service-in-goa"],
// ];

// // Services dropdown items
// const SERVICES_SUB = [
//   ["Tempo Traveller on Rent", "/tempo-traveller-on-rent"],
//   ["Luxury Car Rental", "/luxury-car-rental"],
//   ["Corporate Cab Services", "/corporate-cab-services"],
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [mOpen, setMOpen] = useState({}); // mobile accordion state
//   const [ddOpen, setDdOpen] = useState(null); // 'locations' | 'services' | null (desktop)
//   const [subOpen, setSubOpen] = useState(null); // location label hovered (desktop)

//   const toggleM = (key) => setMOpen((s) => ({ ...s, [key]: !s[key] }));

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
//           <nav className="nav">
//             <Link href="/">Home</Link>
          
//             {/* <Link href="/taxi">Taxi Services</Link> */}

//             {/* All Locations dropdown */}
//             <div
//               className="nav-item dd"
//               onMouseEnter={() => setDdOpen("locations")}
//               onMouseLeave={() => { setDdOpen(null); setSubOpen(null); }}
//             >
//               <span className="dd-trigger">ALL LOCATIONS<i className={"caret" + (ddOpen === "locations" ? " open" : "")} /></span>
//               <div className={"dd-menu" + (ddOpen === "locations" ? " show" : "")}>
//                 <ul>
//                   {LOCATIONS.map((loc) => (
//                     <li
//                       key={loc.label}
//                       className="has-sub"
//                       onMouseEnter={() => setSubOpen(loc.label)}
//                     >
//                       <span>{loc.label}<i className="caret right" /></span>
//                       <ul className={"dd-submenu" + (subOpen === loc.label ? " show" : "")}>
//                         {loc.sub.map(([l, h]) => (
//                           <li key={l}><Link href={h}>{l}</Link></li>
//                         ))}
//                       </ul>
//                     </li>
//                   ))}
//                   {LOCATIONS_FLAT.map(([l, h]) => (
//                     <li key={l}><Link href={h}>{l}</Link></li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* <Link href="/self-drive">Self Drive</Link> */}
             

//             {/* Services dropdown */}
//             <div
//               className="nav-item dd"
//               onMouseEnter={() => setDdOpen("services")}
//               onMouseLeave={() => setDdOpen(null)}
//             >
//               <span className="dd-trigger">SERVICES<i className={"caret" + (ddOpen === "services" ? " open" : "")} /></span>
//               <div className={"dd-menu dd-menu-simple" + (ddOpen === "services" ? " show" : "")}>
//                 <ul>
//                   {SERVICES_SUB.map(([l, h]) => (
//                     <li key={l}><Link href={h}>{l}</Link></li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* <Link href="/delhi-ncr">Delhi NCR</Link>
//             <Link href="/goa">Goa</Link>
//             <Link href="/noida-international-airport-jewar">Jewar Airport</Link> */}

//              <Link href="/about-us">BLOGS</Link>
//               <Link href="/about-us">About US</Link>
//             <Link href="/contact">Contact Us</Link>
            
//           </nav>
//           <div className="hdr-cta">
//             <a className="btn btn-wa btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
//           </div>
//         </div>
//       </div>

//       {/* slide-in menu (mobile) */}
//       <div className={"mobile-nav" + (open ? " open" : "")} onClick={() => setOpen(false)}>
//         <div className="panel" onClick={(e) => e.stopPropagation()}>
//           <div className="x">
//             <img src="/images/logo.png" alt="Grab Your Cab" />
//             <button onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" /></button>
//           </div>

//           <Link href="/" onClick={() => setOpen(false)}>Home</Link>
//           {/* <Link href="/taxi" onClick={() => setOpen(false)}>Taxi Services</Link> */}

//           {/* All Locations accordion */}
//           <div className="m-group">
//             <button type="button" className="m-toggle" onClick={() => toggleM("loc")}>
//               All Locations
//               <i className={"caret" + (mOpen.loc ? " open" : "")} />
//             </button>
//             {mOpen.loc && (
//               <div className="m-sub">
//                 {LOCATIONS.map((loc) => (
//                   <div key={loc.label} className="m-subgroup">
//                     <button type="button" className="m-toggle m-toggle-sm" onClick={() => toggleM(loc.label)}>
//                       {loc.label.toUpperCase()}
//                       <i className={"caret" + (mOpen[loc.label] ? " open" : "")} />
//                     </button>
//                     {mOpen[loc.label] && (
//                       <div className="m-sub2">
//                         {loc.sub.map(([l, h]) => (
//                           <Link key={l} href={h} onClick={() => setOpen(false)}>{l.toUpperCase()}</Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//                 {LOCATIONS_FLAT.map(([l, h]) => (
//                   <Link key={l} href={h} className="m-flat" onClick={() => setOpen(false)}>{l}</Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link href="/self-drive" onClick={() => setOpen(false)}>Self Drive</Link>

//           {/* Services accordion */}
//           <div className="m-group">
//             <button type="button" className="m-toggle" onClick={() => toggleM("services")}>
//               Services
//               <i className={"caret" + (mOpen.services ? " open" : "")} />
//             </button>
//             {mOpen.services && (
//               <div className="m-sub">
//                 {SERVICES_SUB.map(([l, h]) => (
//                   <Link key={l} href={h} className="m-flat" onClick={() => setOpen(false)}>{l}</Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link href="/delhi-ncr" onClick={() => setOpen(false)}>Delhi NCR</Link>
//           <Link href="/goa" onClick={() => setOpen(false)}>Goa</Link>
//           <Link href="/noida-international-airport-jewar" onClick={() => setOpen(false)}>Jewar Airport</Link>
//           <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
//           <Link href="/about-us" onClick={() => setOpen(false)}>About US</Link>

//           <a className="btn btn-wa btn-block" style={{ marginTop: 16 }} href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
//           <a className="btn btn-ghost btn-block" style={{ marginTop: 10 }} href={`tel:+${WA}`}><Icon name="phone" />{PHONE_DISPLAY}</a>
//         </div>
//       </div>

//       {/* bottom action bar (mobile) — call + whatsapp, flush to bottom edge */}
//       <div className="gyc-fabbar">
//         <a className="gyc-fabbtn gyc-fab-call" href={`tel:+${WA}`} aria-label="Call us">
//           <Icon name="phone" /><span>Call</span>
//         </a>
//         <a className="gyc-fabbtn gyc-fab-wa" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener" aria-label="Book on WhatsApp">
//           <Icon name="chat" /><span>WhatsApp</span>
//         </a>
//       </div>

//       <style jsx>{`
//         .gyc-fabbar {
//           position: fixed !important;
//           left: 0 !important;
//           right: 0 !important;
//           bottom: 0 !important;
//           top: auto !important;
//           width: 100% !important;
//           display: flex !important;
//           margin: 0 !important;
//           border-radius: 0 !important;
//           z-index: 999 !important;
//         }

//         .gyc-fabbtn {
//           flex: 1 1 50% !important;
//           display: flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           gap: 8px !important;
//           padding: 14px 0 !important;
//           font-size: 14px !important;
//           font-weight: 600 !important;
//           color: #fff !important;
//           border-radius: 0 !important;
//           width: auto !important;
//           height: auto !important;
//         }

//         .gyc-fab-call {
//           background: var(--red) !important;
//           border-right: 1px solid rgba(255, 255, 255, 0.3);
//         }

//         .gyc-fab-wa {
//           background: #25d366 !important;
//         }

//         @media (min-width: 769px) {
//           .gyc-fabbar {
//             display: none !important;
//           }
//         }

//         /* ===== Desktop dropdown ===== */
//         /* make sure nothing clips the dropdown panels */
//         :global(.mainnav),
//         :global(.mainnav .container),
//         :global(.mainnav .in),
//         :global(.nav) {
//           overflow: visible !important;
//         }

//         .nav-item.dd {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//         }

//         .dd-trigger {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           margin:0px 8px;
//           cursor: pointer;
//           color: #fff !important;
//         }

//         .caret {
//           display: inline-block;
//           width: 6px;
//           height: 6px;
//           border-right: 2px solid currentColor;
//           border-bottom: 2px solid currentColor;
//           transform: rotate(45deg);
//           transition: transform 0.2s ease;
//           margin-top: -2px;
//         }

//         .caret.right {
//           transform: rotate(-45deg);
//           margin-left: 6px;
//         }

//         .caret.open {
//           transform: rotate(225deg);
//           margin-top: 2px;
//         }

//         .dd-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           min-width: 300px;
//           background: #ffffff !important;
//           color: #222 !important;
//           box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
//           border-radius: 8px;
//           padding: 8px 0;
//           opacity: 0;
//           visibility: hidden;
//           pointer-events: none;
//           transform: translateY(8px);
//           transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
//           z-index: 2000;
//         }

//         /* JS-controlled (reliable) + CSS hover as fallback */
//         .dd-menu.show,
//         .nav-item.dd:hover > .dd-menu {
//           opacity: 1 !important;
//           visibility: visible !important;
//           pointer-events: auto !important;
//           transform: translateY(0) !important;
//         }

//         .dd-menu ul {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }

//         .dd-menu > ul > li {
//           position: relative;
//         }

//         .dd-menu li > span,
//         .dd-menu li > :global(a) {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 10px 18px;
//           font-size: 14px;
//           color: #222;
//           white-space: nowrap;
//           cursor: pointer;
//         }

//         .dd-menu li > :global(a):hover,
//         .dd-menu li.has-sub:hover > span {
//           background: #f7f2ee;
//           color: var(--red, #b3131a);
//         }

//         .dd-menu li.has-sub {
//           position: relative;
//         }

//         .dd-submenu {
//           position: absolute;
//           top: 0;
//           left: 100%;
//           min-width: 260px;
//           background: #ffffff !important;
//           color: #222 !important;
//           box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
//           border-radius: 8px;
//           padding: 8px 0;
//           opacity: 0;
//           visibility: hidden;
//           pointer-events: none;
//           transform: translateX(8px);
//           transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
//           z-index: 2001;
//         }

//         .dd-submenu.show,
//         .dd-menu li.has-sub:hover > .dd-submenu {
//           opacity: 1 !important;
//           visibility: visible !important;
//           pointer-events: auto !important;
//           transform: translateX(0) !important;
//         }

//         .dd-menu-simple {
//           min-width: 240px;
//         }

//         /* ===== Mobile accordion ===== */
//         .m-group {
//           display: flex;
//           flex-direction: column;
//         }

//         .m-toggle {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           background: none;
//           border: none;
//           color: #fff !important;
//           font: inherit;
//           text-align: left;
//           padding: 12px 0;
//           cursor: pointer;
//         }

//         .m-toggle-sm {
//           padding: 10px 0 10px 14px;
//           font-size: 14px;
//           opacity: 0.9;
//           color: #fff !important;
//         }

//         .m-sub {
//           display: flex;
//           flex-direction: column;
//           padding-left: 8px;
//         }

//         .m-sub2 {
//           display: flex;
//           flex-direction: column;
//           padding-left: 28px;
//         }

//         .m-flat {
//           padding-left: 14px !important;
//         }
//       `}</style>
//     </header>
//   );
// }


"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { waLink, PHONE_DISPLAY, WA } from "@/lib/site";

// Locations with hover sub-menu (2 items each)
const LOCATIONS = [
  {
    label: "DELHI",
    sub: [
      ["Taxi Service in Delhi", "/taxi-service-delhi"],
      ["Self Drive Car Rental Delhi", "/self-drive-car-rental-delhi"],
    ],
  },
  {
    label: "GURGAON",
    sub: [
      ["Cab Service in Gurgaon", "/cab-service-in-gurgaon"],
      ["Self Drive Car Rental Gurgaon", "/self-drive-car-rental-gurgaon"],
    ],
  },
  {
    label: "NOIDA",
    sub: [
      ["Taxi Service in Noida", "/taxi-service-in-noida"],
      ["Self Drive Car Rental Noida", "/self-drive-car-rental-noida"],
    ],
  },
];

// Flat location items (no sub-menu) — shown at the end of the Locations dropdown
const LOCATIONS_FLAT = [
  ["Taxi Service in Greater Noida", "/taxi-service-in-greater-noida"],
  ["Taxi Services in Noida International Airport Jewar", "/taxi-service-noida-international-airport-jewar"],
  ["Taxi Service in Ghaziabad", "/taxi-service-in-ghaziabad"],
  ["Taxi Service in Faridabad", "/taxi-service-in-faridabad"],
  ["Taxi Service in Meerut", "/taxi-service-in-meerut"],
  ["Taxi Service in Goa", "/taxi-service-in-goa"],
];

// Services dropdown items
const SERVICES_SUB = [
  ["Tempo Traveller on Rent", "/tempo-traveller-on-rent"],
  ["Luxury Car Rental", "/luxury-car-rental"],
  ["Corporate Cab Services", "/corporate-cab-services"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mOpen, setMOpen] = useState<Record<string, boolean>>({}); // mobile accordion state
  const [ddOpen, setDdOpen] = useState<string | null>(null); // 'locations' | 'services' | null (desktop)
  const [subOpen, setSubOpen] = useState<string | null>(null); // location label hovered (desktop)

  const toggleM = (key: string) => setMOpen((s) => ({ ...s, [key]: !s[key] }));

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
          <nav className="nav">
            <Link href="/">Home</Link>

            {/* All Locations dropdown */}
            <div
              className="nav-item dd"
              onMouseEnter={() => setDdOpen("locations")}
              onMouseLeave={() => { setDdOpen(null); setSubOpen(null); }}
            >
              <span className="dd-trigger">ALL LOCATIONS<i className={"caret" + (ddOpen === "locations" ? " open" : "")} /></span>
              <div className={"dd-menu" + (ddOpen === "locations" ? " show" : "")}>
                <ul>
                  {LOCATIONS.map((loc) => (
                    <li
                      key={loc.label}
                      className="has-sub"
                      onMouseEnter={() => setSubOpen(loc.label)}
                    >
                      <span>{loc.label}<i className="caret right" /></span>
                      <ul className={"dd-submenu" + (subOpen === loc.label ? " show" : "")}>
                        {loc.sub.map(([l, h]) => (
                          <li key={l}><Link href={h}>{l}</Link></li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  {LOCATIONS_FLAT.map(([l, h]) => (
                    <li key={l}><Link href={h}>{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services dropdown */}
            <div
              className="nav-item dd"
              onMouseEnter={() => setDdOpen("services")}
              onMouseLeave={() => setDdOpen(null)}
            >
              <span className="dd-trigger">SERVICES<i className={"caret" + (ddOpen === "services" ? " open" : "")} /></span>
              <div className={"dd-menu dd-menu-simple" + (ddOpen === "services" ? " show" : "")}>
                <ul>
                  {SERVICES_SUB.map(([l, h]) => (
                    <li key={l}><Link href={h}>{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/about-us">Blogs</Link>
            <Link href="/about-us">About US</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div className="hdr-cta">
            <a className="btn btn-wa btn-sm" href={waLink("Hello Grab Your Cab! I'd like to book a ride.")} target="_blank" rel="noopener"><Icon name="chat" />Book on WhatsApp</a>
          </div>
        </div>
      </div>

      {/* slide-in menu (mobile) */}
      <div className={"mobile-nav" + (open ? " open" : "")} onClick={() => setOpen(false)}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <div className="x">
            <img src="/images/logo.png" alt="Grab Your Cab" />
            <button onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" /></button>
          </div>

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>

          {/* All Locations accordion */}
          <div className="m-group">
            <button type="button" className="m-toggle" onClick={() => toggleM("loc")}>
              All Locations
              <i className={"caret" + (mOpen.loc ? " open" : "")} />
            </button>
            {mOpen.loc && (
              <div className="m-sub">
                {LOCATIONS.map((loc) => (
                  <div key={loc.label} className="m-subgroup">
                    <button type="button" className="m-toggle m-toggle-sm" onClick={() => toggleM(loc.label)}>
                      {loc.label.toUpperCase()}
                      <i className={"caret" + (mOpen[loc.label] ? " open" : "")} />
                    </button>
                    {mOpen[loc.label] && (
                      <div className="m-sub2">
                        {loc.sub.map(([l, h]) => (
                          <Link key={l} href={h} onClick={() => setOpen(false)}>{l.toUpperCase()}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {LOCATIONS_FLAT.map(([l, h]) => (
                  <Link key={l} href={h} className="m-flat" onClick={() => setOpen(false)}>{l}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Services accordion */}
          <div className="m-group">
            <button type="button" className="m-toggle" onClick={() => toggleM("services")}>
              Services
              <i className={"caret" + (mOpen.services ? " open" : "")} />
            </button>
            {mOpen.services && (
              <div className="m-sub">
                {SERVICES_SUB.map(([l, h]) => (
                  <Link key={l} href={h} className="m-flat" onClick={() => setOpen(false)}>{l}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about-us" onClick={() => setOpen(false)}>Blogs</Link>
          <Link href="/about-us" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

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
        /* ================= bottom fixed call/whatsapp bar (mobile) ================= */
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
          z-index: 900 !important; /* was 999 — must stay below the slide-in menu */
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

        /* ================= mobile slide-in menu fixes ================= */
        /* must render ABOVE the fixed call/whatsapp bar, and its own CTA
           buttons at the bottom must not be hidden behind that bar */
        :global(.mobile-nav) {
          z-index: 950 !important;
        }

        :global(.mobile-nav .panel) {
          padding-bottom: 90px !important;
        }

        /* keep page content from being covered by the fixed bottom bar */
        @media (max-width: 620px) {
          :global(body) {
            padding-bottom: 64px;
          }
        }

        /* ===== Desktop dropdown ===== */
        :global(.mainnav),
        :global(.mainnav .container),
        :global(.mainnav .in),
        :global(.nav) {
          overflow: visible !important;
        }

        .nav-item.dd {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .dd-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 0px 8px;
          cursor: pointer;
          color: #fff !important;
        }

        .caret {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: rotate(45deg);
          transition: transform 0.2s ease;
          margin-top: -2px;
        }

        .caret.right {
          transform: rotate(-45deg);
          margin-left: 6px;
        }

        .caret.open {
          transform: rotate(225deg);
          margin-top: 2px;
        }

        .dd-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 300px;
          background: #ffffff !important;
          color: #222 !important;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
          z-index: 2000;
        }

        .dd-menu.show,
        .nav-item.dd:hover > .dd-menu {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          transform: translateY(0) !important;
        }

        .dd-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .dd-menu > ul > li {
          position: relative;
        }

        .dd-menu li > span,
        .dd-menu li > :global(a) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          font-size: 14px;
          color: #222;
          white-space: nowrap;
          cursor: pointer;
        }

        .dd-menu li > :global(a):hover,
        .dd-menu li.has-sub:hover > span {
          background: #f7f2ee;
          color: var(--red, #b3131a);
        }

        .dd-menu li.has-sub {
          position: relative;
        }

        .dd-submenu {
          position: absolute;
          top: 0;
          left: 100%;
          min-width: 260px;
          background: #ffffff !important;
          color: #222 !important;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateX(8px);
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
          z-index: 2001;
        }

        .dd-submenu.show,
        .dd-menu li.has-sub:hover > .dd-submenu {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          transform: translateX(0) !important;
        }

        .dd-menu-simple {
          min-width: 240px;
        }

        /* ===== Mobile accordion ===== */
        .m-group {
          display: flex;
          flex-direction: column;
        }

        .m-subgroup {
          display: flex;
          flex-direction: column;
        }

        .m-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          color: var(--ink, #212529) !important;
          font: inherit;
          font-weight: 600;
          font-size: 15px;
          text-align: left;
          padding: 13px 6px;
          cursor: pointer;
          border-bottom: 1px solid var(--line, #e1e1e1);
        }

        .m-toggle .caret {
          border-color: var(--ink, #212529);
        }

        .m-toggle-sm {
          padding: 10px 6px 10px 14px;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.85;
          color: var(--text, #444) !important;
          border-bottom: none;
        }

        .m-toggle-sm .caret {
          border-color: var(--text, #444);
        }

        .m-sub {
          display: flex;
          flex-direction: column;
          padding-left: 6px;
          background: var(--grey, #f5f5f5);
          border-radius: 8px;
          margin: 4px 0 8px;
          overflow: hidden;
        }

        .m-sub2 {
          display: flex;
          flex-direction: column;
          padding-left: 22px;
        }

        .m-sub :global(a),
        .m-sub2 :global(a) {
          display: block;
          padding: 11px 10px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text, #444) !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .m-sub :global(a):last-child,
        .m-sub2 :global(a):last-child {
          border-bottom: none;
        }

        .m-sub :global(a):active,
        .m-sub2 :global(a):active {
          color: var(--red, #9f1c33) !important;
          background: rgba(159, 28, 51, 0.06);
        }

        .m-flat {
          padding-left: 14px !important;
        }
      `}</style>
    </header>
  );
}