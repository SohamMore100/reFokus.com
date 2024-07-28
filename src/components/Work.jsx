import React,{ useState } from 'react';
import { motion,useScroll,useMotionValueEvent } from "framer-motion";

const Work = () => {
    const [images, setImages] = useState([
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top: "45%",
            left: "50%",
            isActive: true,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top: "59%",
            left: "56%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top: "62%",
            left: "52%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top: "66%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
            top: "73%",
            left: "55%",
            isActive: false,
        },
    ]);

    function imgShow(arr) {
        setImages((prev) =>
            prev.map((item,index)=>(
                arr.indexOf(index)=== -1
                    ? {...item,isActive:false}
                    : {...item,isActive:true}
            ))
        )
    }
    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        switch (Math.floor(data*100)) {
            case 0:
                imgShow([]);
                break;
            case 1:
                imgShow([0]);
                break;
            case 2:
                imgShow([0,1]);
                break;
            case 3:
                imgShow([0,1,2]);
                break;
            case 4:
                imgShow([0,1,2,3]);
                break;
            case 5 :
                imgShow([0,1,2,3,4]);
                break;   
            case 6 :
                imgShow([0,1,2,3,4,5]);
                break;              
            default:
                break;
        }
    })
    
  return (
    <div className='w-full mt-20'>
        <div className='relative max-w-screen-xl mx-auto text-center '>
            <h1 className='text-[34vw] leading-none font-medium select-none tracking-right'>work</h1>
            <div className="absolute top-0 w-full h-full">
                    {images.map(
                        (elem, index) =>
                            elem.isActive && (
                                <img
                                    key={index}
                                    className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                                    src={elem.url}
                                    style={{ top: elem.top, left: elem.left }}
                                    alt=""
                                />
                            )
                    )}
                </div>
                <h1 style={{color:'#919191' , textalign: 'center'}} className='text-xl py-3'>Web Design, Webflow Development, Creative Development</h1>
        </div>
    </div>
  )
}

export default Work