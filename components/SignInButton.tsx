'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { createClient } from '@/lib/supabase/client';
import { FaDiscord } from 'react-icons/fa';
import style from '@/app/hue-rotate-animation.module.css';

export default function SignInButton() {
	const supabase = createClient();

	async function signInWithDiscord() {
		await supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo: location.origin + '/api/auth/callback',
			},
		});
	}

	return (
		<Button
			onClick={signInWithDiscord}
			className={cn('w-fit bg-red-500', style['hue-rotate'])}
		>
			<FaDiscord className='w-4 h-4 mr-2' />
			Sign in with Discord
		</Button>
	);
}
