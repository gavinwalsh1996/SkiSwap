import React, { useState, useEffect } from "react";

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() { // Navbar receives logo and links props from parent


    //State to open and close nav bar on mobile
    const [isOpen, setIsOpen] = useState(false);

    //State to track scroll for navbar
    const [scrolled, setScrolled] = useState(false);

    //Function to handle scroll event for navbar and to update the scroll state.
    //Use effect hook sets up an event listener on the window object and calls a callback function when the event is fired that updates the state.
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);



  return (

    <nav className={`bg-transparent text-black py-3 px-5 flex justify-between items-end
        flex-col lg:flex-row border-b-2 border-white fixed w-full
        z-50 ${scrolled ? 'bg-slate-300 dark:bg-slate-900' : ''}`}>

        {/* Logo */}
        <span className="lg:block hidden cursor-pointer font-bold text-3xl">Logo</span>

        {/* Button for mobile nav. OnClick function toggles the state value*/}
        {/* Ternary operator changes icon based on current value of state*/}
        <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </button>

        {/* Header Links */}
        {/* Ternary operator toggles the display value of elements based on current state */}
      <div className={`${ isOpen ? "block" : "hidden" } lg:flex lg:items-center lg:w-auto h-screen lg:h-20`} >
         {/* I added background blur to contrast the mobile header as the bg color only starts to show on scroll */}
        <button className="border-black border-2 w-24 h-12 rounded-3xl hover:bg-yellow-300"><span className="font-bold text-xl">Sign Up</span></button>
      </div>
    </nav>
  );
}

export default Navbar;

