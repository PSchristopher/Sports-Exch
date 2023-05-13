import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "SPORTS", href: "#", current: true },
  { name: "IN-PLAY", href: "#", current: false },
  { name: "IPL CLUB", href: "#", current: false },
  { name: "INDIAN CASINO", href: "#", current: false },
  { name: "LIVE CASINO", href: "#", current: false },
  { name: "SLOTS", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SideNavbar = () => {
  const menu = [
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Mixed Martial Arts',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
  ]

  return (
    <>
      <div className="w-full">
        <div className="flex justify-start mb-2">
          <button className="flex justify-start text-white bg-[#32383e] p-3 rounded-md w-full text-xs font-semibold">
            SPORTS
          </button>
        </div>
        <ul className="w-100">
          {
            menu.map((item) => {
              return (

                <li className="flex justify-between gap-4 mb-2 py-3 px-3 w-full hover:bg-[#cccccc56] rounded-md">
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt="" className="w-4 h-4 invert " />
                    <h4 className="text-gray-400 text-sm font-bold"> {item.title} </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex justify-center bg-gray-300  rounded-sm w-4 h-4 rounded-xs text-xs">2</span>
                    <h4 className="flex justify-center text-gray-400">{">"}</h4>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
};
