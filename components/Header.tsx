import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="/Reddit_logo.png" layout="fill" />
      </div>
      <div className="flex items-center">
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  )
}

export default Header
