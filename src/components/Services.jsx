import React from 'react'
import { FaSun  } from 'react-icons/fa6';
import { AiOutlineLineChart } from 'react-icons/ai';
import { TiSpannerOutline } from 'react-icons/ti';
import { BsArrowUpRight, BsBoxFill, BsLayers, BsShieldShaded } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div
    
    className='bg-cyan-950 py-10 px-3 md:px-20 text-white'>
        <h1 className='text-center font-semibold text-white text-xl md:text-3xl'>Efficient and Integrated</h1>
        <h1 className='text-center font-semibold text-xl text-white md:text-3xl'>Manufacturing Services</h1>
        <p className='text-center my-7 text-sm text-white'>Simplify operations with our efficient, quality-focused services</p>
        <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{opacity: 1, x: 0 }}
                        viewport={{once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease:'easeOut'}}>

<div className='mt-10 md:my-5 mx-24 md:flex '>
            <div className='bg-cyan-900 my-5 md:my-0 md:h-40 p-4 rounded-lg md:w-80'>
                <div className='flex justify-between'>
                    <FaSun/>
                    <BsArrowUpRight/>
                </div>
                <h1 className='mt-10 font-semibold'>Production and Assembly </h1>
                <p className='text-xs mt-2'>Details on production processes assembly capacity and product types.</p>
            </div>
            <div className='bg-cyan-900  my-5 md:my-0 md:h-40 p-4 rounded-lg md:mx-5 md:w-80'>
                <div  className='flex justify-between'>
                    <BsLayers/>
                    <BsArrowUpRight/>
                </div>
                <h1 className='mt-10 font-semibold'>Custom Manufacturing </h1>
                <p className='text-xs mt-2'>Custom product creation with dsign and customization options.</p>
            </div>
            <div className='bg-cyan-900 my-5 md:my-0 md:h-40 p-4 rounded-lg md:w-80'>
                <div className='flex justify-between'>
                    <TiSpannerOutline/>
                    <BsArrowUpRight/>
                </div>
                <h1 className='mt-10 font-semibold'>Quality Control </h1>
                <p className='text-xs mt-2'>Procedures and systemsin place to ensure high product quality</p>
            </div>

        </div>
        <div className='mx-24 md:flex '>
            <div className='bg-cyan-900 my-5 md:my-0 md:h-40 p-4 rounded-lg md:w-80'>
                <div className='flex justify-between'>
                    <BsShieldShaded/>
                    <BsArrowUpRight/>
                </div>
                <h1 className='mt-10 font-semibold'>Technology and Innovation</h1>
                <p className='text-xs mt-2'>Details on the latest manufacturing technologies and ongoing innovations</p>
            </div>
            <div className='bg-cyan-900 my-5 md:my-0 md:h-40 p-4 rounded-lg md:mx-5 md:w-80'>
                <div className='flex justify-between'>
                    <BsBoxFill/>
                    <BsArrowUpRight/>
                </div>
                <h1 className='mt-10 font-semibold'>Packaging and Logistics</h1>
                <p  className='text-xs mt-2'>Packaging and logistics for shopping to customers and distributions.</p>
            </div>
            <div className='bg-cyan-900 my-5 md:my-0 md:h-40 p-4 rounded-lg md:w-80'>
                <div className='flex justify-between'>
                    <AiOutlineLineChart/>
                    <BsArrowUpRight/>
                </div>
                <h1 className='mt-10 font-semibold'>Consulting Market Research </h1>
                <p  className='text-xs mt-2'>Services to help companies understand market needs and provide strategic advice.</p>
            </div>
            </div>


        </motion.div>
        

        

    </div>
  )
}

export default Services;