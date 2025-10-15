import React from 'react'

const Link = ({link, linkName}) => {
  return (
    <>
        <li className='duration-300 hover:text-[#FFc451]'><a href={link}>{linkName}</a></li>
    </>
  )
}

export default Link