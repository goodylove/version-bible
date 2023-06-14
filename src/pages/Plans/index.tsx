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
  // const handleNext = () => {
  //   // position += 1

  //   if (ref.current) {
  //     ref.current.style.transform = `translateX(-${data.value}00%)`
  //     console.log(ref.current)
  //   }
  // }

  return (
    <main>
      <section className="w-[100vw] relative  overflow-hidden ">
        <div>
          <span className=" fixed  top-[18rem] z-50  text-[20px] pl-4">
            <GrPrevious className="end-0" />
          </span>
          <span className="fixed  top-[18rem]  z-50 text-[20px] right-3 ">
            <GrNext className=" start-0" />
          </span>
        </div>
        <div className="flex flex-row justify-items-center   gap-2 w-full  overflow-hidden">
          <div className="flex h-[360px] gap-2 flex-shrink-0">
            <img
              src={data.plans.random?.[0].img}
              alt=""
              className=""
              // style={{
              //   position: "absolute",
              //   height: "100%",
              //   width: "100 %",
              //   left: "0",
              //   top: "0",
              //   right: " 0",
              //   bottom: "0",
              //   objectFit: "cover",
              //   color: "transparent",
              // }}
            />
            <div
              className="flex h-[360px] gap-2 flex-shrink-0"
              // style={{ transform: "translate3d(321.667px, 0px, 0px)" }}
            >
              <img
                src={data.plans.random?.[1].img}
                alt=""
                // ref={ref}
                // className="two flex-shrink-0"
              />
            </div>

            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[2].img}
                alt=""
                // ref={ref}
                // className="two flex-shrink-0"
              />
            </div>
            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[3].img}
                alt=""
                // ref={ref}
                // className="fou"
              />
            </div>
            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[4].img}
                alt=""
                // ref={ref}
                // className="five"
              />
            </div>
            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[5].img}
                alt=""
                // ref={ref}
                // className="six"
              />
            </div>
            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[6].img}
                alt=""
                // ref={ref}
                // className="seven"
              />
            </div>
            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[7].img}
                alt=""
                // ref={ref}
                // className="eigth"
              />
            </div>
            <div className="flex h-[360px] gap-2 flex-shrink-0">
              <img
                src={data.plans.random?.[8].img}
                alt=""
                // ref={ref}
                // className="nine"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Plans
