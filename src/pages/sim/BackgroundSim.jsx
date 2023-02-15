import React from 'react'
import FloatBtn from '../utils/FloatBtn'
import ChangeImagesrcsim from '../utils/ChangeImagesrcsim'
import AnimatedPage from '../utils/AnimatedPage'
import Toast from '../utils/Toast'
import BackArrow from '../utils/BackArrow'

export default function BackgroundSim() {
  return (
    <div className='template-generator mx-auto padding-10mm bg-transparent grid place-items-center h-screen'>
      <BackArrow />
      <AnimatedPage>
        <div className='bg-sim bg-contain bg-center mx-auto h-72 w-96 aspect-video relative xl:scale-175 lg:scale-175 md:scale-125 sm:scale-110 xs:scale-110' id='content'>
          <div className='absolute top-16 right-10 text-center'>
            <h1 className='text-2xl font-bold' contentEditable="true">C</h1>
            <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true">123-456-789</p> 
          </div>
          <div className='grid grid-cols-5 pt-32 px-6'>
            <div className='text-center col-span-1'>
              <ChangeImagesrcsim />
              <img className='mx-auto opacity-70 mt-1 h-6 w-6 object-cover' src='/media/paw.png' />
            </div>
            <div className='pl-6 col-span-3'>
                <div className='grid grid-cols-9'>
                  <p className='font-bold text-ms label-content col-span-1'>1</p>
                  <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true" id='walktour'>Hasan Santoso</p> 
                </div>
                <div className='grid grid-cols-9'>
                  <p className='font-bold text-ms label-content col-span-1'>2</p>
                  <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true">Madiun, 09-04-1995</p> 
                </div>
                <div className='grid grid-cols-9'>
                  <p className='font-bold text-ms label-content col-span-1'>3</p>
                  <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true">XYZ - Jantan</p> 
                </div>
                <div className='grid grid-cols-9'>
                  <p className='font-bold text-ms label-content col-span-1'>4</p>
                  <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true">JL Kelapa desa sukolilo kabupaten madiun</p> 
                </div>
                <div className='grid grid-cols-9'>
                  <p className='font-bold text-ms label-content col-span-1'>5</p>
                  <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true">Boss</p> 
                </div>
                <div className='grid grid-cols-9'>
                  <p className='font-bold text-ms label-content col-span-1'>6</p>
                  <p className='font-bold text-ms label-content col-span-8 focus-visible:ring-amber-200 uppercase' contentEditable="true">Jawa Timur</p> 
                </div>
            </div>
            <div className='text-center col-span-1 mt-12'>
              <img id='samaavatar' className='mx-auto grayscale h-16 w-12 object-cover rounded' src='media/models/hasan.jpg'  />
              <p className='font-bold text-hs label-content col-span-3 uppercase' contentEditable="true">19-01-2022</p> 
            </div>
          </div>
        </div>
      </AnimatedPage>
      {/* <Toast /> */}
      <FloatBtn />
    </div>
  )
}
