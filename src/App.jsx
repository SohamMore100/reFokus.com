import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: ({ isTextHovered }) => (isTextHovered ? 150 : 16),
      width: ({ isTextHovered }) => (isTextHovered ? 150 : 16),
      transition:{
        type:'smooth',
        duration:0,
      },
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
      transition:{
        type:'smooth',
        duration:0,
      },
    }
  };
  
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" max-w-screen-3xl bg-zinc-900 text-white font-['satoshi']">
      <div className="Cursor">
        <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees/>
            <Cards/>
            <Footer/>
        </div>
        <motion.div
            className='cursor'
            variants={variants}
            animate={cursorVariant}
        />
      </div>
    </div>
  )
}

export default App