import {
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] =
    useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <nav className="">
      <div
        className={`fixed top-0 z-20 flex items-center justify-between w-screen px-10 py-2 lg:flex-row lg:px-28 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } `}
      >
        <Link to="/home">
          <img
            className="w-16 cursor-pointer"
            src={Logo}
            alt=""
          />
        </Link>
        <div className="hidden gap-10 space-x-4 md:flex">
          <a
            href="#"
            className="text-xl font-medium text-gray"
          >
            Our Services
            <svg
              className="inline-block w-4 h-4 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-xl font-medium text-gray"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-xl font-medium text-gray"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-xl font-medium text-gray"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:flex">
          <button className="bg-[#153147] rounded-md font-medium text-white py-2 px-4 hover:shadow-lg">
            Get Started Today!
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray focus:outline-none"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-50 bg-transparent bg-opacity-50"
            onClick={toggleMenu}
          ></div>
          <div className="fixed inset-y-0 left-0 z-50 p-6 bg-white w-96">
            <button
              onClick={toggleMenu}
              className="mb-4 text-lg font-bold text-[#7a7b7c] focus:outline-none"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <a
              href="#"
              className="block p-3 mt-8 mb-8 text-lg font-medium text-black rounded-md bg-slate-100 text-gray hover:underline"
            >
              Our Services
            </a>
            <ul className="leading-8 list-disc">
              <li className="my-3 ml-5 text-lg underline">
                Website Maintenance
              </li>
              <li className="my-3 ml-5 text-lg underline">
                Website & App
                Development
              </li>
              <li className="my-3 ml-5 text-lg underline">
                IT Support
              </li>
              <li className="my-3 ml-5 text-lg underline">
                3rd Party AI Solution
              </li>
            </ul>
            <a
              href="#"
              className="block p-3 mt-3 mb-3 text-lg font-medium text-black rounded-md bg-slate-100 text-gray hover:underline bg-"
            >
              About Us
            </a>
            <a
              href="#"
              className="block p-3 mb-3 text-lg font-medium text-black rounded-md bg-slate-100 text-gray hover:underline bg-"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block p-3 mb-3 text-lg font-medium text-black rounded-md bg-slate-100 text-gray hover:underline bg-"
            >
              Contact Us
            </a>
            <button className="bg-[#153147] mt-[30px] w-full text-lg rounded-lg font-medium text-white py-3 px-4">
              Get Started Today!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
