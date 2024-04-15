import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hyan.dev",
	description: "Meu Portfólio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${jetBrains.className} text-foreground-color w-screen h-screen`}>
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
