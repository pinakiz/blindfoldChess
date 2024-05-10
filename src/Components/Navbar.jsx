
import { useState } from "react";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='z-50'>
      <div className={`flex flex-row  justify-between ${location.pathname === '/' && 'text-black'} p-4 h-[100px] w-screen`}>
        
        <img src='https://imgs.search.brave.com/azkzgdkiTJumU-18UJ58DVvbXgYSgOLh-_HNpirXVoE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JmLzNl/LzUxL2JmM2U1MTRi/YWNjMjQ2ZTYwYjJi/MzFkN2NmNTRmZDFi/LmpwZw' className="rounded-full" />
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-3xl lg:ml-20">
            <a to="/" className="  lg:text-6xl md:text-3xl text-2xl ">Blindfold Chess</a>
          </h1>
        </div>
        <div className="flex">
            <Sidebar  />
        </div>
    
      </div>
      
    </div>
  );
};
export default Navbar;
