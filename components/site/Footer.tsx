

"use client"
import Link from "next/link";
import Icon from "./Icon";
import { SERVICES, waLink } from "@/lib/site";
import { serviceHref } from "@/lib/pages";

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
            <Link href="/" className="logo"><img src="/images/logo.png" alt="Grab Your Cab" /></Link>
            <p>Full-service cab &amp; car rental across Delhi NCR, Goa and Jewar Airport — city rides, self-drive, luxury cars, tempo travellers and corporate travel.</p>
            <div className="socials">
              <a href="https://www.facebook.com/share/1c22yzh3vw/" target="_blank" rel="noopener" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="https://www.linkedin.com/in/kamal-srivastava-1a724233?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href="https://www.instagram.com/grabyourcab?igsh=MXdtdG9qZm5pZWZyNw==" target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" /></a>
            </div>
          </div>
          <div className="foot-col"><h4>Services</h4>
            {SERVICES.map((s) => <Link key={s.slug} href={serviceHref(s.slug)}>{s.name}</Link>)}
          </div>
          <div className="foot-col"><h4>Explore</h4>
            <Link href="/delhi-ncr">Delhi NCR</Link>
            <Link href="/goa">Goa</Link>
            <Link href="/noida-international-airport-jewar">Jewar Airport</Link>
            <Link href="/fleet">Our Fleet</Link>
            <Link href="/#services">All Services</Link>
          </div>
          <div className="foot-col"><h4>Get in touch</h4>
            <ul className="foot-contact">
              <li><Icon name="phone" /><a href="tel:+917522817555">+91-75228 17555</a></li>
              <li><Icon name="phone" /><a href="tel:+919953599735">+91-99535 99735 (Jewar)</a></li>
              <li><Icon name="chat" /><a href={waLink("Hello Grab Your Cab!")} target="_blank" rel="noopener">WhatsApp us</a></li>
              <li><Icon name="pin" /><span>SF-133, Galaxy Diamond Plaza, Gaur City-1, Sector-4, Greater Noida West – 201308</span></li>
            </ul>
          </div>
          <div className="foot-col foot-map">
            <h4>Find us</h4>
            <div className="foot-map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7819893968267!2d77.42952427528806!3d28.60631637567903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4b71461185%3A0xd1989111c49e52fa!2sGalaxy%20Diamond%20Plaza!5e0!3m2!1sen!2sin!4v1785912531817!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Grab Your Cab location"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="container in">
          <span>© {new Date().getFullYear()} Grab Your Cab. All rights reserved.</span>
          <span>Delhi NCR · Goa · Noida International Airport (Jewar)</span>
        </div>
      </div>

      <style jsx>{`
        .foot-grid {
          grid-template-columns: 1.6fr 1fr 1fr 1.3fr 1.3fr;
        }

        .foot-map-embed {
          width: 100%;
          height: 160px;
          border-radius: 10px;
          overflow: hidden;
        }

        @media (max-width: 900px) {
          .foot-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .foot-map {
            grid-column: span 2;
          }
          .foot-map-embed {
            height: 200px;
          }
        }
      `}</style>
    </footer>
  );
}