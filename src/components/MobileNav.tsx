import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { navLinks } from '../../constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <div className='text-primary-foreground'>
      <Sheet>
        <SheetTrigger asChild className='hover:cursor-pointer'>
          <Menu />
        </SheetTrigger>
        <SheetContent className='h-full w-[25%]'>
          <SheetHeader>
            <VisuallyHidden.Root>
              <SheetTitle>Danny Libor</SheetTitle>
              <SheetDescription>Web Developer</SheetDescription>
            </VisuallyHidden.Root>
            <Image
              src={'/logoSVG.svg'}
              alt='Logo'
              width={90}
              height={50}
              className='mx-auto'
            />
          </SheetHeader>
          <div className='flex flex-col items-center gap-10 mt-20 text-primary-foreground'>
            {navLinks.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.href}
                className='hover:text-primary transition-all duration-300'
              >
                {navItem.label}
              </Link>
            ))}
            <Link
              href='/contact'
              className={cn(buttonVariants(), 'w-full bg-primary mt-10')}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
