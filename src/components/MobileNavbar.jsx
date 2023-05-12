import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {GiCardAceClubs} from 'react-icons/gi'
import {BsFillDice5Fill} from 'react-icons/bs'
import {MdOutlineScoreboard,MdAccessTimeFilled} from 'react-icons/md'

export const MobileNavbar = () => {
    const Menus=[
        // {name:'Settings',link:'#',icon:HiOutlineCog,dis:"translate-x-64"},
        {name:'Home',link:'/enquire-form',icon:AiFillHome,dis:"translate-x-82"},
        {name:'Sports',link:'/companies',icon:MdOutlineScoreboard,dis:"translate-x-32"},
        {name:'In-play',link:'/homepage',icon:MdAccessTimeFilled,dis:"translate-x-0"},
        {name:'Indian Casino',link:'/events',icon:GiCardAceClubs,dis:"translate-x-48"},
        {name:'Live Casino',link:'/inbox',icon:BsFillDice5Fill,dis:"translate-x-16"},
    ]

    const [active,setActive]=useState()

  return (
    <div className='bg-nav-bg max-h-[4.4rem] px-2 pb-5 fixed inset-x-0 bottom-0 '>
        {/* text-white */}
        <ul className='flex relative justify-between'>
                {/* <span className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16  -top-5 rounded-full`}></span> */}

            {Menus.map((menu,i)=>(
                <li key={i} className="w-full">
                    <Link to={menu?.link} className='flex flex-col  pt-6 text-gray-300' onClick={()=>setActive(i)}>
                    <span className={`flex justify-center text-xl pl-2 cursor-pointer duration-500 ${i=== active && "-mt-6 text-white"}`}>{React.createElement(menu?.icon,{size:"25"})}</span>
                    {/* {menu.name} */}
                    <span className={`flex justify-center text-xs text-white font-semibold `}>{menu.name}</span>
                    {/* <span className={`text-xs text-white ${active === i ? "translate-y-4 duration-700 opacity-100 text-white" : "opacity-0 translate-y-10 hidden text-white"}` }>{menu.name}</span> */}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )

}
