import React from 'react'
import Button from './Button'
import mainImage from '../assets/mainImage.svg'
import sunbeam from '../assets/sunbeam.svg'
import line from '../assets/line.svg'
import logoWithe from '../assets/logoWithe.svg'

export default function Hero() {
  return (
    <div className='relative '>
      <div className='absolute -z-10 top-0 right-0 h-full w-full bg-[url(assets/mainImage.svg)] bg-cover bg-center bg-no-repeat'>
        <span className='absolute top-0 left-0 md:flex hidden'>
          <img src={sunbeam} alt="" />
        </span>
        <span className='absolute top-0 left-40 md:flex hidden'>
          <img src={sunbeam} alt="" />
        </span>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center font-family-poppins flex flex-col justify-center items-center">
          <img src={logoWithe} className="w-3/5" alt="" />
          <h1 className="md:text-6xl text-5xl font-bold text-secondary-text my-5">Welcome to our <span className='text-secondary relative'>
              website
              <span className='absolute -bottom-5 left-0 '>
                <img src={line} alt="" />
              </span>
            </span>
          </h1>
          <Button text='Read more' />
        </div>
      </div>
    </div>
  )
}
