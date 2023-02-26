import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import { motion } from 'framer-motion';

function footer() {
  return (
            <div className='container mx-auto'>
            <motion.div 
            initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
            
            className='flex justify-between items-center max-w-[800px] mx-auto gap-[2rem] pt-[1rem] pb-[3rem]'>
                <div className='hidden md:flex'>
                    <p className='text-[0.85rem]'>Copyright&copy;2023 All rights reserved | Made by <span className='text-[#c5d9f8] font-bold'>Kenneth Louie Cervantes</span></p>
                </div>
                <div className='flex items-center gap-[1rem]'>
                    <h5 className='text-[0.85rem]'>Follow Me</h5>
                    <div className='h-[2px] w-[3rem] bg-[#c5d9f8]'></div>
                    <div className='flex space-x-3 text-[text-dark_primary]'>
                    <a href='https://www.facebook.com/gugmapa/' target='_blank' rel="noreferrer"><FaFacebook  size={15}/></a>
               <a href='https://www.instagram.com/ayalageee/' target='_blank' rel="noreferrer"><FaInstagram size={15} /></a>
                <a href='https://www.linkedin.com/in/kenneth-cervantes' target='_blank' rel="noreferrer"><FaLinkedin size={15} /></a>
                <a href='#home'><FaWhatsapp  size={15}/></a>
              </div>
                </div>
            </motion.div>
            </div>
  )
}

export default footer