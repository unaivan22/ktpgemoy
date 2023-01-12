import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function BackArrow() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto sm:px-24 md:px-32 xl:px-32 lg:px-32 absolute top-0 offPrint">
       <section className='mt-12'>
       <a onClick={() => navigate(-1)} className="font-bold text-zinc-900 text-3xl cursor-pointer" id='backTittle'> &#x2190; Back</a>
       </section>
    </div>
  )
}