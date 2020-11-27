import { render } from "@testing-library/react";
import React from "react";
import { UserReposType } from "../../constants/types";
import UserRepos from "./UserRepos";

describe("UserRepos component tests", () => {
  const validReposMock: UserReposType[] = [
    {
      name: "test-name",
      html_url: "test-url",
      stargazers_count: 1000,
    },
  ];

  it("should render and match snapshot with one repo", () => {
    const { container, getByTestId, getByText } = render(
      <UserRepos repos={validReposMock} />
    );

    expect(getByTestId(/^user-repos$/)).toBeInTheDocument();
    expect(getByText(/^Top repositories$/)).toBeInTheDocument();
    expect(getByTestId(/^user-repos__test-name$/)).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
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
            data-testid="user-repos__test-name"
            href="test-url"
            rel="noreferrer"
            target="_blank"
          >
            test-name
          </a>
        </section>
      </div>
    `);
  });

  it("should match snapshot without any repo", () => {
    const { container } = render(<UserRepos repos={[]} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          class="d-flex flex-column"
          data-testid="user-repos"
        >
          <h4
            class="my-3"
          >
            Top repositories
          </h4>
        </section>
      </div>
    `);
  });
});
