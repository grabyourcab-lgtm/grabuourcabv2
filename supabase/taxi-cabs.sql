-- Taxi cabs table (fixed taxi fleet + tariffs, editable in Admin -> Taxi Cabs)
-- Run in Supabase: SQL Editor -> New query -> paste ALL -> Run
create table if not exists taxi_cabs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  cab_type text default 'Sedan AC',
  seats int default 4,
  bags int default 2,
  base_fare int default 0,      -- 8Hrs/80Kms basic fare, excluding GST
  extra_km int default 0,
  extra_hr int default 0,
  photo_url text default '',
  available boolean default true,
  sort_order int default 0
);
alter table taxi_cabs enable row level security;
drop policy if exists "taxi_cabs public read" on taxi_cabs;
create policy "taxi_cabs public read" on taxi_cabs for select using (true);
drop policy if exists "taxi_cabs admin all" on taxi_cabs;
create policy "taxi_cabs admin all" on taxi_cabs for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

insert into taxi_cabs (name, cab_type, seats, bags, base_fare, extra_km, extra_hr, photo_url, sort_order)
select * from (values
  ('Maruti Swift Dzire','Sedan AC',4,2,2700,20,200,'/images/cars/taxi-dzire.png',0),
  ('Toyota Etios','Sedan AC',4,2,2750,20,200,'/images/cars/taxi-etios.png',1),
  ('Maruti Ertiga','SUV AC',7,3,3250,22,200,'/images/cars/taxi-ertiga.png',2),
  ('Toyota Innova','SUV AC',7,2,3550,25,200,'/images/cars/taxi-innova.png',3),
  ('Toyota Crysta','SUV AC',6,2,5000,40,350,'/images/cars/taxi-crysta.png',4),
  ('Tempo Traveller (13 Seater)','Traveler',13,15,7200,30,300,'/images/tempo.jpg',5)
) as v(name, cab_type, seats, bags, base_fare, extra_km, extra_hr, photo_url, sort_order)
where not exists (select 1 from taxi_cabs);
