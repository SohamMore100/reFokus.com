import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Get Started"}) => {
  return (
    <div className='hover:before:bg-redborder-red-500 relative overflow-hidden shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full  min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between '>
        <span className='relative z-10 text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button