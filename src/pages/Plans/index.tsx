import React from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { useAppSelector } from "../../app/hooks"
import { planCardProps } from "../../types"

function Plans() {
  const data = useAppSelector((state) => state.readplan)
  return (
    <main>
      <section className="w-full relative  overflow-x-hidden">
        <div>
          <span className=" absolute  text-[20px] top-[7.9rem] pl-4">
            <GrPrevious />
          </span>
          <span className="absolute text-[20px] right-3 top-[7.9rem]">
            <GrNext />
          </span>
        </div>
        <div className="flex justify-items-center   gap-2 max-w-[590px]  ">
          {data.plans.random?.map((plans: planCardProps, index: number) => (
            <img src={plans.img} key={index} className="rounded-xl" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Plans
