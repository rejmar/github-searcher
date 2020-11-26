import classNames from "classnames";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchUserInfo, fetchUsersRepos } from "../actions";
import { ERROR_MESSAGE } from "../constants";
import {
  FetchErrorType,
  FetchGithubUserResponseType,
  FetchUsersReposResponseType,
  GithubUserType,
  UserReposType,
} from "../constants/types";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";

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

  const handleUserSearch = (user: string) => {
    setIsLoading(true);
    clearData();

    Promise.all([
      fetchUserInfo(user)
        .then((res: FetchGithubUserResponseType) => {
          res.data && setUser(res.data);
        })
        .catch((err: FetchErrorType) => {
          err.message && setError(ERROR_MESSAGE);
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
          err.message && setError(ERROR_MESSAGE);
          setRepos([]);
        })
        .finally(() => {
          setIsLoading(false);
        }),
    ]);
  };

  return (
    <div
      data-testid={"github-searcher"}
      className={classNames(
        "d-flex",
        "flex-column",
        "text-dark",
        "justify-content-center",
        "w-100"
      )}
    >
      <SearchBar onUserSet={handleUserSearch} />
      <main
        data-testid={"main"}
        className={
          "d-flex flex-column justify-content-center align-content-center w-100 h-100"
        }
      >
        {isLoading && (
          <Spinner
            data-testid={"spinner"}
            className={"d-flex justify-content-center"}
            animation="border"
          />
        )}
        {error ? (
          <section>
            <h2
              data-testid={"error"}
              className={"d-flex justify-content-center h-100"}
            >
              {error}
            </h2>
          </section>
        ) : (
          user?.login && <UserDetails user={user} repos={repos} />
        )}
      </main>
    </div>
  );
};

export default GithubSearcher;
