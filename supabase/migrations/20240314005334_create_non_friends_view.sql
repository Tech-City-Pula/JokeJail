CREATE VIEW public.non_friends_view AS
SELECT
    p.id,
    p.username
FROM
    profile p
WHERE
    NOT (EXISTS (
            SELECT
                1
            FROM
                friend f
            WHERE
                f.user_1 = p.id
                AND f.user_2 = auth.uid()
                OR f.user_2 = p.id
                AND f.user_1 = auth.uid()))
    AND p.id <> auth.uid();

