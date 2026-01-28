import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



function Navbar() {
    const [open,setOpen] = useState(false);
    

    return (
        <nav className="bg-gray-300 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800">MLK.</h1>
                    </div>
            <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600">About</Link>
            <a href="#Certificates" className="text-gray-800 hover:text-green-600">Certificates</a>
       
          </div>   

          {/* mobile menu button */}
          <div className="flex md:hidden items-centre">
            <button
            onClick={() => setOpen(!open)}
            classname="text-gray-800 focus;outline-none"
            >
                {open ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <Bars3Icon className="h-6 w-6" />
                )}</button>
                </div> 
                </div>
            </div>
               {/* Mobile Menu */}
{open && (
  <div className="md:hidden absolute right-0 top-full w-1/4 bg-gray-300 opacity-90 px-4 py-1 space-y-2 shadow-lg">
    <Link to="/" onClick={() => setOpen(false)} className="block text-gray-800 hover:text-green-600">
      Home
    </Link>
    <Link to="/about" onClick={() => setOpen(false)} className="block text-gray-800 hover:text-green-600">
      About Me
    </Link>
    <a href="#Certificates" onClick={() => setOpen(false)} className="block text-gray-800 hover:text-green-600">
      Certificates
    </a>
  
  </div>
)}

        </nav>

    );
}

export default Navbar;