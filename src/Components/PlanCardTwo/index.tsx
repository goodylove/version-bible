import React from "react"
import { PlanCardTwoProps } from "./../../types"

function PlanCardTwo({ item, isClick }: PlanCardTwoProps) {
  //   console.log(item.id, id)

  return (
    <div>
      <img
        src={item.img}
        alt=""
        className={`h-[400px]  max-w-[50%] ${
          item.id && isClick ? "img-card " : "img-card2 "
        }
         `}
        style={{ maxWidth: "none" }}
      />
    </div>
  )
}

export default PlanCardTwo
