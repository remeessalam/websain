import React, { useState } from "react";
import { landingPages } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = landingPages.slice(0, length || landingPages.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-[5rem] bg-[#101010] text-white">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Advanced and Highly Reliable Performance
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          Our success is our success and together we help our society to become
          a better place to live and work.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              data-aos="fade-up"
              key={service.id}
              className="rounded-lg p-[1px] bg-gradient-to-r from-secondary to-primary cursor-pointer"
            >
              <div className="rounded-lg bg-[#101010] hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service.type}
                  </h5>
                  <p className="desc text-white/80">
                    {service.shortDescription}
                  </p>
                </div>
                <button
                  onClick={() => handleSelectServiceToShowDetail(service)}
                  className="desc mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-6 wrapper text-white pb-[2rem]">
          <h1 className="heading-1">{selectedService.headline}</h1>

          <p className="desc whitespace-pre-line">
            {selectedService.introParagraph}
          </p>

          <p className="short-description text-2xl ">
            {selectedService.shortDescription}
          </p>

          <div className="key-features-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedService.keyFeatures.map((feature, index) => {
              const [title, description] = feature.split(":");
              return (
                <div
                  key={index}
                  className="key-feature-card bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {title}
                  </h3>
                  <p className="text-gray-300 mt-2">{description}</p>
                </div>
              );
            })}
          </div>

          <button className="primary-btn w-fit">
            {selectedService.ctaButton}
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
