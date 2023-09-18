import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../assets/jv-high-resolution-logo-white-on-black-background.svg'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='header fixed w-full h-[80px] flex justify-between items-center px-4 text-white'>
      <div className='relative group'> 
        <div className='absolute inset-0.5 bg-gradient-to-r from-black to-white rounded-lg group-hover:blur opacity-75 transition duration-200'></div>
        <img className='relative rounded-xl hidden md:flex' src={Logo} alt="logo" style={{width:'100px'}}/>
        
      </div>

        <ul className='hidden md:flex'>
            <li>
            <a href="#home" className="dot active w-[200px]" data-scroll="home">Home</a>
            </li>

            <li href="#about" data-scroll="about">
            <a href="#about" className="dot w-[200px]" data-scroll="about">About</a>
            </li>

            <li data-scroll="experience">
            <a href="#experience" className="dot w-[200px]" data-scroll="experience">Experience</a>
            </li>

            <li data-scroll="skills">
            <a href="#skills" className="dot w-[200px]" data-scroll="skills">Skills</a>
            </li>

            <li data-scroll="contact">
            <a href="#contact" className="dot w-[200px]" data-scroll="contact">Contact</a>
            </li>
        </ul>


      {/*Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile view*/}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/*Social Media*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#ffd900]'>
            <a href='https://www.linkedin.com/in/juan-victoria/' className='flex justify-around items-center w-full'>
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </ul>
          <ul className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#39FF14]'>
            <a href='https://github.com/mech-dude' className='flex justify-around items-center w-full pl-4 '>
              GitHub <FaGithub size={30}/>
            </a>
          </ul>
          <ul className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#7cd7c2]'>
            <a href='#contact' className='flex justify-around items-center w-full pl-6'>
              Email <HiOutlineMail size={30}/>
            </a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
