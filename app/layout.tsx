import { GeistSans } from 'geist/font/sans';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'Starter pack',
	description: 'Get up and running fast with Next.js and Supabase',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={GeistSans.className}>
			<body className='bg-background text-foreground'>{children}</body>
		</html>
	);
}
