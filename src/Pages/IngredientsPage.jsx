import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import PinkButton from '../Components/PinkButton';
import MainLayout from '../Layouts/MainLayout';

function IngredientsPage() {
  const params = useParams();
  const data = params.value;

  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState("");

  
  const [decorationStatus, setDecorationStatus] = useState(() => {
    const storedDecorationStatus = localStorage.getItem(`${data}-decorationStatus`);
    return storedDecorationStatus ? JSON.parse(storedDecorationStatus) : {};
  });
  
  
  const [ingredients, setIngredients] = useState(() => {
    const storedIngredients = localStorage.getItem(`${data}-ingredients`);
    return storedIngredients ? JSON.parse(storedIngredients) : [];
  });

  function handleClick () {
    setModalOpen(false);
    setIngredients([...ingredients, input]);
    localStorage.setItem(`${data}-ingredients`, JSON.stringify([...ingredients, input]));
  }

  
  function handleCancel(){
      setModalOpen(false)
      setInput("")
  }

  function handleRemove(index){
    const newListValue = [...ingredients];
      newListValue.splice(index, 1);
      setIngredients(newListValue);
      localStorage.setItem(`${data}-ingredients`, JSON.stringify(newListValue));
  }


  // funçao que manda para um objeto vazio true ou falso quando utilizado com input checkox
  // function handleCheckboxChange(index){
  //   const updatedStatus = { ...decorationStatus };
  //   updatedStatus[index] = !updatedStatus[index];
  //   setDecorationStatus(updatedStatus);
  // }

  function handleCheckboxChange(index){
    const updatedStatus = { ...decorationStatus };
    updatedStatus[index] = !updatedStatus[index];
    setDecorationStatus(updatedStatus);
    localStorage.setItem(`${data}-decorationStatus`, JSON.stringify(updatedStatus));
  }
  
  
  return (
    <div>
      <MainLayout>
        <Header title={data}/>
      <div className="h-screen fixed top-20 left-0 lg:left-5 2xl:left-48 container w-screen">
        <div className="h-3/5 overflow-y-auto overscroll-auto mx-auto mt-6 space-y-4 px-6 text-3xl w-full lg:w-1/2">
          {ingredients.map((ingredient, index) => 
          <div className="flex justify-between" key={index} >
            <div className="flex items-baseline space-x-4 px-2">
              <input 
              type="checkbox"  
              checked={decorationStatus[index]}
              className="border-2 border-gray-500 w-4 h-4" 
              onChange={()=>handleCheckboxChange(index)}/>
            {decorationStatus[index] ? (
              <div className="text-2xl font-bold line-through decoration-red-500">{ingredient}</div>
            ) : (
              <div className="text-2xl font-bold">{ingredient}</div>
            )}
            </div>
            <input 
            type="button" 
            value="Remove" 
            className="border-2 rounded-lg text-sm p-2 bg-[#F26C6D] text-white"
            onClick={()=>handleRemove(index)}/>
          </div>)}
        </div>
      </div>
        <PinkButton name={`Add Item`} setModalOpen={() => setModalOpen(true)}/>
      </MainLayout> 

      {modalOpen ? (
      <div className="w-screen mx-auto h-screen absolute bg-white top-0 right-0">
        <h1 className="text-center text-4xl mt-36 font-bold">
          Add Item
        </h1>
        <div className="flex relative">
          <input type="text" name="Item name" id="oi" placeholder='Enter item name' className="mt-10 p-2 pl-12 flex mx-auto  rounded-lg  shadow-lg shadow-slate-400" 
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

export default IngredientsPage