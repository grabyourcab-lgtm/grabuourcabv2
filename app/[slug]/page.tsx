import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Car } from "@/lib/types";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CarCard from "@/components/site/CarCard";
import RoutesSection from "@/components/site/RoutesSection";
import Icon from "@/components/site/Icon";
import { waLink, OFFICES, PHONES } from "@/lib/site";
import { CITY_INFO, SERVICE_INFO, getCity, parseServiceCity, serviceHref } from "@/lib/pages";

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const city = getCity(params.slug);
  if (city) return {
    title: `${city.heroTitle} | Grab Your Cab`,
    description: city.heroDesc,
  };
  const sc = parseServiceCity(params.slug);
  if (sc) return {
    title: `${sc.service.name} in ${sc.city.name} | Grab Your Cab`,
    description: sc.service.desc(sc.city.name),
  };
  return { title: "Grab Your Cab" };
}

async function fetchCars(citySlug: string, cats?: string[]) {
  try {
    const supabase = createClient();
    let q = supabase.from("cars").select("*").eq("available", true)
      .contains("cities", [citySlug]).order("sort_order");
    const { data } = await q;
    let cars = (data as Car[]) ?? [];
    if (cats && cats.length) cars = cars.filter((c) => cats.includes(c.category));
    return cars;
  } catch { return []; }
}

function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}<span className="chev"><Icon name="arrow" /></span></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

function Banner({ phone, msg }: { phone: string; msg: string }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="banner">
          <img className="bg" src="/images/special.jpg" alt="" loading="lazy" />
          <div className="in">
            <h2>Ready when you are.</h2>
            <p>Book in seconds on WhatsApp, or talk to our team — 24/7, every day of the year.</p>
            <div className="hbtns">
              <a className="btn btn-amber" href={`tel:+${phone}`}><Icon name="phone" />Call us now</a>
              <a className="btn btn-wa" href={waLink(msg, phone)} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const city = getCity(params.slug);
  if (city) return <CityPage city={city} />;
  const sc = parseServiceCity(params.slug);
  if (sc) return <ServiceCityPage service={sc.service} city={sc.city} />;
  notFound();
}

/* ---------------- CITY HUB PAGE ---------------- */
async function CityPage({ city }: { city: (typeof CITY_INFO)[number] }) {
  const cars = await fetchCars(city.slug);
  const offices = OFFICES.filter((o) =>
    city.slug === "goa" ? o.city === "Goa" :
    city.slug === "noida-international-airport-jewar" ? o.city === "Jewar" :
    !["Goa", "Jewar"].includes(o.city));
  const phones = PHONES.filter(([c]) =>
    city.slug === "goa" ? ["Goa", "Meerut"].includes(c) :
    city.slug === "noida-international-airport-jewar" ? c === "Jewar Airport" :
    !["Goa"].includes(c));

  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{city.name} · 24/7</span>
          <h1>{city.heroTitle}</h1>
          <p className="lead">{city.heroDesc}</p>
          <div className="hero-ctas" style={{ marginTop: 22 }}>
            <a className="btn btn-amber" href={waLink(`Hello Grab Your Cab! I need a cab in ${city.name}.`, city.phone)} target="_blank" rel="noopener">Book in {city.short}</a>
            <a className="btn btn-ghost" href={`tel:+${city.phone}`}><Icon name="phone" />Call {city.short} line</a>
          </div>
          <div className="loc-pills">
            {city.localities.map((l) => <span key={l}><Icon name="pin" />{l}</span>)}
          </div>
        </div>
      </section>

      {/* services in this city */}
      <section className="sec">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">What we do in {city.short}</span><h2>Services in {city.name}</h2></div>
          <div className="svc-cards">
            {SERVICE_INFO.map((s) => (
              <Link className="svc-card" key={s.slug} href={serviceHref(s.slug, city.slug)}>
                <span className="i"><Icon name={s.icon} /></span>
                <div><h3>{s.name}</h3><p>{s.desc(city.short).split("—")[0].trim()}</p></div>
                <Icon name="arrow" className="go" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* cars available */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-head split">
            <div><span className="eyebrow">Live fleet</span><h2>Cars available in {city.name}</h2></div>
            <Link className="btn btn-ghost btn-sm" href="/fleet">All cars <Icon name="arrow" /></Link>
          </div>
          <div className="fleet-grid carousel">{cars.slice(0, 6).map((c) => <CarCard key={c.id} car={c} />)}</div>
        </div>
      </section>

      <RoutesSection />

      {/* contact for this city */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Reach us</span><h2>{city.name} offices &amp; phone lines</h2></div>
          <div className="loc-grid">
            {phones.map(([c, n]) => (
              <div className="loc" key={c + n}><div className="lt"><Icon name="phone" />{c}</div><a href={`tel:+${n}`}>+{n}</a></div>
            ))}
          </div>
          <div className="office-grid" style={{ marginTop: 14 }}>
            {offices.map((o) => (
              <div className="office" key={o.city}><h4><Icon name="pin" />{o.city} Office</h4><p>{o.addr}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Good to know</span><h2>Frequently asked questions</h2></div>
          <Faqs faqs={city.faqs} />
        </div>
      </section>

      <Banner phone={city.phone} msg={`Hello Grab Your Cab! I need a ride in ${city.name}.`} />
      <Footer />
    </>
  );
}

/* ---------------- SERVICE × CITY PAGE ---------------- */
async function ServiceCityPage({ service, city }: {
  service: (typeof SERVICE_INFO)[number]; city: (typeof CITY_INFO)[number];
}) {
  const cars = await fetchCars(city.slug, service.cats);
  const otherCities = CITY_INFO.filter((c) => c.slug !== city.slug);
  const otherServices = SERVICE_INFO.filter((s) => s.slug !== service.slug);
  const waMsg = `Hello Grab Your Cab! I want to book: ${service.name} in ${city.name}.`;

  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs">
            <Link href="/">Home</Link><span>/</span>
            <Link href={`/${city.slug}`}>{city.name}</Link><span>/</span>
            <b>{service.name}</b>
          </nav>
          <span className="eyebrow">{city.name} · 24/7</span>
          <h1>{service.name} in {city.name}</h1>
          <p className="lead">{service.desc(city.name)}</p>
          <div className="hero-ctas" style={{ marginTop: 22 }}>
            <a className="btn btn-amber" href={waLink(waMsg, city.phone)} target="_blank" rel="noopener">Book on WhatsApp</a>
            <a className="btn btn-ghost" href={`tel:+${city.phone}`}><Icon name="phone" />+{city.phone}</a>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="sec">
        <div className="container">
          <div className="feat-grid">
            {service.features.map(([ic, t]) => (
              <div className="feat" key={t}><span className="i"><Icon name={ic} /></span><p>{t}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* cars for this service */}
      {cars.length > 0 && (
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="sec-head split">
              <div><span className="eyebrow">Live fleet</span><h2>Popular cars for this service</h2></div>
              <Link className="btn btn-ghost btn-sm" href="/fleet">All cars <Icon name="arrow" /></Link>
            </div>
            <div className="fleet-grid carousel">{cars.slice(0, 6).map((c) => <CarCard key={c.id} car={c} />)}</div>
          </div>
        </section>
      )}

      {/* image + pitch */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pitch">
            <div className="pic"><img src={service.img} alt={`${service.name} in ${city.name}`} loading="lazy" /></div>
            <div>
              <span className="eyebrow">Why Grab Your Cab</span>
              <h2>10 years on {city.short}&rsquo;s roads</h2>
              <p>Every booking is confirmed on WhatsApp with your car, driver and fare — no apps to install, no surge pricing, no surprises. Clean cars, verified drivers and a team that picks up the phone at 3 AM.</p>
              <ul className="ticks">
                <li><Icon name="check" />Instant confirmation on WhatsApp</li>
                <li><Icon name="check" />Transparent fixed fares</li>
                <li><Icon name="check" />Clean, serviced cars every trip</li>
                <li><Icon name="check" />24/7 support on a human phone line</li>
              </ul>
              <a className="btn btn-amber" style={{ marginTop: 18 }} href={waLink(waMsg, city.phone)} target="_blank" rel="noopener">Get a quote <Icon name="arrow" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Good to know</span><h2>Frequently asked questions</h2></div>
          <Faqs faqs={service.faqs(city.name)} />
        </div>
      </section>

      {/* cross links */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="xlinks">
            <div>
              <h4>{service.name} in other cities</h4>
              <div className="chips linkchips">
                {otherCities.map((c) => <Link key={c.slug} href={serviceHref(service.slug, c.slug)}>{service.name} {c.name}</Link>)}
              </div>
            </div>
            <div>
              <h4>Other services in {city.name}</h4>
              <div className="chips linkchips">
                {otherServices.map((s) => <Link key={s.slug} href={serviceHref(s.slug, city.slug)}>{s.name}</Link>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Banner phone={city.phone} msg={waMsg} />
      <Footer />
    </>
  );
}
