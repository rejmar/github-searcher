import classNames from "classnames";
import React from "react";
import { GithubUserType } from "../../constants/types";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

type UserDetailsProps = {
  user: GithubUserType;
};
const UserDetails: React.FunctionComponent<UserDetailsProps> = ({
  user,
}: UserDetailsProps) => {
  return (
    <div
      data-testid={"user-details"}
      className={classNames(
        "d-flex",
        "flex-column",
        "w-100",
        "h-100",
        "justify-content-center",
        "border",
        "border-primary"
      )}
    >
      <UserInfo user={user} />
      <UserRepos user={user} />
    </div>
  );
};

export default UserDetails;
