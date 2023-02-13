import React from 'react'

export default function Footer() {
  return (
    <div className='pt-4 pb-6 border-t border-zinc-200 px-8'>
        <div className='text-center'>
            <p className='text-zinc-500 text-sm'>Copyright by <span>unaivan</span> {(new Date().getFullYear())}. Built with reactjs & tailwindcss</p>
        </div>
    </div>
  )
}
