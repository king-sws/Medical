import { TbHomeBolt } from "react-icons/tb";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

const Num = () => {
  return (
    <section className="bg-cyan-500 h-[22rem] lg:h-[15rem] flex overflow-hidden lg:overflow-visible relative mx-[3rem] px-10 py-10 rounded-lg flex-col " >
        <div className="flex flex-col lg:flex-row justify-start gap-9 items-center">
          <div className="">
            <h1 className="text-3xl text-white font-medium max-w-[400px]" >Our Best Services For Your Solution</h1>
          </div>
          <div className="rounded-full bg-white w-[300px] absolute overflow-hidden h-[250px] opacity-20 left-[10rem] " />
          <div className="rounded-full bg-white w-[300px] absolute -bottom-[4rem] overflow-hidden h-[250px] opacity-20 left-[20rem] " />
          <div className="max-w-[650px] text-white ">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod animi maiores maxime exercitationem dolorum impedit quibusdam, aspernatur amet quisquam vel ipsa nesciunt sint reprehenderit sapiente.</p>
          </div>
        </div>
        <div className="hidden lg:flex mt-5 md:-mt-5 justify-between">
          <div className="bg-white border-[1px] border-slate-400 top-[120px] shadow-xl  w-[17rem] h-[15rem] rounded-lg mt-8 ">
            <TbHomeBolt size={50} className="text-cyan-700 mx-auto mt-5" />
            <div className="">
              <p className="text-3xl  font-semibold mt-3 text-center " >General Practitioners</p>
              <p className="text-sm text-slate-500 text-center p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam autem temporibus odit nihil voluptate.</p>
            </div>
          </div>
          <div className="bg-white border-[1px] border-slate-400 left-[25rem] top-[120px] shadow-2xl  w-[17rem] h-[15rem] rounded-lg mt-8 ">
            <MdOutlinePregnantWoman size={50} className="text-cyan-700 mx-auto mt-5" />
            <div className="">
              <p className="text-3xl font-semibold mt-3 text-center tracking-wide " >Pregnancy Support</p>
              <p className="text-sm text-slate-500 text-center p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam autem temporibus odit nihil voluptate.</p>
            </div>
          </div>
          <div className="bg-white border-[1px] border-slate-400 left-[48rem] top-[120px] shadow-xl  w-[17rem] h-[15rem] rounded-lg mt-8 ">
            <CgNotes size={50} className="text-cyan-700 mx-auto mt-5" />
            <div className="">
              <p className="text-3xl font-semibold mt-3 text-center tracking-wide " >Nutritional Support</p>
              <p className="text-sm text-slate-500 text-center p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam autem temporibus odit nihil voluptate.</p>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:flex mt-5 justify-between">
          <div className="bg-white border-[1px] border-slate-400 top-[120px] shadow-xl absolute w-[17rem] h-[15rem] rounded-lg mt-8 ">
            <TbHomeBolt size={50} className="text-cyan-700 mx-auto mt-5" />
            <div className="">
              <p className="text-3xl  font-semibold mt-3 text-center " >General Practitioners</p>
              <p className="text-sm text-slate-500 text-center p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam autem temporibus odit nihil voluptate.</p>
            </div>
          </div>
          <div className="bg-white border-[1px] border-slate-400 left-[25rem] top-[120px] shadow-2xl absolute w-[17rem] h-[15rem] rounded-lg mt-8 ">
            <MdOutlinePregnantWoman size={50} className="text-cyan-700 mx-auto mt-5" />
            <div className="">
              <p className="text-3xl font-semibold mt-3 text-center tracking-wide " >Pregnancy Support</p>
              <p className="text-sm text-slate-500 text-center p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam autem temporibus odit nihil voluptate.</p>
            </div>
          </div>
          <div className="bg-white border-[1px] border-slate-400 left-[48rem] top-[120px] shadow-xl absolute w-[17rem] h-[15rem] rounded-lg mt-8 ">
            <CgNotes size={50} className="text-cyan-700 mx-auto mt-5" />
            <div className="">
              <p className="text-3xl font-semibold mt-3 text-center tracking-wide " >Nutritional Support</p>
              <p className="text-sm text-slate-500 text-center p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam autem temporibus odit nihil voluptate.</p>
            </div>
          </div>
        </div> */}
        
    </section>
  )
}

export default Num