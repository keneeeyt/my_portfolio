import React from 'react'
import Man from '../assets/Subject.png';
import { motion } from 'framer-motion';
function Home() {

    const moveVariants = {
      animation: {
        y: [0, -15],
        transition: {
          repeatType: 'mirror',
          repeat:Infinity,
          duration: 2,
          delay: 1
        }
      }
    }


  return (
    <section id="home">
      <motion.div 
       initial ={{y: -25, opacity: 0}}
       animate= {{y:0, opacity:1}}
       transition = {{duration: 2, delay: 0.5}}
      
      
      className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
        <div className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-[#c5d9f7] bottom-0 -z-10 '>
        
        <h1 className='md:hidden rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]'>
            itsken <span className='text-dark_primary'>not</span>
          </h1>
        
        </div>
        <div className='pb-16 md:pb-[200px] px-6 space-y-6'>
        <div>
        <h1 className='text-[#c5d9f8] hidden md:flex'>
            Kenneth<span className='text-dark_primary pl-2'>Cervantes</span>
          </h1>
        </div>
          <h2>I am a Web Developer</h2>
          <br />
          <div>
          <h5 className='mb-5 -mt-5'>This is my official portfolio website</h5>
         </div>
          <a href='#contact' className=''>
          <motion.button
          variants ={moveVariants}
          animate = "animation"
          whileHover={{scale: 1.1}}
          transition={{duration: 0.3}}
          className='btn'>Connect with Me</motion.button>
           </a>
        </div>
        
        <div className='md:h-[37rem] h-96 hidden md:flex'>
            <img src={Man} alt='...' className='h-full object-cover'/>
        </div>
      </motion.div>
    </section>
  )
} 

export default Home