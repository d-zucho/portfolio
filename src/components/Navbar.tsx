import React from 'react'
import { navLinks } from '../../constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='text-primary-foreground'>
      <div className='hidden md:flex gap-8 items-center'>
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
      </div>

      <div className='md:hidden'>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
