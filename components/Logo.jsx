import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'



const Logo = () => {
  return (
    <Link href="/">
      <Image 
        src="/assets/logo.svg"
        alt="logo"
        width={230}
        height={48}
      />
    </Link>
  )
}

export default Logo