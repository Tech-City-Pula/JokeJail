'use client';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { createClient } from '@/lib/supabase/client';
import { useSearchParams } from 'next/navigation';
import { FaDiscord } from 'react-icons/fa';

export default function SignInButton() {
	const searchParams = useSearchParams();

	const supabase = createClient();

	async function signInWithDiscord() {
		await supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo: location.origin + '/api/auth/callback',
			},
		});
	}

	if (searchParams.has('error')) {
		toast({
			variant: 'destructive',
			description: 'You are not authenticated.',
		});
	}

	return (
		<Button onClick={signInWithDiscord}>
			<FaDiscord className='w-4 h-4 mr-2' />
			Sign in with Discord
		</Button>
	);
}
