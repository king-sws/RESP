import { useState } from "react"
import {Nav} from "../contants/Nav"
import { Menu , X } from 'lucide-react'
import Button from "./Button"
import OutsideClickHandler from 'react-outside-click-handler';


const Navbar = () => {
    const [isopen , setisopen] = useState(false)
    const toggle = ()=>(
        setisopen(!isopen)   
    )
    
  return (
    <header className="bg-[var(--black)] w-full " >
        <nav className="flex paddings innerWidth justify-between items-center" >
            <img src="./logo.png" alt="H" width={100} height={100} className="cursor-pointer"  />
            <ul className="hidden md:flex items-center justify-center" >
                {Nav.map((link , index)=>(
                    <li className={`text-white hover:text-sky-400 font-normal ll  cursor-pointer ${index === Nav.length ? 'mr-0' : 'mr-10'}`} key={link} >
                        <a href={`#${link}`} >{link}</a>
                    </li>
                ))}
            <Button title={'Login'} />
            </ul>
        {/* Mobile */}
        {/* Mobile */}
            <div className="flex md:hidden cursor-pointer md:cursor-none" onClick={toggle} >
                {isopen ?  <X color='white' /> :<Menu color='white' />  }
            </div>
            <div className={`absolute sidebar rounded-md top-20 ${isopen ? "scale-y-100 opacity-100 visible" : 'scale-y-50 opacity-0 hidden'} right-6 origin-top p-2 w-auto bg-slate-800 transition-all z-50`}>
            <OutsideClickHandler onOutsideClick={()=> setisopen(false)} >
                <nav className="flex flex-col space-y-2 p-4  ">
                    {Nav.map((link , index)=>(
                        <li key={index} className="list-none text-white py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400" onClick={toggle} >
                            <a href={`#${link}`} >{link}</a>
                        </li>
                    ))}
                    <Button title={'Login'} />
                </nav>
            </OutsideClickHandler>
            </div>
        {/* Mobile */}
        
        </nav>
    </header>
  )
}

export default Navbar
