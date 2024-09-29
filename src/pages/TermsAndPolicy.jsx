const TermsAndPolicy = () => {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <h1 className="text-5xl font-bold text-center mb-24 mt-10 font-orbitron text-[#153147]">
        CO2 Labs Terms and Policy
      </h1>

      <div className="px-20 space-y-10 text-left ">
        <section>
          <h2 className="mb-2 text-3xl font-bold">
            1. Introduction
          </h2>
          <p className="text-lg">
            Welcome to CO2 Labs. By accessing or using our
            services, you agree to comply with and be bound by
            the following terms and conditions. Please read these
            terms carefully before using our website or engaging
            with our services.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            2. Services Offered
          </h2>
          <p className="text-lg">
            CO2 Labs provides software solutions, including
            website development, mobile application development,
            maintenance services, IT support, and CTO-level
            consulting. All services are subject to the terms
            outlined here, and any additional terms agreed upon
            in the service contract.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            3. Privacy Policy
          </h2>
          <p className="text-lg">
            Your privacy is important to us. CO2 Labs collects
            personal data such as your name, email address, and
            other relevant contact details only for communication
            purposes related to our services. We do not sell,
            share, or distribute your personal information to
            third parties unless required by law.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            4. Data Security
          </h2>
          <p className="text-lg">
            CO2 Labs takes all necessary precautions to ensure
            the security of any personal data we collect.
            However, we cannot guarantee absolute security due to
            the nature of online transactions and data storage.
            In the event of a data breach, we will notify you and
            the relevant authorities promptly, following legal
            obligations.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            5. Refund Policy
          </h2>
          <p className="text-lg">
            Refunds for services provided by CO2 Labs will be
            handled on a case-by-case basis. Clients must notify
            us within 7 days of any dissatisfaction with the
            services provided. We reserve the right to either
            rectify the issue or offer a partial or full refund,
            depending on the circumstances and the service
            contract.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            6. Intellectual Property
          </h2>
          <p className="text-lg">
            All content, designs, and software developed by CO2
            Labs are protected by intellectual property laws.
            Unless otherwise stated in the service agreement, CO2
            Labs retains ownership of all intellectual property
            created during the project. Clients are granted a
            license to use the product under specific terms
            agreed upon in the contract.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            7. Relationship to Coding Collective
          </h2>
          <p className="text-lg">
            CO2 Labs is a related entity to Coding Collective Pte
            Ltd, a company that specializes in IT Outsourcing, HR
            Outsourcing, and Offshore Software Development. We
            work closely with Coding Collective to deliver
            high-quality, comprehensive solutions to our clients,
            ensuring both companies meet the evolving needs of
            businesses in the digital landscape.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            8. Limitation of Liability
          </h2>
          <p className="text-lg">
            CO2 Labs shall not be liable for any indirect,
            incidental, or consequential damages arising from the
            use of our services, including but not limited to
            lost profits, data loss, or business interruption.
            Our total liability to clients shall not exceed the
            fees paid for the services rendered.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            9. Third-Party Links and Services
          </h2>
          <p className="text-lg">
            Our website or services may include links to
            third-party services or websites. CO2 Labs is not
            responsible for the content, privacy policies, or
            practices of those third parties. Use of such
            services is at your own risk, and we recommend
            reviewing their policies before engagement.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            10. Modification of Terms
          </h2>
          <p className="text-lg">
            CO2 Labs reserves the right to modify these terms at
            any time. Changes will be effective immediately upon
            posting on our website. Continued use of our services
            after any modifications indicates your acceptance of
            the updated terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-3xl font-bold">
            11. Contact Information
          </h2>
          <p className="text-lg">
            If you have any questions or concerns regarding these
            terms, our services, or your personal data, please
            contact us at:
          </p>
          <ul className="pl-6 list-disc">
            <li>Email: info@co2labs.com</li>
            <li>
              Address: 100 Pasir Panjang Road #02-08 S118520
            </li>
          </ul>
        </section>
      </div>

      <div className="flex justify-center mt-12 text-center">
        <a href="/home">
          <button className="px-5 py-2 text-white bg-[#153147] font-medium rounded-lg text-lg flex items-center justify-center">
            Bring me back
            <span className="ml-2">←</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default TermsAndPolicy;
