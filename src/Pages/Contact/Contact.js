function Contact() {
    return (
        <div className="h-full bg-slate-950 overflow-hidden">
            <div className="absolute top-20 left-28 w-48 h-48 z-10 bg-purple-300 rounded-full filter blur-2xl opacity-60 animate-spinClockwise"></div>
            <div className="absolute top-10 left-0 w-48 h-48 z-10 bg-blue-300 rounded-full filter blur-2xl opacity-60 animate-spinClockwise"></div>
            <div className="absolute bottom-12 right-96 w-64 h-64 z-0 bg-pink-300 rounded-full filter blur-2xl opacity-50 animate-spinCounterClockwise"></div>
            <div className="absolute top-64 right-96 w-72 h-72 z-0 bg-purple-300 rounded-full filter blur-2xl opacity-60 animate-spinClockwise"></div>
            <section className="h-screen flex flex-row-reverse relative z-10">
                <div className="w-1/2 pl-64 pr-8 py-16">
                    <div className="w-full bg-white h-full rounded-xl py-4 px-6 shadow-lg shadow-indigo-500/50">
                        <p className="text-4xl font-Montserrat font-semibold mt-2 text-slate-800">Get In Touch</p>
                        <p className="font-Montserrat text-base mb-6 mt-3">You can reach us anytime</p>
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-1/2 py-3 pl-4 border border-gray-300 rounded-full focus:outline-none focus:border-slate-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-1/2 py-3 pl-4 border border-gray-300 rounded-full focus:outline-none focus:border-slate-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full py-3 pl-4 border border-gray-300 rounded-full focus:outline-none focus:border-slate-500"
                                />
                            </div>
                            <div className="flex">
                                <select className="p-3 border border-gray-300 rounded-s-full focus:outline-none focus:border-slate-500">
                                    <option value="+62">+1</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full p-3 border border-gray-300 rounded-e-full focus:outline-none focus:border-slate-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="How can we help?"
                                    maxLength="120"
                                    className="w-full p-3 resize-none border border-gray-300 rounded-lg focus:outline-none focus:border-slate-500"
                                    rows="4"
                                ></textarea>
                                <div className="text-right text-gray-400 text-xs">0/120</div>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-slate-700 text-white font-medium rounded-full hover:bg-slate-900 font-Montserrat"
                            >
                                Submit
                            </button>
                        </form>
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            By contacting us, you agree to our <span className="font-bold">Terms of service</span> and <span className="font-bold">Privacy Policy</span>
                        </p>
                    </div>
                </div>
                <div className="w-1/2 p-4 flex items-center flex-col justify-between py-16 pl-8">
                    <div className="flex flex-col">
                        <p className="text-6xl font-Montserrat font-semibold text-slate-50 mb-6">Contact Us</p>
                        <p className="text-slate-300 text-lg font-Montserrat mb-4">We’d love to hear from you! Whether you have questions, feedback, or need assistance,
                            our team is here to help. Please fill out the form, and we’ll get back to you as soon as possible.</p>
                        <p className="text-slate-300 text-lg font-Montserrat mb-4">+1 123 456 7890</p>
                        <p className="text-slate-300 text-lg font-Montserrat">info@futurist.io</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col mr-6">
                            <p className="text-lg font-bold font-Montserrat text-slate-50 mb-6">Customer Support</p>
                            <p className="text-slate-300 text-sm font-Montserrat mb-4">Got a question or running into an issue? Our customer support team is dedicated to making your experience
                                smooth and hassle-free.</p>
                        </div>
                        <div className="flex flex-col mr-6">
                            <p className="text-lg font-bold font-Montserrat text-slate-50 mb-6">Feedback and Suggestions</p>
                            <p className="text-slate-300 text-sm font-Montserrat mb-4">We’re constantly striving to improve, and your feedback is invaluable to us. If you have suggestions, ideas,
                                or comments on how we can enhance your experience, please let us know.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold font-Montserrat text-slate-50 mb-6">Media Inquiries</p>
                            <p className="text-slate-300 text-sm font-Montserrat mb-4">If you’re a member of the media looking for information, interviews, or press materials, please reach out using the form.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-row items-center pl-8 pt-10 pb-24 relative">
                <div className="absolute bottom-36 right-16 w-64 h-64 z-0 bg-blue-300 rounded-full filter blur-2xl opacity-50 animate-spinCounterClockwise"></div>
                <div className="absolute bottom-64 right-8 w-80 h-72 z-0 bg-purple-300 rounded-full filter blur-2xl opacity-60 animate-spinClockwise"></div>

                <div className="google-map-code">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.870558405966!2d-73.9851305845948!3d40.75889537932643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d5afbbb9%3A0x1f1e6a64cf04cd63!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1587818542745!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0, borderRadius: 10 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="map"
                    />
                </div>
                <div className="text-slate-50 ml-10 relative z-20">
                    <p className="text-xl mb-6 font-Montserrat">Our Location</p>
                    <p className="text-5xl mb-6 font-semibold font-Montserrat">Connecting Near and Far</p>

                    <div>
                        <p className="text-lg mb-4 font-semibold font-Montserrat">Headquarters</p>
                        <p className="text-slate-300 mb-1 font-Montserrat">
                            Futurist Inc.
                        </p>
                        <p className="text-slate-300 mb-1 font-Montserrat">
                            New York city, USA.
                        </p>
                        <p className="text-slate-300 mb-1 font-Montserrat">
                            7693 Thomas Ave.
                        </p>
                        <p className="text-slate-300 mb-1 font-Montserrat">
                            Brooklyn, NY 11214
                        </p>
                        <p className="text-slate-300 mb-1 font-Montserrat">
                            United States
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
