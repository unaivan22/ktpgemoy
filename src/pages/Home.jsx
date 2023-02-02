import React from 'react'
import AnimatedPage from './utils/AnimatedPage'

export default function Home() {
  return (
    <div className='container mx-auto bg-white h-screen mb-24'>
        <img className='absolute left-0 top-0 w-56' src='media/home/sun.gif' />
        <AnimatedPage>
            <div className='grid place-items-center mt-12 rounded-3xl py-32'>
                <div className='flex flex-col items-center text-center space-y-6 relative'>
                    <h1 className='font-base text-5xl z-50'>Buat KTP si Gemoy Dalam Sekejap!</h1>
                    <a href='https://github.com/unaivan22/ktpgemoy' class=" z-50 bg-rose-100 hover:bg-rose-200 text-rose-500 font-normal text-lg py-3 px-6 rounded-full inline-flex items-center">
                        <span>Clone on Github &#8594;</span>
                    </a>
                    <img className='w-60' src='media/home/arrowmultiples.gif'/>
                    <div className='absolute top-32 flex justify-between w-full 2xl:visible xl:visible md:visible sm:invisible xs:invisible'>
                        <img className='w-52' src='media/home/star.gif'/>
                        <img className='w-52' src='media/home/string0.gif'/>
                    </div>
                </div>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 mt-12 gap-6'>
                <a href='/bg-biru' >
                    <img className='object-fit w-md' src='media/home/ktpBiru.png' />
                </a>
                <a href='/bg-merah' >
                    <img className='object-fit' src='media/home/ktpMerah.png' />
                </a>
                <a href='/bg-sim' >
                    <img className='object-fit' src='media/home/simUmum.png' />
                </a>
            </div>
        </AnimatedPage>
    </div>
  )
}
