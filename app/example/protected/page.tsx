import { SignOutButton } from '@/components/example/SignOutButton';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProtectedGistPage() {
	const supabase = createClient();

	const { data } = await supabase.auth.getUser();

	if (!data.user) {
		redirect('/example?error=unauthenticated');
	}

	return (
		<div>
			Hello {data.user.email}
			<SignOutButton />
		</div>
	);
}
