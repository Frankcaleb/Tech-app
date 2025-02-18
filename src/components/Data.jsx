import React from 'react'
import { BsCheck } from 'react-icons/bs';
import chart from "../assets/chart.jpeg"
import { motion } from 'framer-motion';

function Data() {
    return (
        <div className='md:flex  pt-16 px-3 md:px-20'>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}


                className=' mx-10'>
                <img src={chart} alt="" className='w-96 md:w-full' />

            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}





                className='md:mx-10'>
                <h1 className='font-semibold text-xl text-center md:text-left md:text-2xl'>Key Benefits of Our System for</h1>
                <h1 className='font-semibold text-xl text-center md:text-left md:text-2xl'>Your Business Efficiency</h1>
                <p className='text-sm  my-3 text-center md:text-left md:text-lg'>Our systems boost productivity, cut costs and drive business growth</p>
                <div className='my-3'>
                    <div className='flex '>
                        <BsCheck size={10} className='bg-cyan-950 text-white md:mt-2 mt-1 rounded-full' />
                        <p className='font-bold text-sm mx-2 md:text-lg'>Boosting Quality with Tech</p>
                    </div>
                    <p className='text-xs  mx-5 my-1 md:text-sm'>With advanced technology we help you achieve top product quality
                        Discover how we can enhance your standards.
                    </p>
                </div>

                <div className='my-3'>
                    <div className='flex'>
                        <BsCheck size={10} className='bg-cyan-950 text-white md:mt-2 mt-1 rounded-full' />
                        <p className='font-bold text-sm mx-2 md:text-lg'>Optimization Production Process</p>
                    </div>
                    <p className='text-xs md:text-sm mx-5 my-1'>Boost factory efficiency and productivity with our innovative solutions
                        See how the latest technology can maximize your output.
                    </p>
                </div>

                <div>
                    <div className='flex'>
                        <BsCheck size={10} className='bg-cyan-950 text-white md:mt-2 mt-1 rounded-full' />
                        <p className='font-bold text-sm mx-2 md:text-lg'>Ai-Driven Production</p>
                    </div>
                    <p className='text-xs md:text-sm mx-5 my-1'>Leverage the power of Ai to transform your manufacturing processes
                        achievingfaster and more effective results.
                    </p>
                </div>


            </motion.div>

        </div>
    )
}

export default Data;