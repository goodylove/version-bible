import React from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { fetchReadingPlans } from "../../features/readingPlans/readingplansSlice"

export default function PlansCard() {
  const data = useAppSelector((state) => state.readplan.plans)
  console.log(data)

  const disptach = useAppDispatch()

  React.useEffect(() => {
    disptach(fetchReadingPlans())
  }, [])
  return (
    <div>
      <img src="" alt="" />
      <h3></h3>
      <div>
        <span>day</span>
        <span>start plan</span>
      </div>
    </div>
  )
}
