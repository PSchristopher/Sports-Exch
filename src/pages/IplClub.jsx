import React from 'react'
import { IplClub } from '../components/IplClub'
import { RightNavbar } from '../components/RightNavbar'

export const IplClubPage = () => {
  return (
    <>
      <div className="w-full  md:p-2 overflow-y-scroll scrollbar-hide h-[91vh]  "><IplClub /></div>
      <div className="px-2 hidden md:block w-1/4" >
        <RightNavbar />
      </div>
    </>
  )
}
