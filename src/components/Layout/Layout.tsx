import React, { ReactNode, useEffect } from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';
import { Navbar } from '../Navbar';
import { LinkType, NavSize } from '../Navbar/Navbar.d';
import { ToastProvider } from '../Toast';
import { useRouter } from 'next/navigation';
import { AuthLocalDataSourceImpl } from '@/features/auth/data/data-sources/auth-local-data-source';

export type LayoutProps = {
	sidebarLinks: SidebarItemType[]
	navbarLinks: LinkType[]
	children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {

	const router = useRouter();

	useEffect(() => {
		const authLocalDataSource = new AuthLocalDataSourceImpl();
		if (!authLocalDataSource.getToken()) {
			router.push("/login");
		}
	}, []);

	return (
		<div className="w-screen h-screen flex overflow-hidden">
			<ToastProvider>
				<Sidebar links={props.sidebarLinks} />
				<div className="w-full h-full overflow-auto">
					<Navbar searchBar className="" size={NavSize.medium} items={props.navbarLinks}>
					</Navbar>
					<section className="dark:bg-dark bg-light text-dark-green p-4 m-14 mt-2">
						{props.children}
					</section>
				</div>
			</ToastProvider>
		</div>
	);
};

export default Layout;