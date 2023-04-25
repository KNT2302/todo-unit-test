import {
  render,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import TodoBox from "@/component/TodoBox";
import axios from "axios";
import "@testing-library/jest-dom";

const mockFetchData = jest.spyOn(axios, "get").mockImplementation(async () => {
  return {
    data: [
      { name: "gohome", complete: true },
      { name: "hangout", complete: true },
      { name: "eat", complete: false },
      { name: "drink", complete: false },
    ],
  };
});

describe("could set complete and delete", () => {
  beforeEach(() => {
    render(<TodoBox />);
  });

  it("could fetch todo data", async () => {
    await waitFor(() => {
      expect(mockFetchData).toHaveBeenCalled();
    });
  });

  it("could set have done todo", async () => {
    await waitFor(() => {
      const eatComplete = screen.getByTestId("eatcomplete");
      fireEvent.click(eatComplete);
    });

    const headingWorksHaveDone = await screen.findByText("Works you have done");
    const eatTodo = await screen.findByText("eat");

    const completeTodos = await screen.findAllByTestId("complete");

    expect(headingWorksHaveDone).toBeInTheDocument();
    expect(eatTodo).toBeInTheDocument();
    expect(completeTodos).toHaveLength(3);
  });

  it("could delete todo", async () => {
    let eatTodo;
    await waitFor(() => {
      eatTodo = screen.getByText("eat");
      const eatDelete = screen.getByTestId("eatdelete");
      fireEvent.click(eatDelete);
    });

    const planedTodos = await screen.findAllByTestId("worktodo");

    expect(eatTodo).not.toBeInTheDocument();
    expect(planedTodos).toHaveLength(1);
  });
});

describe("test add new todo", () => {
  const enterTodo = (todo: string) => {
    const addSubmit = screen.getByTestId("addTodo");
    const enterTodo = screen.getByTestId("todoInput");

    fireEvent.change(enterTodo, { target: { value: todo } });
    fireEvent.click(addSubmit);
  };

  beforeEach(async () => {
    render(<TodoBox />);
    await waitFor(async () => {
      const planedTodos = await screen.findAllByTestId("worktodo");

      expect(planedTodos).toHaveLength(2);
    });
  });

  it("error if enter empty string todo", async () => {
    await waitFor(async () => {
      enterTodo("");
    });

    const error = await screen.findByText("Required");
    expect(error).toBeInTheDocument();
  });

  it("could add new todo", async () => {
    await waitFor(async () => {
      enterTodo("walk");
    });

    const planedTodos = await screen.findAllByTestId("worktodo");
    expect(planedTodos).toHaveLength(3);
  });
});
