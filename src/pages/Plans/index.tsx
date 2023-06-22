import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { planCardProps, PlanCardTwoProps } from "../../types"
import PlanCardTwo from "../../Components/PlanCardTwo"
import { categories } from "../../Components/Helper/ExtraData"

function Plans() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.readplan)
  console.log(data.plans)

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
    <main className="w-[100vw] overflow-x-hidden">
      <h3 className="flex justify-center text-center font-[700] text-[2.3rem]">
        Bible Reading Plans & Daily Devotionals
      </h3>

      <section className=" relative">
        <div className="  z-50">
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
        <div className={`flex    gap-3 "  `}>
          {data.plans.random
            ?.slice(currentState, currentState + 3)
            .map((plan: planCardProps, index: number) => (
              <PlanCardTwo item={plan} key={index} />
            ))}
        </div>
      </section>

      <section className="w-full my-5 relative">
        <div className=" opacity-0   hover:opacity-50">
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

        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Love
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Love?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-start pl-5 text-start items-center"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Anxiety
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Anxiety?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2  pl-5 text-start items-center"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Hope
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Hope?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-center pl-5 text-start"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Fear
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Fear?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-center  pl-5 text-start"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Kids
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.kids
              ?.slice(currenntSlid, currenntSlid + 5)
              .map((item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-start pl-5 text-start items-center"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Depression
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Depression?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-center pl-5 text-start"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Prayer
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Prayer?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-center pl-5 text-start"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5 my-7 ">
            Work
            <GrNext className="text-[10px] " />
          </div>
          <div className="w-[96%] flex   gap-1  px-4 overflow-x-hidden  items-center">
            {data.plans.Work?.slice(currenntSlid, currenntSlid + 5).map(
              (item: planCardProps, index: number) => (
                <div
                  className="flex flex-col gap-2 items-center pl-5 text-start"
                  key={index}
                >
                  <div
                    key={index}
                    className=" p-4 md:w-[310px] h-[125px] md:h-[150px] w-[225px]  rounded-md flex justify-center items-center gap-3 text-center"
                  >
                    <img src={item.img} alt="" />
                  </div>

                  <span className="text-gray-400 text-start text-[10px]">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Plans
