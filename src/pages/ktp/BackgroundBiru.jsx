import React from 'react'
import FloatBtn from '../utils/FloatBtn'

export default function BackgroundBiru() {
  return (
    <div className='mx-auto padding-10mm bg-zinc-200 grid place-items-center h-screen'>
      <div className='bg-ktp-blue '>
        <section>
            <h1 className='font-bold text-md label-content' contentEditable="true">Development</h1> 
        </section>
      </div>
      <FloatBtn />
    </div>
  )
}
