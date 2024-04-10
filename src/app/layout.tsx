import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { BottomLinks } from "@/components/BottomLinks";

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
				<div className="h-24">
					<Navbar />
				</div>
				<div className="flex flex-row gap-4 w-full h-[calc(100vh-6rem)] py-8">
					<BottomLinks />
					<main className="w-full h-full mx-8 rounded-[48px+24px] shadow-inner shadow-foreground-color border border-foreground-color p-12 bg-hero bg-cover bg-no-repeat">
						<div className="flex flex-col gap-4 justify-center items-center h-full w-full p-8 bg-background-color rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-55 border shadow-2xl shadow-background-color">
							{children}
						</div>
					</main>
				</div>
			</body>
		</html>
	);
}
