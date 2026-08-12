// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "@/components/site/Header";
// import Footer from "@/components/site/Footer";
// import Icon from "@/components/site/Icon";
// import { TRIP_TYPES, PACKAGES, TAXI_CITIES } from "@/lib/taxi";

// function todayPlus(d: number) {
//   const t = new Date(); t.setDate(t.getDate() + d);
//   return t.toISOString().slice(0, 10);
// }

// export default function TaxiSearch() {
//   const router = useRouter();
//   const [trip, setTrip] = useState(TRIP_TYPES[0]);
//   const [city, setCity] = useState("");
//   const [to, setTo] = useState("");
//   const [pkg, setPkg] = useState(PACKAGES[0]);
//   const [date, setDate] = useState(todayPlus(1));
//   const [time, setTime] = useState("08:00");
//   const [err, setErr] = useState("");

//   const local = trip === "Local Rental";
//   function search() {
//     if (!city) { setErr("Source city is required."); return; }
//     const qs = new URLSearchParams({ type: trip, city, pkg: local ? pkg : "", to: local ? "" : to, date: `${date} ${time}` });
//     router.push(`/taxi/results?${qs.toString()}`);
//   }

//   return (
//     <>
//       <Header />
//       <div className="tx-hero">
//         <div className="container">
//           <div className="tx-search">
//             <div className="tx-trips">
//               {TRIP_TYPES.map((t) => (
//                 <button key={t} className={trip === t ? "active" : ""} onClick={() => { setTrip(t); setErr(""); }}>
//                   <span className="dot" />{t}
//                 </button>
//               ))}
//             </div>
//             <div className={"tx-fields" + (local ? "" : " four")}>
//               <div className="tx-f">
//                 <label>Source City</label>
//                 <div className="tx-in">
//                   <Icon name="city" />
//                   <select value={city} onChange={(e) => { setCity(e.target.value); setErr(""); }}>
//                     <option value="">Source City Name</option>
//                     {TAXI_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
//                   </select>
//                 </div>
//                 {err ? <div className="tx-err">{err}</div> : null}
//               </div>
//               {local ? (
//                 <div className="tx-f">
//                   <label>Package Type</label>
//                   <div className="tx-in">
//                     <Icon name="map" />
//                     <select value={pkg} onChange={(e) => setPkg(e.target.value)}>
//                       {PACKAGES.map((p) => <option key={p} value={p}>{p}</option>)}
//                     </select>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="tx-f">
//                   <label>{trip === "Local Transfer" ? "Drop Location" : "Destination City"}</label>
//                   <div className="tx-in">
//                     <Icon name="pin" />
//                     <input value={to} onChange={(e) => setTo(e.target.value)} placeholder={trip === "Local Transfer" ? "e.g. IGI Airport" : "e.g. Agra"} />
//                   </div>
//                 </div>
//               )}
//               <div className="tx-f">
//                 <label>Pickup Date</label>
//                 <div className="tx-in two">
//                   <Icon name="clock" />
//                   <input type="date" min={todayPlus(0)} value={date} onChange={(e) => setDate(e.target.value)} />
//                   <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
//                 </div>
//               </div>
//             </div>
//             <div className="tx-go"><button className="btn btn-amber" onClick={search}>Search</button></div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Icon from "@/components/site/Icon";
import { TRIP_TYPES, PACKAGES, TAXI_CITIES } from "@/lib/taxi";

function todayPlus(d: number) {
  const t = new Date(); t.setDate(t.getDate() + d);
  return t.toISOString().slice(0, 10);
}

export default function TaxiSearch() {
  const router = useRouter();
  const [trip, setTrip] = useState(TRIP_TYPES[0]);
  const [city, setCity] = useState("");
  const [to, setTo] = useState("");
  const [pkg, setPkg] = useState(PACKAGES[0]);
  const [date, setDate] = useState(todayPlus(1));
  const [time, setTime] = useState("08:00");
  const [err, setErr] = useState("");

  const local = trip === "Local Rental";
  function search() {
    if (!city) { setErr("Source city is required."); return; }
    const qs = new URLSearchParams({ type: trip, city, pkg: local ? pkg : "", to: local ? "" : to, date: `${date} ${time}` });
    router.push(`/taxi/results?${qs.toString()}`);
  }

  return (
    <>

      <div className="tx-hero">
        <div className="container">
          <div className="tx-search">
            <div className="tx-trips">
              {TRIP_TYPES.map((t) => (
                <button key={t} className={trip === t ? "active" : ""} onClick={() => { setTrip(t); setErr(""); }}>
                  <span className="dot" />{t}
                </button>
              ))}
            </div>
            <div className={"tx-fields" + (local ? "" : " four")}>
              <div className="tx-f">
                <label>Source City</label>
                <div className="tx-in">
                  <Icon name="city" />
                  <select value={city} onChange={(e) => { setCity(e.target.value); setErr(""); }}>
                    <option value="">Source City Name</option>
                    {TAXI_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                {err ? <div className="tx-err">{err}</div> : null}
              </div>
              {local ? (
                <div className="tx-f">
                  <label>Package Type</label>
                  <div className="tx-in">
                    <Icon name="map" />
                    <select value={pkg} onChange={(e) => setPkg(e.target.value)}>
                      {PACKAGES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="tx-f">
                  <label>{trip === "Local Transfer" ? "Drop Location" : "Destination City"}</label>
                  <div className="tx-in">
                    <Icon name="pin" />
                    <input value={to} onChange={(e) => setTo(e.target.value)} placeholder={trip === "Local Transfer" ? "e.g. IGI Airport" : "e.g. Agra"} />
                  </div>
                </div>
              )}
              <div className="tx-f">
                <label>Pickup Date</label>
                <div className="tx-in two">
                  <Icon name="clock" />
                  <input type="date" min={todayPlus(0)} value={date} onChange={(e) => setDate(e.target.value)} />
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="tx-go"><button className="btn btn-amber" onClick={search}>Search</button></div>
          </div>
        </div>
      </div>

    </>
  );
}
