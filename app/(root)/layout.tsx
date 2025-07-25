import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import Topbar from '@/components/shared/Topbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Threads',
	description: 'A Next.js 15 Meta Threads Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ClerkProvider>
					<Topbar />

					<main className="flex flex-row">
						<LeftSidebar />

						<section className="main-container">
							<div className="w-full max-w-4xl">{children}</div>
						</section>

						<RightSidebar />
					</main>

					<Bottombar />
				</ClerkProvider>
			</body>
		</html>
	);
}
