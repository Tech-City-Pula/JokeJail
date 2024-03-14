ALTER TABLE "public"."friend" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable delete for users based on user_id" ON "public"."friend" AS permissive
    FOR DELETE TO public
        USING (((auth.uid() = user_1) OR (auth.uid() = user_2)));

CREATE POLICY "Enable insert for authenticated users only" ON "public"."friend" AS permissive
    FOR INSERT TO authenticated
        WITH CHECK (TRUE);

CREATE POLICY "Authenticated users can see own friends" ON "public"."friend" AS permissive
    FOR SELECT TO public
        USING (((user_1 = auth.uid()) OR (user_2 = auth.uid())));

