import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteTaxiCab } from "./actions";
import type { TaxiCab } from "@/lib/taxi";
import { totalFare } from "@/lib/taxi";

export const dynamic = "force-dynamic";

export default async function TaxiCabsPage() {
  const supabase = createClient();
  const { data, error } = await supabase.from("taxi_cabs").select("*").order("sort_order");
  const cabs = (data as TaxiCab[]) ?? [];

  return (
    <>
      <div className="bar">
        <div><h1>Taxi Cabs &amp; Tariffs</h1>
          <div className="sub" style={{ margin: 0 }}>{cabs.length} cabs · shown in the taxi booking flow</div></div>
        <Link className="btn" href="/admin/taxi/new">+ Add taxi cab</Link>
      </div>

      {error ? (
        <div className="sub" style={{ color: "#c0392b" }}>
          Could not load the taxi_cabs table. Run <b>supabase/taxi-cabs.sql</b> in the Supabase SQL Editor first
          (SQL Editor → New query → paste → Run), then refresh this page.
        </div>
      ) : null}

      <table className="tbl">
        <thead><tr><th>Name</th><th>Type</th><th>Seats</th><th>8Hrs/80Kms (basic)</th><th>Total inc. GST</th><th>Extra km</th><th>Extra hr</th><th>Live</th><th></th></tr></thead>
        <tbody>
          {cabs.map((c) => (
            <tr key={c.id}>
              <td><b>{c.name}</b></td>
              <td><span className="tag">{c.cab_type}</span></td>
              <td>{c.seats}</td>
              <td>&#8377;{c.base_fare?.toLocaleString("en-IN")}</td>
              <td><b>&#8377;{totalFare(c, "8Hrs/80Kms").toLocaleString("en-IN")}</b></td>
              <td>&#8377;{c.extra_km}/km</td>
              <td>&#8377;{c.extra_hr}/hr</td>
              <td>{c.available ? "Yes" : "No"}</td>
              <td style={{ whiteSpace: "nowrap" }}>
                <Link className="btn ghost" href={`/admin/taxi/${c.id}`}>Edit</Link>{" "}
                <form action={deleteTaxiCab} style={{ display: "inline" }}>
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
