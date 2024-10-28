import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'
import HeroBg from '/BGHeroWebDev.svg'

const Hero = () => {
  return (
    <section className='text-primary-foreground w-full h-auto relative z-0 mt-20'>
      <MaxWidthWrapper className='relative'>
        <div className=''>
          <Image
            alt='Hero Background'
            aria-ignore='true'
            width={800}
            height={500}
            src={'/BGHeroWebDev.svg'}
            className='hidden md:block absolute -top-36 left-24 z-0 md:left-0'
          />
        </div>
        <div className='flex flex-col flex-nowrap gap-8 lg:flex-row justify-between items-center'>
          <div className='copy flex-1'>
            <div className='w-full lg:max-w-prose'>
              {/* <div className=''> */}
              <h1 className='rocksalt text-center text-[40px]  md:text-[56px] mx-auto lg:mx-0 lg:text-left pl-6 -mb-8 min-w-[370px] flex gap-4 justify-center lg:justify-start'>
                <span>Danny</span> <span className='text-primary'>Libor</span>
              </h1>
              <div className='mx-auto min-w-[350px] max-w-fit md:max-w-full md:min-w-[370px]'>
                <span className='text-muted-foreground'>X</span>
                <div className='h-[2px] bg-gradient' />
                {/* </div> */}
              </div>
              <span className='text-2xl block text-center mt-8 lg:text-left lg:text-[40px]'>
                Web Developer
              </span>
            </div>
            <div className='text-center lg:text-left text-gray-300 mt-4'>
              <p className=''>
                Building custom, high-performing websites that help you thrive.
              </p>
              <p>Let's build something incredible together.</p>
            </div>
          </div>
          <div className=''>
            <Image
              src={'/hero-image.png'}
              width={500}
              height={400}
              alt='Danny Libor'
              className='aspect-auto mx-auto'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
