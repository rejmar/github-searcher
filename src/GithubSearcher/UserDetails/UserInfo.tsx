import React from "react";
import { GithubUser } from "../../constants/types";

type UserInfoProps = {
  user: GithubUser;
};
const UserInfo: React.FunctionComponent<UserInfoProps> = ({
  user,
}: UserInfoProps) => {
  return (
    <div data-testid={"user-info"}>
      <img
        data-testid={"user-info__avatar"}
        src={user.avatar_url ?? ""}
        alt="Avatar"
        width="100"
        height="100"
      />
      <div data-testid={"user-info__name"}>{user.name}</div>
      <div data-testid={"user-info__bio"}>{user.bio}</div>
    </div>
  );
};

export default UserInfo;
