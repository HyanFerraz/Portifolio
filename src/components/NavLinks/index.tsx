import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = ({ link, setOpen } ) => {
	const { url, title, isHidden } = link;
	const pathName = usePathname();

	const handleClick = () => {
		setOpen(false)
	}

	return (
		<Link
		onClick={handleClick}
			href={url}
			key={title}
			className={`rounded p-1 hover:bg-primary-light-color hover:text-primary-dark-color ${
				pathName === url
					? "bg-background-color text-foreground-color"
					: "bg-foreground-color text-background-color"
			} md:${isHidden}`}>
			{title}
		</Link>
	);
};
