import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>reFoKus.</h1>
            
            </div>
            <div className='basis-1/2 flex gap-5'>
                <div className='basis-1/3'>
                    <h3 className='mb-10 text-zinc-500'>Socials</h3>
                    {["instagram","twitter (x?)","LinkedIn"].map((item,index)=>{
                       return <a key={index} className='block mt-3 text-zinc-500 capitalize hover:text-white hover:underline' href="">{item}</a>
                    })}
                </div>
                <div className='basis-1/3'>
                    <h3 className='mb-10 text-zinc-500'>Sitemap</h3>
                    {["home","work","career","contact"].map((item,index)=>{
                       return <a key={index} className='block mt-3 text-zinc-500 capitalize hover:text-white hover:underline' href="">{item}</a>
                    })}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className="text-right">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                    <img
                        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
                        alt=""
                        className="w-44 px-4 py-1 mt-7 bg-blue-600"
                    />    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer