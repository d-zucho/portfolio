import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full'>
      <div className='max-w-7xl w-full px-2 lg:px-5'>
        <div>
          <Image src={'/logoSVG.svg'} alt='Logo' width={115} height={75} />
        </div>
      </div>
    </header>
  )
}

export default Header
