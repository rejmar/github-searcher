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
          data-testid="user-info"
        >
          <header
            class="css-qml3vj"
            data-testid="user-info__header"
          >
            <figure>
              <img
                alt="Avatar"
                class="css-1fzxxdv"
                data-testid="user-info__header__avatar"
                src="test-avatar"
              />
            </figure>
            <h3
              class="css-3tv9m1"
              data-testid="user-info__header__name"
            >
              Test Login
            </h3>
          </header>
          <p
            class="css-11ymjae"
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
          data-testid="user-info"
        >
          <header
            class="css-qml3vj"
            data-testid="user-info__header"
          >
            <figure>
              <img
                alt="Avatar"
                class="css-1fzxxdv"
                data-testid="user-info__header__avatar"
                src=""
              />
            </figure>
            <h3
              class="css-3tv9m1"
              data-testid="user-info__header__name"
            />
          </header>
          <p
            class="css-11ymjae"
            data-testid="user-info__bio"
          />
        </div>
      </div>
    `);
  });
});
