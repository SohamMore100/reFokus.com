import React from 'react';
import Button from './Button';

const Product = ({val,mover,count}) => {
  return (
    <div className='w-full py-20 bg-zinc-900 h-[23rem] text-white transition-colors ease-in-out hover:bg-indigo-600 hover:duration-700 hover:text-xl'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-5xl capitalize font-semibold '>{val.title}</h1>
            <div className='dets py-10 w-1/3 text-lg '>
                <p className='mb-10 '>{val.description}</p>
                <div className='flex items-center gap-5'>
                    {val.live && <Button/>}
                    {val.case && <Button title='Case Study'/>} 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product