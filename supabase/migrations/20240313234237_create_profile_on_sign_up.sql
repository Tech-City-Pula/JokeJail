DROP FUNCTION IF EXISTS public.create_profile_on_sign_up() CASCADE;

DROP TRIGGER IF EXISTS create_profile_on_sign_up ON auth.table_name;

CREATE OR REPLACE FUNCTION public.create_profile_on_sign_up()
    RETURNS TRIGGER
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $function$
BEGIN
    RAISE LOG 'New row: %', row_to_json(NEW);
    INSERT INTO public.profile(id, username)
        VALUES(NEW.id, COALESCE(NEW.raw_user_meta_data ->> 'name', ''));
    RETURN NEW;
END;
$function$;

CREATE TRIGGER create_profile_on_sign_up
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.create_profile_on_sign_up();

