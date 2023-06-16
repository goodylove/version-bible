import React from "react"
import { PlanCardTwoProps } from "./../../types"

function PlanCardTwo({ item, prop }: PlanCardTwoProps) {
  return (
    <div className=" img-card">
      <img
        src={item.img}
        alt=""
        className={`h-[400px]  rounded-lg  `}
        style={{ transition: "0.3s" }}
      />
    </div>
  )
}

export default PlanCardTwo
