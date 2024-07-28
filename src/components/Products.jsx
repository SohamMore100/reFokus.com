import React, { useState } from 'react'
import Product from './Product';
import { motion } from 'framer-motion';

const Products = () => {
    const products = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "Cula",
            description:
                "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: false,
        },
        {
            title: "Layout",
            description:
                "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "Maniv",
            description:
                "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            case: false,
        },
        {
            title: "Singularity",
            description:
                "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2021",
            description:
                "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
            live: true,
            case: true,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Jungle",
            description:
                "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            live: true,
            case: true,
        },
        {
            title: "Silvr",
            description:
                "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            live: true,
            case: true,
        },
        {
            title: "Showcase",
            description:
                "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
            live: true,
            case: true,
        },
        {
            title: "Weglot",
            description:
                "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
            live: true,
            case: true,
        },

    ];

    const [pos,setPos] = useState(0);
    const mover=(val)=>{
        setPos(val*23);
    }
// transition: opacity .8s cubic-bezier(0.42, 0, 0.01, 0.94);'background-color:hsla(239.04000000000002, 81.70%, 62.83%, 1.00)'
  return (
    <div className='mt-4 bg-zinc-900 relative'>
        {products.map((val,index)=><Product key={index} val={val} mover={mover} count={index}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>  
            <motion.div initial={{y:pos ,x:"-50%"}} animate={{y:pos+`rem`}}  className='absolute w-[32rem] h-[23rem] left-[45%] rounded-3xl overflow-hidden'>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className='w-full h-full '>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm' type="video/webm" />
                            Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full '>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4' type="video/webm" />
                            Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full '>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4' type="video/webm" />
                            Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full '>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`} } transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full '>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/Maniv-Compressed.mp4' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/2022/videos/yearinreview.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/2022/videos/yahoo.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/jungle-4-3-.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/website/2022/videos/Silvr.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.5}} className=' w-full h-full'>
                    <video className="absolute object-cover rounded-3xl" autoPlay muted loop>
                        <source src='https://cdn.refokus.io/website/2022/videos/weglot.webm' type="video/webm" />
                                Your browser does not support the video tag.
                    </video>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products