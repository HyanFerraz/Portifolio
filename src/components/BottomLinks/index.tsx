import Link from "next/link";
import { ImGithub, ImLinkedin } from "react-icons/im";

export const BottomLinks = () => {
	return (
		<aside className="hidden md:flex w-48 h-full flex-col justify-end items-center gap-4">
			<Link
				href="https://www.linkedin.com/in/hyanferraz/"
				target="blank"
				className="hover:text-primary-light-color">
				<ImLinkedin size={32} />
			</Link>
			<Link
				href="https://github.com/HyanFerraz"
				target="blank"
				className="hover:text-primary-light-color">
				<ImGithub size={32} />
			</Link>
		</aside>
	);
};
