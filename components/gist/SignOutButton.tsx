'use client';

import { createClient } from '@/lib/supabase/client';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
	const supabase = createClient();
	const router = useRouter();

	async function signOut() {
		await supabase.auth.signOut();
		router.push('/gist');
	}

	return <Button onClick={signOut}>Sign out</Button>;
}
