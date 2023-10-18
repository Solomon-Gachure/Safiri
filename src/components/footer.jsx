import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[1400px] bg-cyan-700'>
            <div className='grid grid-cols-3 md:grid-cols-4 p-2 py-4 '>
                <div  >
                    <h3  className='font-bold text-yellow-500'>About</h3>
                    <ul className='text-white font-bold'>
                        <li >Team</li>
                        <li >Contact</li>
                        <li >Location</li>
                        <li >Socials</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-yellow-500'>Legals</h3>
                    <ul className='text-white font-bold'>
                        <li>Claims</li>
                        <li>Laws</li>
                        <li>Report</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-yellow-500 '>Promotions</h3>
                    <ul className='text-white font-bold'>
                        <li>Discount</li>
                        <li>Bonuses</li>
                        <li>Stipends</li>
                        <li>Suprises</li>
                    </ul>
                </div>
                <div className=''>
                    <h3 className='font-bold text-yellow-500'>Newsletter</h3>
                    <p className='font-bold text-white'>To get our monthly newsletter, subscribe as below</p>
                    <form className='pt-2 flex flex-col gap-2 '>
                        <input className='p-2 rounded-sm outline-none' type="text" placeholder='Enter Email' />
                        <button className='p-2 bg-red-500 text-white font-bold rounded-lg w-[100px] flex items-center'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer