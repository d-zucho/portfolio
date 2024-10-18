import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full'>
      <div className='max-w-6xl w-full mx-auto'>
        <div className='px-4 lg:px-8 flex items-center justify-between'>
          <div>
            <Image src={'/logoSVG.svg'} alt='Logo' width={115} height={75} />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
