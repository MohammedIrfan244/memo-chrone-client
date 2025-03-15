import Image from 'next/image'
import React from 'react'

function UserProfile() {
  return (
    <div className='w-12 h-12 bg-white rounded-full flex items-center overflow-hidden justify-center'>
      <Image
        alt='profile'
        width={50}
        height={50}
        src='https://i.pinimg.com/736x/a5/e5/d8/a5e5d8d69e7278818a51f3f908553a0a.jpg'/>
    </div>
  )
}

export default UserProfile
