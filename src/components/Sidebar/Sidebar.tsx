import React, { useEffect, useRef, useState } from 'react';
import { SidebarLinkProps, SidebarProps } from './Sidebar.d';
import { MdArrowForwardIos } from 'react-icons/md';
import { FiX } from 'react-icons/fi';
import Image from 'next/image';

const Sidebar: React.FC<SidebarProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const sidebarRef = useRef<HTMLDivElement>(null);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		sidebarRef.current?.addEventListener('mouseenter', () => {
			setIsVisible(true);
		});

		sidebarRef.current?.addEventListener('mouseleave', () => {
			if(!isOpen) {
				setIsVisible(false);
			}
		});

		return () => {
			sidebarRef.current?.removeEventListener('mouseenter', () => {
				setIsVisible(true);
			});

			sidebarRef.current?.removeEventListener('mouseleave', () => {
				if(!isOpen) {
					setIsVisible(false);
				}
			});
		}
	}, []);


	return (
		<div ref={sidebarRef} className={`h-screen ${isVisible ? 'w-[250px]' : 'w-10'} bg-gray-800 text-white fixed top-0 left-0 transition-all duration-300 overflow-hidden`}>
			<div className="flex items-center justify-between p-4">
				{
					isVisible ?
						<button onClick={toggleSidebar} className="focus:outline-none">
							<Image src="/img/logo/horizontal-logo.svg" alt='GYMBRO' width={150} height={0} />
						</button>
						: <Image src="/img/logo/icon-logo.svg" alt="GYMBRO" width={50} height={50} />
				}
				{isOpen && (
					<button onClick={toggleSidebar} className="text-xl focus:outline-none">
						<FiX className="text-primary text-3xl cursor-pointer" />
					</button>
				)}
			</div>
			<ul className={`py-2 w-full`}>
				{props.links.map((link, index) => (
					<SidebarLink
						key={index}
						item={link}
						isSidebarOpen={isOpen}
					/>
				))}
			</ul>
		</div>
	);
};

const SidebarLink: React.FC<SidebarLinkProps> = (props) => {
	const [isOpen, setIsOpen] = useState(props.item.isOpen);

	const toggleOpen = () => setIsOpen(!isOpen);

	useEffect(() => {
		if(!props.isSidebarOpen) setIsOpen(false);
	}, [props.isSidebarOpen])
	

	return (
		<li className="w-full py-2 px-4 hover:bg-gray-600">
			<a href={props.item.url} className="flex items-center">
				<span className="mr-4">{props.item.icon}</span>
				{props.item.label}
				{props.item.items && (
					<button
						onClick={(e) => {
							e.preventDefault();
							toggleOpen()
						}}
						className="ml-auto focus:outline-none"
					>
						<MdArrowForwardIos className={`${isOpen && "rotate-90"} duration-300 text-primary cursor-pointer`} />
					</button>
				)}
			</a>
			{props.item.items && (
				<ul className={`${!isOpen && "h-0"} pl-6 overflow-hidden`}>
					{props.item.items.map((item) => (
						<li key={item.label} className="py-2 px-4 hover:bg-gray-600">
							<a href={item.url} className="flex items-center">
								{item.label}
							</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}

export default Sidebar;
