import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <menu>
      <div className="grid md:grid-cols-3 py-3 w-screen fixed bg-white drop-shadow-xl md:h-16 z-50">
        <div className="grid grid-cols-2 ">
          <div
            className="md:hidden text-2xl pl-2 text-red-700"
            onClick={toggleBox}
          >
            {showBox ? <RxCross1 /> : <IoMdMenu />}
          </div>
          <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
            IndMart
          </h2>
        </div>
        <div className="hidden md:block">
          <div
            className="grid md:grid-cols-5 gap-2 text-base font-semibold md:py-2 lg:text-md my-5 md:my-0 text-center text-accent">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/testimonial">Testimonial</NavLink>
          </div>
        </div>
        {showBox && (<div
        className="grid grid-rows-5 md:grid-cols-5 gap-2 text-sm md:py-2 lg:text-md my-5 md:my-0 text-center text-accent "
        onClick={toggleBox}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/testimonial">Testimonial</NavLink>
      </div>)}
        <div className="text-center text-md hidden md:block">
          <button className="bg-accent rounded-sm px-2 py-1 text-white">
            Login
          </button>
        </div>
        {showBox && (<div className="text-center text-md" onClick={toggleBox}>
          <button className="bg-accent rounded-sm px-2 py-1 text-white">
            Login
          </button>
        </div>)}
      </div>
    </menu>
  );
}

export default Navbar;
