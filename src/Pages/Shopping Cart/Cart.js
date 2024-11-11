import Product from "./Product";

const ShoppingCart = () => (
    <div className="bg-gray-100 h-full py-24">
        <div className="w-full px-8 font-Montserrat">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div
                    className="w-full md:w-[65%] lg:w-3/4 h-[400px] overflow-y-auto
                  [&::-webkit-scrollbar]:w-2
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-gray-300
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-500
                ">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="w-full md:w-[35%] lg:w-1/4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>$19.99</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Taxes</span>
                            <span>$1.99</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">$21.98</span>
                        </div>
                        <button className="bg-slate-700 hover:bg-slate-950 text-white py-2 px-4 rounded-lg mt-4 w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ShoppingCart;
