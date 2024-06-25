import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipere = () => {
  return (
    <section className="relative bg-blue-100 min-h-[400px]  overflow-hidden  " >
        <div className="containe mt-5 lg:mt-0 flex-col lg:flex-row mx-auto flex justify-between items-center ">
            <div className="hidden lg:flex">
                <img src="/img/testimonials/img.png" width={300} alt="" />
            </div>
            <div className="w-[22rem] absolute h-[22rem] rounded-full bg-cyan-400 -right-5 -top-20 opacity-20 " />
            <div className="w-[22rem] absolute h-[22rem] rounded-full bg-cyan-400 right-10 -bottom-20 opacity-20 " />
            <Swiper className='max-w-[350px] lg:max-w-[420px] h-[275px] mySwiper ' 
      // install Swiper modules
      spaceBetween={70}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      <SwiperSlide>
      <div className="w-full  ">
         <img src="/icons/testimonials/quote-left.svg" className='float-left mr-2 ' width={30} alt="" /> 
            <p className='text-slate-700 lg:tracking-wide  ' > 
            <span className='font-light relative text-[16px] lg:text-[22px] text-[#4c5354] text-left before:inline-block before:bg-no-repeat ' ></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repellat quibusdam porro ducimus odio ipsum at, esse autem est? Commodi recusandae quam quaerat dicta et quidem consequuntur sit nulla eum.</p>
        </div>
        <img src="/icons/testimonials/quote-right.svg" width={30} alt="" />
        <div className="mt-5">
                <h1 className='font-bold text-lg' >James Rodrigo</h1>
                <p className='text-slate-500' >CUSTOMER</p>
                </div>
            
        </SwiperSlide>

      <SwiperSlide>
      <div className=" ">
         <img src="/icons/testimonials/quote-left.svg" className='float-left mr-2 ' width={30} alt="" /> 
            <p className='text-slate-700 tracking-wide  ' > 
            <span className='font-ligt relative text-[22px] text-[#4c5354] text-left before:inline-block before:bg-no-repeat ' ></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repellat quibusdam porro ducimus odio ipsum at, esse autem est? Commodi recusandae quam quaerat dicta et quidem consequuntur sit nulla eum.</p>
        </div>
        <img src="/icons/testimonials/quote-right.svg" width={30} className='' alt="" />
        <div className="">
            <h1 className='font-bold text-[19px] mt-5 ' >Mechal Low</h1>
            <p className='text-slate-500' >CUSTOMER</p>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </section>
)
}

export default Swipere