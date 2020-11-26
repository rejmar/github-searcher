import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";

describe("SearchBar component tests", () => {
  const setUserActionMock: jest.Mock = jest.fn();

  beforeEach(() => {
    render(<SearchBar onUserSet={setUserActionMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    expect(screen.getByTestId(/^search-bar$/)).toBeInTheDocument();
    expect(screen.getByTestId(/^search-bar__input$/)).toBeInTheDocument();
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  it("fires action on Search button click", () => {
    fireEvent.change(screen.getByTestId(/^search-bar__input$/), {
      target: { value: "test-user" },
    });
    fireEvent.click(screen.getByText(/Search/));

    expect(setUserActionMock).toBeCalledTimes(1);
    expect(setUserActionMock).toBeCalledWith("test-user");
  });

  it("should not allow fire action if empty user name", () => {
    fireEvent.click(screen.getByText(/Search/));

    expect(setUserActionMock).toBeCalledTimes(0);
  });
});
