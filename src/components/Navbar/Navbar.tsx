'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { NavLinkProps, NavbarProps } from './Navbar.d';
import { usePathname, useRouter } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const NavLink: React.FC<NavLinkProps> = (props) => {
	const pathname = usePathname();

	const isActive = (): string => {
		return pathname === props.to ? 'text-primary' : '';
	};

	return (
		<Link href={props.to} className={`${isActive()} hover:text-primary`}>{props.children}</Link>
	);
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const menuRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		menuRef.current!.classList.toggle("top-[72px]")
	};

	return (
		<nav className="bg-light dark:bg-dark flex justify-between items-center md:px-8 lg:px-12 xl:px-16 px-5 py-3 shadow-md">
			<div>
				<Link href="/">
					<Image src="/img/logo/horizontal-logo.svg" alt="GYMBRO" width={150} height={0} layout="intrinsic" />
				</Link>
			</div>
			<div className="flex">
				<div ref={menuRef} className="dark:bg-dark dark:text-white duration-500 md:static absolute bg-light md:min-h-fit min-h-screen left-0 top-[-100%] md:w-auto w-full flex md:flex-row flex-col md:items-center gap-10 px-5">
					<div>
						<ul className="flex md:flex-row flex-col md:items-center md:gap-10 gap-8 pt-5 md:pt-0">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/solutions">Solutions</NavLink>
							</li>
							<li>
								<NavLink to="/resources">Resources</NavLink>
							</li>
							<li>
								<NavLink to="/developers">Developers</NavLink>
							</li>
							<li>
								<NavLink to="/pricing">Pricing</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex items-center gap-6">
						<Button onClick={() => router.push("/login")} className="bg-gradient text-white">Sign In</Button>
					{
						isOpen ?
							<FiX onClick={toggleMenu} className="text-primary text-3xl cursor-pointer md:hidden" />
							:
							<FiMenu onClick={toggleMenu} className="text-primary text-3xl cursor-pointer md:hidden" />
					}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
