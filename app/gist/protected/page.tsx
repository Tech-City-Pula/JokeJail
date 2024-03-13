import { SignOutButton } from '@/components/gist/SignOutButton';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { GistCard } from '../GistCard';

export default async function ProtectedGistPage() {
	const supabase = createClient();

	const { data } = await supabase.auth.getUser();

	if (!data.user) {
		redirect('/gist?error=unauthenticated');
	}

	return (
		<GistCard title={`Hello ${data.user.email}`} button={<SignOutButton />} />
	);
}
