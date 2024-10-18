import React from 'react'
import { navLinks } from '../../constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex gap-8 items-center text-primary-foreground'>
      {navLinks.map((navItem, index) => (
        <Link
          key={index}
          href={navItem.href}
          className='hover:text-primary transition-all duration-700'
        >
          {navItem.label}
        </Link>
      ))}
      <Link href='/contact' className={cn(buttonVariants())}>
        Contact
      </Link>
      <MobileNav />
    </nav>
  )
}

export default Navbar
