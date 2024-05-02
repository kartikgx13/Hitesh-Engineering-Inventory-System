import React, { useState } from 'react'


function BOMAccordion({title,answer}) {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-6">
    <button
      onClick={() => setAccordionOpen(!accordionOpen)}
      className="flex justify-between w-3/4 p-2 rounded-tl-md rounded-tr-md shadow-md flex-row gap-4 items-center bg-sky-500 text-white"
    >
      <span>{title}</span>
      {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
      <svg
        className=" fill-white shrink-0 ml-8"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transform origin-center transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
            accordionOpen && "!rotate-180"
          }`}
        />
      </svg>
    </button>
    <div
      className={`grid overflow-hidden p-2 w-3/4 shadow-md rounded-bl-md rounded-br-md transition-all duration-300 ease-in-out bg-slate-100 text-black text-sm ${
        accordionOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
      >
      <div className="overflow-hidden">{answer}</div>
    </div>
  </div>
  )
}

export default BOMAccordion