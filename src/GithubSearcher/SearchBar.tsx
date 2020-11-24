import classNames from "classnames";
import React, { useState } from "react";

type SearchBarProps = {
  setUser: any;
};

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  setUser,
}: SearchBarProps) => {
  const [userToSearch, setUserToSearch] = useState<any>({});

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserToSearch(event.target.value);
  };

  const handleSetUser = (): void => {
    setUser(userToSearch);
  };

  return (
    <div
      data-testid={"search-bar"}
      className={classNames(
        "d-flex",
        "justify-content-center",
        "w-100",
        "h-30",
        "bg-white",
        "border-bottom",
        "border-danger"
      )}
    >
      <input
        data-testid={"search-bar__input"}
        className={classNames("h-10")}
        placeholder={"Search for users"}
        value={userToSearch.login ?? undefined}
        onChange={handleSearch}
      />
      <button data-testid={"search-bar__button"} onClick={handleSetUser}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
