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
    const { container, getByTestId } = render(
      <UserRepos repos={validReposMock} />
    );

    expect(getByTestId(/^user-repos$/)).toBeInTheDocument();
    expect(getByTestId(/^user-repos__test-name$/)).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-flex flex-column justify-content-center w-100"
          data-testid="user-repos"
        >
          <a
            class=""
            data-testid="user-repos__test-name"
            href="test-url"
            rel="noreferrer"
            target="_blank"
          >
            test-name
          </a>
        </div>
      </div>
    `);
  });

  it("should match snapshot without any repo", () => {
    const { container } = render(<UserRepos repos={[]} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-flex flex-column justify-content-center w-100"
          data-testid="user-repos"
        />
      </div>
    `);
  });
});
