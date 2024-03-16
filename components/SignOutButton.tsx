'use client';

import { createClient } from '@/lib/supabase/client';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
	const supabase = createClient();
	const router = useRouter();

	async function signOut() {
		console.log('implementiraj me!');

		// LEVEL 1: step 4 implementirati sign out
		// await supabase.auth.signOut();
		// router.push('/');
	}

	return (
		<Button onClick={signOut} className='fixed bottom-6 right-6'>
			Sign out
		</Button>
	);
}
