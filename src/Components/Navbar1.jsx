import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <>
      <div className='NAVBAR z-50 bg-[#702f8a] text-white h-[90px] sticky top-0 flex justify-between items-center items-center px-10 w-screen max-lg:px-4'>
        <div className='LOGO flex items-center justify-center gap-3'>
          <img  className='max-lg:w-30' src="images/logo1.png" alt="Logo" />
        </div>
        <ul className='flex items-center justify-end gap-8 h-10 text-[18px] max-md:hidden'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Opportunity</li>
          <li>Reasearch & Technology</li>
          <li>Contact Us</li>
          <li>Gallery</li>
          <li>Login</li>
        </ul>
        <div className='hidden max-md:block max-lg:min-[16px] max-lg:h-[24px]'>
          <button
            type='button'
            aria-controls='mobileNav'
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#211F5E]'
          >
            <img src="images/burger.png" alt="Menu" />
          </button>
        </div>
      </div>
      {isMenuOpen && <div
        id='mobileNav'
        className={` z-40 w-full bg-white border-t fixed top-90px border-gray-200 flex flex-col justify-center items-center gap-5 text-xl py-4`}
      >
        <a onClick={() => setIsMenuOpen(false)} href="#">Home</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">About Us</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Products</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Opportunity</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Reasearch & Technology</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Contact Us</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Gallery</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Login</a>
        
      </div>} 
    </>
  )
}

export default Navbar