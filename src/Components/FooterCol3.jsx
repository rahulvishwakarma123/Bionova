import React from 'react'
import Link from './Link'

const FooterCol3 = () => {
  return (
    <div className='basis-1/4 max-lg:hidden'>
        <h1 className='text-xl font-medium max-lg:text-lg pb-3'>Usefull Links</h1>
        <ul>
            <Link link={'#'} linkName={'Career'}/>
            <Link link={'#'} linkName={'Become our Premium Retailer'}/>
            <Link link={'#'} linkName={'PTR & PTS Calculator'}/>
        </ul>
    </div>
  )
}

export default FooterCol3