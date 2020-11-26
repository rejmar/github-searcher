import { render } from "@testing-library/react";
import React from "react";
import { GithubUser } from "../constants/types";
import UserDetails from "./UserDetails";

describe("UserDetails component tests", () => {
  const validUserMock: GithubUser = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };
  it("should render", () => {
    const { getByTestId } = render(<UserDetails user={validUserMock} />);
    expect(getByTestId("user-details")).toBeInTheDocument();
  });
});
