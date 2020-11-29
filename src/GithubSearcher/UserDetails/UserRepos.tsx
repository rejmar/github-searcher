/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../assets/styles";
import { UserReposType } from "../../constants/types";

const Repo = styled.a({
  background: "white",
  padding: "1rem",
  margin: "0.5rem 0",
  borderRadius: "1rem",
  WebkitBoxShadow: `0 3px 10px ${colors.shadow}`,
  MozBoxShadow: `0 3px 10px ${colors.shadow}`,
  boxShadow: `0 3px 10px ${colors.shadow}`,
  textDecoration: "none",
  color: colors.blue,

  "&:hover, &:focus, &:active": {
    textDecoration: "none",
    color: colors.blue,
  },
});

const Section = styled.section({
  display: "flex",
  flexDirection: "column",
});

const H4 = styled.h4({
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
});

type UserReposProps = {
  repos: UserReposType[];
};

const UserRepos: React.FunctionComponent<UserReposProps> = ({
  repos,
}: UserReposProps) => {
  const filteredRepos: UserReposType[] =
    repos.length > 1
      ? repos
          .sort((a: UserReposType, b: UserReposType) => {
            if (a.stargazers_count > b.stargazers_count) {
              return -1;
            } else if (a.stargazers_count < b.stargazers_count) {
              return 1;
            } else {
              return 0;
            }
          })
          .slice(0, 3)
      : repos;

  return (
    <Section data-testid={"user-repos"}>
      <H4>Top repositories</H4>
      {repos.length > 0 &&
        filteredRepos.map((repo: UserReposType) => (
          <Repo
            key={`${repo.html_url}__link`}
            data-testid={`user-repos__${repo.name}`}
            href={repo.html_url ?? ""}
            target="_blank"
            rel="noreferrer"
          >
            {repo.name}
          </Repo>
        ))}
    </Section>
  );
};

export default UserRepos;
