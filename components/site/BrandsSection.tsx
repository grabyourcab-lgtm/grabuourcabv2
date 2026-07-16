import type { Car } from "@/lib/types";

const BRANDS: [string, string, string][] = [
  // [display, name-prefix, logo file]
  ["Maruti Suzuki", "Maruti", "maruti"],
  ["Hyundai", "Hyundai", "hyundai"],
  ["Toyota", "Toyota", "toyota"],
  ["Tata", "Tata", "tata"],
  ["Mahindra", "Mahindra", "mahindra"],
  ["Kia", "Kia", "kia"],
  ["Nissan", "Nissan", "nissan"],
  ["Ford", "Ford", "ford"],
  ["Audi", "Audi", "audi"],
  ["Mercedes", "Mercedes", "mercedes"],
  ["BMW", "BMW", "bmw"],
];

export default function BrandsSection({ cars }: { cars: Car[] }) {
  const rows = BRANDS
    .map(([label, prefix, file]) => ({ label, file, count: cars.filter((c) => c.name.startsWith(prefix)).length }))
    .filter((b) => b.count > 0);
  if (!rows.length) return null;
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head"><span className="eyebrow">Our fleet</span><h2>Browse by Make</h2></div>
        <div className="brands-grid">
          {rows.map((b) => (
            <div className="brand" key={b.label}>
              <img src={`/images/brands/${b.file}.png`} alt={b.label} loading="lazy" />
              <b>{b.label}</b>
              <span>Total Available : {b.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
