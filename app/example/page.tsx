import SignInButton from '@/components/example/SignInButton';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import Image from 'next/image';
import style from './hue-rotate-animation.module.css';
import { cn } from '@/lib/cn';

export type GistPageSearchParams = {
	error?: 'unauthenticated';
};

type Props = {
	searchParams: GistPageSearchParams;
};

export default function JokeJailLoginPage(props: Props) {
	return (
		<div className='w-full h-full grid grid-cols-12'>
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

			<div className='col-span-5 h-full w-full flex items-center justify-center'>
				<div className='flex flex-col'>
					<h1 className='text-3xl font-bold mb-1'>JokeJail</h1>
					<p>Unlock a World of Laughter with JokeJail! 🔐💬</p>
					<p className='mb-6'>Sign in now!</p>
					<SignInButton />
				</div>
			</div>

			<div
				className={cn('col-span-7 w-full h-full relative', style['hue-rotate'])}
			>
				<Image
					fill
					src='/joke_jail.webp'
					alt='Joke Jail 🤡👮'
					className='object-cover'
				/>
			</div>
		</div>
	);
}
