"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Icon from "@/components/site/Icon";

const POPULAR = ["Noida", "Greater Noida", "Delhi", "Ghaziabad", "Gurgaon", "Faridabad", "Goa", "Jewar Airport"];
const TIMES = ["08:00", "11:00", "14:00", "17:00", "20:00", "23:00"];

function todayPlus(d: number) {
  const t = new Date(); t.setDate(t.getDate() + d);
  return t.toISOString().slice(0, 10);
}

export default function SelfDriveWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loc, setLoc] = useState("");
  const [q, setQ] = useState("");
  const [startDate, setStartDate] = useState(todayPlus(1));
  const [startTime, setStartTime] = useState("08:00");
  const [endDate, setEndDate] = useState(todayPlus(2));
  const [endTime, setEndTime] = useState("20:00");

  // prefill ?loc= from the home booking box
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("loc");
    if (p) { setLoc(p); setStep(2); }
  }, []);

  function chooseLoc(l: string) { setLoc(l); setStep(2); }
  function proceed() {
    const qs = new URLSearchParams({
      loc, start: `${startDate} ${startTime}`, end: `${endDate} ${endTime}`,
    });
    router.push(`/self-drive/results?${qs.toString()}`);
  }

  return (
    <>
      <Header />
      <div className="wiz">
        <div className="container">
          {step === 1 && (
            <>
              <div className="wiz-head">
                <h1>Enter location</h1>
              </div>
              <div className="wiz-search">
                <Icon name="search" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search address, airport or hotel"
                  onKeyDown={(e) => { if (e.key === "Enter" && q.trim()) chooseLoc(q.trim()); }} />
              </div>
              <p className="wiz-hint">Please enter locality to get customised results</p>
              {q.trim() ? (
                <button className="wiz-row" onClick={() => chooseLoc(q.trim())}>
                  <span className="i"><Icon name="pin" /></span>
                  <span><b>Use &ldquo;{q.trim()}&rdquo;</b><small>Search self drive cars here</small></span>
                </button>
              ) : null}
              <div className="wiz-sub">Popular locations</div>
              <div className="wiz-locs">
                {POPULAR.map((l) => (
                  <button className="wiz-row" key={l} onClick={() => chooseLoc(l)}>
                    <span className="i"><Icon name="pin" /></span>
                    <span><b>{l}</b><small>{l === "Goa" ? "North & South Goa" : l === "Jewar Airport" ? "Noida International Airport" : "Delhi NCR"}</small></span>
                  </button>
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="wiz-head">
                <button className="wiz-back" onClick={() => setStep(1)} aria-label="Back"><Icon name="arrow" /></button>
                <h1>Select Date &amp; Time</h1>
              </div>
              <div className="wiz-loc-chip"><Icon name="pin" />{loc}<button onClick={() => setStep(1)}>Change</button></div>
              <div className="wiz-card">
                <h4>Start — pickup</h4>
                <input type="date" min={todayPlus(0)} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <div className="slots">
                  {TIMES.map((t) => (
                    <button key={t} className={startTime === t ? "active" : ""} onClick={() => setStartTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="wiz-card">
                <h4>End — return</h4>
                <input type="date" min={startDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <div className="slots">
                  {TIMES.map((t) => (
                    <button key={t} className={endTime === t ? "active" : ""} onClick={() => setEndTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <button className="btn btn-amber btn-block wiz-go" onClick={proceed}>Proceed <Icon name="arrow" /></button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
