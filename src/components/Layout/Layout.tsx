import React from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';
import { Navbar } from '../Navbar';
import { LinkType, NavSize } from '../Navbar/Navbar.d';

export type LayoutProps = {
	sidebarLinks: SidebarItemType[]
	navbarLinks: LinkType[]
}

const Layout: React.FC<LayoutProps>  = (props) => {
	return (
		<div className="w-screen flex">
			<Sidebar links={props.sidebarLinks} />
			<div className="w-full">
				<Navbar searchBar className="" size={NavSize.medium} items={props.navbarLinks} />
			</div>
		</div>
	);
};

export default Layout;
