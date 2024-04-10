import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = ({ link }) => {
	const { url, title, isHidden } = link;
	const pathName = usePathname();

	return (
		<Link
			href={url}
			key={title}
			className={`rounded p-1 ${
				pathName === url && "bg-foreground-color text-primary-dark-color"
			} md:${isHidden}`}>
			{title}
		</Link>
	);
};
