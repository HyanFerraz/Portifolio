"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";

const TransitionProvider = ({ children }) => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div key={pathName}>
				<motion.div
					animate={{ height: "0vh" }}
					exit={{ height: "100vh" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-screen h-screen fixed bg-primary-dark-color z-40"
				/>
				<motion.div
					className="fixed cursor-default text-4xl md:text-8xl m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit z-50"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}>
					{pathName.substring(1) ? pathName.substring(1) : "Home"}
				</motion.div>
				<motion.div
					initial={{ height: "100vh" }}
					animate={{ height: "0vh", transition: { delay: 0.5 } }}
					className="w-screen h-screen bottom-0 fixed bg-primary-dark-color z-30"
				/>
				<div className="h-24">
					<Navbar />
				</div>
				<div>{children}</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
