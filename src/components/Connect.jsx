import React from 'react'
import connectImage from "../assets/connect.png"
import { motion } from 'framer-motion';
function Connect() {
  return (
    <div>
      <div className='md:flex md:px-20'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='mt-20'>
          <h1 className='text-xl md:text-3xl md:text-left font-semibold text-center mx-24 md:md-28'>Empowering Top Companies with Seamless Integrations.</h1>
          <p className='text-sm  md:mx-20 px-3 md:text-left text-center  mx-5  text-gray-500 my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet excepturi tenetur necessitatibus deleniti repellendus,
            maxime esse laborum reiciendis ea repellat quo doloribus.</p>
          <button className='text-sm font-semibold w-28 p-2 mx-44 md:mx-24 mt-3 text-cyan-950 bg-lime-300 rounded-full'>Work With Us</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}>
          <img src={connectImage} alt="" className='mx-10 w-96 md:mx-0 md:w-[600px]' />
        </motion.div>


      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}

        className='bg-cyan-950 text-white text-center py-3'>
        <h1 className='font-semibold text-xl md:text-3xl '>From Ideas to Production in Days</h1>
        <p className='text-sm mx-10 md:mx-14 mt-2 '>Accelerate your production with our technology. Reduce</p>
        <p className='text-sm mx-10 md:mx-14 '>downtime and optimize costs. Get a special offer now!</p>
        <button className='text-sm bg-lime-300 text-cyan-950  font-semibold rounded-full p-2 my-5 w-28'>Work With Us</button>
      </motion.div>
    </div>
  )
}

export default Connect;