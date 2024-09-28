import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="fixed top-0 z-20 flex items-center justify-between w-screen px-10 py-2 lg:flex-row lg:px-28">
        <Link to="/home">
          <img className="w-16 cursor-pointer" src={Logo} alt="" />
        </Link>
        <div className="hidden gap-10 space-x-4 md:flex">
          <a
            href="#"
            className="text-xl font-medium text-gray font-generalsans"
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
            className="text-xl font-medium text-gray font-generalsans"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-xl font-medium text-gray font-generalsans"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-xl font-medium text-gray font-generalsans"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:flex">
          <button className="bg-[#153147] rounded-md font-medium font-generalsans text-white py-2 px-4 hover:shadow-lg">
            Get Started Today!
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-50 bg-white bg-opacity-50"
            onClick={toggleMenu}
          ></div>
          <div className="fixed inset-y-0 left-0 z-50 p-4 bg-white w-80">
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
              className="block p-3 mb-2 font-medium text-black rounded-md bg-slate-100 text-gray font-generalsans hover:underline"
            >
              Our Services
            </a>
            <ul className="leading-8 list-disc">
              <li className="my-3 ml-5 underline">Website Maintenance</li>
              <li className="my-3 ml-5 underline">Website & App Development</li>
              <li className="my-3 ml-5 underline">IT Support</li>
              <li className="my-3 ml-5 underline">3rd Party AI Solution</li>
            </ul>
            <a
              href="#"
              className="block p-3 mb-2 font-medium text-black rounded-md bg-slate-100 text-gray font-generalsans hover:underline bg-"
            >
              About Us
            </a>
            <a
              href="#"
              className="block p-3 mb-2 font-medium text-black rounded-md bg-slate-100 text-gray font-generalsans hover:underline bg-"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block p-3 mb-2 font-medium text-black rounded-md bg-slate-100 text-gray font-generalsans hover:underline bg-"
            >
              Contact Us
            </a>
            <button className="bg-[#153147] mt-[30px] w-full rounded-lg font-medium font-generalsans text-white py-3 px-4">
              Get Started Today!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
