import React, { useEffect, useState } from "react";
import { fetchUsersRepos } from "../../actions";
import { GithubUser, UserRepos } from "../../constants/types";

type UserReposProps = {
  user: GithubUser;
};

const UserRepos: React.FunctionComponent<UserReposProps> = ({
  user,
}: UserReposProps) => {
  const [repos, setRepos] = useState<UserRepos[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (user.login) {
      setIsLoading(true);

      fetchUsersRepos(user.login)
        .then((res: UserRepos[]) => {
          setRepos(res);
        })
        .catch((err: string) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  return <div data-testid={"user-repos"}>{repos}</div>;
};

export default UserRepos;
