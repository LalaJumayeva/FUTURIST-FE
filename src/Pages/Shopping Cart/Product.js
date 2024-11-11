import { hoodieSmile } from "../../assets";

const Product = () => (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold px-2">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold px-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-4">
                            <div className="flex items-center">
                                <img
                                    className="h-16 w-16 mr-4"
                                    src={hoodieSmile}
                                    alt="Product"
                                />
                                <span className="font-semibold">Product name</span>
                            </div>
                        </td>
                        <td className="py-4 px-2">$19.99</td>
                        <td className="py-4">
                            <div className="flex items-center">
                                <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                <span className="text-center w-8">1</span>
                                <button className="border rounded-md py-2 px-4 ml-2">+</button>
                            </div>
                        </td>
                        <td className="py-4 px-2">$19.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
);

export default Product;
