import { useState } from "react"
import hoverTextImage from '../../assets/hoverTextImage.svg'

export default function NavLinks({text}) {
  const [visible, setVisible] = useState(false)
  return (
    <li className={`relative z-10 flex items-center justify-center cursor-pointer hover:text-primary`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <a className='m-5 font-family-poppins'>{text}</a>
      <span className='absolute h-20 w-full flex justify-center items-center hover:animate-fade hover:animate-once hover:animate-duration-500 hover:animate-ease-in'>
        <img src={hoverTextImage} className={`absolute top-12 z-10  ${visible ? 'visible' : 'invisible'}`} alt="" />
      </span>
    </li>
  )
}
