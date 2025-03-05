import React from 'react'
import CardServices from './CardServices'
import mavic from '../assets/mavic.jpg'
import ilustrative1 from '../assets/ilustrative1.svg'
export default function Services() {
  return (
    <div className='bg-[url("assets/bgCrema.svg")] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-40' id='services'>
      <div className=''>
        <h3 className='font-family-covered text-secondary text-3xl text-center'>Our Services</h3>
        <h2 className='text-5xl font-family-poppins font-semibold text-center'>What we offer?</h2>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-15 mt-20 font-family-poppins'>
        <CardServices 
          title='Ecological Farming'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus et nisi fermentum.'
          image={mavic}/>
        <CardServices 
          title='Ecological Farming'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus et nisi fermentum.'
          image={ilustrative1}/>
        <CardServices 
          title='Ecological Farming'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus et nisi fermentum.'
          image={mavic}/>
        <CardServices 
          title='Ecological Farming'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus et nisi fermentum.'
          image={ilustrative1}/>
        <CardServices 
          title='Ecological Farming'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus et nisi fermentum.'
          image={mavic}/>
        <CardServices 
          title='Ecological Farming'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus et nisi fermentum.'
          image={ilustrative1}/>
      </div>

    </div>
  )
}
