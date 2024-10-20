import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";


export const SliderContent = (props) => {
    const { title, description, image, alt, price } = props;
    return (
        <div className="relative w-[450px] h-[700px]">
            <div className="relative w-full">
                <div
                    className="w-full h-[500px] bg-cover bg-center hover:shadow-dark-md"
                    style={{ backgroundImage: `url(${image})` }}
                    aria-label={alt}
                />
                <div className="absolute top-4 right-4 opacity-65 hover:opacity-100">
                    <FcLikePlaceholder color={'white'} size={25} />
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-800 p-2 rounded-full opacity-65 hover:opacity-100">
                    <MdOutlineAddShoppingCart color={'white'} size={25} />
                </div>
            </div>
            <div className="text-start mt-4">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-sm text-gray-600">{description}</p>
                <p className="text-base text-gray-600 my-2">{price}</p>
            </div>
        </div>
    );
};
