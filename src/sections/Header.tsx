import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full py-4'>
      <div className='max-w-6xl w-full mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <Image src={'/logoSVG.svg'} alt='Logo' width={115} height={75} />
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
