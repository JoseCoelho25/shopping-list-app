import React, {useState} from 'react'
import Listcart from "../assets/imgs/shopping-list.png";
import MainLayout from '../Layouts/MainLayout'
import {Link} from "react-router-dom";
import Header from '../Components/Header';
import PinkButton from '../Components/PinkButton';


function ListPage() {
    const [modalOpen, setModalOpen] = useState(false);
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
        <Header titleName={`Lists`}/>

        {/* list display */}
        <div className="grid grid-col-1 mx-auto mt-6 space-y-4 px-6 text-3xl ">
          {listValue.map((value, index) => <Link to={`/${value}`} key={index} className="border-2 border-gray-500">{value}</Link>)}
        </div>

        
        {/* button to open modal */}
        <PinkButton setModalOpen={() => setModalOpen(true)}/>

    </MainLayout>

    {modalOpen ? (
    <div className="w-screen mx-auto h-screen absolute bg-white top-0 right-0">
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