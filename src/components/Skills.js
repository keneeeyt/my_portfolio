import React, { useState } from 'react';
import './sass/skills.scss';
import {icons} from './data';
import { motion } from 'framer-motion';


function Skills() {

  const [active, setActive] = useState(1)
  return (
    <section className='min-h-screen' id='skills'>
     <div className='container mx-auto'>
      <motion.div 

        initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
      
      className='flex flex-col justify-center items-center'>
          <h5 className='text-[#c5d9f8] mt-10 md:mt-10'>WHAT I EXPERT?</h5>
          <h1>Skills and Experience</h1>
      </motion.div>
      <motion.div 
        initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
      
      className='skills flex justify-center mt-10 gap-[1rem]'>
        <button className={active === 1? 'active': ''} onClick={()=> {setActive(1)}}>Skills</button>
        <button className={active === 2? 'active' : ''} onClick={()=> {setActive(2)}}>Experience</button>
      </motion.div>
      <motion.div 
      initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
      className='mt-[80px] grid grid-cols-2 md:grid-cols-4 justify-center max-w-[700px] mx-auto gap-[4rem]'>
        {active === 1 && icons.map((icon, index) => {
          return (
            <div className='icons flex justify-center' key={index}>
            {icon}
            </div>
          )
        })}
      </motion.div>
       <motion.div 
         initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
       
       className=''>
          { active === 2 ? 
          
          <div className='mt-10 md:mt-[150px] mx-auto grid grid-cols-2 gap-3'>
          <div className='flex items-center justify-start md:justify-center lg:pl-[150px] font-semibold'>2023</div>
              <div className='flex flex-col lg:pl-5 font-semibold'>
              FULL STACK SOFTWARE DEVELOPER
              <span className='text-xs font-thin'>SPARKSOFT SOLUTIONS INC.</span>
              </div>
              <div className='flex items-center justify-start md:justify-center lg:pl-[150px] font-semibold'>2023</div>
              <div className='flex flex-col lg:pl-5 font-semibold'>
              SOFTWARE ENGINEER
              <span className='text-xs font-thin'>Zuitt Coding Bootcamp</span>
              </div>
              <div className='flex items-center justify-start md:justify-center lg:pl-[150px] font-semibold'>2022</div>
              <div className='flex flex-col lg:pl-5 font-semibold'>
              GRAPHIC DESIGNER/UI DESIGNER
              <span className='text-xs font-thin'>Noah Clothing</span>
              </div>
          </div>
  
           :
           <div></div>
          }
       </motion.div>
      </div>

    </section>
  )
}

export default Skills