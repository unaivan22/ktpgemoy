import React from 'react'
import AnimatedPage from './utils/AnimatedPage'

export default function Home() {
  return (
    <div className='container mx-auto bg-white h-screen mb-24'>
        <AnimatedPage>
            <div className='bg-amber-100 grid place-items-center mt-12 rounded-3xl'>
                <div className='flex items-center xl:px-32 lg:px-32 md:px-12 sm:px-12 xs:px-6 xl:py-16 lg:py-16 md:py-8 sm:py-6 xs:py-12 gap-x-4 xl:flex-row xs:flex-col sm:flex-col'>
                    <div>
                        <h1 className='xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-4xl font-medium leading-tight'>Buat <span className='font-bold'>KTP</span> si <span className='font-bold'>Gemoy</span> Dalam Sekejap!</h1>
                        <p className='text-gray-600 font-light mt-4'>Pilih template dibawah ini ya</p>
                        <div className="relative rounded-xl overflow-auto xl:pt-12 lg:pt-12 md:pt-12 sm:p-8 xs:p-8">
                            <div className="flex justify-center">
                                <div className="animate-bounce bg-gray-100 p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='max-h-80 rounded-full xl:scale-175 lg:scale-175 md:scale-125 sm:scale-110 xs:scale-110' src='/media/gemoyclub.png' />
                </div>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 mt-12 gap-6'>
                <a href='/bg-biru' >
                    <img className='object-fit' src='media/templates/bg-blue.png' />
                </a>
                <a href='/bg-merah' >
                    <img className='object-fit' src='media/templates/bg-red.png' />
                </a>
                <a  >
                    <img className='object-fit opacity-25 cursor-not-allowed' src='media/templates/bg-blue.png' />
                </a>
            </div>
        </AnimatedPage>
    </div>
  )
}
