import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderSettings = {
    slidesPerView : 1,
    spaceBetween : 50 , 
    breakpoints : {
        480 : {
            slidesPerView : 1
        },
        600 : {
            slidesPerView : 1
        },
        750 : {
            slidesPerView : 1
        },
        1100 : {
            slidesPerView : 2
        }
    }
}

const Team = () => {
  return (
    <section id='Department' >
        <div className="containe my-5 ">
            <h2 className="font-medium text-3xl mb-5" >Our Team</h2>
            <Swiper {...sliderSettings} className='h-[20rem] b ' modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                
                
                pagination={{ clickable: true }}>
                    <SwiperSlide>
                    <div className="w-[300px] lg:w-[450px] flex justify-center gap-6 items-center rounded p-4">
                        <img src="/img/team/doctor-2.png" alt="team member" width={200} />
                        <div className="">
                            <h3 className="font-medium text-lg">Dr.Leaslie Taylor</h3>
                            <p className='text-slate-500 mb-2 text-sm' >PEDIATRICAN</p>
                            <p className='text-slate-500 max-w-[150px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="mt-4 flex gap-6 text-cyan-600">
                                <FaYoutube size={20} className='hover:text-red-600 hover:transition-all ' />
                                <FaFacebook size={20} className='hover:text-blue-600 hover:transition-all ' />
                                <FaInstagram size={20} className='hover:text-pink-600 hover:transition-all ' />
                                <FaTwitter size={20} className='hover:text-blue-600 hover:transition-all ' />
                            </div>
                        </div>
                        

                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="w-[300px] lg:w-[450px] flex justify-center gap-6 items-center rounded p-4">
                        <img src="/img/team/doctor-1.png" alt="team member" width={200} />
                        <div className="">
                            <h3 className="font-medium text-lg">Dr.Leaslie Taylor</h3>
                            <p className='text-slate-500 mb-2 text-sm' >PEDIATRICAN</p>
                            <p className='text-slate-500 max-w-[150px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="mt-4 flex gap-6 text-cyan-600">
                                <FaYoutube size={20} className='hover:text-red-600 hover:transition-all ' />
                                <FaFacebook size={20} className='hover:text-blue-600 hover:transition-all ' />
                                <FaInstagram size={20} className='hover:text-pink-600 hover:transition-all ' />
                                <FaTwitter size={20} className='hover:text-blue-600 hover:transition-all ' />
                            </div>
                        </div>
                        

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] lg:w-[450px] flex justify-center gap-6 items-center rounded p-4">
                        <img src="/img/team/doctor-2.png" alt="team member" width={200} />
                        <div className="">
                            <h3 className="font-medium text-lg">Dr.Leaslie Taylor</h3>
                            <p className='text-slate-500 mb-2 text-sm' >PEDIATRICAN</p>
                            <p className='text-slate-500 max-w-[150px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="mt-4 flex gap-6 text-cyan-600">
                                <FaYoutube size={20} className='hover:text-red-600 hover:transition-all ' />
                                <FaFacebook size={20} className='hover:text-blue-600 hover:transition-all ' />
                                <FaInstagram size={20} className='hover:text-pink-600 hover:transition-all ' />
                                <FaTwitter size={20} className='hover:text-blue-600 hover:transition-all ' />
                            </div>
                        </div>
                        

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[300px] lg:w-[450px] flex justify-center gap-6 items-center rounded p-4">
                        <img src="/img/team/doctor-1.png" alt="team member" width={200} />
                        <div className="">
                            <h3 className="font-medium text-lg">Dr.Leaslie Taylor</h3>
                            <p className='text-slate-500 mb-2 text-sm' >PEDIATRICAN</p>
                            <p className='text-slate-500 max-w-[150px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="mt-4 flex gap-6 text-cyan-600">
                                <FaYoutube size={20} className='hover:text-red-600 hover:transition-all ' />
                                <FaFacebook size={20} className='hover:text-blue-600 hover:transition-all ' />
                                <FaInstagram size={20} className='hover:text-pink-600 hover:transition-all ' />
                                <FaTwitter size={20} className='hover:text-blue-600 hover:transition-all ' />
                            </div>
                        </div>
                        

                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </section>
  )
}

export default Team