import { ReactNode } from "react"

export type NavbarProps = {
    logo?: ReactNode;
    items: LinkType[];
}

export type NavLinkProps = {
    children: ReactNode;
    to: string;
}

export type NavbarItemProps = {
    item: LinkType;
}

export type LinkType = {
    label: string;
    url?: string;
    dropdown?: LinkType[];
}