import Link from "next/link";
import Icon from "./Icon";
import { waLink } from "@/lib/site";
import type { Car } from "@/lib/types";

export default function CarCard({ car, waMsg }: { car: Car; waMsg?: string }) {
  const msg = waMsg || `Hi Grab Your Cab! I want to book the ${car.name}. Please share availability & fare.`;
  const photo = car.photo_url && (car.photo_url.startsWith("http") || car.photo_url.startsWith("/")) ? car.photo_url : "";
  const isLux = car.category === "Luxury";
  return (
    <div className="ccard">
      <Link href={`/cars/${car.slug}`} className="chead">
        <div className="cname">
          <span>{car.category}{car.model_year ? ` ${car.model_year}` : ""}</span>
          <h3>{car.name}</h3>
          {car.badge ? <em className="cbadge">{car.badge}</em> : null}
        </div>
        <div className="cimg">
          {photo
            ? <img src={photo} alt={car.name} loading="lazy" />
            : <span className="carart"><Icon name="car" className="ca-ic" /></span>}
        </div>
      </Link>
      <div className="specs">
        <span><Icon name="car" />{car.category}</span>
        {car.transmission ? <span><Icon name="gear" />{car.transmission}</span> : null}
        {car.seats ? <span><Icon name="seat" />{car.seats} seats</span> : null}
      </div>
      <div className="cfoot">
        <div className="price"><b>&#8377;{car.price?.toLocaleString("en-IN")}</b><span>{isLux ? "per day" : "per 8hr · 80km"}</span></div>
        <a className="wa-mini" href={waLink(msg)} target="_blank" rel="noopener" aria-label={`Book ${car.name} on WhatsApp`}><Icon name="chat" /></a>
      </div>
    </div>
  );
}
