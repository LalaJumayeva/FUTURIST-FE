function Banner() {
    return (
        <div className="h-full my-20 overflow-hidden">
            <div className="h-[400px] bg-slate-900 flex flex-row justify-center items-center">
                {/* Left Side - Text Section */}
                <div className="flex-[2] text-slate-200 pl-8 md:px-8">
                    <h1 className="text-4xl md:text-6xl font-Oswald uppercase tracking-widest">
                        Discover the Future of Fashion
                    </h1>
                    <p className="mt-4 text-base lg:text-xl font-Montserrat tracking-wide">
                    Join our elite list and stay ahead with cutting-edge fashion updates. Be the first to discover groundbreaking discounts, futuristic styles, and limited-time offers that redefine the fashion frontier.
                    </p>
                    <div class="w-full max-w-sm min-w-[200px] mt-4 md:mt-8 border-b-2 border-b-slate-500">
                        <div class="relative">
                            <input 
                            type="email" 
                            class="w-full border-x-0 border-y-0 bg-transparent placeholder:text-slate-300 text-slate-200 text-sm border border-b-slate-400 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-b-slate-400 hover:border-b-slate-300 shadow-sm focus:shadow" placeholder="Email Address" />
                            <button
                                class="absolute right-1 top-1 text-center text-sm text-white font-Montserrat"
                                type="button"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - colorful bubbles*/}
                <div className="relative flex-[1] h-full">
                    <div className="absolute top-20 left-28 w-48 h-48 z-10 bg-purple-300 rounded-full filter blur-2xl opacity-60 animate-spinClockwise"></div>
                    <div className="absolute top-10 left-0 w-48 h-48 z-10 bg-blue-300 rounded-full filter blur-2xl opacity-60 animate-spinClockwise"></div>
                    <div className="absolute bottom-12 left-16 w-48 h-48 z-10 bg-pink-300 rounded-full filter blur-2xl opacity-60 animate-spinCounterClockwise"></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
