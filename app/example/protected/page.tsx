import { SignOutButton } from '@/components/SignOutButton';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProtectedExamplePage() {
	const supabase = createClient();

	const userResponse = await supabase.auth.getUser();

	if (userResponse.error) {
		redirect('/example?error=unauthenticated');
	}

	const profileResponse = await supabase
		.from('profile')
		.select('*')
		.eq('id', userResponse.data.user.id)
		.single();

	if (profileResponse.error) {
		redirect('/example?error=unauthenticated');
	}

	const jokesResponse = await supabase
		.from('friends_jokes')
		.select('*, profile_id:profile(username)');

	return (
		<main className='flex flex-col items-center justify-center p-4 md:p-6'>
			<header className='text-center mb-8'>
				<h1 className='text-3xl font-bold'>Jokes from Friends</h1>
				<h2 className='text-xl text-gray-500 dark:text-gray-400'>
					Laugh out loud with these hilarious jokes!
				</h2>
			</header>
			<div className='w-full max-w-2xl space-y-4'>
				{jokesResponse.data?.map((joke) => (
					<Card key={joke.id}>
						<CardHeader>
							<CardTitle>{joke.username}</CardTitle>
							<CardDescription>Shared on {joke.created_at}</CardDescription>
						</CardHeader>
						<CardContent>{joke.content}</CardContent>
					</Card>
				))}
			</div>
			<SignOutButton />
		</main>
	);
}
