"use client";
import { useMemo, useState } from "react";
import CarCard from "./CarCard";
import type { Car } from "@/lib/types";

const ORDER = ["Hatchback", "Sedan", "Compact SUV", "MUV", "SUV", "Luxury"];

export default function FleetShowcase({ cars }: { cars: Car[] }) {
  const cats = useMemo(() => {
    const present = ORDER.filter((c) => cars.some((x) => x.category === c));
    return ["All", ...present];
  }, [cars]);
  const [cat, setCat] = useState("All");

  const list = useMemo(() => {
    const pool = cat === "All" ? cars : cars.filter((c) => c.category === cat);
    // prefer badged cars first, keep sort_order otherwise
    return [...pool].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0)).slice(0, 6);
  }, [cars, cat]);

  return (
    <>
      <div className="chips">
        {cats.map((c) => (
          <button key={c} className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="fleet-grid carousel">
        {list.map((c) => <CarCard key={c.id} car={c} />)}
      </div>
    </>
  );
}
