const P: Record<string, string> = {
  phone: "<path d='M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 18v2a2 2 0 0 1-2.2 2A16 16 0 0 1 2 6.2 2 2 0 0 1 4 4z'/>",
  chat: "<path d='M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z'/>",
  menu: "<path d='M4 7h16M4 12h16M4 17h16'/>",
  close: "<path d='M6 6l12 12M18 6L6 18'/>",
  taxi: "<path d='M3 13l1.8-5.2A3 3 0 0 1 7.6 6h8.8a3 3 0 0 1 2.8 1.8L21 13'/><path d='M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z'/><rect x='9.3' y='2.6' width='5.4' height='2.6' rx='.5'/>",
  key: "<circle cx='8' cy='8' r='4'/><path d='M10.8 10.8L20 20M17 17l2-2M14.5 14.5l2-2'/>",
  sparkle: "<path d='M12 3l2 5.5 5.5 2-5.5 2-2 5.5-2-5.5-5.5-2 5.5-2z'/>",
  van: "<path d='M2 7h13a2 2 0 0 1 1.6.8L20 12v4H2z'/><path d='M2 7v9'/><circle cx='7' cy='17' r='1.6'/><circle cx='17' cy='17' r='1.6'/>",
  bus: "<rect x='4' y='3' width='16' height='14' rx='2'/><path d='M4 11h16M7 17v2M17 17v2'/>",
  map: "<path d='M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z'/><path d='M9 4v14M15 6v14'/>",
  building: "<rect x='4' y='3' width='16' height='18' rx='1'/><path d='M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2'/>",
  plane: "<path d='M21 15v-1.7l-8-4.8V3.5a1.5 1.5 0 0 0-3 0v5L2 13.3V15l8-2.4V17l-2 1.4V20l3.5-1 3.5 1v-1.6L13 17v-4.4z'/>",
  city: "<rect x='3' y='9' width='6.5' height='12'/><rect x='9.5' y='4' width='6' height='17'/><rect x='15.5' y='11' width='5.5' height='10'/>",
  road: "<path d='M6 21L8.5 3M18 21l-2.5-18M12 5v2M12 11v2M12 17v2'/>",
  wallet: "<rect x='3' y='6' width='18' height='13' rx='2'/><path d='M3 10h18M16 14h2'/>",
  shield: "<path d='M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z'/><path d='M9 12l2 2 4-4'/>",
  clock: "<circle cx='12' cy='12' r='9'/><path d='M12 7.5v5l3.2 2'/>",
  bolt: "<path d='M13 2L4 14h7l-1 8 9-12h-7z'/>",
  medal: "<circle cx='12' cy='14' r='5.2'/><path d='M8.5 3l2.2 5.2M15.5 3l-2.2 5.2'/>",
  wrench: "<path d='M15.5 4.5a5 5 0 0 0-6.4 6.2L3 17v3.5h3.5l6.3-6.1a5 5 0 0 0 6.2-6.4l-3 3-2.3-.7-.7-2.3z'/>",
  seat: "<path d='M6 4v8a3 3 0 0 0 3 3h6M6 12h9a3 3 0 0 1 3 3v5'/>",
  fuel: "<path d='M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M14 9h2.5a1.5 1.5 0 0 1 1.5 1.5V16a2 2 0 0 0 4 0V8l-3-3'/>",
  gear: "<circle cx='12' cy='12' r='3'/><path d='M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2'/>",
  check: "<path d='M20 6L9 17l-5-5'/>",
  arrow: "<path d='M5 12h14M13 6l6 6-6 6'/>",
  search: "<circle cx='11' cy='11' r='7'/><path d='M21 21l-4-4'/>",
  swap: "<path d='M7 4L4 7l3 3'/><path d='M4 7h13a3 3 0 0 1 3 3'/><path d='M17 20l3-3-3-3'/><path d='M20 17H7a3 3 0 0 1-3-3'/>",
  car: "<path d='M3 13l1.8-5.2A3 3 0 0 1 7.6 6h8.8a3 3 0 0 1 2.8 1.8L21 13'/><path d='M3 13h18v4H3z'/><circle cx='7' cy='16.5' r='1.4'/><circle cx='17' cy='16.5' r='1.4'/>",
  pin: "<path d='M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11z'/><circle cx='12' cy='10' r='2.6'/>",
  star: "<path d='M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7z'/>",
  facebook: "<path d='M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v9h3v-9h2.4l.6-3H12V6.5a.5.5 0 0 1 .5-.5H15z'/>",
  linkedin: "<rect x='3' y='3' width='18' height='18' rx='2'/><path d='M7 10v7M7 6.8v.1M11 17v-4a2 2 0 0 1 4 0v4M11 10v7'/>",
  instagram: "<rect x='3' y='3' width='18' height='18' rx='5'/><circle cx='12' cy='12' r='4'/><circle cx='17.2' cy='6.8' r='.7'/>",
};
const FILL = new Set(["star", "sparkle", "facebook"]);

export default function Icon({ name, className = "" }: { name: string; className?: string }) {
  const cls = "ic " + (FILL.has(name) ? "ic-fill " : "") + className;
  return <svg className={cls.trim()} viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: P[name] || "" }} />;
}
