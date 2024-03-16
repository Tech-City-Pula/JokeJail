import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function UserDisplay() {
	const supabase = createClient();

	// LEVEL 2: step 2 vratiti korisnika na login page s error-om ako nije autenticiran

	// LEVEL 2: step 2 dohvatiti korisnikov profil i prikazati ga

	// LEVEL 2: step 2 ako korisnik nema profil, vratiti ga na sign in s error-om

	// LEVEL 2: step 2 renderaj podatke iz profila
	return <div>{/* Hello KORISNICKO_IME */}</div>;
}
