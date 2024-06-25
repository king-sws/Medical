
const Text = () => {
  return (
    <section className="my-5  containe w-full relative  " >
        <div className="flex px-0 lg:px-14 flex-col md:flex-row md:px-8 lg:flex-row flex-wrap justify-between items-center">
            <div className="flex items-center  flex-col ">
                <p className="text-4xl text-cyan-400 font-extrabold" >+5120</p>
                <p className="text-sm font-medium text-slate-500 " >Happy Patients</p>
            </div>
            <div className="flex items-center my-5 flex-col">
                <p className="text-4xl text-cyan-400 font-extrabold" >44</p>
                <p className="text-sm font-medium text-slate-500 " >Total Branches</p>
            </div>
            <div className="flex items-center flex-col">
                <p className="text-4xl text-cyan-400 font-extrabold" >+87</p>
                <p className="text-sm font-medium text-slate-500 " >Senior Doctors</p>
            </div>
            <div className="flex items-center my-5 lg:mt-0 flex-col">
                <p className="text-4xl text-cyan-400 font-extrabold" >+12</p>
                <p className="text-sm font-medium text-slate-500 " >Years Eperience</p>
            </div>
        </div>
    </section>
  )
}

export default Text