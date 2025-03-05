import React from 'react'
import Button from './Button'
import mainImage from '../assets/mainImage.svg'
import sunbeam from '../assets/sunbeam.svg'

export default function Hero() {
  return (
    <div className='relative '>
      <span className='absolute -z-10 top-0 right-0'>
        <span className='absolute top-0 left-0'>
          <img src={sunbeam} alt="" />
        </span>
        <span className='absolute top-0 left-40'>
          <img src={sunbeam} alt="" />
        </span>
        <img src={mainImage} className='' alt="" />
      </span>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center font-family-poppins">
          <h1 className="text-6xl font-bold text-secondary-text">Welcome to our <span className='text-secondary'>website</span></h1>
          <p className="text-lg mt-5 text-secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button text='Read more' />
        </div>
      </div>
    </div>
  )
}
