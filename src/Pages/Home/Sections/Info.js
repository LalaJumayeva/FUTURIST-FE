import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { deliDagli, infoVideo, manHoddie } from '../../../assets';
import { MdOutlineDoubleArrow } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { FaArrowAltCircleRight } from "react-icons/fa";


function Info() {
    return (
        <section className="h-full bg-slate-950">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: true,
                }}
                navigation
                pagination={{ clickable: true, el: null }}
                scrollbar={{ draggable: true }}
                style={{
                    "--swiper-navigation-color": "#fff2b2",
                }}
            >
                <SwiperSlide>
                    <div className="relative h-screen">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            src={infoVideo}
                        ></video>

                        <div className="relative z-10 flex justify-center items-center flex-col h-full px-20 xl:px-0">
                            <p className='text-slate-300 font-Montserrat text-2xl md:text-4xl font-semibold mb-2'>
                                Sustainable Streetwear
                            </p>
                            <p className='text-slate-400 font-Montserrat text-xl md:text-3xl'>
                                Bold, sustainable designs for the fashion-forward conscious consumer.
                            </p>
                            <button className='w-[10rem] h-[3rem] mt-4 bg-slate-700 hover:bg-slate-800 flex flex-row justify-end items-center rounded-full pr-3'>
                                <p className='text-slate-400 text-lg mr-4 '>EXPLORE</p>
                                <FaArrowAltCircleRight color={'#80b918'} size={27} />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full w-full py-4 px-4 xl:px-20 md:py-20 flex flex-col md:flex-row justify-center items-center md:items-start mx-auto relative'>
                        <div className="h-full flex justify-center items-center lg:justify-start"
                        >
                            <div
                                className="w-[22rem] h-[25rem] lg:w-[30rem] lg:h-[35rem] xl:w-[35rem] xl:h-[35rem] bg-cover bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${manHoddie})` }}
                            />
                        </div>

                        <div className='flex flex-col justify-between items-center h-[50%] md:h-full md:w-[50%] md:ml-4 mt-6 md:mt-0'>
                            <div className='flex flex-row items-start justify-between mb-6'>
                                <MdOutlineDoubleArrow size={45} color={'#fff2b2'} />
                                <p className='text-slate-300 w-[60%] 2xl:w-[30%] font-Montserrat text-sm md:text-xl'>
                                    Our vision extends beyond fabric and seams. We design digital clothing that exists exclusively in the digital realm.
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-slate-400 font-Orbitron text-base text-left mb-4'>Futuristic Fashion</p>
                                <p className='text-slate-300 font-Montserrat text-base md:text-2xl font-semibold'>
                                    No fabric waste, no production lines.
                                    <span className='text-slate-500 font-Montserrat text-base md:text-2xl'>
                                        {` `} Every piece of digital clothing is designed with sustainability at its core, offering a way to experience fashion without environmental impact.
                                    </span>
                                </p>
                                <Marquee className='font-Montserrat text-base mt-8 text-[#fff2b2]'>
                                    NEW SEASON PRODUCTS | UP TO 50% DISCOUNT | WORLDWIDE SHIPPING
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full w-full py-4 px-4 xl:px-20 md:py-20 flex flex-col md:flex-row justify-center items-center md:items-start mx-auto relative'>
                        <div className="h-full flex justify-center items-center lg:justify-start"
                        >
                            <div
                                className="w-[22rem] h-[25rem] lg:w-[30rem] lg:h-[35rem] xl:w-[35rem] xl:h-[35rem] bg-cover bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${deliDagli})` }}
                            />
                        </div>

                        <div className='flex flex-col justify-between items-center h-[50%] md:h-full md:w-[50%] md:ml-4 mt-6 md:mt-0'>
                            <div className='flex flex-row items-start justify-between mb-6'>
                                <MdOutlineDoubleArrow size={45} color={'#fff2b2'} />
                                <p className='text-slate-300 w-[60%] 2xl:w-[30%] font-Montserrat text-sm md:text-xl'>
                                    Imagine clothing that adapts to your environment, adjusts to your body’s needs, and redefines comfort.
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-slate-400 font-Orbitron text-base text-left mb-4'>Futuristic Fashion</p>
                                <p className='text-slate-300 font-Montserrat text-base md:text-2xl font-semibold'>
                                    We believe fashion is personal.
                                    <span className='text-slate-500 font-Montserrat text-base md:text-2xl'>
                                        {` `} From dynamic color-changing fabrics to customizable accessories, the future of fashion is as individual as you are.
                                    </span>
                                </p>
                                <Marquee className='font-Montserrat text-base mt-8 text-[#fff2b2]'>
                                    NEW SEASON PRODUCTS | UP TO 50% DISCOUNT | WORLDWIDE SHIPPING
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Info;
