import React from 'react'
import AnimatedPage from './utils/AnimatedPage'

// import { FiEdit2 } from 'react-icons/fi';

export default function Home() {
  return (
    <div className='container mx-auto bg-white h-screen mb-24  mb-56'>
        <img className='absolute left-0 top-0 2xl:w-56 xl:w-56 md:w-56 sm:w-32 xs:w-32' src='media/home/sun.gif' />
        <AnimatedPage>
            <div className='grid place-items-center mt-12 rounded-3xl 2xl:pt-32 xl:pt-32 md:pt-32 sm:pt-24 xs:pt-24'>
                <div className='flex flex-col items-center text-center space-y-12 relative'>
                    <h1 className='font-light 2xl:text-5xl xl:text-5xl md:text-5xl sm:text-3xl xs:text-3xl z-50'>Buat KTP si gemoy dalam sekejap! <br className='2xl:block xl:block md:block sm:hidden xs:hidden' /> gak pake ribet dan Gratis slur</h1>
                    <a href='https://github.com/unaivan22/ktpgemoy' class=" z-50 bg-rose-100 hover:bg-rose-200 text-rose-500 font-normal text-lg py-3 px-6 rounded-full inline-flex items-center">
                        <span>Clone on Github &#8594;</span>
                    </a>
                    <img className='w-60 -translate-y-8' src='media/home/arrowmultiples.gif'/>
                    <div className='absolute top-32 flex justify-between w-full 2xl:visible xl:visible md:visible sm:invisible xs:invisible'>
                        <img className='w-52' src='media/home/star.gif'/>
                        <img className='w-52' src='media/home/string0.gif'/>
                    </div>
                </div>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 2xl:mt-16 xl:mt-16 md:mt-16 sm:mt-2 xs:mt-2 gap-6'>
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
            <div className='grid place-items-center mt-12 rounded-3xl 2xl:pt-32 xl:pt-32 md:pt-32 sm:pt-24 xs:pt-24'>
                <div className='flex flex-col items-center text-center space-y-12 relative'>
                    <h1 className='font-light 2xl:text-5xl xl:text-5xl md:text-5xl sm:text-3xl xs:text-3xl z-50'>Fitur</h1>
                    <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-y-12 gap-x-12 z-50'>
                        <div className='flex flex-col items-center'>
                            <svg width="16" height="25">
                                <g fill="#FA0" stroke="#FA0" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M10.9 2L1.2 14.4c-.2.3-.3.6.1.6h5.1c.4 0 .7.2.6.6L6 24v-.1l8.1-12.4c.2-.4.3-.6-.1-.6H9.6c-.4 0-.7-.5-.6-1l2-8" stroke-width="2" opacity=".3"></path><path d="M10.9 2L1.2 14.4c-.2.3-.3.6.1.6h5.1c.267 0 2.833-1.167 7.7-3.5.2-.4.3-.6-.1-.6H9.6c-.4 0-.7-.5-.6-1l2-8" stroke-width="2"></path>
                                </g>
                            </svg>
                            <h3 className='font-base text-2xl text-rose-500 mt-2'>Realtime Editing</h3>
                            <p className='text-zinc-700 font-light'>Edit text tanpa loading simpan</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="24" height="24"><g stroke-width="2" stroke="#00E17C" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M19.8 4.2c4.3 4.3 4.3 11.3 0 15.6-4.3 4.3-11.3 4.3-15.6 0-4.3-4.3-4.3-11.3 0-15.6 4.3-4.3 11.3-4.3 15.6 0z" fill="#00E17C" opacity=".2"></path><path d="M7 12h10M12 7v10"></path></g></svg>
                            <h3 className='font-base text-2xl text-rose-500 mt-2'>Export .pdf/jpg</h3>
                            <p className='text-zinc-700 font-light'>Pilih export sebagai pdf atau jpg</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="24" height="22"><g transform="translate(1 1)" stroke-width="2" stroke="#3AF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h14M8 10h14M4 0L1.8 3 0 1.5M4 8l-2.2 3L0 9.5"></path><path d="M8 18h14" opacity=".4"></path><circle opacity=".4" cx="2" cy="18" r="2"></circle></g></svg>
                            <h3 className='font-base text-2xl text-rose-500 mt-2'>Editing Mudah</h3>
                            <p className='text-zinc-700 font-light'>Semua text bisa diedit</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="24" height="24"><g fill="#3AF" fill-rule="nonzero"><path d="M18.977 13.437l-1.27 1.27a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-1.31-1.309C20.69 18.798 16.424 23 11 23a1 1 0 0 1 0-2c4.292 0 7.671-3.277 7.977-7.563z" opacity=".5"></path><path d="M5.168 21.504l-.062-.035C.238 18.704-1.45 12.4 1.331 7.506a1 1 0 0 1 1.738.988c-2.18 3.839-.943 8.764 2.73 11.061l-.361-1.284a1 1 0 0 1 1.924-.542l1.1 3.9a1 1 0 0 1-.697 1.235l-4 1.1a1 1 0 1 1-.53-1.928l1.933-.532zm2.565-16.89l1.532.422a1 1 0 0 1-.53 1.928l-4-1.1A1 1 0 0 1 4 4.85c-.01-.188.035-.374.126-.537L5.137.729a1 1 0 0 1 1.925.542l-.458 1.626C11.65 1.03 17.358 2.91 19.97 7.506a1 1 0 0 1-1.738.988c-2.05-3.606-6.5-5.16-10.498-3.88z"></path></g></svg>
                            <h3 className='font-base text-2xl text-rose-500 mt-2'>Tidak Perlu Login</h3>
                            <p className='text-zinc-700 font-light'>Login? Tak perlu guys</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="24" height="19"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M18 0c2.2 0 2.5 2.1 2.5 2.1L22 12M4 0C1.8 0 1.5 2.1 1.5 2.1L0 12" stroke="#00E17C" stroke-linecap="round" stroke-linejoin="round"></path><circle stroke="#FFF" fill="#FFF" cx="17.5" cy="12.5" r="4.5"></circle><circle stroke="#FFF" fill="#FFF" cx="4.5" cy="12.5" r="4.5"></circle><circle stroke="#00E17C" fill="#00E17C" opacity=".3" cx="17.5" cy="12.5" r="4.5"></circle><circle stroke="#00E17C" fill="#00E17C" opacity=".3" cx="4.5" cy="12.5" r="4.5"></circle><path d="M9 10s.5-1 2-1 2 1 2 1" stroke="#00E17C" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                            <h3 className='font-base text-2xl text-rose-500 mt-2'>Gratis</h3>
                            <p className='text-zinc-700 font-light'>Login aja kagak! Apalagi bayar</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="24" height="24"><g fill="#FA0" fill-rule="nonzero" stroke="#FA0"><path d="M2.992 18.314A11.98 11.98 0 0 0 7 19c6.627 0 12-5.373 12-12a11.98 11.98 0 0 0-.686-4.008A10.987 10.987 0 0 1 23 12c0 6.075-4.925 11-11 11a10.987 10.987 0 0 1-9.008-4.686z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle opacity=".3" cx="12" cy="12" r="11.5"></circle></g></svg>
                            <h3 className='font-base text-2xl text-rose-500 mt-2'>Open Source</h3>
                            <p className='text-zinc-700 font-light'>Yang mau ngembangin lagi monggo guys</p>
                        </div>
                    </div>
                    <h1 className='font-light 2xl:text-3xl xl:text-3xl md:text-3xl sm:text-2xl xs:text-2xl z-50 pt-24'>Kalau ada peluang, kolaborasi yuk</h1>
                    <a href='https://dinivannendragunawan.vercel.app/' target='_blank' class=" z-50 bg-rose-100 hover:bg-rose-200 text-rose-500 font-normal text-lg py-3 px-6 rounded-full inline-flex items-center">Hai Una, Aku Ada Project Nih!                    </a>
                    <img className='w-60 -translate-y-8' src='media/home/arrowmultiples.gif'/>
                    <div className='absolute top-80 flex justify-between w-full 2xl:visible xl:visible md:visible sm:invisible xs:invisible'>
                        <img className='w-52' src='media/home/spiral.gif'/>
                        <img className='w-52' src='media/home/flower.gif'/>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    </div>
  )
}
