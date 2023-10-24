"use client"

import { Navbar } from '@/components/Navbar'
import { NavLinks } from '@/components/Navbar/Navbar'
import { LinkType } from '@/components/Navbar/Navbar.d'
import Image from 'next/image'

export const items: LinkType[] = [
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

export default function Home() {
  return (
    <>
      <header>
          <Navbar
            logo={<Image src="/img/logo/horizontal-logo.svg" alt="GYMBRO" width={150} height={0} />}
            items={items}
          >
            <NavLinks items={items} />
          </Navbar>
      </header>
    </>
  )
}
