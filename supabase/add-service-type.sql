-- REQUIRED for the Taxi / Self Drive split.
-- Run in Supabase: SQL Editor -> New query -> paste -> Run
alter table cars add column if not exists service_type text default 'both';
update cars set service_type = 'both' where service_type is null or service_type = '';
-- Optional starting point: luxury cars usually chauffeur-driven (taxi),
-- uncomment the next line if you want that default:
-- update cars set service_type = 'taxi' where category = 'Luxury';
