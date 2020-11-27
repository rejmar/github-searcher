import React from "react";
import { GithubUserType } from "../../constants/types";
import styles from "./UserInfo.module.scss";

type UserInfoProps = {
  user: GithubUserType;
};
const UserInfo: React.FunctionComponent<UserInfoProps> = ({
  user,
}: UserInfoProps) => {
  return (
    <div data-testid={"user-info"} className={styles.Container}>
      <header
        data-testid={"user-info__header"}
        className={"d-flex flex-row mb-3"}
      >
        <img
          data-testid={"user-info__header__avatar"}
          className={styles.Avatar}
          src={user.avatar_url ?? ""}
          alt="Avatar"
        />
        <h3 data-testid={"user-info__header__name"} className={styles.Name}>
          {user.name ?? ""}
        </h3>
      </header>
      <p data-testid={"user-info__bio"} className={styles.Bio}>
        {user.bio ?? ""}
      </p>
    </div>
  );
};

export default UserInfo;
