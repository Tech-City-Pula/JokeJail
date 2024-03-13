import SignInButton from '@/components/gist/SignInButton';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { GistCard } from './GistCard';

export type GistPageSearchParams = {
	error?: 'unauthenticated';
};

type Props = {
	searchParams: GistPageSearchParams;
};

export default function GistPage(props: Props) {
	return (
		<>
			{props.searchParams.error && (
				<Alert variant='destructive' className='fixed top-12 max-w-md'>
					<AlertCircle className='h-4 w-4' />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						{props.searchParams.error === 'unauthenticated' &&
							'Error logging in. Please try again'}
					</AlertDescription>
				</Alert>
			)}
			<GistCard title='Logged out 😭' button={<SignInButton />} />
		</>
	);
}
