"use client"

import React from 'react'
import { Sidebar } from '@/components/Sidebar';
import { SidebarItemType } from '@/components/Sidebar/Sidebar.d';
import { AiFillHome, AiFillMail } from 'react-icons/ai';
import { IoBarbell } from 'react-icons/io5';
import { MdCardMembership } from 'react-icons/md';
import { LinkType } from '@/components/Navbar/Navbar.d';
import { Layout } from '@/components/Layout';

const links: SidebarItemType[] = [
    {
        label: 'Home',
        url: '/',
        icon: <AiFillHome className="text-primary text-[24px]" />,
    },
    {
        label: 'Products',
        url: '/products',
        icon: <IoBarbell className="text-primary text-[24px]" />,
        isOpen: false,
        items: [
            {
                label: 'Productos 1',
                url: '/productos/1',
            },
            {
                label: 'Productos 2',
                url: '/productos/2',
            },
        ],
    },
    {
        label: 'Planes',
        url: '/dashboard/plans',
        icon: <MdCardMembership className="text-primary text-[24px]" />,
    },
    {
        label: 'Contacto',
        url: '/contact',
        icon: <AiFillMail className="text-primary text-[24px]" />,
    },
];

const items: LinkType[] = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "Solutions",
        url: "/solutions"
    },
    {
        label: "Resources",
        url: "/resources"
    },
    {
        label: "Developers",
        url: "/developers"
    },
    {
        label: "Pricing",
        // url: "/pricing",
        dropdown: [
            {
                label: "Pricing",
                url: "/pricing"
            }
        ]
    }
]

export default function RootLayoutDashboard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">
            <Layout sidebarLinks={links} navbarLinks={items} children={children}/>
        </div>
    )
}