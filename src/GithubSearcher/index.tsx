/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { fetchUserInfo, fetchUsersRepos } from "../actions";
import { ERROR_MESSAGE, NOT_FOUND_ERROR_MESSAGE } from "../constants";
import {
  FetchErrorType,
  FetchGithubUserResponseType,
  FetchUsersReposResponseType,
  GithubUserType,
  UserReposType,
} from "../constants/types";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";
import styled from "@emotion/styled";
import { colors } from "../assets/styles";
import { ClipLoader } from "react-spinners";

const App = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

const Main = styled.main({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "40rem",
  padding: "2rem",
  background: colors.light,
});

const Spinner = styled.div({
  top: "50%",
});

const Error = styled.h1({
  color: colors.violet,
  fontWeight: 700,
});

const GithubSearcher: React.FunctionComponent = () => {
  const [user, setUser] = useState<GithubUserType>();
  const [repos, setRepos] = useState<UserReposType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const clearData = (): void => {
    setError("");
    setUser({});
    setRepos([]);
  };

  const generateErrorMessage = (error: FetchErrorType): string =>
    error?.response?.status === 404 ? NOT_FOUND_ERROR_MESSAGE : ERROR_MESSAGE;

  const handleUserSearch = (user: string) => {
    setIsLoading(true);
    clearData();

    Promise.all([
      fetchUserInfo(user)
        .then((res: FetchGithubUserResponseType) => {
          res.data && setUser(res.data);
        })
        .catch((err: FetchErrorType) => {
          err && setError(generateErrorMessage(err));
          setUser({});
        })
        .finally(() => {
          setIsLoading(false);
        }),
      fetchUsersRepos(user)
        .then((res: FetchUsersReposResponseType) => {
          res.data && setRepos(res.data);
        })
        .catch((err: FetchErrorType) => {
          err && setError(generateErrorMessage(err));
          setRepos([]);
        })
        .finally(() => {
          setIsLoading(false);
        }),
    ]);
  };

  return (
    <App data-testid={"github-searcher"}>
      <SearchBar onUserSet={handleUserSearch} />
      <Main data-testid={"main"}>
        <Spinner>
          <ClipLoader
            data-testid={"spinner"}
            size={120}
            color={colors.violet}
            loading={isLoading}
          />
        </Spinner>
        {error ? (
          <section>
            <Error data-testid={"error"}>{error}</Error>
          </section>
        ) : (
          user?.login && <UserDetails user={user} repos={repos} />
        )}
      </Main>
    </App>
  );
};

export default GithubSearcher;
