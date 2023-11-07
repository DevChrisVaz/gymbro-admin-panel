import React, { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';
import { Navbar } from '../Navbar';
import { LinkType, NavSize } from '../Navbar/Navbar.d';

export type LayoutProps = {
	sidebarLinks: SidebarItemType[]
	navbarLinks: LinkType[]
	children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<div className="w-screen h-screen flex overflow-hidden">
			<Sidebar links={props.sidebarLinks} />
			<div className="w-full h-full overflow-auto">
				<Navbar searchBar className="" size={NavSize.medium} items={props.navbarLinks}>
				</Navbar>
				<section className="dark:bg-dark bg-light text-dark-green p-4 m-4">
					{props.children}
				</section>
			</div>
		</div>
	);
};

export default Layout;
