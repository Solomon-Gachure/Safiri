import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1400px]'>
        <div className='flex flex-col justify-center items-center py-4'>
            <h3 className='text-2xl md:text-4xl text-orange-500 font-bold'>Contact us:</h3>
            <p className='pt-2'>We value your sentiments, please keep in touch with us.</p>
        </div>
        <div className='flex flex-col justify-center md:w-full pb-4'>
              <form className='flex flex-col justify-center items-center gap-2' action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method='POST'>
                <input name='name' type="text" placeholder='Enter Name' className='p-2 w-[250px] md:w-[500px] border border-gray-500 outline-none rounded-sm ' />
                  <input name='email' type="text" placeholder='Enter Email' className='p-2 w-[250px] md:w-[500px] border border-gray-500 outline-none rounded-sm' />
                  <textarea name="message" id="" cols="30" rows="5" placeholder='Enter your Feedback' className='md:w-[500px] p-2 border border-gray-500 outline-none rounded-sm '></textarea>
                  <button className='p-2 rounded-xl bg-green-500 md:w-[200px] w-[200px] font-bold text-white md:text-2xl'>Submit</button>
            </form>
            
        </div>
    </div>
  )
}

export default Contact