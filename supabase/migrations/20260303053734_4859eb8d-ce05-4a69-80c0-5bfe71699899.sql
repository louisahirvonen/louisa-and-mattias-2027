
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  attending BOOLEAN NOT NULL DEFAULT true,
  guest_count INTEGER NOT NULL DEFAULT 1,
  dietary_restrictions TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public wedding RSVP)
CREATE POLICY "Anyone can submit RSVP"
ON public.rsvp_responses
FOR INSERT
WITH CHECK (true);

-- Allow anyone to read (for admin viewing later)
CREATE POLICY "Anyone can view RSVPs"
ON public.rsvp_responses
FOR SELECT
USING (true);
