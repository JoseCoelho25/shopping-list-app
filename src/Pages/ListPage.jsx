import React, {useState, useEffect} from 'react'
import Listcart from "../assets/imgs/shopping-list.png";
import MainLayout from '../Layouts/MainLayout'
import {Link} from "react-router-dom";
import Header from '../Components/Header';
import PinkButton from '../Components/PinkButton';


function ListPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [listValue, setListValue] = useState([]);
    
    
    useEffect(() => {
      try {
        const listValue = JSON.parse(localStorage.getItem("lists")) || [];
        setListValue(listValue);
      } catch (e) {
        console.error(e);
        localStorage.clear();
      }
    }, []);


    function handleClick () {
      setModalOpen(false)
      const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
      setListValue([...listValue, capitalizedInput])
      setInput("")
      localStorage.setItem("lists", JSON.stringify([...listValue, capitalizedInput]))
    }

    function handleCancel(){
        setModalOpen(false)
        setInput("")
    }

    function removeList(index) {
      const newListValue = [...listValue];
      newListValue.splice(index, 1);
      setListValue(newListValue);
      localStorage.setItem("lists", JSON.stringify(newListValue));
      localStorage.removeItem(`${listValue[index]}-ingredients`)
  }

  return (
    <div>
    <MainLayout>
        <Header title={`Lists`}/>

        {/* list display */}
        <div className="grid grid-col-1 mx-auto mt-6 space-y-4 px-6 text-3xl font-bold">
          {listValue.map((value, index) => 
          <div key={index} className="flex border-2 drop-shadow-2xl shadow-xl rounded-lg py-2 pl-4 justify-between">
            <Link to={`/${value}`}>{value}</Link>
            <input type="button" value="Remove" onClick={()=>{removeList(index)}} className="border-2 rounded-lg text-sm p-2 bg-[#F26C6D] text-white"/>
          </div>)}
        </div>
        
        {/* button to open modal */}
        <PinkButton setModalOpen={() => setModalOpen(true)} name={`New List`}/>
    </MainLayout>

    {modalOpen ? (
    <div className="w-screen mx-auto h-screen absolute bg-white top-0 right-0">
      <h1 className="text-center text-4xl mt-36 font-bold">
        Create New List
      </h1>
      <div className="flex relative w-2/3 mx-auto">
        <img src={Listcart} alt="list" className="absolute w-8 bottom-0 left-0 ml-2" />
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