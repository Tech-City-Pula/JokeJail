'use client';

import { createClient } from '@/lib/supabase/client';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
	const supabase = createClient();
	const router = useRouter();

	async function signOut() {
		await supabase.auth.signOut();
		router.push('/example');
	}

	return (
		<Button onClick={signOut} className='fixed bottom-6 right-6'>
			Sign out
		</Button>
	);
}
