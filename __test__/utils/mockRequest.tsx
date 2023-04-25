import axios from "axios";

export const mockFetchData = jest.spyOn(axios, "get").mockImplementation(async () => {
  return {
    data: [
      { name: "gohome", complete: true },
      { name: "hangout", complete: true },
      { name: "eat", complete: false },
      { name: "drink", complete: false },
    ],
  };
});
