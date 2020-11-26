import classNames from "classnames";
import React from "react";
import { GithubUser } from "../../constants/types";
import UserInfo from "./UserInfo";

type UserDetailsProps = {
  user: GithubUser;
};
const UserDetails: React.FunctionComponent<UserDetailsProps> = ({
  user,
}: UserDetailsProps) => {
  return (
    <div
      data-testid={"user-details"}
      className={classNames("d-flex", "flex-column")}
    >
      <UserInfo user={user} />
    </div>
  );
};

export default UserDetails;
