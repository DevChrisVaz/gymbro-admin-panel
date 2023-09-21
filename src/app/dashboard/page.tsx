'use client';

import { Sidebar } from '@/components/Sidebar';
import { SidebarItemType } from '@/components/Sidebar/Sidebar.d';
import { AiFillHome, AiFillMail } from 'react-icons/ai';
import { IoBarbell } from 'react-icons/io5';
import { MdCardMembership } from 'react-icons/md';
import React from 'react';

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
        url: '/plans',
        icon: <MdCardMembership className="text-primary text-[24px]" />,
    },
    {
        label: 'Contacto',
        url: '/contact',
        icon: <AiFillMail className="text-primary text-[24px]" />,
    },
];

const page = () => {
    return (
        <div className="flex">
            <Sidebar links={links} />
        </div>
    )
}

export default page