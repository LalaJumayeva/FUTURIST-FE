import { spiritual } from "../../../assets";

function Header() {
    return (
        <div className="h-[450px] w-full relative bg-slate-800 pt-14">
            <div
                className="absolute bottom-0 right-0 w-full h-full object-cover bg-slate-800 opacity-25 z-10">
            </div>
            <video
                className=" absolute bottom-0 right-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                src={spiritual}
            ></video>
            <div className="relative z-20 flex flex-col justify-center align-middle py-20 px-20 md:px-40">
                <p className="text-2xl md:text-4xl lg:text-6xl text-slate-200 font-Montserrat font-bold mb-4">#particularvibe</p>
                <p className="text-2xl md:text-4xl lg:text-6xl text-slate-200 font-Montserrat mb-4">Embrace the Future of Fashion</p>
                <p className="text-base md:text-lg text-slate-300 font-Montserrat mb-16 opacity-70">Bold. Futuristic. Innovative. Our cutting-edge collections blend technology and
                    style, designed for the modern-day trailblazer. Step into a new era of fashion that defies limits.</p>
            </div>
        </div>
    );
};

export default Header;
