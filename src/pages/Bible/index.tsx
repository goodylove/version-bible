import React, { useRef } from "react"

function Bible() {
  const [inputValue, setInputValue] = React.useState("")
  const count = useRef(0)

  React.useEffect(() => {
    count.current = count.current + 1
  })
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <input
        type="text"
        value={inputValue}
        placeholder="input"
        className="border-2"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  )
}

export default Bible
