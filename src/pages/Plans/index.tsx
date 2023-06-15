import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { planCardProps, PlanCardTwoProps } from "../../types"
import PlanCardTwo from "../../Components/PlanCardTwo"

function Plans() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.readplan)
  const dataleng = useAppSelector((state) => state.readplan.plans)
  const [currentState, setCurrentState] = React.useState<number>(0)
  let isClicked = false
  const ref = React.useRef<HTMLImageElement>(null)

  const HandleRightClik = () => {
    setCurrentState((prevIndex) =>
      prevIndex === data.plans.random?.length - 3 ? 0 : prevIndex + 1,
    )

    isClicked = true
  }
  const handleLeft = () => {
    setCurrentState((prevIndex) =>
      prevIndex === 0 ? data.plans.random?.length - 3 : prevIndex - 1,
    )
  }

  return (
    <main className="w-full">
      <section className="w-[100vw] relative">
        <div>
          <span className=" fixed  top-[18rem] z-50  text-[20px] pl-4">
            <GrPrevious onClick={handleLeft} />
          </span>
          <span className="fixed  top-[18rem]  z-50 text-[20px] right-3 ">
            <GrNext onClick={HandleRightClik} />
          </span>
        </div>
        <div className={`flex flex-row   gap-2 w-full  `}>
          {data.plans.random
            ?.slice(currentState, currentState + data.plans.random?.length)
            .map((plan: planCardProps, index: number) => (
              <PlanCardTwo item={plan} key={index} isClick={isClicked} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default Plans
