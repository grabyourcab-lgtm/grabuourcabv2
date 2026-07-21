import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteCar } from "./actions";
import type { Car } from "@/lib/types";
import { forService } from "@/lib/types";

export const dynamic = "force-dynamic";

const TYPE_LABEL: Record<string, string> = {
  taxi: "Taxi Service Cars",
  "self-drive": "Self Drive Cars",
};

export default async function CarsPage({ searchParams }: { searchParams: { q?: string; cat?: string; type?: string } }) {
  const supabase = createClient();
  let query = supabase.from("cars").select("*").order("sort_order");
  if (searchParams.cat) query = query.eq("category", searchParams.cat);
  const { data } = await query;
  let cars = (data as Car[]) ?? [];
  const q = (searchParams.q || "").toLowerCase();
  if (q) cars = cars.filter((c) => c.name.toLowerCase().includes(q));
  const type = searchParams.type === "taxi" || searchParams.type === "self-drive" ? searchParams.type : "";
  if (type) cars = forService(cars, type as "taxi" | "self-drive");

  const cats = ["Hatchback", "Sedan", "Compact SUV", "MUV", "SUV", "Luxury"];
  const stLabel = (c: Car) => {
    const t = c.service_type || "both";
    return t === "taxi" ? "Taxi" : t === "self-drive" ? "Self Drive" : "Both";
  };

  return (
    <>
      <div className="bar">
        <div><h1>{type ? TYPE_LABEL[type] : "All Cars"}</h1><div className="sub" style={{ margin: 0 }}>{cars.length} vehicles</div></div>
        <Link className="btn" href={`/admin/cars/new${type ? `?type=${type}` : ""}`}>+ Add car</Link>
      </div>

      <form className="bar" style={{ gap: 8 }}>
        {type ? <input type="hidden" name="type" value={type} /> : null}
        <input className="search" name="q" placeholder="Search car name…" defaultValue={searchParams.q || ""} />
        <select className="search" name="cat" defaultValue={searchParams.cat || ""} style={{ minWidth: 160 }}>
          <option value="">All categories</option>
          {cats.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <button className="btn ghost" type="submit">Filter</button>
      </form>

      <table className="tbl">
        <thead><tr><th>Name</th><th>Category</th><th>Service</th><th>Fuel</th><th>Price</th><th>Live</th><th></th></tr></thead>
        <tbody>
          {cars.map((c) => (
            <tr key={c.id}>
              <td><b>{c.name}</b></td>
              <td><span className="tag">{c.category}</span></td>
              <td><span className="tag">{stLabel(c)}</span></td>
              <td>{c.fuel}</td>
              <td>&#8377;{c.price?.toLocaleString("en-IN")}</td>
              <td>{c.available ? "Yes" : "No"}</td>
              <td style={{ whiteSpace: "nowrap" }}>
                <Link className="btn ghost" href={`/admin/cars/${c.id}`}>Edit</Link>{" "}
                <form action={deleteCar} style={{ display: "inline" }}>
                  <input type="hidden" name="id" value={c.id} />
                  <button className="btn red" type="submit">Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
