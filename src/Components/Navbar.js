import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

function Navbar() {
    const [open,setOpen] = useState(false);

    return (
        <nav className="bg-gray-300 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Mokgethwa Kambule</h1>
                    </div>
            <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#about" className="text-gray-800 hover:text-green-600">About</a>
            <a href="#education" className="text-gray-800 hover:text-green-600">Education</a>
            <a href="#skills" className="text-gray-800 hover:text-green-600">Skills</a>
            <a href="#projects" className="text-gray-800 hover:text-green-600">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-green-600">Contact</a>
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
                 <div className="md:hidden bg-gray-300 opacity-75 px-2 pt-2 pb-3 space-y-1">
                    <a href="#home" className="block text-gray-800 hover:text-pink-600">Home</a>
                    <a href="#about" className="block text-gray-800 hover:text-pink-600">About</a>
                    <a href="#education" className="block text-gray-800 hover:text-pink-600">Education</a>
                    <a href="#skills" className="block text-gray-800 hover:text-pink-600">Skills</a>
                    <a href="#projects" className="block text-gray-800 hover:text-pink-600">Projects</a>
                    <a href="#contact" className="block text-gray-800 hover:text-pink-600">Contact</a>
                  </div>
               )}
        </nav>

    );
}

export default Navbar;