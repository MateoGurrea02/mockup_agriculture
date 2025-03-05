import { useEffect, useState } from 'react'
import logoMini from '../../assets/logoMini.svg'
import NavLinks from './NavLinks'

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false)
  const handleMenu = () => {
    setMenuVisibility(!menuVisibility)
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
          <button onClick={handleMenu} className='absolute z-20 right-0 text-2xl text-black p-5'>
            {menuVisibility ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>              
            }
          </button>
        </div>
        <ul className={`lg:col-start-3 xl:col-start-4 col-span-6 md:col-start-3 md:flex ${menuVisibility ? 'flex flex-wrap items-center justify-center': 'hidden'}`}>  
          <NavLinks text='Home' href='/'/> 
          <NavLinks text='About us' href='#aboutus'/>
          <NavLinks text='Services' href='#services'/>
          <NavLinks text='Contact' href='#contact'/>       
        </ul>
      </div>
    </div>
  )
}
