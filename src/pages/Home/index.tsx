import React from "react"
import Button from "./../../Components/Button/index"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useAppSelector } from "../../app/hooks"
import Footer from "../../Components/Footer"
import PlansCard from "./../../Components/PlansCard/index"

type randomImageProps = string[]

const randomImage: randomImageProps = [
  "https://www.bible.com/_next/image?url=https%3A%2F%2Fimageproxy.youversionapi.com%2F640x640%2Fhttps%3A%2F%2Fs3.amazonaws.com%2Fstatic-youversionapi-com%2Fimages%2Fbase%2F67142%2F1280x1280.jpg&w=1920&q=75",
  "https://www.bible.com/_next/image?url=https%3A%2F%2Fimageproxy.youversionapi.com%2F640x640%2Fhttps%3A%2F%2Fs3.amazonaws.com%2Fstatic-youversionapi-com%2Fimages%2Fbase%2F82511%2F1280x1280.jpg&w=1920&q=75",
  "https://www.bible.com/_next/image?url=https%3A%2F%2Fimageproxy.youversionapi.com%2F640x640%2Fhttps%3A%2F%2Fs3.amazonaws.com%2Fstatic-youversionapi-com%2Fimages%2Fbase%2F58093%2F1280x1280.jpg&w=640&q=75",
]

type planCardProps = {
  img: string
  id: number
  text: string
  link: string
  name: string
  days: string[]
}
function Home() {
  // show data from the readingplans slice useing useAppSelector
  const data = useAppSelector((state: any) => state.readplan.plans)
  // generate a random imgae
  const getRandomImage = Math.floor(Math.random() * randomImage.length)
  console.log(getRandomImage)

  return (
    <main className="w-full justify-center items-center mt-8 flex-col">
      <section className="w-full flex justify-center flex-col items-center text-center">
        <h2 className="font-[700]  lg:text-[2rem] text-[1.1rem]">
          Get a free bible for your phone and tablet
        </h2>
        <div className="my-4 flex flex-col justify-center items-center">
          <p className="font-[500] text-[13px]">
            online and offline bible is avaliable any time.
          </p>
          <p className="font-[500]">No ads No Purchase</p>
        </div>
        <div className="relative">
          <img
            src="https://www.bible.com/_next/image?url=%2Fassets%2Fimages%2Fqr-home.png&w=256&q=75"
            alt=""
            className="w-[200px] border-[3px] border-black p-2 rounded-lg"
          />
          <div>
            <img
              width={50}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo4V3uVC96vQ2wpvkXUY3Hkx8DbaNcWW1fXgIL2uFIb80XUez"
              alt="bible"
              className="absolute top-[4.4rem] left-[4.5rem]"
            />
          </div>
          <p className="text-center my-2 text-[17px]">
            Scan To Install The App
          </p>
        </div>
        <div className="flex w-full gap-4 justify-center flex-col md:flex-row lg:flex-row items-center">
          <Button className=" w-[7rem]">
            <img
              src="https://www.bible.com/_next/image?url=%2Fassets%2Fimages%2Fplay-store-badge.png&w=384&q=75"
              alt=""
            />
          </Button>
          <Button className=" w-[7rem]">
            <img
              src="https://www.bible.com/_next/image?url=%2Fassets%2Fimages%2Fapp-store-badge.png&w=384&q=75"
              alt=""
            />
          </Button>
        </div>
        <div className="flex items-center gap-3 my-5 font-[700]">
          <span>Or Read The Bible Online</span>
          <AiOutlineArrowRight className="text-[27px]" />
        </div>
      </section>
      <section className="w-full flex justify-center  items-center mt-9">
        <div className="grid lg:grid-cols-3  gap-6  w-[90%] justify-items-center md:grid-cols-2">
          <div className="flex flex-col items-center text-center gap-5  max-w-[300px]">
            <img
              src="https://www.bible.com/_next/image?url=%2Fassets%2Ficons%2Fread-stroked.png&w=48&q=75"
              alt=""
            />
            <h3 className="text-[12px] font-[700] tracking-[0.3rem] leading-normal">
              EXPERIENCE IT ANYWHERE
            </h3>
            <p className="pli-2 leading-loose text-[13px]">
              Choose from more than 2400 Bible versions in over 1600 languages
              on your computer, phone, or tablet -- with many available as audio
              Bibles.
            </p>
            <span className="text-[13px]">view bible version</span>
          </div>
          <div className="flex flex-col items-center text-center gap-5 max-w-[300px]">
            <img
              src="https://www.bible.com/_next/image?url=%2Fassets%2Ficons%2Fhighlight-stroked.png&w=48&q=75"
              alt=""
            />
            <h3 className="text-[12px] font-[700] tracking-[0.3rem] leading-normal">
              MAKE IT YOUR BIBLE
            </h3>
            <p className="pli-2 leading-loose text-[13px]">
              Highlight or Bookmark your favorite verses, make Verse Images that
              you can share, and attach public or private Notes to Bible
              passages.
            </p>
            <span className="text-[13px]">Create Your Free Account</span>
          </div>
          <div className="flex flex-col items-center text-center gap-5 max-w-[300px]">
            <img
              src="https://www.bible.com/_next/image?url=%2Fassets%2Ficons%2Fsmartphone-stroked.png&w=48&q=75"
              alt=""
            />
            <h3 className="text-[12px] font-[700] tracking-[0.3rem] leading-normal">
              INSTALL THE APP NOW
            </h3>
            <p className="pli-2 leading-loose text-[13px]">
              Bible App is completely free, with no advertising and no in–app
              purchases. It’s been installed on over half a billion devices!
            </p>
            <span className="text-[13px]">Download Free Bible App</span>
          </div>
        </div>
      </section>

      <section className="third-section  h-[700px] my-[2rem] w-full relative  flex justify-center items-center md:h-[600px] pb-3">
        <img
          src="https://www.bible.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblurred-mountains.c6d9a87d.jpeg&w=1920&q=75"
          alt=""
          className="w-full h-full"
        />

        <div className=" flex justify-center items-center absolute lg:top-[8rem] flex-col top-[8rem] w-full  lg:pl-5 ">
          <div className="p-5 flex items-center md:flex-row lg:flex-row  flex-col  rounded-md ">
            <div className="max-w-[426px] w-full">
              <img
                src={randomImage[getRandomImage]}
                alt=""
                className="  md:round:ed-l-md w-full  h-[240px] lg:rounded-l-md  md:h-[400px]  rounded-t-md max-w-full "
              />
            </div>
            <div className=" bg-slate-50 md:h-[400px]  h-[240px]   lg:h-[400px] flex  flex-col p-5 md:rounded-r-md md:w-[58%] lg:rounded-r-md rounded-b-md">
              <p className="flex gap-2 md:my-3 my-1 items-center lg:my-3">
                <img
                  src="https://www.bible.com/_next/static/media/votd.994902db.svg"
                  alt=""
                />
                <span className="uppercase text-[13px]">Verse of the day</span>
              </p>
              <h2 className="md:text-[23px]  md:my-3 font-[600] lg:text-[23px]  text-[14px] lg:my-3">
                He has shown you, O mortal, what is good. And what does the LORD
                require of you? To act justly and to love mercy and to walk
                humbly with your God.
              </h2>
              <span className="text-[10px] md:my-3 my-1 lg:my-3 ">
                Micah 6:8(MIC.6.8)
              </span>
              <div className="flex items-center gap-2">
                <img
                  src="https://www.bible.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshare.7c5b4628.png&w=32&q=75"
                  alt=""
                />
                <span className="text-blue-400 text-[10px]  lg:text-[13px]">
                  Highlight,Bookmark or Share this verse
                </span>
              </div>
              <div className="flex items-center gap-2 mb-[2rem]">
                <img
                  src="https://www.bible.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmail.e4086aa6.png&w=32&q=75"
                  alt=""
                />
                <span className="text-blue-400 text-[10px] lg:text-[13px]">
                  Subscribe To The Verse of The Day
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://www.bible.com/_next/static/media/plans.69f3a552.svg"
            alt=""
            className="w-10 h-10"
          />
          <h2 className="font-[700] text-[12px] tracking-[0.2rem] leading-normal">
            FREE READING PLANS AND DEVOTIONALS
          </h2>
          <p className="text-[12px]">
            Bible Plans help you engage with God's Word every day, a little at a
            time.
          </p>
        </div>
      </section>
      <section className="flex justify-center w-full items-center my-9">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 justify-items-center  w-[65%] gap-1">
          {data.random?.map((plans: planCardProps, index: number) => (
            <PlansCard item={plans} key={index} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
