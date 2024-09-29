const Footer = () => {
  return (
    <footer
      className="py-24 lg:px-24 text-white bg-[#141516]"
      id="footer"
    >
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="flex flex-col justify-between">
          <h2 className="mb-2 text-4xl font-bold">
            Let’s Grow With CO2 Labs
          </h2>
          <p className="mb-8 text-xl font-semibold text-start">
            Get Exclusive Updates From Us
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Yourmail@example.com"
              className="w-full p-3 pl-8 font-semibold rounded-l-full outline-none placeholder:text-gray-400"
            />
            <button className="px-6 font-semibold text-black bg-[#eab308] rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-start px-20 mt-20 gap-14 lg:ml-10 lg:mt-0">
          <ul className="text-[#888] list-disc text-start">
            <h3 className="text-lg font-bold text-white">
              Services
            </h3>
            <li>Web Maintenance</li>
            <li>Web & App Development</li>
            <li>IT Service</li>
            <li>3rd Party AI Solution</li>
          </ul>
          <ul className="text-[#888] list-disc text-start">
            <h3 className="text-lg font-bold text-white">
              About
            </h3>
            <li>
              <a href="#methodology">Our Approach</a>
            </li>
            <li>
              <a href="#ourTeam">Our Team</a>
            </li>
            <li>
              <a href="#portfolio">Our Portfolio</a>
            </li>
          </ul>
          <ul className="text-[#888] list-disc text-start">
            <h3 className="text-lg font-bold text-white">
              Contact
            </h3>
            <li>
              <a href="tel:+6581181595">+65-8118-1595</a>
            </li>
            <li>
              {" "}
              <a href="mailto:info@co2labs.com">
                info@co2labs.com
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A">
                100D Pasir Panjang Road
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container flex flex-col-reverse gap-2 px-16 mx-auto mt-6 text-sm lg:px-0 text-start md:flex-row md:justify-between">
        <p className="text-[#888] text-md">
          ©2024 CO2 Labs. All Right Reserved
        </p>
        <div className="flex mb-4 space-x-6 md:mb-0">
          <a href="/faqs" className=" text-md text-[#888]">
            FAQ
          </a>
          <a href="/terms" className=" text-md text-[#888]">
            Terms & Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
