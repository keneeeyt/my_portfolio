import React from 'react'
import Self from '../assets/self.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si'
import { motion } from 'framer-motion';
import pdfFile from '../myResume.pdf'
function About() {


 

  return (
    <section className='min-h-screen bg-bg_light_primary' id='about'>
     <div className='container mx-auto'>
      <motion.div 
        initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
      
      className='flex flex-col justify-center items-center'>
          <h5 className='text-[#c5d9f8] mt-10 md:mt-[150px]'>WHO AM I?</h5>
          <h1>About Me</h1>
      </motion.div>
      <div className='grid md:grid-cols-2 grid-cols-1 mt-10 '>
        <motion.div 
        initial={{x:0, opacity:0}}
        whileInView={{x: [-250, 0], opacity: 1}}
        transition ={{duration: 1}}
        
        className='mx-auto'>
              <img src={Self} style={{width: '250px'}} className='rounded-full drop-shadow-xl bg-gradient-to-b from-[#c5d9f8]' alt='man-smiling'/>
        </motion.div>
        <motion.div 
        initial={{x:0, opacity:0}}
        whileInView={{x: [250, 0], opacity: 1}}
        transition ={{duration: 1}}
        
        className='text-sm text-justify flex lg:mr-[30%] flex-col justify-center mt-5 md:mt-0'>
        Software engineer with ability to learn and collaborate in rapidly changing environments and compositions. 
        Worked through 1000+ hours of bootcamp structures, learning JavaScript, Nodejs and ReactJS. Eager to tackle Web Development/Design challenges to achieve lasting impact on user experience. 
        <div className='grid grid-cols-2 gap-3 mt-4'>
          <div className='flex gap-2 items-center'>
          <div className='text-lg'>
          <BsFillPersonFill />
          </div>
            Name
          </div>
          <div>Cervantes, Kenneth Louie </div>
          <div className='flex gap-2 items-center'>
          <div className='text-lg'>
          <MdCall />
          </div>
            Phone
          </div>
          <div>+63 956 049 0839</div>
          <div className='flex gap-2 items-center'>
          <div className='text-lg'>
          <SiMinutemailer />
          </div>
           Email
          </div>
          <div>cervantes.
          klc@gmail.com</div>
        </div>
            <motion.div 
             whileHover={{scale: 1.1}}
          transition= {{duration: 0.3}}
            className='flex justify-center items-center mt-5'>
            <a className='btn' href={pdfFile} download='pdfFile'>Download CV</a>
            </motion.div>
        </motion.div>
        
      </div>
      </div>
    </section>
  )
}

export default About