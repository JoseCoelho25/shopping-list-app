import React, {useState} from 'react'
import Listcart from "../assets/imgs/shopping-list.png";
import MainLayout from '../Layouts/MainLayout'
import {Link} from "react-router-dom";


function ListPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [listValue, setListValue] = useState([]);
    

    function handleClick () {
        setModalOpen(false)
        setListValue([...listValue, input])
        setInput("")
      }

    function handleCancel(){
        setModalOpen(false)
        setInput("")
    }
  return (
    <div>
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
        
        {/* list display */}
        <div>
          {listValue.map((listValue, index) => <div key={index}>{listValue}</div>)}
        </div>

        
        {/* button to open modal */}
        <div className="fixed bottom-28 right-0 mr-10 bg-gradient-to-r from-[#F26C6D] to-[#C65757] px-4 py-2 rounded-full text-white flex">
            <div className="rounded-full pb-2 bg-[#C65757] text-4xl flex justify-center items-center h-8 w-8 mr-2">&#43;</div>
              <input type="button" value="New List" className="text-xl" onClick={() => setModalOpen(true)} />
        </div>

    </MainLayout>

    {modalOpen ? (
    <div className="w-screen mx-auto h-screen absolute bg-white ">
      <h1 className="text-center text-4xl mt-36 font-bold">
        Create New List
      </h1>
      <div className="flex relative">
        <img src={Listcart} alt="list" className="absolute w-8 inset-x-20 inset-y-11" />
        <input type="text" name="Enter list name" id="oi" placeholder='Enter list name' className="mt-10 p-2 pl-12 flex mx-auto  rounded-lg  shadow-lg shadow-slate-400" 
        onChange={(e)=>setInput(e.target.value)}
        />
      </div>
      <div className="flex justify-center space-x-12 mt-20">
          <input 
          type="button" 
          value="Cancel" 
          className="bg-gray-500 text-white rounded-full px-4 py-2 text-xl"
          onClick={handleCancel}
          />
          
          <input 
          type="button" 
          value="Create" 
          className="text-xl bg-gradient-to-r from-[#F26C6D] to-[#C65757] px-4 py-2 rounded-full text-white flex"
          onClick={handleClick}
          />
           
        </div>
    </div>
    ) : ("")}
    </div>
    
  )

}

export default ListPage