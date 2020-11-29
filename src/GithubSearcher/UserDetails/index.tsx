/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { GithubUserType, UserReposType } from "../../constants/types";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

const Container = styled.div({
  width: "100%",
});

type UserDetailsProps = {
  user: GithubUserType;
  repos: UserReposType[];
};
const UserDetails: React.FunctionComponent<UserDetailsProps> = ({
  user,
  repos,
}: UserDetailsProps) => {
  return (
    <Container data-testid={"user-details"}>
      <UserInfo user={user ?? {}} />
      {repos.length > 0 && <UserRepos repos={repos ?? []} />}
    </Container>
  );
};

export default UserDetails;
