import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import {
  FetchUsersReposResponseType,
  GithubUserType,
  UserReposType,
} from "../../constants/types";
import UserRepos from "./UserRepos";

describe("UserRepos component tests", () => {
  const validUserMock: GithubUserType = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };

  it("should render", () => {
    const { getByTestId, queryByText } = render(
      <UserRepos user={validUserMock} />
    );

    expect(getByTestId(/^user-repos$/)).toBeInTheDocument();
    expect(queryByText(/^user-repos__repo__test-repo$/)).toBeNull();
  });
});
