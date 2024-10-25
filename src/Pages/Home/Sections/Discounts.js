import { aliminium, led, menfashion } from "../../../assets";
import { BsArrowRight } from "react-icons/bs";


function Discounts() {
    return (
        <section className="h-full bg-white w-full flex flex-col py-4 px-10">
            <div className="flex flex-row items-end mb-6">
                <p className="font-Montserrat text-3xl md:text-5xl leading-relaxed md:leading-tight">
                    Access to high-Quality,<br />
                    <span className="font-bold">Eco-Friendly</span> products and <br />
                    <span className="flex items-center">
                        services <BsArrowRight size={35} className="ml-2" />
                        <span className="text-sm lg:text-2xl bg-slate-900 py-2 px-4 rounded-full ml-4 text-slate-300">
                            Contact Us
                        </span>
                    </span>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
                <div className="w-full lg:flex-[1] h-[300px] relative rounded-lg overflow-hidden shadow-lg mb-4 lg:mb-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${aliminium})` }}
                        aria-label="image 1"
                    />
                    <div className="absolute bottom-0 bg-white p-2 font-Montserrat">
                        <p className="font-bold">Get up to 50% off discounts</p>
                    </div>
                </div>

                <div className="w-full lg:flex-[1] flex flex-row lg:space-x-4 space-x-4 lg:space-y-0">
                    <div className="w-full h-[250px] lg:h-[300px] relative rounded-lg overflow-hidden shadow-lg">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${led})` }}
                            aria-label="image 2"
                        />
                        <div className="absolute bottom-0 bg-white p-2 font-Montserrat">
                            <p className="font-bold">Fluid Sculpture Shoe 20% OFF</p>
                        </div>
                    </div>
                    <div className="w-full h-[250px] lg:h-[300px] relative rounded-lg overflow-hidden shadow-lg">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${menfashion})` }}
                            aria-label="image 3"
                        />
                        <div className="absolute bottom-0 bg-white p-2 font-Montserrat">
                            <p className="font-bold">NEW Hooded Tactical Vest</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounts;
