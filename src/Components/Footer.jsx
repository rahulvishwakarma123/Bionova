import React from 'react'
import FooterCol1 from './FooterCol1'
import FooterCol2 from './FooterCol2'
import FooterCol3 from './FooterCol3'
import FooterCol4 from './FooterCol4'

const Footer = () => {
  return (
    <div className='p-8 flex max-lg:flex-col max-lg:p-4 bg-[#441f78] text-white justify-around max-lg:py-10'>
        <FooterCol1/>
        <FooterCol2/>
        <FooterCol3/>
        <FooterCol4/>
    </div>
  )
}

export default Footer