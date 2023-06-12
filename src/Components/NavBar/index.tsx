import React, { useRef, MutableRefObject } from "react"
import { Svg } from "./../Svg/svg"
import { NavCard } from "./NavBarCard"
import SearchCard from "./SearchCard"

function NavBar() {
  const myRef = React.useRef<HTMLDivElement>(null)
  const [mobileSearch, setMobileSearch] = React.useState<boolean>(false)
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
  const handleOnclickOnSearchMobile = () => {
    setMobileSearch(true)
  }

  React.useEffect(() => {
    function handler(e: MouseEvent) {
      if (myRef.current) {
        if (!myRef.current.contains(e.target as Node)) {
          setShowNavBarCard((prev) => !prev)
          console.log(myRef.current)
        }
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])

  return (
    <>
      <section
        className={`w-full  p-3 flex justify-center  cursor-pointer fixed top-0 z-50 bg-white ${
          mobileSearch ? "hidden" : "visible"
        }`}
      >
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
          <div className="lg:font-[700] hover:bg-[#EDEFEF] rounded-full  text-[12px] hidden md:block md:text-[10px] md:font-[600]">
            {" "}
            Get the app
          </div>
          <div className="hover:bg-[#EDEFEF] rounded-full p-2 hidden sm:block">
            {Svg.english()}
          </div>
          <div className="flex gap-2 items-center">
            <div
              className="flex sm:hidden bg-[#EDEFEF] rounded-full p-1"
              onClick={handleOnclickOnSearchMobile}
            >
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

      {mobileSearch && (
        <div className="w-full flex justify-center items-center  gap-2 p-5 fixed top-0 bg-white z-50">
          <div className=" border-2 rounded-full  gap-1  w-full  bg-[#EDEFEF] items-center flex p-2">
            <button onClick={handleSearch}>{Svg.search()}</button>

            <input
              aria-label="Search"
              className="bg-[#EDEFEF] border-transparent rounded-5 border-solid box-border font-body font-medium text-black  text-16 lg:text-13 sm:text-base h-5 sm:h-4 leading-default outline-none  placeholder-gray-25 p-3 w-full"
              name="Search"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search Bible.com"
            ></input>
          </div>

          <span
            className="font-[700] text-[16px] hover:bg-[#EDEFEF] rounded-full p-2 cursor-pointer"
            onClick={() => setMobileSearch(false)}
          >
            Cancel
          </span>
        </div>
      )}

      {showNavBarCard && <NavCard docRef={myRef} />}

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
