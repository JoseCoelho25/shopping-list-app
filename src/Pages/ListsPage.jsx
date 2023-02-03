import React, {useState} from 'react'
import MainLayout from '../Layouts/MainLayout'
import {Link} from "react-router-dom";

function ListsPage() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <MainLayout>
        <div className="flex bg-gradient-to-r from-[#f3977a] to-[#ef4876] pb-2">
            <div className="w-1/4">
            <button className="w-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 
            <div className="text-2xl">X</div>
            : 
            <div className="text-2xl">&#9776;</div>}
            </button>
            {isOpen && <div className=" grid grid-cols-1 hover:bg-blue-400">
                <Link to="/" className="hover:bg-blue-400 rounded-lg p-1 ">Lists</Link>
                <Link to="/contact" className="hover:bg-blue-400 rounded-lg p-1">Recipes</Link>
                <Link to="/suggestion" className="hover:bg-blue-400 rounded-lg p-1">My account</Link>
            </div>
            }
        </div>
        <div className="w-1/2 text-center font-bold text-2xl">Lists</div>
        </div>
        
        <div className="fixed bottom-28 right-0 mr-10 bg-gradient-to-r from-[#F26C6D] to-[#C65757] px-4 py-2 rounded-full text-white flex">
           <div className="rounded-full pb-2 bg-[#C65757] text-4xl flex justify-center items-center h-8 w-8 mr-2">&#43;</div>
          <input type="button" value="New List" className="text-xl" />
        </div>
        
    </MainLayout>
  )
}

export default ListsPage;