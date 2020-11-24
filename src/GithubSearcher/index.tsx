import classNames from "classnames";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const GithubSearcher: React.FunctionComponent = () => {
  const [user, setUser] = useState<any>({});
  return (
    <div
      data-testid={"github-searcher"}
      className={classNames(
        "d-flex",
        "text-dark",
        "justify-content-center",
        "p-2"
      )}
    >
      <SearchBar setUser={setUser} />
      {/* <UserDetails />
      <Repos /> */}
    </div>
  );
};

export default GithubSearcher;
