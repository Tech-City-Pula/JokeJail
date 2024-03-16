-- // LEVEL 3: step 1
-- CREATE TABLE public.joke(
--     id bigint GENERATED BY DEFAULT AS IDENTITY,
--     created_at timestamp with time zone NOT NULL DEFAULT now(),
--     profile_id uuid NOT NULL DEFAULT auth.uid(),
--     content text NOT NULL,
--     CONSTRAINT joke_pkey PRIMARY KEY (id),
--     CONSTRAINT public_joke_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES profile(id) ON UPDATE CASCADE ON DELETE CASCADE
-- );
