import { PropsWithChildren } from 'react';

export default async function GistPageLayout(props: PropsWithChildren) {
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			{props.children}
		</div>
	);
}
