import axios from "axios";

export const FetchTodo = async () => {
  const response = await axios.get("/api/todo");
  return response.data;
};
