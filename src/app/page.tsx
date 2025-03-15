import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="https://i.pinimg.com/736x/88/3e/a5/883ea581267a21edb120dde26ac048d7.jpg"
        alt="placeholder"
        layout="fill"
        className="object-cover object-center"
      />
    </div>
  )
}

export default page
