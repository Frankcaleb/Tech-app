import React from 'react'
import gallery from "../assets/picture.png"
import { FaRecordVinyl, FaEllipsis, FaLightbulb } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
        initial={{ y: "-100vh", opacity: 0 }} // Starts fully above viewport
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          mass: 1,
          delay: 0.2,
        }}
    
    className=' md:flex md:justify-center py-10 px-3 md:px-20'>
        <img src={gallery} alt="" className='w-40 mx-36 md:mx-0 h-56 rounded-2xl' />
        <div className='bg-cyan-950 text-white md:w-28 md:h-36 py-10 md:py-5  mx-44 md:mx-5 md:my-20 md:px-5 rounded-lg text-center my-10'>
          <h1 className='font-semibold text-xl'>100+</h1>
          <p className='text-sm '>Our Esteemed clients and partners</p>
        </div>
        <div className='mx-28 p-5 rounded-lg  my-10 border border-white shadow-sm md:w-52 md:h-32 py-10 md:py-3  md:mx-0 md:my-24 md:px-5'>
          <div className='flex justify-between py-3'>
            <FaRecordVinyl/>
            <FaEllipsis/>
          </div>
          <p className='text-sm'>Total Projects</p>
          <h1 className='font-semibold text-xl'>1951+</h1>
          <p className='text-sm text-gray-400'>increase of <span>120</span> this month</p>
        </div>
        <div className='bg-lime-300 md:h-36 py-10 md:py-7  mx-44 md:w-28 md:mx-5 md:my-20 md:px-5 rounded-lg text-center my-10'>
          <h1 className='font-semibold text-xl'>6+</h1>
          <p className='text-sm'>Years of Dedicated Service</p>
        </div>
        <div className='bg-cyan-950 w-40 mx-40 md:mx-0 h-56 rounded-2xl text-white pt-28 px-3'>
          <FaLightbulb/>
          <p className='text-sm pt-3'>Achieve optimal Efficiency and boost Productivity</p>
        </div>

    </motion.div>
  )
}

export default Hero;