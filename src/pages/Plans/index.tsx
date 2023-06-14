import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { planCardProps } from "../../types"
import { increaseSlider } from "../../features/readingPlans/readingplansSlice"

function Plans() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.readplan)
  const dataleng = useAppSelector((state) => state.readplan.plans)
  const [currentState, setCurrentState] = React.useState<number>(0)
  const ref = React.useRef<HTMLImageElement>(null)
  // let position = 0
  // console.log(data.value, position)

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(increaseSlider(data.value))
  //     data.value + 1
  //     setCurrentState(data.value)
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  const handleNext = () => {
    // position += 1

    if (ref.current) {
      ref.current.style.transform = `translateX(-${data.value}00%)`
      console.log(ref.current)
    }
  }

  return (
    <main>
      <section className="w-full relative  ">
        <div>
          <span className=" fixed  top-[18rem] z-50  text-[20px] pl-4">
            <GrPrevious />
          </span>
          <span className="fixed  top-[18rem]  z-50 text-[20px] right-3 ">
            <GrNext
              onClick={() =>
                dispatch(increaseSlider(data.value + 1), handleNext())
              }
            />
          </span>
        </div>
        <div
          className="flex justify-items-center   gap-2 w-[100vw]   relative overflow-x-auto"
          id="content"
        >
          <div className="flex h-[360px] gap-2">
            <img
              src={data.plans.random?.[0].img}
              alt=""
              ref={ref}
              className="one"
            />
            <img
              src={data.plans.random?.[1].img}
              alt=""
              // ref={ref}
              className="two"
            />
            <img
              src={data.plans.random?.[2].img}
              alt=""
              // ref={ref}
              className="thr"
            />
            <img
              src={data.plans.random?.[3].img}
              alt=""
              // ref={ref}
              className="fou"
            />
            <img
              src={data.plans.random?.[4].img}
              alt=""
              // ref={ref}
              className="five"
            />
            <img
              src={data.plans.random?.[5].img}
              alt=""
              // ref={ref}
              className="six"
            />
            <img
              src={data.plans.random?.[6].img}
              alt=""
              // ref={ref}
              className="seven"
            />
            <img
              src={data.plans.random?.[7].img}
              alt=""
              // ref={ref}
              className="eigth"
            />
            <img
              src={data.plans.random?.[8].img}
              alt=""
              // ref={ref}
              className="nine"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Plans
