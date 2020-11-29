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
          class="css-8atqhb"
          data-testid="user-details"
        >
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
          <section
            class="css-j7qwjs"
            data-testid="user-repos"
          >
            <h4
              class="css-i8cet8"
            >
              Top repositories
            </h4>
            <a
              class="css-40wrch"
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
          class="css-8atqhb"
          data-testid="user-details"
        >
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
          class="css-8atqhb"
          data-testid="user-details"
        >
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
          <section
            class="css-j7qwjs"
            data-testid="user-repos"
          >
            <h4
              class="css-i8cet8"
            >
              Top repositories
            </h4>
            <a
              class="css-40wrch"
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
          class="css-8atqhb"
          data-testid="user-details"
        >
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
      </div>
    `);
  });
});
