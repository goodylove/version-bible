import React from "react"
import Button from "./../Button/index"
import { Link } from "react-router-dom"

export const NavCard = () => {
  return (
    <div className="max-w-[400px] border-3 border-red-500 bg-[#FFFFFF] rounded-lg shadow-lg flex  flex-col  ml-10 cursor-pointer fixed top-[7rem]   right-[7rem]">
      <div className="bg-[#EDEFEF] py-4 flex flex-col gap-4 rounded-md m-8 justify-center items-center">
        <div className="flex  items-start gap-2  p-2 ">
          <img
            width={50}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo4V3uVC96vQ2wpvkXUY3Hkx8DbaNcWW1fXgIL2uFIb80XUez"
            alt=""
          />
          <div className="">
            <h3 className="font-[700]">Get the YouVersion app</h3>
            <p className="text-[14px]">
              Read the Bible, discover plans, and <br />
              seek God every day.
            </p>
          </div>
        </div>
        <Button className="text-white bg-black w-[250px] rounded-full p-3 text-center font-[500]">
          Use app
        </Button>
      </div>
      <div className="flex flex-col gap-1 justify-center items-start mx-8 my-5  font-[600]">
        <h3 className="hover:bg-[#EDEFEF]  w-full p-2 rounded-md">
          Help & Support
        </h3>
        <h3 className="hover:bg-[#EDEFEF]  w-full p-2 rounded-md">
          Create Account{" "}
        </h3>
        <h3 className="hover:bg-[#EDEFEF]  w-full p-2 rounded-md">Sign In </h3>
      </div>
    </div>
  )
}
