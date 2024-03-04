import React, { useState, useEffect, useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";


interface DropdownProps {
  options: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <div className="relative text-left dropdown-styling" ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm">
        
          <button
            type="button"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-theme-primary border border-solid border-[#00000042] xl:w-[150px] lg:w-[150px] md:w-[150px] w-full"
            id="options-menu"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            onClick={toggleDropdown}
          >
            <FaLocationDot className='float-left mr-2' />
            <span>
            {selectedOption}
            </span>
            <svg
              className={`-mr-1 ml-2 h-5 w-5 absolute right-5 ${isOpen ? 'transform rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 left-0"
          role="listbox"
          aria-labelledby="options-menu"
        >
          <div tabIndex={-1} role="list" aria-label="Dropdown Options">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionChange(option)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <span className="font-normal block truncate">{option}</span>
                </div>

                {selectedOption === option && (
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
                    aria-hidden="true"
                  >
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  );
};


