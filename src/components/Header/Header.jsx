import { useEffect, useState } from 'react'
import logoMini from '../../assets/logoMini.svg'
import NavLinks from './NavLinks'

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false)
  const handleMenu = () => {
    setMenuVisibility(!menuVisibility)
    console.log(menuVisibility)
  }
  const screenSize = window.innerWidth

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setMenuVisibility(false)
      }
    })
  }, [window.innerWidth])

  return (
    <div className={`absolute w-full lg:h-35 bg-[url(assets/headerFigure.svg)] bg-cover bg-center bg-no-repeat`}>
      <div className="justify-center items-center p-5 mx-10 grid grid-cols-5" >  
        <div className='flex lg:col-start-2 md:col-span-1 col-span-4'>
          <a href="/" className='z-10'>
            <img src={logoMini} alt="Logo" className='' />
          </a>
        </div>
        <div className='col-start-5 md:hidden flex justify-center items-center'>
          <button onClick={handleMenu} className='fixed z-20 right-0 text-2xl text-gray-300 p-5'>
            <i className={`fa-solid ${menuVisibility ? 'fa-x':'fa-bars'}`}></i>
          </button>
        </div>
        <ul className={`lg:col-start-3 xl:col-start-4 col-span-6 md:col-start-3 md:flex ${menuVisibility ? 'flex flex-wrap items-center justify-center': 'hidden'}`}>  
          <NavLinks text='Home' /> 
          <NavLinks text='About us' />
          <NavLinks text='Services' />
          <NavLinks text='Contact' />       
        </ul>
      </div>
    </div>
  )
}
