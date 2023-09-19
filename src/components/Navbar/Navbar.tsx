import Link from 'next/link';
import React from 'react';

export type NavbarProps = {
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					<span className="text-white text-2xl font-bold">Mi Sitio</span>
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link href="/inicio">
							<span className="text-white">Inicio</span>
						</Link>
					</li>
					<li>
						<Link href="/acerca">
							<span className="text-white">Acerca de</span>
						</Link>
					</li>
					<li>
						<Link href="/contacto">
							<span className="text-white">Contacto</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
