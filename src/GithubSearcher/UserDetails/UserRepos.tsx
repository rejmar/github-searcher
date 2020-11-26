import React from "react";
import { UserReposType } from "../../constants/types";

type UserReposProps = {
  repos: UserReposType[];
};

const UserRepos: React.FunctionComponent<UserReposProps> = ({
  repos,
}: UserReposProps) => {
  const filteredRepos: UserReposType[] =
    repos.length > 1
      ? repos
          .sort((a: UserReposType, b: UserReposType) => {
            if (a.stargazers_count > b.stargazers_count) {
              return -1;
            } else if (a.stargazers_count < b.stargazers_count) {
              return 1;
            } else {
              return 0;
            }
          })
          .slice(0, 3)
      : repos;

  return (
    <div
      data-testid={"user-repos"}
      className={"d-flex flex-column justify-content-center w-100"}
    >
      {repos.length > 0 &&
        filteredRepos.map((repo: UserReposType) => (
          <a
            key={`${repo.html_url}__link`}
            data-testid={`user-repos__${repo.name}`}
            className={""}
            href={repo.html_url ?? ""}
            target="_blank"
            rel="noreferrer"
          >
            {repo.name}
          </a>
        ))}
    </div>
  );
};

export default UserRepos;
