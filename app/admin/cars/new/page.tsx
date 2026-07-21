import CarForm from "@/components/CarForm";
export default function NewCar({ searchParams }: { searchParams: { type?: string } }) {
  const t = searchParams.type === "taxi" || searchParams.type === "self-drive" ? searchParams.type : undefined;
  return (<><h1>Add car</h1><div className="sub">Create a new vehicle listing.</div><CarForm defaultType={t} /></>);
}
