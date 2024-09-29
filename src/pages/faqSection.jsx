import { useState } from "react";

const FaqSection = () => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      setOpenAccordions(
        openAccordions.filter((i) => i !== index)
      );
    } else {
      setOpenAccordions([...openAccordions, index]);
    }
  };

  return (
    <>
      <h2 className="mb-16 text-4xl mt-20 font-bold text-center font-orbitron text-[#153147]">
        CO2 Labs Frequently Asked Questions
      </h2>
      <div className="max-w-3xl p-4 mx-auto my-6">
        <div className="mb-4">
          <button
            onClick={() => toggleAccordion(0)}
            className="flex items-center w-full px-3 py-4 font-medium text-left text-black bg-white rounded-md shadow-md focus:outline-none"
          >
            <span>{openAccordions.includes(0) ? "▲" : "▼"}</span>
            <span className="ml-2 text-lg font-semibold">
              1. What services does CO2 Labs provide?
            </span>
          </button>
          {openAccordions.includes(0) && (
            <div className="p-3 bg-white">
              <p>
                CO2 Labs specialises in offering end-to-end
                software solutions, including:
              </p>
              <ul className="pl-8 list-disc">
                <li>Website and app design and development</li>
                <li>
                  Maintenance and optimization for existing web
                  and mobile applications
                </li>
                <li>
                  CTO-level consulting for tech strategies and
                  architecture planning
                </li>
                <li>IT support services</li>
                <li>
                  Integration with third-party platforms and
                  services
                </li>
              </ul>
              <p>
                We cater to businesses seeking scalable and
                reliable technology solutions to enhance their
                digital presence.
              </p>
            </div>
          )}
        </div>

        <div className="mb-2">
          <button
            onClick={() => toggleAccordion(1)}
            className="flex items-center w-full px-3 py-4 font-medium text-left text-black bg-white rounded-md shadow-md focus:outline-none"
          >
            <span>{openAccordions.includes(1) ? "▲" : "▼"}</span>
            <span className="ml-2 text-lg font-semibold">
              2. How much do your services cost?
            </span>
          </button>
          {openAccordions.includes(1) && (
            <div className="p-3 bg-white">
              <p>
                Service pricing varies based on the scope and
                complexity of the project. For example:
              </p>
              <ul className="pl-8 list-disc">
                <li>
                  <strong>Website Design and Development</strong>
                  : Typically ranges from{" "}
                  <strong>$5,000 to $20,000</strong>, depending
                  on the features and scale.
                </li>
                <li>
                  <strong>App Development</strong>: Costs can
                  range from <strong>$10,000 to $50,000</strong>,
                  depending on the functionality and platform
                  requirements.
                </li>
                <li>
                  <strong>Maintenance Services</strong>: Start at{" "}
                  <strong>$500 per month</strong>, depending on
                  the needs of your website or application.
                  Please contact us to receive a customized quote
                  for your project.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mb-2">
          <button
            onClick={() => toggleAccordion(2)}
            className="flex items-center w-full px-3 py-4 font-medium text-left text-black bg-white rounded-md shadow-md focus:outline-none"
          >
            <span>{openAccordions.includes(2) ? "▲" : "▼"}</span>
            <span className="ml-2 text-lg font-semibold">
              3. How long does it take to complete a typical
              project?
            </span>
          </button>
          {openAccordions.includes(2) && (
            <div className="p-3 bg-white">
              <p>
                The project timeline depends on the complexity
                and requirements of the task. Generally, a
                small-to-medium-sized website takes betweens{" "}
                <strong>6 to 12 weeks</strong>, while a mobile
                application can take{" "}
                <strong>3 to 6 months</strong> to develop. For
                ongoing maintenance, the time frame depends on
                the frequency and scope of work needed.
              </p>
            </div>
          )}
        </div>

        <div className="mb-2">
          <button
            onClick={() => toggleAccordion(3)}
            className="flex items-center w-full px-3 py-4 font-medium text-left text-black bg-white rounded-md shadow-md focus:outline-none"
          >
            <span>{openAccordions.includes(3) ? "▲" : "▼"}</span>
            <span className="ml-2 text-lg font-semibold">
              4. Do you provide post-launch support and
              maintenance?
            </span>
          </button>
          {openAccordions.includes(3) && (
            <div className="p-3 bg-white">
              <p>
                Yes, CO2 Labs offers ongoing support and
                maintenance for all websites and apps we develop.
                Our maintenance packages include regular updates,
                security patches, performance optimization, and
                technical support to ensure your product stays
                functional and up-to-date.
              </p>
            </div>
          )}
        </div>

        <div className="mb-2">
          <button
            onClick={() => toggleAccordion(4)}
            className="flex items-center w-full px-3 py-4 font-medium text-left text-black bg-white rounded-md shadow-md focus:outline-none"
          >
            <span>{openAccordions.includes(4) ? "▲" : "▼"}</span>
            <span className="ml-2 text-lg font-semibold">
              5. What industries do you specialise in?
            </span>
          </button>
          {openAccordions.includes(4) && (
            <div className="p-3 bg-white">
              <p>
                CO2 Labs works across various industries, with a
                special focus on:
              </p>
              <ul className="pl-6 list-disc">
                <li>Catering and Hospitality</li>
                <li>
                  Meetings, Incentives, Conferences, and
                  Exhibitions (MICE)
                </li>
                <li>E-commerce and Online Businesses</li>
              </ul>
              <p>
                We have experience delivering tailored software
                solutions that address the specific needs of
                these industries, helping them streamline
                operations, engage customers, and improve digital
                experiences.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <a href="/home">
            <button className="px-4 py-2 mt-6 font-medium text-white bg-[#153147] rounded-lg flex items-center justify-center">
              Bring me back
              <span className="ml-2">←</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
