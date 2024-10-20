import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log('clicked')
    setNav(!nav)
  }

  return (
    <nav className="bg-slate-800 shadow relative z-30">
      <div className="container mx-auto px-8 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className='hidden md:flex'>
            <a className="text-slate-400 text-xl font-Orbitron font-bold md:text-2xl hover:text-gray-700" href="/">FUTURIST</a>
          </div>

          {/* Mobile menu button */}
          <div className="flex flex-row justify-between items-center md:hidden w-full">
            <div className='flex flex-row items-center'>
              <RiMenu2Fill color="white" size={20} className='mr-4' onClick={handleNav} />
              <a className="text-slate-400 text-base font-Orbitron font-bold hover:text-gray-700" href="/">FUTURIST</a>
            </div>
            <div className='flex flex-row'>
              <div className="flex justify-center mr-4 bg-slate-600 p-3 rounded-full">
                <a className="relative text-slate-200 hover:text-slate-400" href="/">
                  <IoSearchOutline size={20} />
                </a>
              </div>
              <div className="flex flex-row justify-center bg-slate-600 p-3 rounded-full">
                <a className="relative text-slate-200 hover:text-slate-400 mx-2" href="/">
                  <MdOutlineShoppingCart size={20} />
                </a>
                <a className="relative text-slate-200 hover:text-slate-400 mx-2" href="/">
                  <MdOutlineAccountCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex flex-row md:mx-6 bg-slate-600 py-3 rounded-full">
            <a className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0" href="/">Home</a>
            <a className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0" href="/">Shop</a>
            <a className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0" href="/">Contact</a>
            <a className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0" href="/">About</a>
          </div>
          <div className="flex justify-center md:block md:mx-6 bg-slate-600 p-3 rounded-full">
            <a className="relative text-slate-200 hover:text-slate-400" href="/">
              <IoSearchOutline size={20} />
            </a>
          </div>
          <div className="flex flex-row justify-center bg-slate-600 p-3 rounded-full">
            <a className="relative text-slate-200 hover:text-slate-400 mx-2" href="/">
              <MdOutlineShoppingCart size={20} />
            </a>
            <a className="relative text-slate-200 hover:text-slate-400 mx-2" href="/">
              <MdOutlineAccountCircle size={20} />
            </a>
          </div>
        </div>
        <div className={nav ? "fixed z-30 left-0 top-0 w-3/5 h-full bg-slate-800  ease-in-out duration-500 md:hidden" : "fixed left-[-100%] md:hidden"}>
          <div className="flex flex-col px-4 py-6">
            <div onClick={handleNav} className="block md:hidden">
              {nav && <VscChromeClose color="white" size={25} className='mb-6' />}
            </div>
            <a className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400 " href="/">Home</a>
            <a className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400" href="/">Shop</a>
            <a className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400" href="/">Contact</a>
            <a className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400" href="/">About</a>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
