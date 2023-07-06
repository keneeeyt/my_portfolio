import React, {useEffect, useState } from 'react';
import { projectNavs } from './data';
import './sass/skills.scss';
import { projectImages } from './data';
import {AiFillGitlab} from 'react-icons/ai';
import {FiEye} from 'react-icons/fi';
import { motion } from 'framer-motion';

function Portfolio() {

  const [tab, setTab] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0)

  useEffect(() => {
    if(tab.name === 'all') {
        setProjects(projectImages);
    } else {
      const newProject = projectImages.filter((projectImage) => {
        return projectImage.category.toLowerCase() === tab.name
      })
      setProjects(newProject)
    }
  }, [tab]);
  const activeTab = (e, index) => {
    setTab({name: e.target.textContent.toLowerCase()})
    setActive(index)
  }
   return (
    <section className='min-h-screen bg-bg_light_primary' id='projects'>
    <div className='container mx-auto'>
      <motion.div 
        initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
      
      className='flex flex-col justify-center items-center'>
          <h5 className='text-[#c5d9f8] mt-10 md:mt-10'>MY WORK</h5>
          <h1>My Projects</h1>
      </motion.div>
      <div className='project space-x-3 flex justify-center mt-10'> 
          {projectNavs.map((projectNav, index)=> {
            return(
         
              <button onClick={(e) => activeTab(e, index)}  key={index} className={`${active === index ? 'active' : ''}`}>
                {projectNav}
              </button>
              
            )
          })}
      </div>
      <motion.div 
      
      initial={{x:0, opacity:0}}
        whileInView={{x: [-250, 0], opacity: 1}}
        transition ={{duration: 1}}
      
      className='projectImage mt-10 grid md:grid-cols-2 gap-[1.5rem]'>
          {projects.map(project => {
            return (
           
              <div className='images max-w-[380px] h-[250px] mx-auto relative' key={project.id}>
              <img src={project.img} alt='projects' className='p-4 rounded-lg drop-shadow-lg' />
              <small className='flex justify-center p-1 text-[text-dark_primary]'>{project.name}</small>
            <motion.div 
            initial={{opacity: 0}}
            whileHover={{opacity: [0, 1]}}
            transition = {{duration: 0.3, ease: 'easeInOut'}}
            
            className='iconView absolute w-[100%] h-[100%] z-10 top-0 left-0 bg-[#c5d9f8] rounded-lg flex justify-center items-center gap-[1.5rem]'>
            <motion.a 
            whileInView={{scale: [0, 1]}}
            whileHover = {{scale: [1, 1.1]}}
            transition = {{duration: 0.3}}
            href={project.link2} target='_blank'><AiFillGitlab  size={26}/></motion.a>
            <motion.a 
            whileInView={{scale: [0, 1]}}
            whileHover = {{scale: [1, 1.1]}}
            transition = {{duration: 0.3}}
            
            href={project.link} target='_blank'><FiEye size={26}/></motion.a>
          
             </motion.div>
          </div>
            )
            
          })}
          
      </motion.div>
      <motion.div 
       initial={{x:0, opacity:0}}
        whileInView={{x: [250, 0], opacity: 1}}
        transition ={{duration: 1}}
      
      
      className='mt-[3rem] bg-[#fff] flex items-center justify-between rounded-xl p-[1rem] mx-auto gap-[1rem] flex-wrap drop-shadow-xl max-w-[850px]'>
            <div className=''>
              <h2 className='text-[1.5rem]'>so let's talk about <br /> <span className='text-[2rem] md:text-[3.5rem] text-[text-dark_primary]'>your next project</span></h2>
            </div>
            <motion.div 
             whileHover={{scale: 1.1}}
          transition= {{duration: 0.3}}
            className='btn'>
              <a href='#contact'>Contact Me</a>
            </motion.div>
          </motion.div>
      </div>
          
    </section>
  )
}

export default Portfolio