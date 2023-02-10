import React, {useState, useEffect} from 'react'
import Listcart from "../assets/imgs/shopping-list.png";
import MainLayout from '../Layouts/MainLayout'
import {Link} from "react-router-dom";
import Header from '../Components/Header';
import PinkButton from '../Components/PinkButton';


function RecipesPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [input, setInput] = useState("");
    const [recipeValue, setRecipeValue] = useState([]);
    
    useEffect(() => {
      try {
        const recipeValue = JSON.parse(localStorage.getItem("recipelists")) || [];
        setRecipeValue(recipeValue);
      } catch (e) {
        console.error(e);
        localStorage.clear();
      }
    }, []);


    function handleClick () {
      setModalOpen(false)
      const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
      setRecipeValue([...recipeValue, capitalizedInput])
      setInput("")
      localStorage.setItem("recipelists", JSON.stringify([...recipeValue, capitalizedInput]))
    }

    function handleCancel(){
        setModalOpen(false)
        setInput("")
    }

    function removeRecipeList(index) {
      const newRecipeValue = [...recipeValue];
      newRecipeValue.splice(index, 1);
      setRecipeValue(newRecipeValue);
      localStorage.setItem("recipelists", JSON.stringify(newRecipeValue));
      localStorage.removeItem(`${recipeValue[index]}-recipeingredients`)
  }

  return (
    <div>
    <MainLayout>
        <Header title={`Recipes`}/>

        {/* list display */}
        <div className="h-screen fixed top-20 left-0 container w-screen">
          <div className="h-3/5 overflow-y-auto overscroll-auto mx-auto mt-6 space-y-4 px-6 text-3xl font-bold w-full">
          {recipeValue.map((recipe, index) => 
          <div key={index} className="flex border-2 drop-shadow-2xl shadow-xl rounded-lg py-2 pl-4 justify-between min-h-14 items-center">
            <Link to={`/recipes/${recipe}`}>{recipe}</Link>
            <input type="button" value="Remove" onClick={()=>{removeRecipeList(index)}} className="border-2 rounded-lg text-sm p-2 bg-[#F26C6D] text-white h-10"/>
          </div>)}
          </div>
        </div>
        
        
        {/* button to open modal */}
        <PinkButton setModalOpen={() => setModalOpen(true)} name={`Create Recipe`}/>
    </MainLayout>

    {modalOpen ? (
    <div className="w-screen mx-auto h-screen absolute bg-white top-0 right-0">
      <h1 className="text-center text-4xl mt-36 font-bold">
        Create New Recipe
      </h1>
      <div className="flex relative w-2/3 mx-auto">
        <img src={Listcart} alt="list" className="absolute w-8 bottom-0 left-0 ml-2" />
        <input type="text" name="Enter list name" id="oi" placeholder='Enter recipe name' className="mt-10 p-2 pl-12 flex mx-auto  rounded-lg  shadow-lg shadow-slate-400" 
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

export default RecipesPage