import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-slate-800 shadow w-full z-30 fixed">
      <div className="w-full px-8 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className='hidden md:flex'>
            <p className="text-slate-400 text-xl font-Orbitron font-bold md:text-2xl hover:text-gray-700"><Link to="/">FUTURIST</Link></p>
          </div>

          {/* Mobile menu button */}
          <div className="flex flex-row justify-between items-center md:hidden w-full">
            <div className='flex flex-row items-center'>
              <RiMenu2Fill color="white" size={20} className='mr-4' onClick={handleNav} />
              <p className="text-slate-400 text-base font-Orbitron font-bold hover:text-gray-700"><Link to="/">FUTURIST</Link></p>
            </div>
            <div className='flex flex-row'>
              <div className="flex justify-center mr-4 bg-slate-600 p-3 rounded-full" onClick={toggleSearchPopup}>
                <IoSearchOutline size={20} className="text-slate-200 hover:text-slate-400" />
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
            <Link to="/" className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0">Home</Link>
            <Link to="shop" className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0">Shop</Link>
            <Link className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0" to="contact">Contact</Link>
            <Link className="my-1 text-sm text-slate-200 font-Montserrat hover:text-slate-400 md:mx-4 md:my-0" to="about">About</Link>
          </div>
          <div className="flex justify-center md:block md:mx-6 bg-slate-600 p-3 rounded-full" onClick={toggleSearchPopup}>
            <IoSearchOutline size={20} className="text-slate-200 hover:text-slate-400" />
          </div>
          <div className="flex flex-row justify-center bg-slate-600 p-3 rounded-full">
            <Link to="login" className="relative text-slate-200 hover:text-slate-400 mx-2">
              <MdOutlineAccountCircle size={20} />
            </Link>
            <a className="relative text-slate-200 hover:text-slate-400 mx-2" href="/">
              <MdOutlineShoppingCart size={20} />
            </a>
          </div>
        </div>
        <div className={nav ? "fixed z-30 left-0 top-0 w-3/5 h-full bg-slate-800 ease-in-out duration-500 md:hidden" : "fixed left-[-100%] md:hidden"}>
          <div className="flex flex-col px-4 py-6">
            <div onClick={handleNav} className="block md:hidden">
              {nav && <VscChromeClose color="white" size={25} className='mb-6' />}
            </div>
            <p className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400"><Link to="/">Home</Link></p>
            <p className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400"><Link to="/shop">Shop</Link></p>
            <p className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400"><Link to="/contact">Contact</Link></p>
            <p className="my-3 text-lg text-slate-200 font-Montserrat hover:text-slate-400"><Link to="/about">About</Link></p>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-800 w-[500px] py-10 px-6 md:p-10 rounded-lg shadow-lg relative">
            <button onClick={toggleSearchPopup} className="absolute top-2 right-2 text-slate-400">
              <VscChromeClose size={22} />
            </button>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-2 bg-slate-600 rounded-md text-slate-200 focus:outline-none"
                placeholder="Search our store..."
              />
              <button className="ml-2 bg-slate-950 p-2 rounded-md flex items-center text-slate-300 hover:text-slate-400">
                <IoSearchOutline size={20} />
                <p className='pl-2 text-lg'>Search</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
