import React from "react"

type SearchProps = {
  listOfSearchedItems: string[]
  clearSearchedItems: () => void
}

export default function SearchCard({
  listOfSearchedItems,
  clearSearchedItems,
}: SearchProps) {
  return (
    <div className="max-w-[400px] rounded-lg shadow-lg bg-[#FFFF] p-5 ml-[30rem]">
      <div className="flex justify-between">
        <span>Recent Search</span>
        <span className="text-blue-400" onClick={clearSearchedItems}>
          Clear
        </span>
      </div>
      <ul className="flex flex-col gap-2 mt-3">
        {listOfSearchedItems.map((item, index) => {
          return (
            <li key={index} className="font-[600]">
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
