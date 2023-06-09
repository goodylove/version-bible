import React from "react"
import { Svg } from "../Svg/svg"

export default function Footer() {
  return (
    <section className="bg-[#F8F9F9] w-full p-6 font-serif">
      <hr className="w-full border-gray-15 dark:border-gray-30 border-standard" />
      <div className="w-full flex justify-start mx-2 my-3 max-w-xl gap-2 flex-wrap">
        <a href="https://www.life.church">
          <h3 className="uppercase text-[10px] font-[600]">
            A Digital Ministry Of
          </h3>
        </a>
        {Svg.churchIco()}
      </div>
      <div className="flex flex-col gap-7 lg:flex-row w-full justify-between lg:items-center mt-5 lg:w-full">
        <div className="flex border-2 max-w-[160px]  justify-around rounded-full border-black p-3 font-[500] lg:hidden">
          {Svg.english()} English &nbsp;(US)
        </div>
        <div className="flex-col lg:flex-row flex">
          <p>©2023 Life.Church / YouVersion</p>
          <div>
            <span className="text-[13px]">Privacy Policy</span> &nbsp;
            <span className="text-[13px]">Terms</span>
          </div>
        </div>
        <div className="flex gap-5 lg:items-center items-start ">
          <div className="hidden  border-2 max-w-[160px]  justify-around rounded-full border-black p-3 font-[500] lg:flex">
            {Svg.english()} English &nbsp;(US)
          </div>
          <a href="https://www.instagram.com/goodylove475">
            {" "}
            {Svg.instagram()}
          </a>
          <a href="https://www.twitter.com/goodlove474"> {Svg.twiter()}</a>
          <a href="hhtps://linkedin.com/in/nwachukuwu-goodness-161910219">
            {Svg.linkedin()}
          </a>
        </div>
      </div>
    </section>
  )
}
