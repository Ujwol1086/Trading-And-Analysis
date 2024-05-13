import React from 'react'
import { Link } from 'react-router-dom'

function Navbar()
{
    return (
        <div>
            <nav className='flex justify-between items-center w-full px-10 py-2 bg-neutral-400'>
                <img src="./src/Images/Logo.jpg" alt='Not Found' className='w-16 h-16 rounded-full' />
                <input type='text' name='search' placeholder='Search For Company' className='w-80 h-10 p-2 rounded-md text-black focus:outline-cyan-200' />
                <ul className='flex gap-10'>
                    <li className='p-2 rounded-md hover:bg-slate-500 ease-in-out duration-150 '><Link to="/">Login</Link></li>
                    <li className='p-2 rounded-md hover:bg-slate-500 ease-in-out duration-150 '><Link to="/">Register</Link></li>
                    <li className='p-2 rounded-md hover:bg-slate-500 ease-in-out duration-150 '><Link to="/">Contact us</Link></li>
                    <li className='p-2 rounded-md hover:bg-slate-500 ease-in-out duration-150 '><Link to="/">About</Link></li>
                </ul>
            </nav>
            <nav className='flex justify-between px-10 h-10 bg-orange-500 items-center'>
                <ul className='flex gap-10'>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <select className='bg-transparent'>
                            <option>News</option>
                        </select>
                    </li>
                    <li>
                        <select className='bg-transparent'>
                            <option>Market</option>
                        </select>
                    </li>
                    <li>
                        <select className='bg-transparent'>
                            <option>IPO/FPO</option>
                        </select>
                    </li>
                    <li>
                        <select className='bg-transparent'>
                            <option>Services</option>
                        </select>
                    </li>
                    <li>
                        <select className='bg-transparent'>
                            <option>Tools</option>
                        </select>
                    </li>
                    <li>
                        <select className='bg-transparent'>
                            <option>Analysis</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
