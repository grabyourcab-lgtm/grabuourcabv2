'use client'

import Footer from '@/components/site/Footer'
import Header from '@/components/site/Header'
import React, { useMemo, useState } from 'react'

/* ------------------------------------------------------------------ */
/*  Small inline icon set (feather-style, matches .ic sizing rules)   */
/* ------------------------------------------------------------------ */
const IconPhone = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
)
const IconMail = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="m22 6-10 7L2 6" /></svg>
)
const IconPin = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
const IconWhatsapp = () => (
  <svg className="ic ic-fill" viewBox="0 0 24 24"><path d="M17.47 14.38c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.63-1.53-.87-2.09-.23-.55-.46-.48-.63-.49h-.54c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4 0 1.4 1.02 2.76 1.17 2.95.14.19 2 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.66-.68 1.9-1.34.23-.65.23-1.21.16-1.34-.07-.12-.26-.19-.54-.33Z" /><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.99-1.36A10 10 0 1 0 12 2Z" /></svg>
)
const IconClock = () => (
  <svg className="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
)
const IconSend = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
)
const IconCopy = () => (
  <svg className="ic" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
)
const IconCheck = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
)
const IconChevronRight = () => (
  <svg className="ic" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
)

/* ------------------------------------------------------------------ */
/*  Static content                                                     */
/* ------------------------------------------------------------------ */
const PHONE_DISPLAY = '7522817555'
const PHONE_TEL = '+917522817555, '
const WHATSAPP_NUMBER = '917522817555'
const EMAIL = 'grabyourcab12@gmail.com'

const CITY_OFFICES = [
  {
    id: 'delhi',
    city: 'Delhi',
    tag: 'Head Office',
    address: 'Rz-1110/A gali no 10 sadh nagar palam colony new delhi -110045',
    hours: 'Open daily · 6:00 AM – 11:00 PM',
    phone: PHONE_DISPLAY,
    lat: 28.6315,
    lng: 77.2167,
  },
  {
    id: 'gurugram',
    city: 'Gurugram',
    tag: 'Branch',
    address: 'PWO Apartments, C-4 206, PWO Appartments, Sector 43, Gurugram, Haryana 122009',
    hours: 'Open daily · 6:00 AM – 11:00 PM',
    phone: 8368737081,
    lat: 28.4949,
    lng: 77.0891,
  },
  {
    id: 'noida',
    city: 'Noida',
    tag: 'Branch',
    address: 'A-152, Sector 63 Rd, A Block, Sector 63, Noida, Uttar Pradesh 201309',
    hours: 'Open daily · 6:00 AM – 11:00 PM',
    phone: PHONE_DISPLAY,
    lat: 28.5708,
    lng: 77.3260,
  },
  // {
  //   id: 'jaipur',
  //   city: 'Jaipur',
  //   tag: 'Branch',
  //   address: 'C-Scheme, near Central Park, Jaipur, Rajasthan 302001',
  //   hours: 'Open daily · 7:00 AM – 10:00 PM',
  //   phone: PHONE_DISPLAY,
  //   lat: 26.9124,
  //   lng: 75.7873,
  // },
  {
    id: 'Noida Extension',
    city: 'Greater Noida West',
    tag: 'Branch',
    address: 'first floor, Galaxy Diamond Plaza, FB-133, Noida-Greater Noida Link Rd, Haibatpur, Sector 4, Greater Noida, Uttar',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:  7522817555,
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    id: 'Ghaziabad',
    city: 'Ghaziabad',
    tag: 'Branch',
    address: 'Jc4J+Jm Ghaziabad, Uttar Pradesh 201016',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone: 7522817555,
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    id: 'noida-int',
    city: 'Noida International Airport, Jewar',
    tag: 'Branch',
    address: 'Front of primary school, Kishorpur, Greater Noida, Uttar Pradesh 203135',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:  9953599735,
    lat: 26.9124,
    lng: 75.7873,
  },
   {
    id: 'goa',
    city: 'Goa',
    tag: 'Branch',
    address: 'H. No. - 66, Bogda, Vosco Da Gama, Goa',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:  9108617014,
    lat: 26.9124,
    lng: 75.7873,
  },
   {
    id: 'meerut',
    city: 'Meerut',
    tag: 'Branch',
    address: 'Gitanjali Tower, near Shani mandir, Main Divider Road, Meerut',
    hours: 'Open daily · 7:00 AM – 10:00 PM',
    phone:   9108617014,
    lat: 26.9124,
    lng: 75.7873,
  },
  


]

const FAQS = [
  {
    q: 'What are your office and support timings?',
    a: 'Our booking desks are open every day from 6:00 AM to 11:00 PM. WhatsApp support and the emergency helpline stay active round the clock for guests already on a trip.',
  },
  {
    q: 'How fast will I get a reply after submitting the form?',
    a: 'Most enquiries get a callback or WhatsApp reply within 15 minutes during working hours. For an instant response, tap the WhatsApp button and our team will pick it up right away.',
  },
  {
    q: 'Can I request a self-drive car through this page?',
    a: 'Yes. Select "Self-Drive" as the trip type in the form below and mention your preferred pickup date — we will share available cars and documentation requirements over WhatsApp.',
  },
  {
    q: 'Do you operate outstation and overnight trips?',
    a: 'Yes, our outstation fleet runs overnight and across state lines. Share your route and travel date in the message box and we will send you a fare breakup in advance.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Local and airport rides can be cancelled free of cost up to 1 hour before pickup. Outstation and self-drive bookings carry a small cancellation fee within 24 hours of pickup — full details are shared at the time of confirmation.',
  },
]

const TRIP_TYPES = ['Outstation', 'Local / Hourly', 'Airport Transfer', 'Self-Drive'] as const

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
const Page = () => {
  const [activeCity, setActiveCity] = useState(CITY_OFFICES[0].id)
  const [copied, setCopied] = useState<'phone' | 'email' | null>(null)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    tripType: TRIP_TYPES[0] as string,
    message: '',
  })
  const [sent, setSent] = useState(false)

  const office = useMemo(
    () => CITY_OFFICES.find((o) => o.id === activeCity) ?? CITY_OFFICES[0],
    [activeCity]
  )

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7818323758465!2d77.4295242749558!3d28.606321085271425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4b71461185%3A0xd1989111c49e52fa!2sGalaxy%20Diamond%20Plaza!5e0!3m2!1sen!2sin!4v1785396972411!5m2!1sen!2sin"
//   `https://maps.google.com/maps?q=${office.lat},${office.lng}&z=15&output=embed`

  const handleCopy = async (type: 'phone' | 'email') => {
    const value = type === 'phone' ? PHONE_DISPLAY : EMAIL
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      setTimeout(() => setCopied(null), 1800)
    } catch {
      /* clipboard not available — silently ignore */
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text =
      `Hi Grab Your Cab, I'd like to enquire about a ride.%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Trip type: ${form.tripType}%0A` +
      `Message: ${form.message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <Header />

      {/* ---------------- HERO ---------------- */}
      {/* <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="/">Home</a>
            <IconChevronRight />
            <b>Contact Us</b>
          </div>
          <span className="eyebrow">We&rsquo;d love to hear from you</span>
          <h1>Let&rsquo;s plan your next ride</h1>
          <p className="lead">
            Questions about a booking, a quote for an outstation trip, or a self-drive car for the
            weekend — our team replies fastest on WhatsApp, but every channel below reaches a real person.
          </p>
          <div className="hero-ctas" style={{ marginTop: 22 }}>
            <a className="btn btn-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              <IconWhatsapp /> Chat on WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
              <IconPhone /> Call Us Now
            </a>
          </div>
        </div>
      </section> */}
  <section
  className="page-hero"
  style={{
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(/services/contact.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    minHeight: "420px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>
  <div className="container">
    <div className="crumbs">
      <a href="/">Home</a>
      <IconChevronRight />
      <b>Contact Us</b>
    </div>
    <span className="eyebrow">We&rsquo;d love to hear from you</span>
    <h1>Let&rsquo;s plan your next ride</h1>
    <p className="lead">
      Questions about a booking, a quote for an outstation trip, or a self-drive car for the
      weekend — our team replies fastest on WhatsApp, but every channel below reaches a real person.
    </p>
    <div className="hero-ctas" style={{ marginTop: 22 }}>
      <a className="btn btn-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
        <IconWhatsapp /> Chat on WhatsApp
      </a>
      <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
        <IconPhone /> Call Us Now
      </a>
    </div>
  </div>
</section>
      {/* ---------------- QUICK CONTACT TILES ---------------- */}
      <section className="sec">
        <div className="container">
          <div className="quick-grid">
            <div className="quick-tile">
              <div className="i"><IconPhone /></div>
              <div className="qt-body">
                <span>Call the booking desk</span>
                <b>{PHONE_DISPLAY}</b>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('phone')}
                aria-label="Copy phone number"
              >
                {copied === 'phone' ? <IconCheck /> : <IconCopy />}
              </button>
            </div>

            <div className="quick-tile">
              <div className="i"><IconMail /></div>
              <div className="qt-body">
                <span>Email us anytime</span>
                <b>{EMAIL}</b>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy('email')}
                aria-label="Copy email address"
              >
                {copied === 'email' ? <IconCheck /> : <IconCopy />}
              </button>
            </div>

            <div className="quick-tile">
              <div className="i"><IconClock /></div>
              <div className="qt-body">
                <span>Support hours</span>
                <b>24/7, daily</b>
              </div>
            </div>

            <div className="quick-tile">
              <div className="i"><IconPin /></div>
              <div className="qt-body" >
                <span>Head office</span>
                <p style={{fontWeight:"bold", color:"black" }}>First floor, Galaxy Diamond Plaza, FB-133, Noida-Greater Noida Link Rd, Haibatpur, Sector 4, Greater Noida, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FORM + MAP ---------------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Send a message</span>
            <h2>Tell us about your trip</h2>
            <p>Fill this in and it lands directly in our WhatsApp inbox — no waiting on a ticket queue.</p>
          </div>

          <div className="contact-layout">
            {/* ---- form card ---- */}
            <form className="booking contact-form" onSubmit={handleSubmit}>
              <div className="bk-title"><IconSend /> Enquiry form</div>

              <div className="cf-grid">
                <div className="f">
                  <label htmlFor="cf-name">Full name</label>
                  <input
                    id="cf-name"
                    required
                    placeholder="e.g. Rohan Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="f">
                  <label htmlFor="cf-phone">Phone number</label>
                  <input
                    id="cf-phone"
                    required
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="f">
                  <label htmlFor="cf-email">Email (optional)</label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="f">
                  <label htmlFor="cf-trip">Trip type</label>
                  <select
                    id="cf-trip"
                    value={form.tripType}
                    onChange={(e) => setForm({ ...form, tripType: e.target.value })}
                  >
                    {TRIP_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="f cf-full">
                  <label htmlFor="cf-msg">Message</label>
                  <textarea
                    id="cf-msg"
                    rows={4}
                    required
                    placeholder="Pickup city, drop city, travel date, number of passengers..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-amber btn-block go">
                <IconWhatsapp /> Send via WhatsApp
              </button>
              {sent && (
                <p className="cf-sent"><IconCheck /> Opening WhatsApp with your details filled in…</p>
              )}
            </form>

            {/* ---- map + office switcher card ---- */}
            <div className="map-card">
              <div className="city-select">
                {CITY_OFFICES.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    className={o.id === activeCity ? 'active' : ''}
                    onClick={() => setActiveCity(o.id)}
                  >
                    {o.city}
                  </button>
                ))}
              </div>

              <div className="map-embed">
                <iframe
                  key={office.id}
                  title={`Map to Grab Your Cab, ${office.city}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="map-info">
                <span className="cbadge">{office.tag}</span>
                <h3>Grab Your Cab — {office.city}</h3>
                <p><IconPin /> {office.address}</p>
                <p><IconClock /> {office.hours}</p>
                <div className="map-actions">
                  <a
                    className="btn btn-ghost btn-sm"
                    href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                  <a className="btn btn-wa btn-sm" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                    <IconWhatsapp /> Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ALL OFFICES ---------------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Where we operate</span>
            <h2>Our offices across North India</h2>
          </div>
          <div className="loc-grid">
            {CITY_OFFICES.map((o) => (
              <div className="loc" key={o.id}>
                <div className="lt"><IconPin /> {o.city}</div>
                <p style={{ color: 'var(--muted)', fontSize: 12.5, margin: '4px 0 8px' }}>{o.address}</p>
                <a href={`tel:${PHONE_TEL}`}>{o.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Before you write in</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq">
            {FAQS.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="chev"><IconChevronRight /></span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING BANNER ---------------- */}
      <section className="sec">
        <div className="container">
          <div className="banner">
            <img className="bg" src="https://media.gettyimages.com/id/2250177682/photo/new-delhi-india-ola-uber-and-rapido-taxi-at-taxi-stand-at-the-igi-international-airport-on.jpg?s=612x612&w=0&k=20&c=k0p9sY4tpzpdix2PZkkBGu5TCljTk3u3ixN9xfwaypw=" alt="" />
            <div className="in">
              <h2>Still not sure who to talk to?</h2>
              <p>Ping us on WhatsApp — it&rsquo;s the fastest way to reach the right person on our team.</p>
              <div className="hbtns">
                <a className="btn btn-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  <IconWhatsapp /> Start a Chat
                </a>
                <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                  <IconPhone /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ---------------- scoped styles for elements not in the base stylesheet ---------------- */}
      <style jsx>{`
        .quick-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .quick-tile {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--r);
          padding: 16px 16px;
          transition: box-shadow 0.16s;
        }
        .quick-tile:hover {
          box-shadow: var(--shadow);
        }
        .quick-tile .i {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--grey);
          display: grid;
          place-items: center;
          flex: none;
        }
        .quick-tile .i :global(.ic) {
          width: 19px;
          height: 19px;
          color: var(--red);
        }
        .qt-body {
          flex: 1;
          min-width: 0;
        }
        .qt-body p {
  margin: 2px 0 0;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
}
        .qt-body span {
          display: block;
          font-size: 11.5px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .qt-body b {
          display: block;
          font-family: 'Poppins';
          font-size: 14px;
          color: var(--ink);
          margin-top: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .copy-btn {
          width: 34px;
          height: 34px;
          border-radius: 4px;
          border: 1px solid var(--line);
          background: var(--grey);
          display: grid;
          place-items: center;
          cursor: pointer;
          flex: none;
        }
        .copy-btn :global(.ic) {
          width: 14px;
          height: 14px;
          color: var(--red);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: start;
        }
        .contact-form {
          margin: 0;
        }
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 16px;
        }
        .cf-full {
          grid-column: 1 / -1;
        }
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid var(--line-2);
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
          background: #fff;
          color: var(--ink);
          outline: none;
          resize: vertical;
        }
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: var(--red);
        }
        .cf-sent {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--wa);
          font-size: 13px;
          font-weight: 600;
          margin-top: 12px;
        }
        .cf-sent :global(.ic) {
          width: 15px;
          height: 15px;
        }

        .map-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--r);
          padding: 16px;
        }
        .city-select {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .city-select button {
          border: 1px solid var(--line);
          background: var(--grey);
          border-radius: 999px;
          padding: 7px 15px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text);
          cursor: pointer;
          font-family: inherit;
          transition: all 0.15s;
        }
        .city-select button.active {
          background: var(--red);
          border-color: var(--red);
          color: #fff;
        }
        .map-embed {
          border-radius: 6px;
          overflow: hidden;
          height: 260px;
          border: 1px solid var(--line);
        }
        .map-embed iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        .map-info {
          padding-top: 14px;
        }
        .map-info h3 {
          font-size: 17px;
          font-weight: 700;
          margin: 6px 0 8px;
        }
        .map-info p {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 13px;
          margin-bottom: 6px;
        }
        .map-info p :global(.ic) {
          width: 14px;
          height: 14px;
          color: var(--red);
          flex: none;
        }
        .map-actions {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 1000px) {
          .quick-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .contact-layout {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 620px) {
          .quick-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .cf-grid {
            grid-template-columns: 1fr;
          }
          .quick-tile,
          .map-card {
            border-radius: 18px;
            box-shadow: 0 2px 12px rgba(30, 40, 60, 0.07);
          }
        }
      `}</style>
    </>
  )
}

export default Page