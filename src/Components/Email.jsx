import { CiStar } from "react-icons/ci";

const Email = () => {
  return (
    <div id="Contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden relative" >
        <div className="containe grid grid-cols-1 overflow-hidden lg:grid-cols-3 items-center">
            <div className="lg:px-[8rem] col-span-2 py-[2rem] ">
                <div className="absolute w-[20rem] h-[20rem] rounded-full top-10 left-20 lg:top-20 lg:left-[15rem] opacity-20 bg-white  " />
                <div className="absolute w-[20rem] h-[20rem] top-1 -left-10 lg:top-1 lg:left-10 rounded-full opacity-20 bg-white  " />
                <h2 className="text-sm font-medium text-white">OUR NEWSLETTER</h2>
                <h1 className="text-white text-[50px] max-w-[450px] mt-5 font-bold " >Subscribe to get more updates</h1>
            </div>
            <div className="max-w-[300px]  flex mb-5 text-center">
                <CiStar color="white" className="w-[20rem] hidden lg:flex lg:-top-0 lg:-right-[11rem] opacity-25 absolute h-[20rem] " />
                <input type="text" className="px-4 outline-sky-300 w-full py-3 roundedd " placeholder="Your Email Address" />
                <button className="text-white font-medium px-6 py-3 roundede bg-sky-700 hover:bg-sky-600 hover:transition-all" >Send</button>
            </div>
        </div>
    </div>
  )
}

export default Email