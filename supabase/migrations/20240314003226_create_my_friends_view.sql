CREATE VIEW my_friends_view AS
SELECT
    p.*
FROM
    profile p
    JOIN friend f ON p.id = f.user_1
        OR p.id = f.user_2
WHERE (f.user_1 = auth.uid()
    OR f.user_2 = auth.uid())
AND p.id <> auth.uid();

