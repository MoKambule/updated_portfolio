import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



function Navbar() {
    const [open,setOpen] = useState(false);
    

    return (
        <nav className="bg-black/10 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-white">MLK.</h1>
                    </div>
            <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-green-600">Home</Link>
            <Link to="/about" className="text-white hover:text-green-600">About</Link>
            <Link to="/certificates" className="text-white hover:text-green-600">Certificates</Link>
       
          </div>   

          {/* mobile menu button */}
          <div className="flex md:hidden items-centre">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-800 focus:outline-none"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>

                </div> 
                </div>
            </div>
               {/* Mobile Menu */}

{open && (
  <div className="md:hidden absolute top-0 right-0 w-1/4 bg-white/20 backdrop-blur-sm px-4 py-4 space-y-2 shadow-lg">
    <Link to="/" onClick={() => setOpen(false)} className="block text-white hover:text-green-400">
      Home
    </Link>
    <Link to="/about" onClick={() => setOpen(false)} className="block text-white hover:text-green-400">
      About Me
    </Link>
    <Link to="/certificates" onClick={() => setOpen(false)} className="block text-white hover:text-green-400">
      Certificates
    </Link>
  </div>
)}


        </nav>

    );
}

export default Navbar;