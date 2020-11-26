import classNames from "classnames";
import React, { useState } from "react";
import { fetchUserInfo } from "../actions";
import { GithubUserType } from "../constants/types";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";

const GithubSearcher: React.FunctionComponent = () => {
  const [user, setUser] = useState<GithubUserType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleUserSearch = (user: string) => {
    setIsLoading(true);
    fetchUserInfo(user)
      .then((res: GithubUserType) => {
        res && setUser(res);
      })
      .catch((err: string) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      {user && <UserDetails user={user} />}
    </div>
  );
};

export default GithubSearcher;
