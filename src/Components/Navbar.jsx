import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const text = ['Home' , 'Doctors' , 'Department' , 'Services' , 'Blog' , 'Contact']
const Navbar = () => {
  const [isopen , setisopen] = useState(false)
    const toggle = ()=>(
        setisopen(!isopen) ) 
      const [header , setheader] = useState(false)
      useEffect(() => {
        const Handler = () => {
          window.scrollY > 50 ? setheader(true) : setheader(false)}
        window.addEventListener("scroll" , Handler)
        return ()=> (
          window.removeEventListener("scroll" , Handler)) })
  return (
    <>
      <header className=' hidden lg:block px-8 pt-8 pb-3 rounded-b-3xl w-[50rem] mx-auto bg-white shadow-2xl sticky z-10 ' >
          <div className="flex justify-between items-center">
              <img src="/img/header/logo.svg" width={150} className="cursor-pointer" />
              <div className="flex gap-6">
                  <div className="flex gap-1 items-center">
                  <FaMapMarkerAlt className="text-teal-200"/>
                  <p className="text-slate-600" >123 Arlling, Miala,NY</p>
                  </div>
                  <div className="flex gap-1 items-center">
                      <FaPhoneAlt className="text-teal-200"/>
                      <p className="text-slate-600" > (+1) 354 3056 </p>
                  </div>
                  <div className="">
                      <button className="border-2 border-teal-400 px-6 text-slate-500 hover:bg-teal-400 hover:text-white hover:transition-all py-3 flex justify-center items-center rounded-full " >BOOK NOW</button>
                  </div>
              </div>
          </div>
              <div className="flex mt-5 justify-between items-center">
                  <div className="flex text-slate-500 ">
                      {text.map((item , i)=>(
                          <><a key={i} href={`#${item}`} className="hover:text-black item cursor-pointer px-[10px] hover:transition-all" > {item} </a></>
                      ))}
                  </div>
                  <div className="flex gap-2 items-center">
                      <IoSearch className='text-teal-200' />
                      <input type="text" placeholder="Search..." className="bg-transparent w-[8rem] focus:w-[10rem]  px-3 py-1 rounded text-gray-800 focus:outline-none " />
                    </div>
              </div>
      </header>
      <header className={`${header ? 'bg-white shadow-lg' : "" }  w-full fixed top-0 z-[99999] transition-all block lg:hidden px-8 py-8 bg-white`} >        <div className="flex justify-between items-center">
          <img src="/img/header/logo.svg" width={150} className="" />
          <div className="flex lg:hidden cursor-pointer md:cursor-none" onClick={toggle} >
                {isopen ?  <FaX size={20} color='black' /> :<CgMenu size={30} color='black' />  }
            </div>
            <div className={`absolute sidebar rounded-md h-auto w-[300px] top-20 ${isopen ? "scale-y-100 opacity-100 visible" : 'scale-y-50 opacity-0 hidden'} right-6 p-2  bg-slate-800 transition-all z-50`}>
                <nav className="flex flex-col space-y-2 p-4  ">
                    {text.map((link , index)=>(
                        <li key={index} className="list-none text-white py-1 px-2 transition-all rounded-md " onClick={toggle} >
                            <a href={`#${link}`} >{link}</a>
                        </li>
                    ))}
                    <div className="flex pt-5 gap-2 items-center">
                      <IoSearch className='text-teal-200' />
                      <input type="text" placeholder="Search..." className="bg-transparent w-full text-white  px-3 py-1 rounded focus:outline-none " />
                    </div>
                </nav>
            </div>
        </div>  
            </header>
    </>
  )
}

export default Navbar