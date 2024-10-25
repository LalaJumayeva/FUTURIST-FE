import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { alice, bracelet, crown, necklace, womanHoodie, womanHoodie2 } from '../../../assets';
import { SliderContent } from './SliderContent';
import { SlArrowRight } from "react-icons/sl";

const Products = [
    {
        id: 1,
        name: 'Voidwalker Asymmetrical Hoodie',
        description:
            'Designed for the modern traveler, this sleek hoodie combines minimalist style with futuristic design. Perfect for those who blend into the night.',
        img: womanHoodie,
        price: '$149.99 USD',
    },
    {
        id: 2,
        name: 'Urban Stealth Street Hoodie',
        description:
            'A bold statement in streetwear. This hoodie features avant-garde patterns with a perfect balance of comfort and cutting-edge fashion.',
        img: womanHoodie2,
        price: '$169.99 USD',
    },
    {
        id: 3,
        name: 'Quantum Cuff Bracelet',
        description:
            'An elegant piece of wearable art. This chrome bracelet exudes futuristic charm, with a sleek finish that enhances any outfit.',
        img: bracelet,
        price: '$79.99 USD',
    },
    {
        id: 4,
        name: 'Serpentine Alloy Necklace',
        description:
            'Inspired by serpentine elegance, this metallic necklace curves gracefully around the neck, adding a touch of futuristic luxury to your attire.',
        img: necklace,
        price: '$99.99 USD',
    },
    {
        id: 5,
        name: 'Celestial Halo Headpiece',
        description:
            'An ethereal crown for those who walk among the stars. This headpiece radiates celestial beauty, perfect for high-fashion moments.',
        img: crown,
        price: '$199.99 USD',
    },
    {
        id: 6,
        name: 'Stellar Horizon Cut-Out Dress',
        description:
            'A cutting-edge fashion piece designed to make a bold statement. This futuristic dress features geometric cuts and seamless lines.',
        img: alice,
        price: '$249.99 USD',
    },
];

function Trending() {
    return (
        <section className="h-full bg-white">
            <div className="flex flex-col justify-center items-center py-16">
                <p className="text-xl mb-4 font-Montserrat">TRENDING</p>
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

export default Trending;
