import { render } from "@testing-library/react";
import React from "react";
import UserDetails from ".";
import { GithubUserType } from "../../constants/types";

describe("UserDetails component tests", () => {
  const validUserMock: GithubUserType = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };

  it("should render", () => {
    const { getByTestId } = render(<UserDetails user={validUserMock} />);
    expect(getByTestId(/user-details/)).toBeInTheDocument();
    expect(getByTestId(/^user-info$/)).toBeInTheDocument();
    expect(getByTestId(/user-repos/)).toBeInTheDocument();
  });
});
