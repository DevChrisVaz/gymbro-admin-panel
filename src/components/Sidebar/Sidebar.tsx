import React, { useEffect, useRef, useState } from 'react';
import { SidebarLinkProps, SidebarProps } from './Sidebar.d';
import { MdArrowForwardIos } from 'react-icons/md';
import { FiX } from 'react-icons/fi';
import { GiWeight } from 'react-icons/gi';
import Image from 'next/image';

const Sidebar: React.FC<SidebarProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const sidebarRef = useRef<HTMLDivElement>(null);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const handleMouseEnter = () => {
		setIsVisible(true);
	};

	const handleMouseLeave = () => {
		if (!isOpen) {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		const sidebarElement = sidebarRef.current;

		if (sidebarElement) {
			sidebarElement.addEventListener('mouseenter', handleMouseEnter);
			sidebarElement.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (sidebarElement) {
				sidebarElement.removeEventListener('mouseenter', handleMouseEnter);
				sidebarElement.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	}, [isOpen]);


	return (
		<div ref={sidebarRef} className={`h-screen ${isVisible ? 'w-[250px]' : 'w-[62px]'} bg-light dark:bg-dark border-r border-r-primary-500 text-white fixed top-0 left-0 transition-all duration-300 overflow-hidden`}>
			<div className="flex items-center justify-between py-4 pl-2 pr-4">
				<a href='/dashboard' className="focus:outline-none">
					<Image className="min-w-[160px]" src="/img/logo/horizontal-logo.svg" alt='GYMBRO' width={160} height={0} />
				</a>
				{isOpen ? (
					<button onClick={toggleSidebar} className="text-xl focus:outline-none">
						<FiX className="text-primary text-2xl cursor-pointer" />
					</button>
				) : (
					<button onClick={toggleSidebar} className="text-xl focus:outline-none">
						<GiWeight className="text-primary text-2xl cursor-pointer" />
					</button>
				)}
			</div>
			<ul className={`py-2 w-full`}>
				{props.links.map((link, index) => (
					<SidebarLink
						key={index}
						item={link}
						isSidebarOpen={isVisible}
					/>
				))}
			</ul>
		</div>
	);
};

const SidebarLink: React.FC<SidebarLinkProps> = (props) => {
	const [isOpen, setIsOpen] = useState<boolean>(props.item.isOpen ?? false);

	const dropdownItemsContainerRef = useRef<HTMLUListElement>(null);

	const toggleOpen = () => setIsOpen(!isOpen);

	useEffect(() => {
		if (!props.isSidebarOpen) setIsOpen(false);
	}, [props.isSidebarOpen]);

	useEffect(() => {
		if (dropdownItemsContainerRef.current) {
			if (isOpen) {
				dropdownItemsContainerRef.current!.style.height = `${(40 * (props.item.items?.length ?? 0))}px`;
			} else {
				dropdownItemsContainerRef.current!.style.height = "0";
			}
		}
	}, [isOpen]);


	return (
		<li className="w-full dark:bg-dark dark:hover:bg-dark-gray-soft">
			{
				props.item.items ?
					<div className="py-2 px-4 flex items-center cursor-pointer" onClick={toggleOpen}>
						<span className="mr-6">{props.item.icon}</span>
						{props.item.label}
						<div
							onClick={(e) => {
								e.preventDefault();

							}}
							className="ml-auto focus:outline-none"
						>
							<MdArrowForwardIos className={`${isOpen && "rotate-90"} duration-300 text-primary cursor-pointer`} />
						</div>
					</div>
					:
					<a href={props.item.url} className="py-2 px-4 flex items-center">
						<span className="mr-6">{props.item.icon}</span>
						{props.item.label}
					</a>
			}
			{props.item.items && (
				<ul ref={dropdownItemsContainerRef} className="h-0 overflow-hidden duration-300">
					{props.item.items.map((item) => (
						<li key={item.label} className="pl-14 dark:bg-dark dark:hover:bg-dark-gray-soft">
							<a href={item.url} className="py-2 px-4 flex items-center">
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
