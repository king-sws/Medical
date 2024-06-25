import { FaHeartPulse } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="Home" className="bg-blue-100 mt-[4rem] lg:-mt-10 w-full containe " >
        <div className="flex px-1 lg:px-10 flex-col lg:flex-row  justify-between items-center">
            <div className="flex flex-col mt-10  ">
                <div className="flex gap-2 max-w-[200px] items-center justify-center bg-white px-2 py-2 rounded-full ">
                    <FaHeartPulse className="text-teal-400" />
                    <h1 className="text-slate-600 text-[13px] tracking-wide">LIVE YOUR LIFE SAFELY</h1>
                </div>
                <div className="mt-2">
                    <h1 className="text-[50px] font-semibold leading-[60px] max-w-[350px] " >We care about your health</h1>
                    <p className="text-slate-500 mt-3 max-w-[370px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet amet id sed architecto qui eaque, unde quos veniam totam necessitatibus placeat. Eaque ab aliquam ducimus!</p>
                    <button className="capitalize text-white px-5 py-2 text-center bg-teal-500 rounded-lg mt-4 hover:bg-teal-400 transition-all " >Contact us</button>
                </div>
            </div>
            <div className="mt-4 lg:mt-0">
                <img src="/img/hero/img.png" className="" width={550} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero