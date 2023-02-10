import React, { useState } from 'react'
import {Link} from "react-router-dom";

function Header( props) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute w-screen z-20 flex bg-gradient-to-r from-[#f3977a] to-[#ef4876] pb-2">
            <div className="w-1/4">
            <button className="w-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 
            <div className="text-2xl">X</div>
            : 
            <div className="text-2xl">&#9776;</div>}
            </button>
            {isOpen && <div className=" mx-auto w-screen flex justify-around">
                <Link to="/" className="hover:bg-blue-400 rounded-lg p-1 ">Lists</Link>
                <Link to="/recipes" className="hover:bg-blue-400 rounded-lg p-1">Recipes</Link>
                <Link to="/account" className="hover:bg-blue-400 rounded-lg p-1">My account</Link>
            </div>
            }
            </div>
            <div className="w-1/2 text-center font-bold text-2xl">{props.title}</div>
    </div>
  )
}

export default Header