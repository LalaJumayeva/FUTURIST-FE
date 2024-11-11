import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlinePinterest } from "react-icons/ai";
import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa6";
import { GrPaypal } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStore } from "react-icons/fa6";

function Footer() {
    return (
        <div className="bg-slate-800 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-8 border-b-slate-500 border-b-2">
                <div>
                    <p className="text-slate-400 font-Orbitron font-bold pb-6 text-xl">FUTURIST</p>
                    <p className="text-slate-300 font-Montserrat font-bold pb-4">About</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> About us</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> Delivery Service</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> Privacy Policy</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> FAQ</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> Contact Us</p>
                </div>
                <div>
                    <p className="text-slate-300 font-Montserrat font-bold pb-4">Contact</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"><span className="font-bold">Address:</span> 242 Par Drive, Los Angeles, California, 90017</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"><span className="font-bold">Phone:</span> +1-202-555-0162, +1-202-555-0198</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"><span className="font-bold">Hours:</span> 8:00-18:00 Mon-Sat</p>
                    <p className="text-slate-300 font-Montserrat pb-2">Follow Us</p>
                    <div className="flex flex-row items-center">
                        <FaInstagram size={20} color={'white'} style={{ marginRight: 8 }} />
                        <FaFacebook size={20} color={'white'} style={{ marginRight: 8 }} />
                        <FaXTwitter size={20} color={'white'} style={{ marginRight: 8 }} />
                        <AiOutlinePinterest size={20} color={'white'} style={{ marginRight: 8 }} />
                    </div>
                </div>
                <div>
                    <p className="text-slate-300 font-Montserrat font-bold pb-4">Account</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> My Account</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> View Cart</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> My Likes</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> Help</p>
                </div>
                <div>
                    <p className="text-slate-300 font-Montserrat font-bold pb-4">Download App</p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4 flex flex-row items-center"> Google Play <span>
                        <FaGooglePlay size={20} color={'white'} style={{ marginLeft: 8 }} />
                    </span></p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4 flex flex-row items-center"> App Store
                        <span>
                            <FaAppStore size={20} color={'white'} style={{ marginLeft: 8 }} />
                        </span>
                    </p>
                    <p className="text-slate-300 font-Montserrat hover:text-slate-100 text-sm pb-4"> Payment Gateways:</p>
                    <div className="flex flex-row items-center">
                        <LiaCcVisa size={30} color={'white'} style={{ marginRight: 8 }} />
                        <FaCcMastercard size={25} color={'white'} style={{ marginRight: 8 }} />
                        <GrPaypal size={20} color={'white'} style={{ marginRight: 8 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
