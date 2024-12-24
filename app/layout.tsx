import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Eventtts",
	description:
		"Eventtts is a platform for event management. It allows you to create and manage events, sell tickets and more.",
	icons: {
		icon: "/images/favicon.ico",
	},
	openGraph: {
		title: "Eventtts",
		description:
			"Eventtts is a platform for event management. It allows you to create and manage events, sell tickets and more.",
		images: [{ url: "/images/preview.png" }],
	},
	creator: "Yash Yerunkar",
	publisher: "Yash Yerunkar",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<html lang="en" className={`${inter.className}`}>
		<ClerkProvider>
				<body suppressHydrationWarning>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
					<Toaster />
					<SpeedInsights />
				</body>
		</ClerkProvider>
			</html>
	);
}
