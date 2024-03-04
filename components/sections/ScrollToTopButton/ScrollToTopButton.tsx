import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`fixed bottom-8 right-0 cursor-pointer  z-50 ${isVisible ? 'opacity-100 duration-[1s] mr-[30px]' : 'opacity-0 right-0 mr-[0px] duration-[1s]'}`}>
      <button
        onClick={scrollToTop}
        className="bg-[#005AAB] text-white p-2 rounded-full focus:outline-none"
      >
        <IoIosArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
