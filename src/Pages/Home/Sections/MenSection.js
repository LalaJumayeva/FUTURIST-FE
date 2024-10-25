import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { 
    alligator,
    coat,
    hoodieman,
    manHoddie,
    shoulderPad,
    trousers,
 } from '../../../assets';
import { SliderContent } from './SliderContent';
import { SlArrowRight } from "react-icons/sl";

const Products = [
    {
        id: 1,
        name: 'Cyberpunk Voyager Coat',
        description:
            'Step into the future with this sleek, long-line coat featuring advanced materials and a minimalist design. Perfect for the modern explorer navigating urban landscapes.',
        img: coat,
        price: '$159.99 USD',
    },
    {
        id: 2,
        name: 'Stealth Mode Hoodie',
        description:
            'Embrace the cutting edge of streetwear with this stylish hoodie. Designed with asymmetrical lines and a comfortable fit, it\'s ideal for those who move in the shadows.',
        img: hoodieman,
        price: '$139.99 USD',
    },
    {
        id: 3,
        name: 'Titanium Shield Shoulder Pad',
        description:
            'Add a futuristic edge to your attire with this metallic shoulder pad. Crafted from lightweight titanium alloy, it combines fashion with a hint of armor-like protection.',
        img: shoulderPad,
        price: '$89.99 USD',
    },
    {
        id: 4,
        name: 'Quantum Weave Trousers',
        description:
            'These trousers feature a sleek design with a slim fit, made from high-tech fabrics that offer both comfort and durability. The perfect addition to any forward-thinking wardrobe.',
        img: trousers,
        price: '$119.99 USD',
    },
    {
        id: 5,
        name: 'Astral Drift Hoodie',
        description:
            'A fusion of comfort and avant-garde style, this hoodie boasts unique patterns inspired by cosmic phenomena. Ideal for making a bold statement in any setting.',
        img: manHoddie,
        price: '$149.99 USD',
    },
    {
        id: 6,
        name: 'NeoHydra Alligator Jacket',
        description:
            'Stand out with this eye-catching jacket featuring an alligator skin texture and futuristic design elements. It\'s the ultimate piece for those looking to make a daring fashion statement.',
        img: alligator,
        price: '$249.99 USD',
    }
];


function MenSection() {
    return (
        <section className="h-full bg-white">
            <div className="flex flex-col justify-center items-center py-8">
                <p className="text-xl mb-4 font-Montserrat">MEN'S FASHION</p>
                <div className="w-[4rem] border-b-2 border-b-slate-900 " />
                <div className='mt-4 w-full h-full px-10'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        style={{
                            "--swiper-navigation-color": "#b6ad90",
                            "--swiper-pagination-color": "#b6ad90",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            390: { slidesPerView: 1 },
                            502: { slidesPerView: 1 },
                            802: { slidesPerView: 1 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        {Products.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className='flex justify-center items-center'>
                                        <SliderContent
                                            key={item.id}
                                            image={item.img}
                                            title={item.name}
                                            description={item.description}
                                            price={item.price}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className='flex flex-row justify-center items-center mt-6 font-Montserrat text-slate-500 hover:text-slate-950'>
                        <p className='text-xl mr-2'>VIEW ALL</p>
                        <SlArrowRight size={15} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenSection;