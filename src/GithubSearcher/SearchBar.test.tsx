import { render } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";

describe("SearchBar component tests", () => {
  it("should render", () => {
    const setUserActionMock: jest.Mock = jest.fn();
    const { getByTestId, getByText } = render(
      <SearchBar setUser={setUserActionMock} />
    );
    expect(getByTestId(/^search-bar$/)).toBeInTheDocument();
  });
});
