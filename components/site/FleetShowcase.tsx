"use client";
import { useMemo, useState } from "react";
import CarCard from "./CarCard";
import type { Car } from "@/lib/types";

const GROUPS: [string, string[] | null][] = [
  ["Economical Cars", ["Hatchback", "Sedan", "Compact SUV"]],
  ["SUVs & MUVs", ["SUV", "MUV"]],
  ["Luxury Cars", ["Luxury"]],
  ["All Cars", null],
];

export default function FleetShowcase({ cars, limit = 8, carousel = true }: {
  cars: Car[]; limit?: number; carousel?: boolean;
}) {
  const [tab, setTab] = useState("Economical Cars");
  const list = useMemo(() => {
    const cats = GROUPS.find(([g]) => g === tab)?.[1] ?? null;
    const pool = cats ? cars.filter((c) => cats.includes(c.category)) : cars;
    const sorted = limit < cars.length
      ? [...pool].sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0))
      : pool;
    return sorted.slice(0, limit);
  }, [cars, tab, limit]);

  return (
    <>
      <div className="chips">
        {GROUPS.map(([g]) => (
          <button key={g} className={tab === g ? "active" : ""} onClick={() => setTab(g)}>{g}</button>
        ))}
      </div>
      <div className={"fleet-grid" + (carousel ? "" : " static")}>
        {list.map((c) => <CarCard key={c.id} car={c} />)}
      </div>
    </>
  );
}
