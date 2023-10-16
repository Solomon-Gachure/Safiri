import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
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
      <div className={nav ? 'ease-in duration-300 top-0 left-0 fixed w-full h-full flex flex-col justify-center items-center z-10 bg-black/90' :'ease-in duration-300 hidden top-0 left-[-100%] fixed z-10 w-full h-screen'}>
        <div className='top-0 right-0  '>
          <AiOutlineClose onClick={handleClick} className='text-white cursor-pointer relative z-50' size={30} />
        </div>
        <h3 className='text-green-500 font-bold text-2xl md:text-4xl'><span className='text-orange-500 font-bold'>SAFIRI</span> KENYA</h3>
        <ul className='text-white font-bold p-4  '>
          <li className='p-4 text-2xl md:text-4xl z-20'>Home</li>
          <li className='p-4 text-2xl md:text-4xl z-20'>About</li>
          <li className='p-4 text-2xl md:text-4xl z-20'>Destinations</li>
          <li className='p-4 text-2xl md:text-4xl z-20'>Cultures</li>
          <li className='p-4 text-2xl md:text-4xl z-20'>Foods</li>
          <li className='p-4 text-2xl md:text-4xl z-20'>Pricings</li>

        </ul>
      </div>
      <div>
        <h3 className=' md:text-4xl font-bold text-green-500'><span className='text-orange-500 '>SAFIRI</span> KENYA</h3>
      </div>

    </div>
  )
}

export default Navbar