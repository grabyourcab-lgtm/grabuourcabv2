import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Image from "next/image";
import Link from "next/link";

const wrap = { maxWidth: 840, margin: "0 auto", padding: "0 20px" } as const;
const h2 = {
  fontFamily: "Poppins, Inter, sans-serif",
  color: "#212529",
  fontSize: 22,
  fontWeight: 700,
  margin: "34px 0 10px",
  borderLeft: "4px solid #9f1c33",
  paddingLeft: 12,
  scrollMarginTop: 90, // sticky header ke neeche heading na chhupe
} as const;
const p = { margin: "0 0 14px" } as const;

// Table of contents yahin se banta hai
const toc = [
  { id: "festival", label: "Dev Deepawali: Festival of Lights of the Gods" },
  { id: "when-where", label: "When and Where to Celebrate Dev Deepawali" },
  { id: "rituals", label: "The Rituals and Celebrations" },
  { id: "cultural", label: "Cultural Events and Activities" },
  { id: "why-choose", label: "Why Book Your Varanasi Taxi with Grab Your Cab" },
];

const perks = [
  "Multiple cab options: Hatchback, Sedan, SUV and Tempo Traveller",
  "Experienced drivers who know the city lanes and ghat routes",
  "Customer support for booking and on-trip assistance",
  "Clean and sanitized cabs for a comfortable ride",
  "Transparent fares with no hidden charges",
  "Easy booking online or over the phone",
];

export default function DemoBlog() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "Inter, 'Segoe UI', Arial, sans-serif" }}>
        {/* hero */}
        <section style={{ background: "#33414f", padding: "44px 0" }}>
          <div style={wrap}>
            <span
              style={{
                display: "inline-block",
                background: "#9f1c33",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 3,
              }}
            >
              Travel Guide
            </span>
            <h1
              style={{
                fontFamily: "Poppins, Inter, sans-serif",
                color: "#fff",
                fontSize: "clamp(24px,3.6vw,36px)",
                fontWeight: 700,
                lineHeight: 1.25,
                margin: "10px 0 0",
              }}
            >
              Dev Deepawali in Varanasi – Plan Your Taxi Ride
            </h1>
            <div style={{ color: "#cfd6dd", fontSize: 13, marginTop: 12 }}>
              10 Oct 2026 · 5 min read
            </div>
          </div>
        </section>

        <section style={{ padding: "36px 0 55px", color: "#444", fontSize: 15, lineHeight: 1.8 }}>
          <div style={wrap}>
            {/* top image: public/images/dev-deepawali.jpg me rakho */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(220px, 42vw, 420px)",
                borderRadius: 6,
                overflow: "hidden",
                marginBottom: 28,
                border: "1px solid #e1e1e1",
              }}
            >
              <Image
                src="https://www.bharattaxi.com/blog/wp-content/uploads/2025/11/Dev-Deepawali-in-Varanasi-Bharat-Taxi.jpg"
                alt="Dev Deepawali diyas lit on the ghats of Varanasi"
                fill
                priority
                sizes="(max-width: 840px) 100vw, 840px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <p style={p}>
              Dev Deepawali is one of the most loved festivals of Varanasi, and every year lakhs of
              visitors reach the city just for this night. It is celebrated on Kartik Purnima, the
              full moon day that comes about fifteen days after Diwali.
            </p>
            <p style={p}>
              Varanasi, also known as Kashi, is counted among the holiest cities of India, famous for
              its ghats, temples and its deep bond with Maa Ganga. On Dev Deepawali the whole city
              glows with thousands of earthen diyas along the river, which is why the festival is
              called the Diwali of the Gods. With Grab Your Cab you can arrange pickup and drop in
              the city, and also pick a Varanasi taxi package to see nearby places with family and
              friends.
            </p>

            {/* Table of contents */}
            <nav
              aria-label="Table of contents"
              style={{
                background: "#f5f5f5",
                border: "1px solid #e1e1e1",
                borderTop: "3px solid #9f1c33",
                borderRadius: 6,
                padding: "18px 22px",
                margin: "22px 0 8px",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#212529",
                  marginBottom: 10,
                }}
              >
                Table of Contents
              </div>
              <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      style={{ color: "#9f1c33", fontWeight: 500, textDecoration: "none" }}
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* 1 */}
            <h2 id="festival" style={h2}>
              1. Dev Deepawali: Festival of Lights of the Gods
            </h2>
            <p style={p}>
              Dev Deepawali literally means the Diwali of the Gods. According to Hindu belief, on
              this day the Gods descend to earth to celebrate and to take a holy dip in the Ganga.
            </p>
            <p style={p}>
              The festival is linked with the victory of Lord Shiva over the three sons of the demon
              Tarakasura: Vidyunmali, Tarakaksha and Kamalaksha. The brothers worshipped Lord Brahma
              and received a boon of three flying cities, one of gold, one of silver and one of
              iron, together known as Tripura. These cities lined up only once in a thousand years,
              and could be destroyed only by a single arrow shot by someone free from anger.
            </p>
            <p style={p}>
              Protected by the boon, the demons grew powerful and began to trouble the Gods. Lord
              Shiva then took charge. He rode a divine chariot, with the earth as its base, Mount
              Meru as the bow and the serpent Vasuki as the bowstring. When the three cities finally
              came into one line, he released one arrow and destroyed them all. This victory of good
              over evil is the reason behind Dev Deepawali.
            </p>
            <p style={p}>
              For the people of Varanasi, the night is about much more than lights. It is about faith,
              devotion and peace on the banks of Maa Ganga. Homes, temples and ghats shine with
              diyas, and it is believed that lighting a lamp brings blessings and prosperity.
            </p>

            {/* 2 */}
            <h2 id="when-where" style={h2}>
              2. When and Where to Celebrate Dev Deepawali
            </h2>
            <p style={p}>
              According to the Hindu calendar, Dev Deepawali falls on the full moon of the Kartik
              month, roughly fifteen days after Diwali. In Varanasi the main celebration happens on
              the ghats of the Ganga. The most popular ones are Dashashwamedh Ghat, Assi Ghat,
              Rajendra Prasad Ghat, Panchganga Ghat and Chet Singh Ghat.
            </p>
            <p style={p}>
              After sunset the ghats look magical. Volunteers, priests and locals light countless
              diyas, and their reflection on the calm river gives the water a golden glow. The
              riverfront turns into a long stream of light, and visitors from all over India and the
              world come to see it. Whether you travel alone or with family, you can book a taxi in
              Varanasi with Grab Your Cab at an affordable fare.
            </p>

            {/* 3 */}
            <h2 id="rituals" style={h2}>
              3. The Rituals and Celebrations
            </h2>
            <p style={p}>
              The day starts early, with devotees taking a holy dip in the Ganga, known as Kartik
              Snan. It is believed that bathing in the river on this day brings good fortune and
              cleanses sins.
            </p>
            <p style={p}>
              Through the day, temples hold special prayers, especially around Dashashwamedh Ghat.
              By evening the ghats fill up with pilgrims, tourists and locals, and the main rituals
              begin after sunset.
            </p>
            <p style={p}>
              The highlight is the Ganga Aarti, a grand ceremony of chanting, bells, conch shells and
              flaming lamps. Priests move the lamps in rhythm while mantras fill the air. After the
              aarti, devotees light diyas on the ghat steps, on boats and on the river itself.
            </p>

            {/* 4 */}
            <h2 id="cultural" style={h2}>
              4. Cultural Events and Activities
            </h2>
            <p style={p}>
              Dev Deepawali is also a cultural festival. Several ghats host classical music and dance
              performances, where artists from across the country perform in front of large
              audiences.
            </p>
            <p style={p}>
              A boat ride is another must-do. From the middle of the Ganga you can see the whole
              line of ghats lit up with diyas, which is a wonderful experience for families and
              kids.
            </p>

            {/* 5 */}
            <h2 id="why-choose" style={h2}>
              5. Why Book Your Varanasi Taxi with Grab Your Cab
            </h2>
            <p style={p}>
              Dev Deepawali brings heavy crowds and traffic, so a pre-booked cab saves a lot of
              time and stress. Grab Your Cab offers a wide range of vehicles for every group size:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
              {perks.map((x) => (
                <li key={x} style={{ display: "flex", gap: 10, padding: "4px 0" }}>
                  <span style={{ color: "#29ad00", fontWeight: 700 }}>✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p style={p}>
              Travelling solo, with family or in a company group, you can book a local cab to move
              around Varanasi or an outstation taxi to reach the city from nearby places.
            </p>

            <Link
              href="/blogs"
              style={{
                display: "inline-block",
                marginTop: 24,
                background: "#9f1c33",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                padding: "11px 24px",
                borderRadius: 4,
                textDecoration: "none",
              }}
            >
              ← All Blogs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}