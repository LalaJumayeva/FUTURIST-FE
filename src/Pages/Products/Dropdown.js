import { useState } from "react";

const DropdownRadio = ({ setCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("default-radio-1");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleRadioChange = (e, category) => {
        setSelectedRadio(e.target.id);
        setCategory(category);
    };

    return (
        <div className="relative">
            <button
                id="dropdownRadioButton"
                onClick={toggleDropdown}
                className="text-white bg-slate-700 font-Montserrat hover:bg-slate-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                Categories
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    id="dropdownDefaultRadio"
                    className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 mt-2 absolute right-0"
                >
                    <ul
                        className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownRadioButton"
                    >
                        <li>
                            <div className="flex items-center">
                                <input
                                    id="default-radio-1"
                                    type="radio"
                                    name="default-radio"
                                    className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                                    checked={selectedRadio === "default-radio-1"}
                                    onChange={(e) => handleRadioChange(e, 'all')}
                                />
                                <label
                                    htmlFor="default-radio-1"
                                    className="ms-2 font-Montserrat text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Default: All
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input
                                    id="default-radio-2"
                                    type="radio"
                                    name="default-radio"
                                    className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                                    checked={selectedRadio === "default-radio-2"}
                                    onChange={(e) => handleRadioChange(e, 'men')}
                                />
                                <label
                                    htmlFor="default-radio-2"
                                    className="ms-2 font-Montserrat text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Men fashion
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <input
                                    id="default-radio-3"
                                    type="radio"
                                    name="default-radio"
                                    className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                                    checked={selectedRadio === "default-radio-3"}
                                    onChange={(e) => handleRadioChange(e, 'women')}
                                />
                                <label
                                    htmlFor="default-radio-3"
                                    className="ms-2 font-Montserrat text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Women fashion
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownRadio;
