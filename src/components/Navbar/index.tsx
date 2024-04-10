"use client";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { NavLinks } from "../NavLinks";

const links = [
	{ url: "/", title: "Home", isHidden: "hidden" },
	{ url: "/about", title: "About" },
	{ url: "/portfolio", title: "Portfolio" },
	{ url: "/contact", title: "Contact" },
];

const loadLinks = (links: any) => {
	return links.map((link: any) => <NavLinks link={link} key={link.title} />);
};

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="h-full flex items-center justify-between p-8">
			<Link
				href="/"
				className="flex items-center justify-center text:sm bg-background-color rounded-lg p-1 font-extrabold gap-1">
				<span>Hyan</span>
				<span className="flex justify-center items-center w-12 h-8 bg-foreground-color text-background-color rounded">
					.dev
				</span>
			</Link>
			<div className="hidden md:flex gap-8 text-xl font-bold underline text-background-color">
				{loadLinks(links)}
			</div>
			{/* MENU HAMBURGUER */}
			<div className="md:hidden">
				<button
					onClick={() => setOpen((prev) => !prev)}
					className={`w-10 h-8 flex justify-center items-center z-50 relative ${
						open ? "text-foreground-color" : "text-primary-dark-color"
					}`}>
					{open ? <CgClose size={32} /> : <CgMenu size={32} />}
				</button>
				{open && (
					<div className="absolute top-0 left-0 w-screen h-screen bg-background-color flex flex-col items-center justify-center gap-8 text text-4xl">
						{loadLinks(links)}
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
