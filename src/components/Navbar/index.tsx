"use client";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "../NavLinks";
import { motion } from "framer-motion";

const links = [
	{ url: "/", title: "Home", isHidden: "hidden" },
	{ url: "/about", title: "About" },
	{ url: "/portfolio", title: "Portfolio" },
	{ url: "/contact", title: "Contact" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: "#d3c6aa",
		},
	};
	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: "#d3c6aa",
		},
	};

	const listVariants = {
		closed: {
			x: "100vw",
		},
		opened: {
			x: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	const loadLinks = (links: any) => {
		return links.map((link: any) => (
			<motion.div variants={listItemVariants} key={link.title}>
				<NavLinks link={link} setOpen={setOpen} />
			</motion.div>
		));
	};

	return (
		<header className="h-full flex items-center justify-between p-8">
			<Link
				href="/"
				className="flex items-center justify-center text:sm bg-background-color rounded-lg p-1 font-extrabold gap-1">
				<span>Hyan</span>
				<span className="flex justify-center items-center w-12 h-8 bg-foreground-color text-background-color rounded">
					Code
				</span>
			</Link>
			<div className="hidden md:flex gap-8 text-xl font-bold underline text-background-color">
				{loadLinks(links)}
			</div>
			{/* MENU HAMBURGUER */}
			<div className=" md:hidden z-50">
				<button
					onClick={() => setOpen((prev) => !prev)}
					className={
						"w-10 h-8 flex flex-col justify-between items-center z-50 relative"
					}>
					<motion.div
						variants={topVariants}
						animate={open ? "opened" : "closed"}
						className={`w-full h-1 rounded origin-left bg-primary-dark-color`}
					/>
					<motion.div
						variants={centerVariants}
						animate={open ? "opened" : "closed"}
						className={`w-full h-1 rounded origin-left bg-primary-dark-color`}
					/>
					<motion.div
						variants={bottomVariants}
						animate={open ? "opened" : "closed"}
						className={`w-full h-1 rounded origin-left bg-primary-dark-color`}
					/>
				</button>
				{open && (
					<motion.div
						variants={listVariants}
						initial={"closed"}
						animate={open ? "opened" : "closed"}
						className="absolute top-0 left-0 w-screen h-screen bg-background-color flex flex-col items-center justify-center gap-8 text text-4xl">
						{loadLinks(links)}
					</motion.div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
