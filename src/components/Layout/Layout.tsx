import React, { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';
import { LinkType, NavSize } from '../Navbar/Navbar.d';
import DashNavbar from '../Navbar/DashNavbar';

export type LayoutProps = {
	sidebarLinks: SidebarItemType[]
	navbarLinks: LinkType[]
	children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<div className="w-screen flex">
			<Sidebar links={props.sidebarLinks} />
			<div className="w-full">
				<DashNavbar searchBar className="" size={NavSize.medium} items={props.navbarLinks} />
				<section className="dark:bg-dark bg-light text-dark-green p-4 m-4">
					{props.children}
				</section>
			</div>
		</div>
	);
};

export default Layout;
