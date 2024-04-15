"use client";
import { BottomLinks } from "@/components/BottomLinks";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
			className="flex flex-row w-full h-[calc(100vh-6rem)] px-4 py-8">
			<BottomLinks />
			<section className="w-full h-full p-6 rounded-[40px] md:mx-8 md:p-8 md:rounded-[56px] shadow-inner shadow-foreground-color border border-foreground-color bg-hero bg-cover bg-no-repeat">
				<div className="flex flex-col gap-4 justify-center items-center h-full w-full bg-background-color rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-55 border shadow-2xl shadow-background-color">
					<div className="flex flex-col justify-center items-center gap-5 p-9 max-w-screen-sm">
						<div className="flex justify-center p-3 gap-6 text-3xl underline font-bold md:text-7xl md:p-6 md:gap-8">
							<span>Hyan</span>
							<span>Ferraz</span>
						</div>
						<div className="w-full flex justify-center items-center gap-6 text-2xl md:text-3xl text-center">
							<div className="w-full h-0 border-2 md:flex hidden" />
							<h2 className=""> Desenvolvedor Fullstack</h2>
							<div className="w-full h-0 border-2 md:flex hidden" />
						</div>
						<span className="flex justify-center text-center md:text-xl">
							Construindo pontes digitais entre sonhos e realidade.
						</span>
					</div>
				</div>
			</section>
		</motion.div>
	);
}
