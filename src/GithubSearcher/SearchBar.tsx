import classNames from "classnames";
import React, { useState } from "react";
import { SEARCH_BAR_PLACEHOLDER, SEARCH_BUTTON } from "../constants";

type SearchBarProps = {
  onUserSet: (user: string) => void;
};

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  onUserSet,
}: SearchBarProps) => {
  const [userToSearch, setUserToSearch] = useState<string>("");

  const handleUserToSearchSet = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserToSearch(event.target.value);
  };
  const handleUserSearch = (): void => {
    onUserSet(userToSearch);
  };

  return (
    <div
      data-testid={"search-bar"}
      className={classNames(
        "d-flex",
        "justify-content-center",
        "w-100",
        "bg-white",
        "border-bottom",
        "p-4"
      )}
    >
      <input
        data-testid={"search-bar__input"}
        className={classNames("")}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        value={userToSearch ?? undefined}
        onChange={handleUserToSearchSet}
      />
      <button
        data-testid={"search-bar__button"}
        className={classNames("btn", "btn-dark", "ml-4")}
        onClick={handleUserSearch}
        disabled={!userToSearch}
      >
        {SEARCH_BUTTON}
      </button>
    </div>
  );
};

export default SearchBar;
