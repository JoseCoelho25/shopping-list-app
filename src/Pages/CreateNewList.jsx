import React, {useState} from 'react'
import List from "../assets/imgs/shopping-list.png";
import {Link} from "react-router-dom";

function CreateNewList( {setCreate} ) {
    const [input, setInput] = useState("");
    

    const handleClick = () => {
        setCreate(input)
      }
    
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-center text-4xl mt-36 font-bold">
        Create New List
      </h1>
      <div className="flex relative">
        <img src={List} alt="list" className="absolute w-8 inset-x-20 inset-y-11" />
        <input type="text" name="Enter list name" id="oi" placeholder='Enter list name' className="mt-10 p-2 pl-12 flex mx-auto  rounded-lg  shadow-lg shadow-slate-400" 
        onChange={(e)=>setInput(e.target.value)}
        />
      </div>
      <div className="flex justify-center space-x-12 mt-20">
          <input 
          type="button" 
          value="Cancel" 
          className="bg-gray-500 text-white rounded-full px-4 py-2 text-xl" />
          <Link to="/">
          <input 
          type="button" 
          value="Create" 
          className="text-xl bg-gradient-to-r from-[#F26C6D] to-[#C65757] px-4 py-2 rounded-full text-white flex"
          onClick={handleClick}
          />
          </Link> 
        </div>
      
      
    </div>
  )
}

export default CreateNewList