import { useState } from 'react';
import logo from '../assets/logo.png';
import {MdOutlineLanguage} from "react-icons/md";
import { FaXmark, FaBars } from "react-icons/fa6";
import {Link} from "react-scroll"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems =[
        {link:"Overview",path:"home"},
        {link:"Feature",path:"feature"},
        {link:"About",path:"about"},
        {link:"Pricing",path:"pricing"}
    ]
    return (
        <>
        <nav className='flex justify-between border-b bg-white md:px-14 p-4 max-w-screen-xl mx-auto text-primary font-semibold fixed top-0 right-0 left-0'>
         <div className='flex justify-between md:items-center'>
            <div className='md:flex '>
                <a href="/" ><img className='w-32 md:w-64 md:mr-12 ' src={logo} alt="logo" /></a>
                <ul className='md:flex hidden items-center space-x-12 '>
                    {
                        navItems.map(({link,path})=> <Link spy={true} smooth={true} activeClass='active' offset={-100} key={link} className='block hover:text-gray-500 cursor-pointer' to={path}>{link}</Link> )
                    }
                </ul>
            </div>
            <div className='md:flex flex-1 space-x-12 hidden md:fixed right-0 mr-12'>
                <a href='/' className='hidden lg:flex items-center hover:text-secondary'> <MdOutlineLanguage className='mr-2'/> Language</a>
                <button className='bg-secondary py-2 px-4 transtion-all duration-300 rounded hover:text-white hover:bg-indigo-600 hidden lg:flex'>Sign up</button>
            </div>
         </div>
         <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                    {
                        isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary'/>)
                    }
                </button>
         </div>
        </nav>
        <div className={`space-y-4 px-4 z-50 pt-20 pb-5 gradientBg ${isMenuOpen ? "block top-0 fixed w-full right-0 left-0 " : "hidden" }`}>
            {
                navItems.map(({link,path})=> <Link spy={true} smooth={true} activeClass='active' offset={-80} key={link} className='block hover:text-gray-500 cursor-pointer' to={path}>{link}</Link> )
            }
        </div>               
        </>
    );
};

export default Navbar;
