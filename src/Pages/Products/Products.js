import { useState } from "react";
import productsData from "./ProductsData";
import Header from "./Sections/Header";
import DropdownRadio from "./Dropdown";

const Products = () => {
  const [category, setCategory] = useState('all')
  const filteredProducts = category === 'all' 
  ? productsData 
  : productsData.filter(product => product.category === category);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 16;
  const totalEntries = filteredProducts.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastProduct = currentPage * entriesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - entriesPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="bg-white pb-10">
      <Header />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-Montserrat">Trending Products</h2>
          <DropdownRadio setCategory={setCategory} />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.images[0]}
                  alt={`Front of ${product.title}`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Help text */}
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * entriesPerPage + 1}</span> to{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{Math.min(currentPage * entriesPerPage, totalEntries)}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{totalEntries}</span>
        </span>

        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-9 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            Prev
          </button>

          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-9 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
