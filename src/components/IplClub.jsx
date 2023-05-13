import React, { useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const IplClub = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const menu = [
    {
      id: 1,
      title: "Winner",
      data: [
        {
          team: "guj",
          score: [1, 2, 3, 4, 5, 6],
        },
      ],
    },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <ul className="w-full px-4">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col justify-between  mb-2 py-3  w-full bg-[#32383e] hover:bg-[#22262a] rounded-t-md ${
              activeIndex === index ? "bg-[#22262a]" : ""
            }`}
          >
            <div className="flex  justify-between items-center gap-3 px-4">
              <div className="flex items-center gap-3 ">
                {/* <img src={item.icon} alt="" className="w-4 h-4 invert" /> */}
                <h4 className="text-[#EEE] text-sm font-semibold">
                  {item.title}
                </h4>
                {/* <p className='text-green-500 '>.</p> */}
              </div>
              {item?.data ? (
                <div className="flex items-center gap-3">
                  <span className="flex justify-center   text-[#EEE] font-semibold text-xs">
                    <GoInfo className="w-4 h-4" />
                  </span>
                  <h4
                    className="flex justify-center text-[#EEE] cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    {activeIndex === index ? (
                      <RiArrowUpSLine className="font-semibold" />
                    ) : (
                      <IoIosArrowDown className="font-semibold" />
                    )}
                  </h4>
                </div>
              ) : null}
            </div>
            {activeIndex === index && (
              <div className="flex flex-col items-start gap-4 pt-2 px-4 break">
                {item.data.map((Item, Index) => (
                  // <li key={Index}>{Item}</li>
                  <div
                    key={Index}
                    className="text-[#EEE] text-sm font-semibold"
                  >
                    <div className="flex">
                      <div>{Item.team}</div>
                      {Item.score.map((Score, index) => (
                        <p
                          key={index}
                          className="text-white text-md flex gap- font-semibold"
                        >
                          {Score}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
