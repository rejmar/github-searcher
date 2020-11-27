import classNames from "classnames";
import React, { useState } from "react";
import { SEARCH_BAR_PLACEHOLDER, SEARCH_BUTTON } from "../constants";
import styles from "./SearchBar.module.scss";

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
    <header data-testid={"search-bar"} className={styles.Header}>
      <input
        data-testid={"search-bar__input"}
        className={styles.Input}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        value={userToSearch ?? undefined}
        onChange={handleUserToSearchSet}
      />
      <button
        data-testid={"search-bar__button"}
        className={classNames(styles.Button)}
        onClick={handleUserSearch}
        disabled={!userToSearch}
      >
        {SEARCH_BUTTON}
      </button>
    </header>
  );
};

export default SearchBar;
