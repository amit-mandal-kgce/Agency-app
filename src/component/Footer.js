import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <main className="bg-cyan-950 mt-16">
      <div className="flex flex-col md:flex-row px-10 py-4">
        <div className="flex flex-col w-full py-4 gap-3">
          <h2 className="text-2xl font-bold py-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
            IndMart
          </h2>
          <h1 className="text-white text-center py-4">
            Created by <span className="text-accent">AMIT</span> | &copy; 2023
            All rights reserved.
          </h1>
          <li className="grid grid-cols-4 text-cyan-400 gap-4 text-2xl items-center">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
          </li>
        </div>
        <div className="flex flex-col text-center text-white w-full py-4 gap-3">
          <h1 className="text-accent font-medium py-3">CPMPANY</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/testimonial">Testimonial</NavLink>
        </div>
        <div className="flex flex-col text-center text-white w-full py-4 gap-3">
          <h1 className="text-accent font-medium py-3">SUPPORT</h1>
          <NavLink to="/helpcenter">Help Center</NavLink>
          <NavLink to="/terms">Terms of Service</NavLink>
          <NavLink to="/legal">Legal</NavLink>
          <NavLink to="/policypriv">Privacy Policy</NavLink>
          <NavLink to="/status">Status</NavLink>
        </div>
        <div className="flex flex-col text-center w-full py-4 gap-3">
          <h1 className="text-accent font-medium py-3">STAY UP TO DATE</h1>
          <h2 className="bg-white text-gray-400 text-xs sm:text-base rounded-md p-2">
            amitmandalbetai@gmail.com
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Footer
