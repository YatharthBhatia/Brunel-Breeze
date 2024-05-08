import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AccordionItem = ({ title, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[580px] mt-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xl font-medium flex justify-between items-center w-full"
      >
        <span className="text-left">{title}</span>

        {isOpen ? (
          <div className="text-xl font-light transition-all duration-500">
            <FiMinus />
          </div>
        ) : (
          <div className="text-xl font-light transition-all duration-500">
            <FiPlus />
          </div>
        )}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-teal-950 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="font-light text-[0.95rem] text-[#627275] overflow-hidden py-3">
          {ans}
        </div>
      </div>

      <hr className="border border-[#d7d7d7] mb-10" />
    </div>
  );
};

export default AccordionItem;
  