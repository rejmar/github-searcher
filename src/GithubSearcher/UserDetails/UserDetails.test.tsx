import { render } from "@testing-library/react";
import React from "react";
import UserDetails from ".";
import { GithubUserType, UserReposType } from "../../constants/types";

describe("UserDetails component tests", () => {
  const validUserMock: GithubUserType = {
    login: "test-login",
    name: "Test Login",
    bio: "test-bio",
    avatar_url: "test-avatar",
  };
  const validReposMock: UserReposType[] = [
    {
      html_url: "test-url",
      stargazers_count: 1000,
    },
  ];

  it("should render and match snapshot with correct user and repos", () => {
    const { getByTestId, container } = render(
      <UserDetails user={validUserMock} repos={validReposMock} />
    );
    expect(getByTestId(/user-details/)).toBeInTheDocument();
    expect(getByTestId(/^user-info$/)).toBeInTheDocument();
    expect(getByTestId(/^user-repos$/)).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-flex flex-column w-100 h-100 justify-content-center border border-primary"
          data-testid="user-details"
        >
          <div
            class="d-flex flex-column justify-content-center w-100"
            data-testid="user-info"
          >
            <header
              class="d-flex flex-row"
              data-testid="user-info__header"
            >
              <img
                alt="Avatar"
                data-testid="user-info__header__avatar"
                height="100"
                src="test-avatar"
                width="100"
              />
              <h3
                data-testid="user-info__header__name"
              >
                Test Login
              </h3>
            </header>
            <p
              data-testid="user-info__bio"
            >
              test-bio
            </p>
          </div>
          <div
            class="d-flex flex-column justify-content-center w-100"
            data-testid="user-repos"
          >
            <a
              class=""
              data-testid="user-repos__undefined"
              href="test-url"
              rel="noreferrer"
              target="_blank"
            />
          </div>
        </div>
      </div>
    `);
  });

  it("should match snapshot with correct user and empty repos", () => {
    const { container } = render(
      <UserDetails user={validUserMock} repos={[]} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-flex flex-column w-100 h-100 justify-content-center border border-primary"
          data-testid="user-details"
        >
          <div
            class="d-flex flex-column justify-content-center w-100"
            data-testid="user-info"
          >
            <header
              class="d-flex flex-row"
              data-testid="user-info__header"
            >
              <img
                alt="Avatar"
                data-testid="user-info__header__avatar"
                height="100"
                src="test-avatar"
                width="100"
              />
              <h3
                data-testid="user-info__header__name"
              >
                Test Login
              </h3>
            </header>
            <p
              data-testid="user-info__bio"
            >
              test-bio
            </p>
          </div>
        </div>
      </div>
    `);
  });

  it("should match snapshot with empty user and correct repos", () => {
    const { container } = render(
      <UserDetails user={{}} repos={validReposMock} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-flex flex-column w-100 h-100 justify-content-center border border-primary"
          data-testid="user-details"
        >
          <div
            class="d-flex flex-column justify-content-center w-100"
            data-testid="user-info"
          >
            <header
              class="d-flex flex-row"
              data-testid="user-info__header"
            >
              <img
                alt="Avatar"
                data-testid="user-info__header__avatar"
                height="100"
                src=""
                width="100"
              />
              <h3
                data-testid="user-info__header__name"
              />
            </header>
            <p
              data-testid="user-info__bio"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center w-100"
            data-testid="user-repos"
          >
            <a
              class=""
              data-testid="user-repos__undefined"
              href="test-url"
              rel="noreferrer"
              target="_blank"
            />
          </div>
        </div>
      </div>
    `);
  });

  it("should match snapshot with empty user and empty repos", () => {
    const { container } = render(<UserDetails user={{}} repos={[]} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-flex flex-column w-100 h-100 justify-content-center border border-primary"
          data-testid="user-details"
        >
          <div
            class="d-flex flex-column justify-content-center w-100"
            data-testid="user-info"
          >
            <header
              class="d-flex flex-row"
              data-testid="user-info__header"
            >
              <img
                alt="Avatar"
                data-testid="user-info__header__avatar"
                height="100"
                src=""
                width="100"
              />
              <h3
                data-testid="user-info__header__name"
              />
            </header>
            <p
              data-testid="user-info__bio"
            />
          </div>
        </div>
      </div>
    `);
  });
});
