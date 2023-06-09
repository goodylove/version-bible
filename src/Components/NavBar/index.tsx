import React, { useState } from "react"
import { Svg } from "./../Svg/svg"
import { NavCard } from "./NavBarCard"
import SearchCard from "./SearchCard"

function NavBar() {
  const [showNavBarCard, setShowNavBarCard] = React.useState<boolean>(false)
  const [searchValue, setSearchValue] = React.useState<string>("")
  const [getSearchValue, setGetSearchValue] = React.useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    setSearchValue(value)
  }

  const handleSearch = () => {
    getSearchValue.push(searchValue)
    console.log(getSearchValue)
  }

  return (
    <>
      <section className="w-full mt-3 p-5 flex justify-center  cursor-pointer relative">
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
              className="bg-[#EDEFEF] border-transparent rounded-5 border-solid box-border font-body font-medium text-black  text-16 lg:text-13 sm:text-base h-5 sm:h-4 leading-default outline-none  placeholder-gray-25 p-3"
              name="Search"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search Bible.com"
            ></input>

            <button
              className="w-10 h-10 rounded-full bg-red-600 flex justify-center items-center"
              onClick={handleSearch}
            >
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
          <div
            className="flex items-center hover:bg-[#EDEFEF] rounded-full  p-2"
            onClick={() => setShowNavBarCard((prev) => !prev)}
          >
            {Svg.barsIcon()}
            {Svg.profileIcon()}
          </div>
        </div>
      </section>
      {showNavBarCard && <NavCard />}
      <SearchCard />
    </>
  )
}

export default NavBar
