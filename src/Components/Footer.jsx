import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="mt-[5rem] containe " >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
            <div className="">
                <img src="/img/header/logo.svg" alt="" />
                <p className="max-w-[300px] my-5 text-sm text-slate-500 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta tempore ad error ipsum!</p>
                <p className='flex justify-start items-center mb-2 gap-2 text-slate-500 font-medium ' > <FaMapMarkerAlt color='aqua' /> 123 Arling, Mioa,NY</p>
                <p className='flex justify-start items-center gap-2 mb-2 text-slate-500 font-medium'> <MdEmail  color='aqua'/>insove@email.com</p>
                <p  className='flex justify-start items-center gap-2 text-slate-500 font-medium' ><FaPhoneAlt color='aqua' />(+1)543 2361</p>
                <div className="mt-5 flex gap-6 text-cyan-600 ">
                    <FaYoutube size={20} className='hover:text-red-600 hover:transition-all ' />
                    <FaFacebook size={20} className='hover:text-blue-600 hover:transition-all ' />
                    <FaInstagram size={20} className='hover:text-pink-600 hover:transition-all ' />
                    <FaTwitter size={20} className='hover:text-blue-600 hover:transition-all ' />
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <div className="flex justify-between items-center">
                    <div className="">
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Home</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Doctors</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Departement</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Services</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Blog</p>
                    </div>
                    <div className="">
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Our Pricing</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Contact</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Careers</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Faqs</p>
                        <p className='text-sm text-slate-500 hover:text-slate-900 hover:transition-all mt-4 font-medium cursor-pointer hover:underline' >Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='text-lg font-bold'>Opening Hours</h1>
                <div className="flex flex-col  ">
                    <p className='text-sm border-b pb-3 max-w-[300px] font-medium text-slate-800  hover:transition-all mt-4'>Monday - Thursday <span className='text-cyan-300 font-bold ml-8 ' >8:00 AM - 6:00 Pm</span>  </p>
                    <p className='text-sm border-b pb-3 max-w-[300px] font-medium text-slate-800  hover:transition-all mt-4'>Friday - Saturday <span className='text-cyan-300 font-bold ml-8 ' >10:00 AM - 4:00 Pm</span>  </p>
                    <p className='text-sm font-medium text-slate-800 border-b pb-3 max-w-[300px] hover:transition-all mt-4'>Sunday <span className='text-cyan-300 font-bold ml-[7rem] ' >Emergency Only</span>  </p>
                    <p className='text-sm font-medium text-slate-800 border-b pb-3 max-w-[300px] hover:transition-all mt-4'>Personal<span className='text-cyan-300 font-bold ml-[6rem] ' >7:00 AM - 9:00 Pm</span>  </p>

                </div>
            </div>
        </div>
        <div className="border-t mt-10">
            <p className='text-center mt-2 text-gray-600 ' >Copyright © 2024 - All right reserved </p>
        </div>
    </footer>
  )
}

export default Footer