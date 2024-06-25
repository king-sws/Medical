
const Contact = () => {
  return (
    <section id="Doctors" className="overflow-y-hidden containe mt-2 lg:mt-[14rem]" >
        <div className="">
            <h2 className="ml-1 lg:ml-[70px] font-bold tracking-wide text-xl text-slate-700 " >Book Appointment Or Call: <span className="text-cyan-500" >(+1) 354 3056</span> </h2>
                <div className="flex flex-col lg:flex-row justify-center mt-4 gap-6">
                <div className="flex  flex-col ">
                    <select className="my-3 input-bordered  outline-cyan-300  flex items-center w-full lg:w-[25rem] p-2 border-[1px] rounded-lg  gap-2">
                        <option value='1' type="text" className="w-full lg:w-[25rem] p-2 border-[1px] rounded-lg " >Select Department</option>
                        <option value='2' type="text" className="w-full lg:w-[25rem] p-2 border-[1px] rounded-lg " >Department 1</option>
                        <option value='3' type="text" className="w-full lg:w-[25rem] p-2 border-[1px] rounded-lg " >Department 2</option>
                        <option value='4' type="text" className="w-full lg:w-[25rem] p-2 border-[1px] rounded-lg " >Department 3</option>
                    </select>
                    <label className="input my-3 input-bordered flex items-center gap-2">
                    <input type="text" className="w-full lg:w-[25rem] outline-cyan-300 p-2 border-[1px] rounded-lg " placeholder="Email" />
                    </label>
                    <label className="input my-3 input-bordered flex items-center gap-2">
                    <input type="date" className="w-full lg:w-[25rem] p-2 border-[1px] rounded-lg " placeholder="Username" />
                    </label>
                </div>
                <div className="flex flex-col ">
                    <select className="input my-3 input-bordered  outline-cyan-300  flex items-center w-full lg:w-[25rem] p-2 border-[1px] rounded-lg ">
                        <option value='1' type="text" className="w-full  p-2 border-[1px] rounded-lg " >Select Doctor</option>
                        <option value='2' type="text" className="w-full  p-2 border-[1px] rounded-lg " >Dr.Jane Doe</option>
                        <option value='3' type="text" className="w-full  p-2 border-[1px] rounded-lg " >Dr.Jhan Doe</option>
                        <option value='4' type="text" className="w-full  p-2 border-[1px] rounded-lg " >Dr.Bob Smith</option>
                    </select>
                    <label className="input my-3 input-bordered flex items-center gap-2">
                    <input type="text" className="w-full lg:w-[25rem]  outline-cyan-300  p-2 border-[1px] rounded-lg " placeholder="Phone Number" />
                    </label>
                    <label className="input my-3 input-bordered flex items-center gap-2">
                    <input type="time" className="w-full lg:w-[25rem]  outline-cyan-300 p-2 border-[1px] rounded-lg "  />
                    </label>
                </div>
                </div>
                <button className="ml-[70px] capitalize text-white px-5 py-2 text-center bg-teal-500 rounded-lg mt-4 hover:bg-teal-400 transition-all  " >BOOK AN APPOINTMENT</button>
                </div>
    </section>
  )
}

export default Contact