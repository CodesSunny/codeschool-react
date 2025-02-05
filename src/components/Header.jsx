import {  RiCloseFill, RiMenuLine } from "@remixicon/react";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const navItems = [
  {
    label:'Home',
    path : '/'
  },
  {
    label:"Teacher",
    path:'/teacher'
  },
  {
    label:"Holidays' Calendar",
    path:'/holidays'
  },
  {
    label:"Top Students",
    path:'/top-students'
  },
  {
    label:'Contact Us',
    path:'/Contact-us'
  }
 
]

function Header() {
  const [menus, setMenus] = useState(navItems)
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);
  
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },2000)
  },[])
  
const handleOpen =() =>{
  setOpen(!open);
}

  return (
    <>
      <header className="bg-gray-400 text-white py-4 md:px-6 px-4 ">
        <div className="min-w-screen flex justify-between items-center ">
          {/* Left: Logo and School Name */}
          <div className="basis-1/5 flex items-center gap-2">
            <div className="w-16 h-16 border-2 border-blue-500 rounded-full overflow-hidden">
              <img src="/src/assets/images/logo_school.png" alt="School Logo"  className='w-[100%] h-[100%] object-cover'/>
            </div>
            <div className=' w-36'>
              <h1 className="text-xl font-bold  text-center "> Web Hut</h1>
              <p className="text-md font-semibold text-center text-purple-800"> Coding made easy </p>
            </div>
          </div>

          {/* Right: Navigation Links desktop view */}
          {
            loading ? (
              <h1> Loading menu items </h1>
            ) : (
          <nav className="basis-4/5 font-semibold md:text-xl sm:text-md hidden md:flex text-sm flex-grow  ">
              <ul className='w-full flex justify-evenly'>
                {
                  menus.map((menu, index)=> (
                    <li key={index}>
                      <Link to={menu.path} className="hover:text-gray-300"> {menu.label} </Link>
                    </li>
                  ))
                }
              </ul>
          </nav>
            )
          }
        </div>

      </header>


      {/* toggle open close icons */}
            {
              open ? (
                    <button className=" mb-10 absolute right-4 top-4 md:hidden block" onClick={handleOpen}>
                      <RiCloseFill /> 
                    </button>
              )  : (
                  <button className=" mb-10 absolute right-4 top-4 md:hidden block"  onClick={handleOpen} >
                     <RiMenuLine />
                  </button>
              )
            }

      {/* conditionally open side menu in mobile view*/}
      {
        open && (
        <div className={`md:hidden bg-gray-400 w-60 h-72 py-4 px-6 rounded-bl-lg absolute top-16
          ${
            open ? 'right-[0]' : 'right-[-100%]'
          } 
          `}>        
            <ul className='text-white pl-8 text-justify text-lg font-semibold'>
                 {
                    menus.map((menu, index)=> (
                      <li key={index} className="mb-8">
                        <Link to={menu.path} className=" hover:text-gray-300 "> {menu.label} </Link>
                      </li>
                    ))
                  }
            </ul>
        </div>
        )
      }
    </>
  );
}

export default Header;
