import React from "react"

export type planCardProps = {
  item: {
    img: string
    id: number
    text: string
    link: string
    days: string[]
    name: string
  }
}

export default function PlansCard({ item }: planCardProps) {
  // i want to generate a random number of plan cards
  const random = Math.trunc(Math.random() * 9) + 1
  return (
    <div className="max-w-[590px] mt-3">
      <img src={item.img} alt="" className="w-full " />
      <h3 className="text-[10px] mt-2 font-[400]"> {item.name}</h3>
      <div className="flex gap-1 text-[12px] items-center mt-2">
        <span className="">{random === 0 ? 3 : random} Days</span>
        <span className="text-gray-300 ">.</span>
        <span className="text-[10px] text-blue-500">start plan</span>
      </div>
    </div>
  )
}
