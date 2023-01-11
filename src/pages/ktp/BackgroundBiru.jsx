import React from 'react'
import FloatBtn from '../utils/FloatBtn'

export default function BackgroundBiru() {
  return (
    <div className='mx-auto padding-10mm bg-transparent grid place-items-center h-screen'>
      <div className='bg-ktp-blue bg-contain bg-center mx-auto h-72 w-96 aspect-video relative' id='content'>
        <section className='px-6 pt-8'>
            <div className='grid grid-cols-1 w-full text-center mb-2 leading-tight'>
              <p className='font-bold text-xs label-content uppercase'>Provinsi <span contentEditable="true">Jawa Timur</span></p>
              <p className='font-bold text-xs label-content uppercase' contentEditable="true">Kabupaten Madiun</p> 
            </div>
            <div className='grid grid-cols-4'>
              <p className='font-bold text-xs label-content col-span-1'>NIK</p>
              <p className='font-bold text-xs label-content col-span-3' contentEditable="true">213123123123123123</p> 
            </div>

            <section className='mt-1'>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Nama</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Hasan Santoso</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Tempat/Tgl Lahir</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Magetan, 09-04-2022</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Golongan Darah</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">XYZ</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Jenis kelamin</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Laki-laki</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Alamat</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Dusun 03</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1 ml-4'>RT/RW</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">015/005</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1 ml-4'>Kel/Desa</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Sukolilo</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1 ml-4'>Kecamatan</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Jiwan</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Status Perkawinan</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Jomblo</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Pekerjaan</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Pegawa Negeri Sipil</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Kewarganegaraan</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">WNI</span></p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-hs label-content col-span-1'>Berlaku Hingga</p>
                <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Seumur Hidup</span></p> 
              </div>
            </section>
        </section>
        <div className='absolute top-20 right-6 text-center'>
          <img className='h-24 w-20 object-cover rounded' src='/media/models/hasan.jpg' />
          <p className='font-bold text-hs label-content col-span-3 uppercase' contentEditable="true">Madiun</p> 
          <p className='font-bold text-hs label-content col-span-3 uppercase' contentEditable="true">19-04-2022</p> 

          <img className='mx-auto opacity-70 mt-1 h-12 w-12 object-cover' src='/media/paw.png' />
        </div>
      </div>
      <FloatBtn />
    </div>
  )
}
