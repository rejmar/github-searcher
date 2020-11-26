import { render } from "@testing-library/react";
import React from "react";
import { GithubUser } from "../../constants/types";
import UserInfo from ".";

describe("UserInfo component tests", () => {
  const validUserMock: GithubUser = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };
  it("should render", () => {
    const { getByTestId, getByText } = render(
      <UserInfo user={validUserMock} />
    );

    expect(getByTestId("user-info")).toBeInTheDocument();
    expect(getByTestId("user-info__avatar")).toBeInTheDocument();
    expect(getByText(/Test Login/)).toBeInTheDocument();
    expect(getByText(/test-bio/)).toBeInTheDocument();
  });
});
