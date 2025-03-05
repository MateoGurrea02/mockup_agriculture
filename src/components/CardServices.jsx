import React, { useState } from 'react'
import mavic from '../assets/mavic.jpg'
import "@auroratide/flip-card/lib/define.js"

export default function CardServices({title, description, image}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const flipCard = () => {  
    setIsFlipped(!isFlipped)
  }


  return (
    <flip-card faceDown={isFlipped} onMouseEnter={flipCard} onMouseLeave={flipCard} >
      <section slot="front" className='w-90 h-[30em] rounded-xl relative shadow-lg'>
        <div className='p-5 absolute bg-cover bg-center bg-no-repeat w-full h-full rounded-xl ' style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className='absolute bottom-0 z-10 py-10 pl-5 bg-[url("assets/bgOpacity.svg")] w-full h-60 rounded-xl'>
          <h3 className='absolute bottom-5 text-3xl font-semibold text-white'>{title}</h3>
        </div>
      </section>
      <section slot="back" className='bg-white w-90 h-[30em] rounded-xl shadow-lg p-5'>
        <h3 className='text-3xl font-semibold text-left'>{title}</h3>
        <p className='text-left text-2xl mt-5'>{description}</p>
      </section>
    </flip-card>    
  )
}
