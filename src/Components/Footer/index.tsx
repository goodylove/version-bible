import React from "react"
import { GoHome } from "react-icons/go"
import { BiBible, BiSearch } from "react-icons/bi"

const Footer = () => {
  return (
    <section className="w-full border-2 border-red-300 mt-10">
      <div>
        <GoHome />
        <BiBible />
        <BiBible />
        <BiSearch />
      </div>
    </section>
  )
}

export default Footer
