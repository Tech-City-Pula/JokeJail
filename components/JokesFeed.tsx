import { createClient } from '@/lib/supabase/server';

export async function JokesFeed() {
	const supabase = createClient();

	// LEVEL 3: step 2 dohvatiti sale korsnikovih prijatelja i prikaziti ih

	return (
		<div className='w-full max-w-2xl space-y-4'>
			{/* TODO: renderati jokes feed */}
		</div>
	);
}
