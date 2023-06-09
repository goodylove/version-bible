import React from "react"
import { Svg } from "./../Svg/svg"

function NavBar() {
  return (
    <section className="w-full mt-3 p-5 flex justify-center ">
      <div className="flex gap-2 w-[96%] justify-between items-center">
        <div className="">{Svg.YouVersionIcon()}</div>
        <ul className="flex justify-around gap-5 font-[700]">
          <li className="hover:bg-[#EDEFEF] rounded-full p-3">Bible</li>
          <li className="hover:bg-[#EDEFEF] rounded-full p-3">Plans</li>
          <li className="hover:bg-[#EDEFEF] rounded-full p-3">Videos</li>
        </ul>
        <div className="flex border-2 rounded-full  px-2 py-2 w-[24rem] justify-between bg-[#EDEFEF] items-center">
          <input
            aria-label="Search"
            className="bg-[#EDEFEF] border-transparent rounded-5 border-solid box-border font-body font-medium text-black  text-16 lg:text-13 sm:text-base h-5 sm:h-4 leading-default pli-1.5 plb-1.5 sm:pli-0.5 sm:plb-0.5 md:pis-3 pie-6 outline-none  placeholder-gray-25"
            name="Search"
            placeholder="Search Bible.com"
          ></input>

          <button className="w-10 h-10 rounded-full bg-red-600 flex justify-center items-center">
            {Svg.search()}
          </button>
        </div>
        <div className="font-[700] hover:bg-[#EDEFEF] rounded-full p-3">
          {" "}
          Get the app
        </div>
        <div className="hover:bg-[#EDEFEF] rounded-full p-2">
          {Svg.english()}
        </div>
        <div className="flex items-center hover:bg-[#EDEFEF] rounded-full  p-2">
          {Svg.barsIcon()}
          {Svg.profileIcon()}
        </div>
      </div>
    </section>
  )
}

export default NavBar
