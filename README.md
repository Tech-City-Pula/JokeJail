# Zadatak

## Level 1
Napraviti login sustav koji koristi Discord kao OAuth provider

- Napraviti vlastitu aplikaciju na Supabaseu - https://supabase.com/dashboard/projects
- Populirati `.env.local` s podacima iz Supabasea (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
- Napraviti vlastitu aplikaciju na Discord developer portalu - https://discord.com/developers/applications
- Unutar Supabase-a enablat Discord kao auth provider i dodati mu client id i client secret
1. Dodati OAuth callback url callback url koji ce potvrditi OAuth kod i vratiti nam session
2. Na login stranici dodati handler za discord login koji poziva OAuth callback url
3. Zastititi stranicu sa korisnickim podacima - vratiti korisnike koji nisu ulogirani na login stranicu
4. Dodati gumb za sign out koji nas vraca na login stranicu

## Level 2
Displayati korisničke podatke na stranici nakon logina

1. Pokrenuti migracije za stvaranje profila korisnika pri sign up-u
2. U komponenti UserDisplay dohvatiti prikazati korisničke podatke

## Level 3
Prikazati šale korisnikovih prijatelja

1. Pokrenuti migracije za stvaranje tablice za prijateljstva i šale
2. Dohvatiti i prikazati šale unutar JokeFeed komponente

Level zadaca za ambiciozne

- Dodati formu za kreiranje šale - korisnik moze samo vlastite šale unositi
- Proučiti kako mozemo koristiti RLS za kontroliranje pristupa u tablicama
- Implementirati RLS za kontroliranje pristupa na tablici sa šalama