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
          class="w-100"
          data-testid="user-details"
        >
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
          <section
            class="d-flex flex-column"
            data-testid="user-repos"
          >
            <h4
              class="my-3"
            >
              Top repositories
            </h4>
            <a
              class="Repo"
              data-testid="user-repos__undefined"
              href="test-url"
              rel="noreferrer"
              target="_blank"
            />
          </section>
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
          class="w-100"
          data-testid="user-details"
        >
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
          class="w-100"
          data-testid="user-details"
        >
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
          <section
            class="d-flex flex-column"
            data-testid="user-repos"
          >
            <h4
              class="my-3"
            >
              Top repositories
            </h4>
            <a
              class="Repo"
              data-testid="user-repos__undefined"
              href="test-url"
              rel="noreferrer"
              target="_blank"
            />
          </section>
        </div>
      </div>
    `);
  });

  it("should match snapshot with empty user and empty repos", () => {
    const { container } = render(<UserDetails user={{}} repos={[]} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="w-100"
          data-testid="user-details"
        >
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
      </div>
    `);
  });
});
