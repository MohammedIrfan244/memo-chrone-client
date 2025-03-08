import React from 'react'


const image : string ="https://i.pinimg.com/736x/2b/98/4c/2b984cc5d837c9e1002cdaa08d7226ca.jpg"

function Home() {
  return (
    <div className="h-screen flex items-center opacity-40 justify-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${image})` }}>
      <div className='w-80 h-[500px] rounded-lg border-2 border-white'>

      </div>
    </div>
  )
}

export default Home
