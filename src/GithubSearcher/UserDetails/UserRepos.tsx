import React, { useEffect, useState } from "react";
import { fetchUsersRepos } from "../../actions";
import { GithubUserType, UserReposType } from "../../constants/types";

type UserReposProps = {
  user: GithubUserType;
};

const UserRepos: React.FunctionComponent<UserReposProps> = ({
  user,
}: UserReposProps) => {
  const [repos, setRepos] = useState<UserReposType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (user.login) {
      setIsLoading(true);

      fetchUsersRepos(user.login)
        .then((res: UserReposType[]) => {
          setRepos(res);
        })
        .catch((err: string) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    return () => {
      setRepos([]);
      setIsLoading(false);
      setError("");
    };
  }, [user]);

  const filteredRepos: UserReposType[] = repos
    .sort((a: UserReposType, b: UserReposType) => {
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      } else if (a.stargazers_count < b.stargazers_count) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, 3);

  return (
    <div
      data-testid={"user-repos"}
      className={"d-flex flex-column justify-content-center w-100"}
    >
      {repos.length > 1 &&
        filteredRepos.map((repo: UserReposType) => (
          <>
            <a
              key={repo.name}
              data-testid={`user-repos__repo__${repo.name}`}
              href={repo.html_url ?? ""}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
            {repo.stargazers_count}
          </>
        ))}
    </div>
  );
};

export default UserRepos;
