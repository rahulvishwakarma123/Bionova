import React from 'react'
import { Instagram, Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';


const FooterCol4 = () => {
  return (
    <div className='basis-1/4 px-6 max-lg:pt-5'>
        <h1 className='text-xl font-medium max-lg:text-lg pb-3'>Contact Us</h1>
        <div className='pb-3 flex gap-3'>
            
            <a href=""><Twitter className='duration-300 cursor-pointer hover:text-[#FFc451]'/></a>
            <a href=""><Facebook className='duration-300 cursor-pointer hover:text-[#FFc451]'/></a>
            <a href=""><Instagram className='duration-300 cursor-pointer hover:text-[#FFc451]'/></a>
            <a href=""><Linkedin className='duration-300 cursor-pointer hover:text-[#FFc451]'/></a>
        </div>
        <p>#55 & 56, Bikasipura Main Road, Yelachenahalli, Behind J.C. Industrial Area, Bangalore- 560062, India.</p>
    </div>
  )
}

export default FooterCol4