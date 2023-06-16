import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { planCardProps, PlanCardTwoProps } from "../../types"
import PlanCardTwo from "../../Components/PlanCardTwo"
import { categories } from "../../Components/Helper/ExtraData"

function Plans() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.readplan)

  const [currentState, setCurrentState] = React.useState<number>(0)
  const [currenntSlid, setCurrenntSlid] = React.useState<number>(0)

  const HandleRight = (param: any, param2: any) => {
    param((prevIndex: number) => (prevIndex === param2 ? 0 : prevIndex + 1))
  }

  const handleLeft = (param: any, param2: any) => {
    param((prevIndex: number) => (prevIndex === 0 ? param2 : prevIndex - 1))
  }

  const styleCarousel = {
    transform: `translateX(-${currentState}00%)`,
  }

  return (
    <main className="w-[100vw]">
      <section className="w-[100vw] relative">
        <div className="opacity-0  hover:opacity-50  z-50">
          <span className=" absolute  top-[10rem] z-50  text-[30px] text-white  pl-4">
            <GrPrevious
              onClick={() =>
                handleLeft(setCurrentState, data.plans.random?.length - 3)
              }
            />
          </span>
          <span className="absolute  top-[10rem]  z-50 text-[30px] text-white  right-3 ">
            <GrNext
              onClick={() =>
                HandleRight(setCurrentState, data.plans.random?.length - 3)
              }
            />
          </span>
        </div>
        <div className={`flex flex-row   gap-3 w-full   `}>
          {data.plans.random
            ?.slice(currentState, currentState + 3)
            .map((plan: planCardProps, index: number) => (
              <PlanCardTwo item={plan} key={index} prop={styleCarousel} />
            ))}
        </div>
      </section>

      <section className="w-full my-5 relative">
        <div className=" opacity-0  hover:opacity-50">
          <span className=" absolute  top-[4rem] z-50  text-[20px] pl-4">
            <GrPrevious
              onClick={() => handleLeft(setCurrenntSlid, categories.length - 5)}
            />
          </span>
          <span className="absolute  top-[4rem]  z-50 text-[20px] right-3 ">
            <GrNext
              onClick={() =>
                HandleRight(setCurrenntSlid, categories.length - 5)
              }
            />
          </span>
        </div>
        <div className="w-full flex gap-4">
          {categories
            .slice(currenntSlid, currenntSlid + 5)
            .map((item, index) => (
              <div
                key={index}
                className=" p-4 md:w-[370px] h-[125px] md:h-[150px] w-[245px]  rounded-md flex justify-center items-center gap-3"
                style={{ backgroundImage: `${item.backgroundImage}` }}
              >
                <p className=" border-2 p-5 w-24 h-8 flex items-center justify-center text-white">
                  {" "}
                  {item.name}
                </p>
              </div>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Plans
