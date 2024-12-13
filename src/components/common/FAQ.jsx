import React, { useState } from "react";
import { faqData } from "../../constant";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const FaqAccordion = () => {
  const [openItem, setOpenItem] = useState([]);

  const toggleItem = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div
        data-aos="fade-up"
        className="gradient-rounded-text-box target mx-auto mb-7"
      >
        FAQ
      </div>
      <h1
        data-aos="fade-up"
        className="text-3xl font-bold text-center mb-8 text-white"
      >
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="border border-primary rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-background hover:bg-muted transition-colors duration-200"
              onClick={() => toggleItem(index)}
            >
              <span className="font-medium text-white">{faq.q}</span>
              <IoChevronDownCircleOutline
                className={`w-5 h-5 text-primary transition-transform duration-200 ${
                  openItem === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openItem === index && (
              <div className="px-4 pb-4 bg-muted">
                <p className="text-foreground text-white">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
