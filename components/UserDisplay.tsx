import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function UserDisplay() {
	const supabase = createClient();

	// LEVEL 2: step 2 vratiti korisnika na login page s error-om ako nije autenticiran
	// const userResponse = await supabase.auth.getUser();

	// if (userResponse.error) {
	// 	redirect('/?error=unauthenticated');
	// }

	// LEVEL 2: step 2 dohvatiti korisnikov profil i prikazati ga
	// const profileResponse = await supabase
	// 	.from('profile')
	// 	.select('*')
	// 	.eq('id', userResponse.data.user.id)
	// 	.single();

	// LEVEL 2: step 2 ako korisnik nema profil, vratiti ga na sign in s error-om
	// if (profileResponse.error) {
	// 	redirect('/?error=unauthenticated');
	// }

	// LEVEL 2: step 2 renderaj podatke iz profila
	return <div>{/* Hello {profileResponse.data.username} */}</div>;
}
