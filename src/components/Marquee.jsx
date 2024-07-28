import React from 'react'
// import { ImGift } from 'react-icons/im'
import { motion } from 'framer-motion'

const Marquee = ({imgurl,direction}) => {
  return (
    <div className='flex w-full overflow-hidden ' >
      <motion.div initial={{x:direction === "left"? "0":"-100%"}} animate={{x:direction==='left'?"-100%":"0"}} transition={{ease:"linear",duration:30,repeat:Infinity}} className='flex flex-shrink-0 gap-20 py-9 pr-24'>
        {imgurl.map((url,index) => <img key={index} src={url} className=''/>)}
      </motion.div>
      <motion.div initial={{x:direction === "left"? "0":"-100%"}} animate={{x:direction==='left'?"-100%":"0"}} transition={{ease:"linear",duration:30,repeat:Infinity}} className='flex flex-shrink-0 gap-20 py-9 pr-24'>
        {imgurl.map((url,index) => <img key={index} src={url} className=''/>)}
      </motion.div>        
    </div>
  )
}

export default Marquee