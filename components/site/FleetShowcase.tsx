"use client";
import { useMemo, useState } from "react";
import CarCard from "./CarCard";
import type { Car } from "@/lib/types";

const ORDER = ["Hatchback", "Sedan", "Compact SUV", "MUV", "SUV", "Luxury"];

export default function FleetShowcase({ cars, limit = 6, carousel = true }: {
  cars: Car[]; limit?: number; carousel?: boolean;
}) {
  const cats = useMemo(() => {
    const present = ORDER.filter((c) => cars.some((x) => x.category === c));
    return ["All", ...present];
  }, [cars]);
  const [cat, setCat] = useState("All");

  const list = useMemo(() => {
    const pool = cat === "All" ? cars : cars.filter((c) => c.category === cat);
    const sorted = limit < cars.length
      ? [...pool].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))
      : pool;
    return sorted.slice(0, limit);
  }, [cars, cat, limit]);

  return (
    <>
      <div className="chips">
        {cats.map((c) => (
          <button key={c} className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className={"fleet-grid" + (carousel ? " carousel" : "")}>
        {list.map((c) => <CarCard key={c.id} car={c} />)}
      </div>
    </>
  );
}
