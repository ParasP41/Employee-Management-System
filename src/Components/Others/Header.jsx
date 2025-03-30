import React from 'react'

export default function Header({data}) {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>Paras 👋</span></h1>
        <button className='bg-red-600 text-lg font-m text-white px-3 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}
