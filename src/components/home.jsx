import React from 'react'

const Home = () => {
    return (
        <div className='w-full h-screen  '>
            <img className='top-0 left-0  w-full h-full object-cover' src="https://images.unsplash.com/photo-1511282491208-d9b80e3deaee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxtdCUyMGtlbnlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="254" />
            <div className='absolute top-0 bg-black/20 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center px-4 py-2'>
                <h3 className='text-5xl font-bold text-white' >Welcome to <span className='text-green-500 '>SAFIRI</span><span className='font-bold text-orange-500'> APP</span>,</h3>
                <p className='text-2xl pb-2 z-10 text-white '>Welcome to the Land of Beauty, Opportunities and Diversity</p>
                <p className='text-2xl pb-2  z-10 text-white'>We make you feel Home away from Home</p>
                <div className='flex gap-4 px-4'>
                    <button className='font-bold bg-green-500 text-white p-2  hover:shadow-xl rounded-full '>Book Now</button>
                    <button className='font-bold bg-orange-500 text-white p-2 rounded-full'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Home