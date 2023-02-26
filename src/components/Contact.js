import React, {useRef} from 'react';
import { contacts } from './data';
import './sass/skills.scss';
import './sass/contact.scss';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5kpwcwf', 'template_syfnqk8', form.current, '4z7v46J-xXhjLa16-')
      .then((result) => {
          form.current.reset();
          toast.success('Email send Successfully')
      }, (error) => {
          
          toast.error(error.text)
      });
  };
  return (
    <section className='min-h-screen' id='contact'>
    <Toaster />
        <div className='container mx-auto'>
      <motion.div 
        initial ={{opacity: 0}}
        whileInView = {{y: [-50, 0], opacity: 1}}
        transition ={{duration: .7, delay: 0.5}}
      
      
      className='flex flex-col justify-center items-center'>
          <h5 className='text-[#c5d9f8] mt-10 md:mt-10'>GET IN TOUCH</h5>
          <h1>Contact Me</h1>
      </motion.div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 bg-[#fff] rounded-xl  gap-[2rem] overflow-hidden mx-auto p-[2rem]'>
          
          <motion.div 
          initial ={{opacity: 0}}
        whileInView = {{y: [-300, 0], opacity: 1}}
        transition ={{duration: 1}}
          
          className=''>
              <h5 className='text-[1.5rem] mb-[1rem]'>Just Say Hi!</h5>
              <p className='text-[0.85rem] mb-[1rem]'>I am based in Gingoog City, Philippines <br /> You can contact me via the form or at cervantes.klc@gmail.com</p>
              {contacts.map((contact) => {
                return(
                  <div className='flex items-center mt-[1rem]' key={contact.id}>
                    <div className='w-[30px] h-[30px] rounded-full bg-[#c5d9f8] text-[#fff] flex items-center justify-center mr-[1rem]'>
                        {contact.icon}
                    </div>
                    <p className='text-[0.85rem]'>{contact.infoText}</p>
                  </div>
                )
              })}
              <div className='flex mt-5 space-x-3 text-[text-dark_primary]'>
                <a href='https://www.facebook.com/gugmapa/' target='_blank' rel="noreferrer"><FaFacebook  size={26}/></a>
               <a href='https://www.instagram.com/ayalageee/' target='_blank' rel="noreferrer"><FaInstagram size={26} /></a>
                <a href='https://www.linkedin.com/in/kenneth-cervantes' target='_blank' rel="noreferrer"><FaLinkedin size={26} /></a>
                <a href='#home'><FaWhatsapp  size={26}/></a>
              </div>
          </motion.div>
          <motion.div 
        initial ={{opacity: 0}}
        whileInView = {{x: [-50, 0], opacity: 1}}
        transition ={{duration: 1}}
      
          
          className='right_info'>
          <h5 className='text-[1.5rem] mb-[1rem]'>Get In Touch</h5>
          <form ref={form} onSubmit={sendEmail}>
          <div className='row'> 
              <input type='text' name='from_name' placeholder='First Name' />    
              <input type='text' placeholder='Last Name' />    
          </div>
          <div className='row'> 
               <input type='number' placeholder='Phone Number' />  
              <input type='email' name='user_email' placeholder='Email' />       
          </div>
          <div className='row'> 
              <textarea placeholder='message' name='message' required>

              </textarea>   
          </div>
          <motion.div 
          whileHover={{scale: 1.1}}
          transition= {{duration: 0.3}}
          
          className='submit w-[60%] md:w-[40%] lg:w-[30%] mt-5'>
            <button type='submit' className='w-[100px]'>Send</button>
          </motion.div>
          </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact