import React from "react"
import { Svg } from "../Svg/svg"

export default function Footer() {
  return (
    <section className="bg-[#F8F9F9] w-full p-6 font-serif">
      <section className="flex flex-col lg:flex-row md:flex-row gap-6  justify-around my-10">
        <div className="w-full md:w-1/3">
          <div className="mb-8">{Svg.YouVersionIcon()}</div>
          <h2 className="text-text-light dark:text-text-dark font-aktiv-grotesk">
            <p className="font-secondary text-[1.4375rem] md:text-[28px]">
              Encouraging and challenging you to seek intimacy with God every
              day.
            </p>
          </h2>
        </div>
        <nav className="flex xl:gap-16 justify-between pbs-4 md:pbs-0 w-full md:w-1/3">
          <div className="flex flex-col align-top gap-3">
            <p className="font-regular leading-loose text-13 font-aktiv-grotesk  font-bold uppercase">
              Ministry
            </p>
            <a className="no-underline" href="/about">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                About
              </p>
            </a>
            <a className="no-underline" href="https://youversion.com/jobs">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Careers
              </p>
            </a>
            <a className="no-underline" href="https://youversion.com/volunteer">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Volunteer
              </p>
            </a>
            <a className="no-underline" href="http://blog.youversion.com/">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Blog
              </p>
            </a>
            <a className="no-underline" href="https://www.bible.com/press">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Press
              </p>
            </a>
          </div>
          <div className="flex flex-col align-top gap-3">
            <p className=" font-regular leading-loose text-13  font-bold uppercase">
              Useful Links
            </p>
            <a className="no-underline" href="https://help.youversion.com/">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Help
              </p>
            </a>
            <a className="no-underline" href="https://www.bible.com/donate">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Donate
              </p>
            </a>
            <a className="no-underline" href="/versions">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Bible Versions
              </p>
            </a>
            <a className="no-underline" href="/languages">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Bible Languages
              </p>
            </a>
            <a className="no-underline" href="/verse-of-the-day">
              <p className="text-text-light dark:text-text-dark font-regular leading-loose text-16 font-aktiv-grotesk text-gray-30">
                Verse of the Day
              </p>
            </a>
          </div>
        </nav>
      </section>
      <hr className="w-full border-gray-15 dark:border-gray-30 border-standard  border-2" />
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
