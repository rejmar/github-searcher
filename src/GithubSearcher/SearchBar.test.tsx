import { fireEvent, render } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";

describe("SearchBar component tests", () => {
  const setUserActionMock: jest.Mock = jest.fn();

  it("should render", () => {
    const { getByTestId, getByText } = render(
      <SearchBar setUser={setUserActionMock} />
    );
    expect(getByTestId(/^search-bar$/)).toBeInTheDocument();
    expect(getByTestId(/^search-bar__input$/)).toBeInTheDocument();
    expect(getByText(/Search/)).toBeInTheDocument();
  });

  it("fires action on Search button click", () => {
    const { getByTestId, getByText } = render(
      <SearchBar setUser={setUserActionMock} />
    );

    fireEvent.click(getByText(/Search/));
    expect(setUserActionMock).toBeCalledTimes(1);
  });
});
