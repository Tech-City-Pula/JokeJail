CREATE TABLE public.friend(
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    user_1 uuid NOT NULL,
    user_2 uuid NOT NULL,
    CONSTRAINT friend_pkey PRIMARY KEY (user_1, user_2),
    CONSTRAINT public_friend_user_1_fkey FOREIGN KEY (user_1) REFERENCES profile(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT public_friend_user_2_fkey FOREIGN KEY (user_2) REFERENCES profile(id) ON UPDATE CASCADE ON DELETE CASCADE
);

