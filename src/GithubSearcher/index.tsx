import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
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
import styles from "./GithubSearcher.module.scss";

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
    <div data-testid={"github-searcher"} className={styles.App}>
      <SearchBar onUserSet={handleUserSearch} />
      <main data-testid={"main"} className={styles.Main}>
        {isLoading && (
          <Spinner
            data-testid={"spinner"}
            className={styles.Spinner}
            animation="border"
          />
        )}
        {error ? (
          <section>
            <h1 data-testid={"error"} className={styles.Error}>
              {error}
            </h1>
          </section>
        ) : (
          user?.login && <UserDetails user={user} repos={repos} />
        )}
      </main>
    </div>
  );
};

export default GithubSearcher;
