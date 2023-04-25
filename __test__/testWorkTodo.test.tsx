import Todo from "@/component/Todo";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'


const mockData = [
  { name: "gohome", complete: true },
  { name: "eat", complete: false },
  { name: "hangout", complete: false },
];
const mockSetData = jest.fn();
const mockChangeTab = jest.fn()

describe("test work to do", () => {
  it("should display todos have not complete", () => {
    render(<Todo data={mockData} setData={mockSetData} handleChangeTab={mockChangeTab} />);
    const todoElement = screen.getAllByTestId("worktodo");

    expect(todoElement).toHaveLength(2);
  });

 
});

it("should display note when have no todo", () => {
  const mockData: any = [];
  render(<Todo data={mockData} setData={mockSetData} handleChangeTab={mockChangeTab} />);

  const emptyNote = screen.getByText("Have no work planed");

  expect(emptyNote).toBeInTheDocument();
});
