import React from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';

export type LayoutProps = {
	links: SidebarItemType[]
}

const Layout: React.FC<LayoutProps>  = (props) => {
	return (
		<div>
			<Sidebar links={props.links} />
		</div>
	);
};

export default Layout;
