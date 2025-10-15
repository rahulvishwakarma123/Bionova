import React from 'react'
import Link from './Link'

const FooterLinks1 = () => {
  return (
    <div>
        <h1 className='text-xl font-medium max-lg:text-lg'>Navigation</h1>
        <ul>
            <Link link={''} linkName={'Home'}/>
            <Link link={''} linkName={'About Us'}/>
            <Link link={''} linkName={'Leadership'}/>
            <Link link={''} linkName={'Community Program'}/>
            <Link link={''} linkName={'Values'}/>
            <Link link={''} linkName={'Quality Policy'}/>
            <Link link={''} linkName={'Login'}/>
        </ul>
    </div>
  )
}

export default FooterLinks1