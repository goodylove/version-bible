import React from "react"

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  //   onClick: () => void
}

function Button({ children, className }: ButtonProps) {
  return <div className={className}>{children}</div>
}

export default Button
