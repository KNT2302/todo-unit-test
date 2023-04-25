import TodoBox from "@/component/TodoBox";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should change content when click other tab", () => {
  render(<TodoBox />);

  const todoHeading = screen.getByText("Works you have planed");

  expect(todoHeading).toBeInTheDocument()

  const completeTab = screen.getByText("Complete")

  waitFor(()=>{
    fireEvent.click(completeTab)
  })

  const completeHeading = screen.getByText("Works you have done")

  expect(completeHeading).toBeInTheDocument()
  expect(todoHeading).not.toBeInTheDocument()
});
