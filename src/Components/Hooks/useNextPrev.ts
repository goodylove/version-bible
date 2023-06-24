import React, { SetStateAction } from "react"

// type nextProps = {
//   param: React.Dispatch<React.SetStateAction<number>>
// }

const useNextPrev = (param: any, num: number) => {
  //   const [currentState, setCurrentState] = React.useState<number>(0)

  const handleRight = () => {
    param((prevIndex: number) => (prevIndex === num ? 0 : prevIndex + 1))
  }

  const handleLeft = () => {
    param((prevIndex: number) => (prevIndex === 0 ? num : prevIndex - 1))
  }
  return { param, num, handleLeft, handleRight }
}

export default useNextPrev
