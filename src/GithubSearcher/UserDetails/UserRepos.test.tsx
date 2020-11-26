import { render } from "@testing-library/react";
import React from "react";
import { GithubUser } from "../../constants/types";
import UserRepos from "./UserRepos";

describe("UserRepos component tests", () => {
  const validUserMock: GithubUser = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };
  it("should render", () => {
    const { getByTestId, getByText } = render(
      <UserRepos user={validUserMock} />
    );

    expect(getByTestId(/^user-repos$/)).toBeInTheDocument();
  });
});
