import React from "react";
import { GithubUserType } from "../../constants/types";

type UserInfoProps = {
  user: GithubUserType;
};
const UserInfo: React.FunctionComponent<UserInfoProps> = ({
  user,
}: UserInfoProps) => {
  return (
    <div
      data-testid={"user-info"}
      className={"d-flex flex-column justify-content-center w-100"}
    >
      <header data-testid={"user-info__header"} className={"d-flex flex-row"}>
        <img
          data-testid={"user-info__header__avatar"}
          src={user.avatar_url ?? ""}
          alt="Avatar"
          width="100"
          height="100"
        />
        <h3 data-testid={"user-info__header__name"}>{user.name ?? ""}</h3>
      </header>
      <p data-testid={"user-info__bio"}>{user.bio ?? ""}</p>
    </div>
  );
};

export default UserInfo;
