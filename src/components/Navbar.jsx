import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`fixed top-0 z-20 bg-white flex items-center justify-between w-screen px-10 py-2 lg:flex-row lg:px-28 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } `}
      >
        <a href="/">
          <img
            className="w-16 cursor-pointer"
            src={Logo}
            alt="Logo"
          />
        </a>
        <div className="hidden gap-10 space-x-4 md:hidden lg:flex">
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-xl font-medium text-gray-800"
            >
              Our Services
              <svg
                className="inline-block w-4 h-4 ml-2"
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
            {isDropdownOpen && (
              <div className="absolute left-0 w-[750px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-4 z-10">
                <a
                  href="/"
                  className="flex items-center p-2 space-x-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <div className="p-2 bg-red-100 rounded-full ">
                    <svg
                      viewBox="0 0 31 31"
                      fill=""
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-500"
                      stroke="none"
                    >
                      <path
                        d="M20.6091 0.00537109C18.4433 0.00537109 16.4237 1.42673 15.7935 3.42548L1.81746 3.42204C0.873952 3.42204 0.109131 4.18737 0.109131 5.13037C0.109131 6.07337 0.873952 6.8387 1.81746 6.8387L15.7935 6.83704C16.559 8.92974 18.4433 10.2554 20.6091 10.2554C22.775 10.2554 24.6786 8.92634 25.4574 6.82338L29.1508 6.8387C30.0943 6.8387 30.8591 6.07337 30.8591 5.13037C30.8591 4.18737 30.0943 3.42204 29.1508 3.42204H25.4429C24.6203 1.33958 22.775 0.00537109 20.6091 0.00537109ZM20.6091 3.42204C21.5526 3.42204 22.3175 4.18737 22.3175 5.13037C22.3175 6.07337 21.5526 6.8387 20.6091 6.8387C19.6656 6.8387 18.9008 6.07337 18.9008 5.13037C18.9008 4.18737 19.6656 3.42204 20.6091 3.42204ZM10.3591 10.2554C8.10755 10.2554 6.22292 11.6562 5.5348 13.6755C5.29461 13.6909 1.81746 13.672 1.81746 13.672C0.873952 13.672 0.109131 14.4374 0.109131 15.3804C0.109131 16.3234 0.873952 17.0887 1.81746 17.0887C1.81746 17.0887 5.32365 17.0528 5.54214 17.075C6.23026 19.0943 8.10755 20.5054 10.3591 20.5054C12.525 20.5054 14.3809 19.178 15.1927 17.0938L29.1508 17.0887C30.0943 17.0887 30.8591 16.3234 30.8591 15.3804C30.8591 14.4374 30.0943 13.672 29.1508 13.672L15.1838 13.6567C14.435 11.6187 12.525 10.2554 10.3591 10.2554ZM10.3591 13.672C11.3026 13.672 12.0675 14.4374 12.0675 15.3804C12.0675 16.3234 11.3026 17.0887 10.3591 17.0887C9.41562 17.0887 8.6508 16.3234 8.6508 15.3804C8.6508 14.4374 9.41562 13.672 10.3591 13.672ZM20.6091 20.5054C18.4433 20.5054 16.4622 21.9318 15.7923 23.9049L1.81746 23.922C0.873952 23.922 0.109131 24.6874 0.109131 25.6304C0.109131 26.5734 0.873952 27.3387 1.81746 27.3387L15.767 27.3404C16.4758 29.3647 18.4433 30.7554 20.6091 30.7554C22.775 30.7554 24.6423 29.4006 25.4651 27.3404L29.1508 27.3387C30.0943 27.3387 30.8591 26.5734 30.8591 25.6304C30.8591 24.6874 30.0943 23.922 29.1508 23.922L25.4495 23.9118C24.712 21.8909 22.775 20.5054 20.6091 20.5054ZM20.6091 23.922C21.5526 23.922 22.3175 24.6874 22.3175 25.6304C22.3175 26.5734 21.5526 27.3387 20.6091 27.3387C19.6656 27.3387 18.9008 26.5734 18.9008 25.6304C18.9008 24.6874 19.6656 23.922 20.6091 23.922Z"
                        fill="#d94b1c"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Website Maintenance
                    </h3>
                    <p className="text-sm text-gray-500">
                      Keep your website running smoothly and
                      securely.
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex items-center p-2 space-x-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      viewBox="0 0 35 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4414 0.882221C20.5342 0.624263 19.5653 1.1487 19.306 2.05753L12.4726 25.9742C12.2135 26.8813 12.74 27.8499 13.6473 28.1096C14.5544 28.3676 15.5234 27.8431 15.7827 26.9343L22.616 3.01764C22.8752 2.11051 22.3487 1.14189 21.4414 0.882221ZM8.68235 2.59055C8.25356 2.67597 7.82289 2.8929 7.56117 3.28582L0.727838 13.5358C0.38788 14.0449 0.347049 14.6958 0.621237 15.2441L5.74624 25.4941C6.16802 26.3364 7.19781 26.7156 8.04172 26.2937C8.88564 25.8717 9.26438 24.8416 8.84242 23.9977L4.1445 14.6565L10.4441 5.20602C10.9674 4.4219 10.7486 3.32855 9.9636 2.8041C9.57102 2.54272 9.11114 2.50514 8.68235 2.59055ZM28.3282 2.64352C27.9134 2.50686 27.4689 2.48633 27.0469 2.69816C26.203 3.12012 25.8243 4.15023 26.2462 4.99415L30.9442 14.3353L24.6445 23.7858C24.1212 24.5699 24.3401 25.6633 25.1251 26.1877C25.91 26.7105 27.0041 26.4918 27.5275 25.706L34.3608 15.456C34.7008 14.9469 34.7416 14.2961 34.4674 13.7477L29.3424 3.49769C29.1316 3.07744 28.743 2.78361 28.3282 2.64352Z"
                        fill="#bab020"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Website & App Development
                    </h3>
                    <p className="text-sm text-gray-500">
                      Transform your online presence with our
                      custom solutions.
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex items-center p-2 space-x-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <div className="p-2 bg-green-100 rounded-full">
                    <svg
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 38 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33 2C30.242 2 28 4.242 28 7C28 7.714 28.156 8.392 28.428 9.01L24.518 13.408C23.23 12.524 21.678 12 20 12C18.52 12 17.152 12.432 15.962 13.132L11.414 8.586L11.368 8.632C11.76 7.836 12 6.95 12 6C12 2.686 9.314 0 6 0C2.686 0 0 2.686 0 6C0 9.314 2.686 12 6 12C6.95 12 7.834 11.76 8.632 11.368L8.586 11.414L13.134 15.96C12.43 17.152 12 18.522 12 20C12 21.994 12.76 23.798 13.97 25.202L8.816 30.354C8.252 30.132 7.642 30 7 30C4.244 30 2 32.242 2 35C2 37.758 4.244 40 7 40C9.756 40 12 37.758 12 35C12 34.358 11.868 33.748 11.646 33.182L17.322 27.506C18.164 27.806 19.056 28 20 28C24.412 28 28 24.412 28 20C28 18.728 27.674 17.542 27.144 16.472L31.378 11.706C31.89 11.882 32.43 12 33 12C35.758 12 38 9.758 38 7C38 4.242 35.758 2 33 2ZM20 24C17.794 24 16 22.206 16 20C16 17.794 17.794 16 20 16C22.206 16 24 17.794 24 20C24 22.206 22.206 24 20 24Z"
                        fill="#20c98e"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      IT Support
                    </h3>
                    <p className="text-sm text-gray-500">
                      Experience peace of mind with our reliable
                      services.
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  className="flex items-center p-2 space-x-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <div className="p-2 bg-purple-100 rounded-full">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      viewBox="0 0 29 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4741 0.33667C13.0459 0.33667 11.6246 1.0183 10.5774 2.36618L2.24922 13.0962C0.35638 15.5289 0.35638 19.3111 2.24922 21.7438L10.5774 32.4738C12.6735 35.1696 16.2747 35.1696 18.3708 32.4738L26.699 21.7438C28.5918 19.3111 28.5918 15.5289 26.699 13.0962L18.3708 2.36618C17.3236 1.0183 15.9023 0.33667 14.4741 0.33667Z"
                        fill="#c420c9"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      3rd Party AI Solution
                    </h3>
                    <p className="text-sm text-gray-500">
                      Leverage AI to find the best solutions for
                      your business.
                    </p>
                  </div>
                </a>
              </div>
            )}
          </div>
          <a
            href="#aboutUs"
            className="text-xl font-medium text-gray-800"
          >
            About Us
          </a>
          <a
            href="#portfolio"
            className="text-xl font-medium text-gray-800"
          >
            Portfolio
          </a>
          <a
            href="#contactUs"
            className="text-xl font-medium text-gray-800"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:hidden lg:flex">
          <button className="bg-[#153147] rounded-md font-medium text-white py-2 px-4 transition-all duration-150 hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110">
            Get Started Today!
          </button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
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
              className="block p-3 mt-8 mb-8 text-lg font-medium text-black rounded-md bg-slate-100 hover:underline"
            >
              Our Services
            </a>
            <ul className="leading-8 list-disc">
              <li className="my-3 ml-5 text-lg underline">
                Website Maintenance
              </li>
              <li className="my-3 ml-5 text-lg underline">
                Website & App Development
              </li>
              <li className="my-3 ml-5 text-lg underline">
                IT Support
              </li>
              <li className="my-3 ml-5 text-lg underline">
                3rd Party AI Solution
              </li>
            </ul>
            <a
              href="#aboutUs"
              className="block p-3 mt-3 mb-3 text-lg font-medium text-black rounded-md bg-slate-100 hover:underline"
            >
              About Us
            </a>
            <a
              href="#portfolio"
              className="block p-3 mb-3 text-lg font-medium text-black rounded-md bg-slate-100 hover:underline"
            >
              Portfolio
            </a>
            <a
              href="#contactUs"
              className="block p-3 mb-3 text-lg font-medium text-black rounded-md bg-slate-100 hover:underline"
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
