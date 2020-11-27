import classNames from "classnames";
import React from "react";
import { UserReposType } from "../../constants/types";
import styles from "./UserRepos.module.scss";

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
    <section data-testid={"user-repos"} className={"d-flex flex-column"}>
      <h4 className={classNames("my-3")}>Top repositories</h4>
      {repos.length > 0 &&
        filteredRepos.map((repo: UserReposType) => (
          <a
            key={`${repo.html_url}__link`}
            data-testid={`user-repos__${repo.name}`}
            className={styles.Repo}
            href={repo.html_url ?? ""}
            target="_blank"
            rel="noreferrer"
          >
            {repo.name}
          </a>
        ))}
    </section>
  );
};

export default UserRepos;
