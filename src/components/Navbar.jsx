import { useState } from "react";

import { close, menu,icon,NFTify } from "../assets";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center  navbar">
      <div  className=" flex justify-betweeen gap-2 h-[58px] items-center w-[200px]">
        <img src={icon} alt="" />
          <img src={NFTify} alt="Dashboard" className="w-[124px] h-[32px]" />
      </div>
          {/* <h1 className="w-[200px] font-bold  text-white">NFTify</h1> */}
          <ul className="list-none sm:flex hidden justify-between items-center">
          
            <li  className={`font-poppins font-normal p-3 rounded-xl font-bold text-[16px] mr-10 cursor pointer  text-white hover:bg-pink-500 `}>
             <a href="/"> Token Address</a>
            </li>
            <li  className={`font-poppins font-normal font-bold text-[16px] p-3 rounded-xl mr-0 hover:bg-pink-500 cursor pointer  text-white `}>
             <a href="/Token"> Pair Address</a>
            </li>
           
          
          </ul>
       <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
        alt="Menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={()=>setToggle((prev)=> !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} py-6 px-8 mx-4 my-2 absolute top-20 right-0 rounded-xl  bg-discount-gradient z-10`}>
             <ul className="list-none flex flex-1 flex-col justify-between items-center sidebar">
           
            <li  className={`font-poppins font-normal px-6 py-2 rounded-xl  hover:bg-pink-500 mb-4 text-[16px]  cursor pointer  text-white `}>
            <a href="/"> Token Address</a>
            </li>
            <li  className={`font-poppins font-normal px-4 py-2 rounded-xl  hover:bg-pink-500 mb-0 text-[16px]  cursor pointer  text-white `}>
            <a href="/Token"> Pair Address</a>
            </li>
          
          </ul>
        </div>
        </div> 
    </nav>

    
  )
}

export default Navbar;
