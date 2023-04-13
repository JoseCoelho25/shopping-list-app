import React, {useState} from 'react'
import Home from "../assets/imgs/home.png";
import Cook from "../assets/imgs/cook.png";
import User from "../assets/imgs/user.png";
import PinkHome from "../assets/imgs/home-pink.png";
import PinkBook from "../assets/imgs/pink-cook.png";
import PinkUser from "../assets/imgs/pink-user.png";
import { Link } from "react-router-dom";

function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <footer className='container mx-auto w-screen flex justify-center'>
      <div className="flex mx-auto justify-evenly items-center text-center mb-2 mt-4 bottom-0 fixed w-screen lg:w-1/3 bg-white">
        <Link to="/" className="space-y-2" 
        onMouseOver={() => handleMouseOver(0)} 
        onMouseOut={handleMouseOut}>
          {hoveredIndex === 0 ? (
            <img src={PinkHome} alt="home" className="w-10 h-10"/>
          ) : (
            <img src={Home} alt="home" className="w-10 h-10"/>
          )}
          <p>Home</p>
        </Link>
        <Link to="/recipes" className="space-y-2" 
        onMouseOver={() => handleMouseOver(1)} 
        onMouseOut={handleMouseOut}>
          {hoveredIndex === 1 ? (
            <img src={PinkBook} alt="cookbook" className="w-10 h-10"/>
          ) : (
            <img src={Cook} alt="cookbook" className="w-10 h-10"/>
          )}
          <p>Recipes</p>
        </Link>
        <div className="space-y-2" 
        onMouseOver={() => handleMouseOver(2)} 
        onMouseOut={handleMouseOut}>
          {hoveredIndex === 2 ? (
            <img src={PinkUser} alt="user" className="w-10 h-10"/>
          ) : (
            <img src={User} alt="user" className="w-10 h-10"/>
          )}
          <p>Me</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
