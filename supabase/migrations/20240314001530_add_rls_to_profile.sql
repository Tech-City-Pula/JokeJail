ALTER TABLE "public"."profile" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can see profiles" ON "public"."profile" AS permissive
    FOR SELECT TO public
        USING (TRUE);

