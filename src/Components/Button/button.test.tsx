import { render, screen } from "@testing-library/react"
import Button from "."

describe("Button", () => {
  test("Button renders text correctly", () => {
    render(<Button>text</Button>)
    const buttonElement = screen.getByText("text")
    expect(buttonElement).toBeInTheDocument()
    test("should have className", () => {
      const { container } = render(<Button className="className">text</Button>)
      const box = container.getElementsByClassName("className")
      expect(box.length).toBe(1)
    })
  })
})
