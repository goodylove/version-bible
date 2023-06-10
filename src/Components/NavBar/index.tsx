import React, { useState } from "react"
import { Svg } from "./../Svg/svg"
import { NavCard } from "./NavBarCard"
import SearchCard from "./SearchCard"

function NavBar() {
  const [showNavBarCard, setShowNavBarCard] = React.useState<boolean>(false)
  const [searchValue, setSearchValue] = React.useState<string>("")
  let [getSearchValue, setGetSearchValue] = React.useState<string[]>([])
  const [showSearchCard, setShowSearchCard] = React.useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    setSearchValue(value)
  }

  const handleSearch = () => {
    if (!searchValue) setShowSearchCard(false)
    else {
      setShowSearchCard(true)
    }
  }
  const handleOnclickOnSearchIcon = () => {
    setShowSearchCard(false)
  }

  return (
    <>
      <section className="w-full  p-3 flex justify-center  cursor-pointer fixed top-0 z-50 bg-white">
        <div className="flex gap-2 w-[96%] justify-between items-center">
          <div className="">{Svg.YouVersionIcon()}</div>
          <ul className="hidden  justify-around gap-5 font-[700] lg:flex ">
            <li className="hover:bg-[#EDEFEF] rounded-full p-3">Bible</li>
            <li className="hover:bg-[#EDEFEF] rounded-full p-3">Plans</li>
            <li className="hover:bg-[#EDEFEF] rounded-full p-3">Videos</li>
          </ul>
          <div className="hidden  border-2 rounded-full  px-2 py-2 w-[34rem] justify-between bg-[#EDEFEF] items-center sm:flex">
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
              {Svg.searchWhite()}
            </button>
          </div>
          <div className="font-[700] hover:bg-[#EDEFEF] rounded-full p-3 text-[12px] hidden md:block">
            {" "}
            Get the app
          </div>
          <div className="hover:bg-[#EDEFEF] rounded-full p-2 hidden sm:block">
            {Svg.english()}
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex sm:hidden bg-[#EDEFEF] rounded-full p-1">
              {Svg.search()}
            </div>
            <div
              className={`flex items-center hover:bg-[#EDEFEF] rounded-full  p-2 ${
                showNavBarCard ? "border-2 border-black" : "border-none"
              }`}
              onClick={() => setShowNavBarCard((prev) => !prev)}
            >
              {Svg.barsIcon()}
              {Svg.profileIcon()}
            </div>
          </div>
        </div>
      </section>
      {showNavBarCard && <NavCard />}

      {showSearchCard && (
        <SearchCard
          listOfSearchedItems={getSearchValue}
          clearSearchedItems={handleOnclickOnSearchIcon}
        />
      )}
    </>
  )
}

export default NavBar
