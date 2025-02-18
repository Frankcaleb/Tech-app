import React from 'react'
import { motion } from 'framer-motion';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';


function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

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
    
    
    
    
    
    className='  w-full flex justify-between  items-center py-5 px-3 md:my-7 md:px-20 '>

      <h1 className='font-bold text-xl text-cyan-950'>C-TECH</h1>
      <ul className='hidden md:flex mt-2 '>
        <li className='px-4 font-semibold'>Home</li>
        <li className='px-4 font-semibold'>Services</li>
        <li className='px-4 font-semibold'>Blog</li>
        <li className='px-4 font-semibold'>Contact</li>
      </ul>
      
        <button className='hidden md:block hover:bg-transparent hover:ease-in-out hover:font-semibold hover:text-cyan-950 bg-cyan-950 rounded-full p-2 font-semibold w-24 text-white'>Sign Up</button>
     
      <div onClick={handleNav} className=' mt-4 md:hidden hover:cursor-pointer'>
        {!nav ? <FaXmark size={20} /> : <FaBarsStaggered size={20} />}
      </div>

      <div className={!nav ? 'fixed left-[0] top-0 bg-white w-[60%] h-full px-5 rounded-lg md:hidden' : 'fixed left-[-100%] top-0 bg-white w-[60%] h-full px-5 transition'}>
        <h1 className='font-bold text-2xl text-blue-950 mt-10 px-3'>C-TECH</h1>
        <ul className='uppercase pt-5'>
          <li className='m-4 border-b border-b-cyan-950'>Home</li>
          <li className='m-4 border-b border-b-cyan-950'>Services</li>
          <li className='m-4 border-b border-b-cyan-950 '>Blog</li>
          <li className='m-4'>Contact</li>
        </ul>
        
          <button className='font-semibold border rounded-full p-2 mx-3 hover:font-semibold hover:text-cyan-950 bg-cyan-950  w-24 text-white'>Sign Up</button>
      
      </div>

    </motion.div>
  )
}

export default Navbar;