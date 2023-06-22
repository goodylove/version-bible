import React from "react"
import { PlanCardTwoProps } from "./../../types"

function PlanCardTwo({ item }: PlanCardTwoProps) {
  return (
    <>
      <img
        src={item.img}
        alt=""
        className={`h-[300px] max-w-[500px]  rounded-lg  `}
      />
    </>
  )
}

export default PlanCardTwo
