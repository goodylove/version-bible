import React from "react"
import { PlanCardTwoProps } from "./../../types"

function PlanCardTwo({ item }: PlanCardTwoProps) {
  return (
    <>
      <img
        src={item.img}
        alt=""
        className={`h-[400px] max-w-[500px]  rounded-lg  `}
      />
    </>
  )
}

export default PlanCardTwo
