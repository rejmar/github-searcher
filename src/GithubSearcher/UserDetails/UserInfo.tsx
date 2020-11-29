/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../assets/styles";
import { GithubUserType } from "../../constants/types";

const Avatar = styled.img({
  width: "8rem",
  height: "8rem",
  borderRadius: "1rem",
  marginRight: "1rem",
});

const Name = styled.h3({
  display: "flex",
  alignSelf: "flex-end",
  wordWrap: "break-word",
  wordBreak: "keep-all",
  paddingBottom: "2rem",
});

const Bio = styled.p({
  color: colors.darkgrey,
  fontWeight: 400,
});

const Header = styled.header({
  display: "flex",
  flexDirection: "row",
  marginBottom: "1rem",
});

type UserInfoProps = {
  user: GithubUserType;
};
const UserInfo: React.FunctionComponent<UserInfoProps> = ({
  user,
}: UserInfoProps) => {
  return (
    <div data-testid={"user-info"}>
      <Header data-testid={"user-info__header"}>
        <figure>
          <Avatar
            data-testid={"user-info__header__avatar"}
            src={user.avatar_url ?? ""}
            alt="Avatar"
          />
        </figure>
        <Name data-testid={"user-info__header__name"}>{user.name ?? ""}</Name>
      </Header>
      <Bio data-testid={"user-info__bio"}>{user.bio ?? ""}</Bio>
    </div>
  );
};

export default UserInfo;
