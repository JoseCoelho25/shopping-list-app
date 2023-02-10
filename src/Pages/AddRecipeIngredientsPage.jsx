import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import PinkButton from '../Components/PinkButton';
import MainLayout from '../Layouts/MainLayout';

function AddRecipeIngredientsPage() {
  const params = useParams();
  const dataRecipe = params.recipe;

  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState("");
  
  
  
  const [recipeIngredients, setRecipeIngredients] = useState(() => {
    const storedIngredients = localStorage.getItem(`${dataRecipe}-recipeingredients`);
    return storedIngredients ? JSON.parse(storedIngredients) : [];
  });

  function handleClick () {
    setModalOpen(false);
    setRecipeIngredients([...recipeIngredients, input]);
    localStorage.setItem(`${dataRecipe}-recipeingredients`, JSON.stringify([...recipeIngredients, input]));
  }

  
  function handleCancel(){
      setModalOpen(false)
      setInput("")
  }

  function handleRemove(index){
    const newListValue = [...recipeIngredients];
      newListValue.splice(index, 1);
      setRecipeIngredients(newListValue);
      localStorage.setItem(`${dataRecipe}-recipeingredients`, JSON.stringify(newListValue));
  }

  
  return (
    <div>
      <MainLayout>
        <Header title={dataRecipe}/>
      <div className="h-screen fixed top-20 left-0 container w-screen">
        <div className="h-3/5 overflow-y-auto overscroll-auto mx-auto mt-6 space-y-4 px-6 text-3xl w-full">
          {recipeIngredients.map((ingredient, index) => 
          <div className="flex justify-between" key={index} >
            <div className="flex items-baseline space-x-4 px-2">
              {ingredient}
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

export default AddRecipeIngredientsPage