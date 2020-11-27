import React from "react";
import { GithubUserType, UserReposType } from "../../constants/types";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

type UserDetailsProps = {
  user: GithubUserType;
  repos: UserReposType[];
};
const UserDetails: React.FunctionComponent<UserDetailsProps> = ({
  user,
  repos,
}: UserDetailsProps) => {
  return (
    <div data-testid={"user-details"} className={"w-100"}>
      <UserInfo user={user ?? {}} />
      {repos.length > 0 && <UserRepos repos={repos ?? []} />}
    </div>
  );
};

export default UserDetails;
