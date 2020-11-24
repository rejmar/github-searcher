import { render } from "@testing-library/react";
import React from "react";
import GithubSearcher from ".";

describe("GithubSearcher component tests", () => {
  it("should render", () => {
    const { getByTestId, getByText } = render(<GithubSearcher />);
    expect(getByTestId(/github-searcher/)).toBeInTheDocument();
    expect(getByTestId(/^search-bar$/)).toBeInTheDocument();
    expect(getByTestId(/^search-bar__input$/)).toBeInTheDocument();
  });
});
