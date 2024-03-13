CREATE TABLE public.profile(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    username text NOT NULL,
    CONSTRAINT profile_pkey PRIMARY KEY (id),
    CONSTRAINT public_profile_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

