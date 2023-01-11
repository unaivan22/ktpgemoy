import React from 'react'

export default function Home() {
  return (
    <div className='container mx-auto xs:px-12 sm:px-12 md:px-32 xl:px-32 lg:px-32 bg-white max-h-screen'>
        <div className='bg-amber-100 grid place-items-center mt-12 rounded-3xl'>
            <div className='flex items-center px-32 py-16 gap-x-4 xl:flex-row xs:flex-col sm:flex-col'>
                <div>
                    <h1 className='text-6xl font-medium leading-tight'>Buat KTP si Gemoy Dalam Sekejap!</h1>
                    <p className='text-gray-600 font-light mt-4'>Pilih template dibawah ini ya</p>
                </div>
                <img className='max-h-80 rounded-full' src='/media/gemoyclub.png' />
            </div>
        </div>
        <div className='grid grid-cols-3 mt-12'>
            <a href='/bg-biru' >
                <img className='object-fit' src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80' />
            </a>
        </div>
    </div>
  )
}
