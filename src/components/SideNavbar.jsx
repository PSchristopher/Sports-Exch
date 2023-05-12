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
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
    {
      title: 'Cricket',
      icon: 'https://sportsexch.com/images/icons/cricket.png',
    },
  ]
  
  return (
    <>
      <h2 className="title-sports mb-2 rounded-md">Sports</h2>
      <div>
        <ul>
          {
            menu.map((item)=>{
              return(
                <li className="flex gap-4 mb-2 py-3 px-2 hover:bg-[#cccccc56] rounded-md">
                  <div className="flex gap-3">
                    <img src={item.icon} alt="" className="w-4 invert" />
                    <h4 className="text-gray-400"> {item.title} </h4>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-gray-300 px-1 rounded-sm">2</span>
                    <h4 className="text-gray-400">{">"}</h4>
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
