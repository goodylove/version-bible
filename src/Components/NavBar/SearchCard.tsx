import React from "react"

export default function SearchCard() {
  return (
    <div className="max-w-[400px] rounded-lg shadow-lg bg-[#FFFF] p-5 ml-[30rem]">
      <div className="flex justify-between">
        <span>Recent Search</span>
        <span className="text-blue-400">Clear</span>
      </div>
      <ul className="flex flex-col gap-2 mt-3">
        <li>bible</li>
        <li>bible</li>
        <li>bible</li>
      </ul>
    </div>
  )
}
