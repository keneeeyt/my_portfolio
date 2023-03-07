import { AiFillHtml5, AiFillGitlab } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiPostman } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import {FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';


//nav icons
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ]
}

export const icons = [<AiFillHtml5 /> ,<IoLogoCss3 /> ,<SiJavascript />, <SiMongodb />, <DiNodejs />, <SiExpress />, <SiReact />, <FaGitAlt />, <AiFillGitlab />, <BsGithub />,<SiPostman />]


export const projectImages = [
    {
        id: 1,
        img: project1,
        name: 'UI design for Noah Store',
        category: 'design',
        link: 'https://keneeeyt.github.io/E-commerce/',
        link2: 'https://github.com/keneeeyt/E-commerce'
    },
    {
        id: 2,
        img: project2,
        name: 'MERN Stack E-commerce',
        category: 'web',
        link: 'https://ecommerce-rho-green.vercel.app/',
        link2: 'https://gitlab.com/b245-cervantes/capstone3-cervantes/emptywall-app'
    },
    {
        id: 3,
        img: project3,
        name: 'Course Booking App',
        category: 'app',
        link:'https://gitlab.com/b245-cervantes/course_booking/course_booking',
        link2: 'https://gitlab.com/b245-cervantes/course_booking/course_booking'
    },
    {
        id: 4,
        img: project4,
        name: 'E commerce Rest API',
        category: 'app',
        link: 'https://gitlab.com/b245-cervantes/capstone2-cervantes/noah-store-api/noah-store-api',
        link2: 'https://gitlab.com/b245-cervantes/capstone2-cervantes/noah-store-api/noah-store-api'
    }
    
]

export const projectNavs = [
    'All', 'Web', 'App','Design'
]


export const contacts = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      infoText: "P Ubalde St. Gingoog City, PH"
    },
    {
      id: 2,
      icon: <FaPaperPlane />,
      infoText: "cervantes.klc@gmail.com"
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      infoText: "+63 9560 4908 39"
    }
  ]
  
  export const socialIcons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaWhatsapp />
  ]