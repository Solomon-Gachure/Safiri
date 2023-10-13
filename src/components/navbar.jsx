import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  return (
    
          <div className='flex px-2 top-2 w-full items-center absolute text-black'>
              <div className=' p-4'>
        <AiOutlineMenu className='relative cursor-pointer z-50 ' size={30} />
              </div>
              <div>
        <h3 className=' md:text-4xl font-bold text-green-500'><span className='text-orange-500 '>SAFIRI</span> KENYA</h3>
              </div>
        
    </div>
  )
}

export default Navbar