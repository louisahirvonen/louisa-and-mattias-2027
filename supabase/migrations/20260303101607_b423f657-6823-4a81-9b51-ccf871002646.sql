
-- Add guest_names array and station_pickup columns to rsvp_responses
ALTER TABLE public.rsvp_responses ADD COLUMN guest_names text[] NOT NULL DEFAULT '{}';
ALTER TABLE public.rsvp_responses ADD COLUMN station_pickup boolean NOT NULL DEFAULT false;

-- Make guest_count have a default of 1 (already does), we'll compute it from guest_names length
