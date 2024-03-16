import { JokesFeed } from '@/components/JokesFeed';
import { SignOutButton } from '@/components/SignOutButton';
import { UserDisplay } from '@/components/UserDisplay';
import { createClient } from '@/lib/supabase/server';

export default async function ProtectedExamplePage() {
	const supabase = createClient();

	// LEVEL 1: step 3 vratiti korisnika na login page s error-om ako nije autenticiran

	return (
		<main className='flex flex-col items-center justify-center p-4 md:p-6'>
			<header className='text-center mb-8'>
				<h1 className='text-3xl font-bold'>Jokes from Friends</h1>
				<h2 className='text-xl text-gray-500 dark:text-gray-400'>
					Laugh out loud with these hilarious jokes!
				</h2>

				<UserDisplay />
			</header>
			<JokesFeed />
			<SignOutButton />
		</main>
	);
}
