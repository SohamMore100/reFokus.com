import React from 'react'
import Stripe from "./Stripe"

const Stripes = () => {
    const data = [
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 1,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: 10,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 19,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 28,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: 13,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 4,
        },
    ]
  return (
    <div className='flex items-center mt-10'>
        {data.map((elem,index)=>{
           return <Stripe key={index} val={elem}/>
        })}
        
    </div>
  )
}

export default Stripes