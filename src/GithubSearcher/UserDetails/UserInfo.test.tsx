import { render } from "@testing-library/react";
import React from "react";
import { GithubUserType } from "../../constants/types";
import UserInfo from "./UserInfo";

describe("UserInfo component tests", () => {
  const validUserMock: GithubUserType = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };

  it("should render and match snapshot with valid user", () => {
    const { container, getByTestId, getByText } = render(
      <UserInfo user={validUserMock} />
    );

    expect(getByTestId(/^user-info$/)).toBeInTheDocument();
    expect(getByTestId(/^user-info__header__avatar$/)).toBeInTheDocument();
    expect(getByText(/Test Login/)).toBeInTheDocument();
    expect(getByText(/test-bio/)).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Container"
          data-testid="user-info"
        >
          <header
            class="d-flex flex-row mb-3"
            data-testid="user-info__header"
          >
            <img
              alt="Avatar"
              class="Avatar"
              data-testid="user-info__header__avatar"
              src="test-avatar"
            />
            <h3
              class="Name"
              data-testid="user-info__header__name"
            >
              Test Login
            </h3>
          </header>
          <p
            class="Bio"
            data-testid="user-info__bio"
          >
            test-bio
          </p>
        </div>
      </div>
    `);
  });

  it("should match snapshot with with empty user", () => {
    const { container } = render(<UserInfo user={{}} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Container"
          data-testid="user-info"
        >
          <header
            class="d-flex flex-row mb-3"
            data-testid="user-info__header"
          >
            <img
              alt="Avatar"
              class="Avatar"
              data-testid="user-info__header__avatar"
              src=""
            />
            <h3
              class="Name"
              data-testid="user-info__header__name"
            />
          </header>
          <p
            class="Bio"
            data-testid="user-info__bio"
          />
        </div>
      </div>
    `);
  });
});
