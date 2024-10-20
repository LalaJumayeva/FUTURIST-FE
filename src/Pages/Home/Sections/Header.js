import Navbar from "../../Navbar/Navbar";
import { PowerGlitch } from 'powerglitch';
import { headerImg } from "../../../assets";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor"

function Header() {
    useEffect(() => {
        PowerGlitch.glitch(
            '.glitch',
            {
                playMode: 'always',
                hideOverflow: true,
                timing: {
                    duration: 5000,
                    iterations: Infinity,
                    easing: 'ease-in-out',
                },
                glitchTimeSpan: {
                    start: 0.4,
                    end: 0.7,
                },
                shake: {
                    velocity: 10,
                    amplitudeX: 0.1,
                    amplitudeY: 0,
                },
                slice: {
                    count: 4,
                    velocity: 10,
                    minHeight: 0.02,
                    maxHeight: 0.40,
                    hueRotate: true,
                },
            }
        );
    }, []);
    return (
        <section className="bg-slate-950 h-screen relative overflow-hidden">
            <AnimatedCursor />
            <Navbar />
            <div
                className="absolute w-[90%] h-[90%] m-auto left-0 right-0 bottom-0 glitch bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${headerImg})` }}
            />
            <p className="absolute left-0 right-0 bottom-0 m-auto text-6xl md:text-9xl lg:text-15xl z-10 text-white text-opacity-10 font-Orbitron font-bold text-center">
                FUTURIST
            </p>
            <div className="container justify-around h-full max-w-full m-auto">
                <div className="relative z-10 p-8 flex flex-col md:flex-row justify-between h-[90%] items-center md:items-stretch">
                    <div className="flex flex-col md:w-[50%] xl:w-[35%]">
                        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-start font-Oswald text-white animate-slidein opacity-0 [--slidein-delay:500ms]">DIGITAL FASHION IS A NEW CHAPTER</h1>
                        <p className="text-sm mb-8 font-Montserrat lg:w-[70%] text-slate-300 animate-slidein opacity-0 [--slidein-delay:700ms]">
                            WE CREATED DIGITAL CLOTHES THAT EXIST ONLY IN THE DIGITAL WORLD -
                            AND ALL THAT WE USED TO DO IS OUR CREATIVITY AND THE DIGITAL CLOTHS.
                        </p>
                    </div>
                    <div className="flex flex-col justify-between md:w-[30%] lg:w-[25%]">
                        <p className="text-sm mb-8 font-Montserrat lg:w-[70%] text-slate-300 animate-slidein opacity-0 [--slidein-delay:900ms]">
                            WE MERGE THE DIGITAL POSSIBILITIES AND THE NEEDS OF FASHION BRANDS TO CREATE.
                        </p>
                        <div className="relative group flex justify-center items-center py-1 animate-slidein opacity-0 [--slidein-delay:1200ms]">
                            <div className="absolute left-0 right-0 bottom-0 m-auto top-0 w-[95%] lg:w-[87%] blur h-full bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:bg-purple-800 opacity-65 transition-opacity duration-300 group-hover:opacity-85">
                            </div>
                            <button
                                className="bg-slate-950 text-slate-200 font-Montserrat p-2 w-[90%] lg:w-[80%] relative z-20 rounded-md"
                            >
                                Checkout Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;