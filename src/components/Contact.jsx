import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className='bg-black px-3 py-5 md:flex justify-evenly md:py-10 md:px-20 text-white'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0 }}
                viewport={{once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease:'easeOut'}}
               
            >
                <h1 className='font-bold text-white'>C-TECH</h1>
                <p className='text-sm w-72 text-gray-400'>Our solutions make production faster and cheaper, contact us for more information.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0 }}
                viewport={{once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease:'easeOut'}}
            className='py-3 md:py-0'>
                <h1 className='font-bold text-white'>Company</h1>
                <p className='text-sm text-gray-400'>About Us</p>
                <p className='text-sm text-gray-400'>Customers</p>
                <p className='text-sm text-gray-400'>Newspapers</p>
                <p className='text-sm text-gray-400'>Events</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0 }}
                viewport={{once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease:'easeOut'}}>
                <h1 className='font-bold text-white'>Industires</h1>
                <p className='text-sm text-gray-400'>Precision Manufacturing</p>
                <p className='text-sm text-gray-400'>Industrial Manufacturing</p>
                <p className='text-sm text-gray-400'>High Tech & electronics</p>
                <p className='text-sm text-gray-400'>Precision Manufacturing</p>
                <p className='text-sm text-gray-400'>Aeroscope</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0 }}
                viewport={{once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease:'easeOut'}}
            className='py-3 md:py-0'>
                <h1 className='font-bold text-white'>Get in Touch</h1>
                <p className='text-sm text-gray-400 py-2'>belaccal@gmail.com</p>
                <div className='flex'>
                    <FaLinkedin />
                    <FaInstagram className='mx-2' />
                    <FaFacebook />
                </div>
            </motion.div>
        </div>
    )
}

export default Contact;