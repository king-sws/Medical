import { FaHandHoldingHeart } from "react-icons/fa";

const Card = () => {
  return (
    <section id="Services" className="containe">
      <div className="container relative overflow-hidden bg-teal-100 rounded-lg">
        <div className="grid px-1 lg:px-20 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-8 mt-5 cursor-pointer max-w-[200px]">
                <p className="text-sm uppercase text-teal-700 font-medium hover:text-teal-500">laboratory analysis</p>
                <p className="text-sm uppercase text-teal-700 font-medium hover:text-teal-500">cardiology clienic</p>
                <p className="text-sm uppercase text-teal-700 font-medium hover:text-teal-500">gynecology clinic</p>
                <p className="text-sm uppercase text-teal-700 font-medium hover:text-teal-500">pathology clinic</p>
                <p className="text-sm uppercase text-teal-700 font-medium hover:text-teal-500">neurology clinic</p>
            </div>
                <div className="space-y-2  ">
                    <FaHandHoldingHeart size={250} color="white" className="hidden lg:flex absolute opacity-60 left-[19rem] top-10" />
                    <div size={250} color="white" className="absolute hidden lg:flex w-[10rem] h-[10rem] bg-white buttom-1 rounded-full opacity-75 right-3 " />
                    <div size={250} color="white" className="absolute hidden lg:flex w-[10rem] h-[10rem] bg-white top-[5rem] rounded-full opacity-75 right-[8rem] " />
                    <h1 className="font-bold text-3xl mb-3 pt-8 md:pt-0 lg:pt-0 text-gray-800">Cardiology Clinic</h1>
                    <p className="max-w-[600px] pt-2 text-slate-400 font-medium text-sm relative z-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, at culpa ut praesentium doloribus qui, odio consectetur quisquam nesciunt quas nihil repellendus ipsa blanditiis fugit debitis harum unde repudiandae facere!</p>
                    <p className="max-w-[600px] pb-2 text-slate-400 font-medium text-sm relative z-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum, quibusdam repudiandae ab asperiores distinctio rem quis eveniet nobis, amet nemo, expedita suscipit. Eaque, assumenda.</p>
                    <div className="">
                    <a href="#" className="item text-sm text-teal-600 font-medium -ml-2 lg:-ml-3 hover:text-teal-500">Neurcacritical Care</a>
                    <a href="#" className="item text-sm text-teal-600 font-medium hover:text-teal-500">Neuro Oncology</a>
                    <a href="#" className="item text-sm text-teal-600 font-medium pl-[10px] hover:text-teal-500">Geriatric Neurology</a>
                    </div>
                    <div className="">
                        <button className="px-5 py-3 hover:bg-teal-500 text-white text-center uppercase text-sm mt-5 bg-teal-600 rounded-full">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Card