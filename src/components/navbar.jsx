import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }

  return (

    <div className='flex px-2 top-2 w-full items-center absolute text-black'>
      <div className='p-4'>
        <AiOutlineMenu onClick={handleClick} className='relative cursor-pointer z-50' size={30} />
      </div>
      <div className={nav ? 'ease-in duration-300 top-0 left-0 fixed w-full h-full flex flex-col justify-center items-center z-10 bg-black/90' : 'ease-in duration-300 hidden top-0 left-[-100%] fixed z-10 w-full h-screen'}>
        <div className='top-0 right-0  '>
          <AiOutlineClose onClick={handleClick} className='text-white cursor-pointer relative z-50' size={30} />
        </div>
        <h3 className='text-green-500 font-bold text-2xl md:text-4xl'><span className='text-orange-500 font-bold'>SAFIRI</span> KENYA</h3>
        <ul className='text-white font-bold p-4  '>
          <Link activeClass="active" to="Home" smooth={true} ><li  className='p-4 text-2xl md:text-4xl z-20 cursor-pointer'>Home</li></Link>
          <Link activeClass="active" to="Site" smooth={true} ><li  className='p-4 text-2xl md:text-4xl z-20 cursor-pointer'>Site</li></Link>
          <Link activeClass="active" to="hotel" smooth={true} ><li className='p-4 text-2xl md:text-4xl z-20 cursor-pointer'>Hotel</li></Link>
          <Link activeClass="active" to="contact" smooth={true} ><li className='p-4 text-2xl md:text-4xl z-20 cursor-pointer'>Contact</li></Link>

        </ul>
      </div>
      <div>
        <h3 className='text-3xl md:text-4xl font-bold text-green-500'><span className='text-orange-500 '>SAFIRI</span> KENYA</h3>
      </div>

    </div>
  )
}

export default Navbar