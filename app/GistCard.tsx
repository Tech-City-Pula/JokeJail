'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactElement } from 'react';

export function GistCard(props: {
	title: string;
	button: ReactElement<'button'>;
}) {
	return (
		<Card className='max-w-md w-full shadow-lg shadow-zinc-900/20 p-6'>
			<CardHeader className='mb-6'>
				<CardTitle className='mb-3'>{props.title}</CardTitle>
			</CardHeader>
			<CardContent className='flex gap-4'>{props.button}</CardContent>
		</Card>
	);
}
