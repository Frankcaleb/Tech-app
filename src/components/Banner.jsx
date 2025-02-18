import React from 'react'
import { BiFile, BiRightArrowCircle, BiMenuAltLeft, BiBarChart, BiAbacus} from 'react-icons/bi';
import { FaStar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
function Banner() {
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
    
    
    
    
    className=' flex  pt-16 px-3 md:px-20 md:pt-16'>
        <div className='flex mt-24'>
            <BiRightArrowCircle size={22} className='mt-5'/>
            <div className='mx-2'>
                <BiMenuAltLeft size={17} className='text-white bg-cyan-950 rounded-full p-1'/>
                <BiFile size={13} className='mt-7 text-cyan-950 bg-green-300 rounded-full'/>
            </div>

        </div>
        <div className='text-center'>
            <h1 className='text-2xl md:text-5xl font-semibold md:mx-44'>The Future of Manufacturing with <span className='text-cyan-950'>Latest Technology</span></h1>
            <p className='text-sm md:text-lg my-5'>Expert tech to elevate your manufacturing. Let's take your business further.</p>
            <div >
                <button className='p-2 bg-cyan-950 text-white font-semibold text-sm  md:text-lg w-24 md:w-32 rounded-full hover:bg-transparent hover:text-cyan-950 hover:ease-in-out hover:border hover:border-cyan-950 hover:cursor-pointer'>Get Started</button>
                <button className='p-2 mx-2 bg-white text-cyan-950 font-semibold text-sm md:text-lg w-24  md:w-32 rounded-full hover:bg-cyan-950 hover:text-white hover:ease-in-out hover:cursor-pointer'>Try Demo</button>
            </div>
            <div className='flex justify-center mt-4'>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/>
                <FaStar className='text-yellow-400'/>
                <p className='text-xs md:text-sm font-semibold mx-1'>5.0</p>
            </div>
            <p className='text-xs md:text-sm'>from 80+ <span className='font-semibold'>reviews</span></p>
        </div>
        <div className='flex mt-24'>
            <BiAbacus size={20} className='mt-10'/>
            <BiBarChart size={13} className='mx-2 text-cyan-950 bg-green-300 rounded-full'/>
        </div>

    </motion.div>
  )
}

export default Banner;