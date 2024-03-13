import { SignOutButton } from '@/components/example/SignOutButton';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProtectedGistPage() {
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

	return (
		<div>
			Hello {profileResponse.data.username}
			<SignOutButton />
		</div>
	);
}
