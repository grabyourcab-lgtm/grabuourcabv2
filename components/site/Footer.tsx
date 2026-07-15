import Link from "next/link";
import Icon from "./Icon";
import { SERVICES, waLink } from "@/lib/site";

const VALUES = [
  ["medal", "10 Years", "Trusted on the road"], ["taxi", "500+ Cabs", "Sedans to luxury buses"],
  ["bolt", "Instant Booking", "Confirmed on WhatsApp"], ["clock", "24/7 Service", "Any hour, any day"],
];
export default function Footer() {
  return (
    <footer className="site" id="locations">
      <div className="container">
        <div className="foot-values">
          {VALUES.map(([i, a, b]) => (
            <div className="fv" key={a}><span className="i"><Icon name={i} /></span><div><b>{a}</b><span>{b}</span></div></div>
          ))}
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand"><span className="m">GC</span> Grab Your Cab</div>
            <p>Full-service cab &amp; car rental across Delhi NCR, Goa and Jewar Airport — city rides, self-drive, luxury cars, tempo travellers and corporate travel.</p>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" /></a>
            </div>
          </div>
          <div className="foot-col"><h4>Services</h4>{SERVICES.map((s) => <a key={s.slug} href={waLink(`Hi! I want to book: ${s.name}.`)} target="_blank" rel="noopener">{s.name}</a>)}</div>
          <div className="foot-col"><h4>Cities</h4>
            <Link href="/#cities">Delhi NCR</Link><Link href="/#cities">Goa</Link>
            <Link href="/#cities">Jewar Airport</Link>
            <Link href="/#services">Services</Link><Link href="/#fleet">Our Fleet</Link>
          </div>
          <div className="foot-col"><h4>Get in touch</h4>
            <ul className="foot-contact">
              <li><Icon name="phone" /><a href="tel:+917522817555">+91-75228 17555</a></li>
              <li><Icon name="phone" /><a href="tel:+919953599735">+91-99535 99735 (Jewar)</a></li>
              <li><Icon name="chat" /><a href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener">WhatsApp us</a></li>
              <li><Icon name="pin" /><span>SF-133, Galaxy Diamond Plaza, Gaur City-1, Sector-4, Greater Noida West – 201308</span></li>
            </ul>
          </div>
        </div>
        <div className="copyright"><span>© {new Date().getFullYear()} Grab Your Cab. All rights reserved.</span><span>Delhi NCR · Goa · Noida International Airport (Jewar)</span></div>
      </div>
    </footer>
  );
}
