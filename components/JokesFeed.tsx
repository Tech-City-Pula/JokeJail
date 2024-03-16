import { createClient } from '@/lib/supabase/server';

export async function JokesFeed() {
	const supabase = createClient();

	// LEVEL 3: step 2 dohvatiti sale korsnikovih prijatelja i prikaziti ih
	// const jokesResponse = await supabase
	// 	.from('friends_jokes')
	// 	.select('*, profile_id:profile(username)');

	return (
		<div className='w-full max-w-2xl space-y-4'>
			{/* {jokesResponse.data?.map((joke) => (
					<Card key={joke.id}>
						<CardHeader>
							<CardTitle>{joke.username}</CardTitle>
							<CardDescription>Shared on {joke.created_at}</CardDescription>
						</CardHeader>
						<CardContent>{joke.content}</CardContent>
					</Card>
				))} */}
		</div>
	);
}
