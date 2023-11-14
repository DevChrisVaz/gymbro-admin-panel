"use client"

import React from 'react'
import { SidebarItemType } from '@/components/Sidebar/Sidebar.d';
import { AiFillDollarCircle, AiFillHome, AiFillInfoCircle, AiFillMail, AiFillShop, AiOutlineTeam } from 'react-icons/ai';
import { IoBarbell } from 'react-icons/io5';
import { MdCardMembership } from 'react-icons/md';
import { LinkType } from '@/components/Navbar/Navbar.d';
import { Layout } from '@/components/Layout';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { ReduxProvider } from '@/core/data/frameworks/datasources/local/redux/provider';

const links: SidebarItemType[] = [
    {
        label: 'Home',
        url: '/dashboard',
        icon: <AiFillHome className="text-primary text-[24px]" />,
    },
    {
        label: 'Mi Gimnasio',
        url: '/',
        icon: <IoBarbell className="text-primary text-[24px]" />,
        isOpen: false,
        items: [
            {
                label: 'Información',
                url: '/dashboard/info',
                icon: <AiFillInfoCircle className="text-primary text-[24px]" />,
            },
            {
                label: 'Contacto',
                url: '/dashboard/contact',
                icon: <AiFillMail className="text-primary text-[24px]" />,
            },
        ],
    },
    {
        label: 'Usuarios',
        url: '/dashboard/users',
        icon: <BsFillPersonVcardFill className="text-primary text-[24px]" />,
    },
    {
        label: 'Planes',
        url: '/dashboard/plans',
        icon: <AiFillDollarCircle className="text-primary text-[24px]" />,
    },
    {
        label: 'Clientes',
        url: '/dashboard/customers',
        icon: <AiOutlineTeam className="text-primary text-[24px]" />,
    },
    {
        label: 'Suscripciones',
        url: '/dashboard/suscriptions',
        icon: <MdCardMembership className="text-primary text-[24px]" />,
    },
    {
        label: 'Sucursales',
        url: '/dashboard/branches',
        icon: <AiFillShop className="text-primary text-[24px]" />,
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
            <ReduxProvider>
                <Layout sidebarLinks={links} navbarLinks={items} children={children} />
            </ReduxProvider>
        </div>
    )
}