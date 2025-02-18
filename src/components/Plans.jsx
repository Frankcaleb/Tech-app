import React from 'react'
import { BsCheck } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Plans() {
     return (
          <div
               className='px-3 my-10 py-5 md:px-20 bg-black text-white'>
               <h1 className='text-center text-xl md:text-3xl'>Tailored Plans for Your</h1>
               <h1 className='text-center text-xl md:text-3xl'>Manufacturing Scale</h1>
               <p className='text-center text-sm my-3 md:text-lg'>Flexible pricing for business size</p>
               <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}

                    className='md:flex justify-center mt-10'>
                    <div className='bg-gray-800 mx-14 md:mx-2 md:w-80 text-gray-300 rounded-lg my-5 md:my-0 p-5'>
                         <h1 className='font-semibold'>Starter</h1>
                         <p className='text-sm my-3 text-gray-400'>This package offers the basic features you need to get started</p>
                         <p className='text-lg font-semibold'>$39 <span className='text-sm text-gray-400 font-normal'>/month</span></p>
                         <button className='text-sm border rounded-full w-72 mx-1 md:mx-3 md:w-64 p-1 my-2 '>Get Started</button>
                         <p className='text-center text-sm text-gray-400 my-5'>.......................... Features ..............................</p>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black  mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Production up to 10,000 units per month</p>
                         </div>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black  mt-1 rounded-full' />
                              <p className='text-sm mx-2'>24/7 technical support</p>
                         </div>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Access the production dashboard</p>
                         </div>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Initial setup guide</p>
                         </div>
                    </div>
                    <div className='bg-gray-800 mx-14 md:mx-2 md:w-80 text-gray-300 rounded-lg p-5'>
                         <h1 className='font-semibold'>Enterprise</h1>
                         <p className='text-sm my-3 text-gray-400'>This package provides full access to all premium features</p>
                         <p className='text-lg font-semibold'>$99 <span className='text-sm text-gray-400 font-normal'>/month</span></p>
                         <button className='text-sm border rounded-full w-72 mx-1 md:mx-3 md:w-64 p-1 my-2 '>Get Started</button>
                         <p className='text-center text-sm text-gray-400 my-5'>.......................... Features ..............................</p>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Unlimited production units</p>
                         </div>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Dedicated account manager</p>
                         </div>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Tailored manufacturing solutions</p>
                         </div>
                         <div className='flex my-2'>
                              <BsCheck size={10} className='bg-white text-black mt-1 rounded-full' />
                              <p className='text-sm mx-2'>Productive production optimization</p>
                         </div>
                    </div>
               </motion.div>
               <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='bg-cyan-950 text-white text-center rounded-lg mx-14 md:mx-[265px] py-5 my-3'>
                    <h1 className='font-semibold '>Professional</h1>
                    <p className='text-sm mx-10 md:mx-14 my-2 '>Designed for greater flexibility this solution offers advanced tools for custom tailoring to your needs.</p>
                    <button className='text-sm bg-lime-300 text-cyan-950 font-semibold rounded-full mt-4 p-1 w-28'>Get Started</button>
               </motion.div>

          </div >
     )
}

export default Plans;