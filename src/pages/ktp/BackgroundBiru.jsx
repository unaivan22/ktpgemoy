import React from 'react'
import FloatBtn from '../utils/FloatBtn'
import ChangeImagesrc from '../utils/ChangeImagesrc'
import AnimatedPage from '../utils/AnimatedPage'
import Toast from '../utils/Toast'
import BackArrow from '../utils/BackArrow'
import Tourguide from "tourguidejs";

export default function BackgroundBiru() {

//   var tourguide = new Tourguide();
// function startTour() {
// 	tourguide.start();
// }
// var tourbutton = document.getElementById("tourbutton");
// tourbutton.addEventListener("click", startTour);


  return (
    <div className='template-generator mx-auto padding-10mm bg-transparent grid place-items-center h-screen'>
      <BackArrow />
      <AnimatedPage>
        <a id='tourbutton'>start</a>
        <div className='bg-ktp-blue bg-contain bg-center mx-auto h-72 w-96 aspect-video relative xl:scale-175 lg:scale-175 md:scale-125 sm:scale-110 xs:scale-110' id='content'>
          <section className='px-6 pt-8'>
              <div className='grid grid-cols-1 w-full text-center mb-2 leading-tight'>
                <p className='font-bold text-xs label-content uppercase' data-tour="step: 1; title: Your cart; content: Example cart description text displays cart description">Provinsi <span contentEditable="true">Jawa Timur</span></p>
                <p className='font-bold text-xs label-content uppercase' contentEditable="true">Kabupaten Madiun</p> 
              </div>
              <div className='grid grid-cols-4'>
                <p className='font-bold text-xs label-content col-span-1'>NIK</p>
                <p className='font-bold text-xs label-content col-span-3 focus-visible:ring-amber-200' > <span>:</span> <span contentEditable="true">213123123123123123</span></p> 
              </div>

              <section className='mt-1'>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Nama</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Hasan Santoso</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Tempat/Tgl Lahir</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Magetan, 09-01-2022</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Golongan Darah</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">XYZ</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Spesies</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Persia Mix</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Jenis kelamin</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Jantan</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Warna Bulu</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Putih mulus</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Warna Mata</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Amber</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Status Perkawinan</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Jomblo</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1 ml-4'>Makan Favorit</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Whiskas, Dry Food, Pindang</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1 ml-4'>Hobi</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Ngejar Janda Belang</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Pekerjaan</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Tidur, Makan, Reabahan, BAB</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Sahabat Manusia</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Ivan & Dean</span></p> 
                </div>
                <div className='grid grid-cols-4'>
                  <p className='font-bold text-hs label-content col-span-1'>Berlaku Hingga</p>
                  <p className='font-bold text-hs label-content col-span-3 uppercase'> <span>:</span> <span contentEditable="true">Seumur Hidup</span></p> 
                </div>
              </section>
          </section>
          <div className='absolute top-20 right-6 text-center'>
            <ChangeImagesrc />
            <p className='font-bold text-hs label-content col-span-3 uppercase' contentEditable="true">Madiun</p> 
            <p className='font-bold text-hs label-content col-span-3 uppercase' contentEditable="true">19-01-2022</p> 

            <img className='mx-auto opacity-70 mt-1 h-12 w-12 object-cover' src='/media/paw.png' />
          </div>
        </div>
      </AnimatedPage>
      {/* <Toast /> */}
      <FloatBtn />
    </div>
  )
}
