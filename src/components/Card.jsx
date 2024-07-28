import React from 'react'
import { motion } from 'framer-motion'
import {IoIosArrowRoundForward} from 'react-icons/io'
const Card = ({width,para,start,hover="false", header, title }) => {
  return (
    <motion.div whileHover={{background:hover==="true" && "#7443ff",padding:"30px"}} className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='w-full flex justify-between items-center'>
                <h3>{header}</h3>
                <IoIosArrowRoundForward className='w-[25px] h-[25px]'/>
            </div> 
        <h1 className='text-3xl font-medium mt-5'>{title}</h1>
        </div>
        <div className='down w-full '>
            {
                start === true && (
                <>
                    <h1 className='text-9xl font-medium tracking-tight leading-none'>Start a Project</h1>
                    <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-60'>Contact Us</button>
                </>)
            }
            {para && (
                <>
                    <p className='text-sm text-zinc-500 font-medium'>Explore what drives our team.</p>
                </>
            )}
            
        </div>
    </motion.div>
  )
}

export default Card