import Link from "next/link";
import Icon from "./Icon";
import { waLink } from "@/lib/site";
import type { Car } from "@/lib/types";

export default function CarCard({ car }: { car: Car }) {
  const msg = `Hi Grab Your Cab! I want to book the ${car.name}. Please share availability & fare.`;
  const badgeClass = car.badge === "Luxury" ? "badge lux" : car.badge === "New" ? "badge dark" : "badge";
  const photo = car.photo_url && (car.photo_url.startsWith("http") || car.photo_url.startsWith("/")) ? car.photo_url : "";
  return (
    <div className="ccard">
      <Link href={`/cars/${car.slug}`} className="pic">
        {car.badge ? <span className={badgeClass}>{car.badge}</span> : null}
        {photo
          ? <img src={photo} alt={car.name} loading="lazy" />
          : <span className="carart"><Icon name="car" className="ca-ic" /><span>{car.name}</span></span>}
      </Link>
      <div className="cbody">
        <Link href={`/cars/${car.slug}`}><h3>{car.name}</h3></Link>
        <div className="cat">{car.category}{car.model_year ? ` · ${car.model_year}` : ""}</div>
        <div className="specs">
          {car.seats ? <span><Icon name="seat" />{car.seats} Seater</span> : null}
          {car.transmission ? <span><Icon name="gear" />{car.transmission}</span> : null}
          {car.fuel ? <span><Icon name="fuel" />{car.fuel}</span> : null}
        </div>
        <div className="price"><b>&#8377;{car.price?.toLocaleString("en-IN")}</b><span>onwards</span></div>
        <div className="btns">
          <a className="btn btn-amber btn-sm" href={waLink(msg)} target="_blank" rel="noopener">Book Now</a>
          <a className="btn btn-wa btn-sm" href={waLink(msg)} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
