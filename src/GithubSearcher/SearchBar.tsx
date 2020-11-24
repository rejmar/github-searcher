import classNames from "classnames";
import React from "react";

type SearchBarProps = {
  setUser: any;
};

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  setUser,
}: SearchBarProps) => {
  return (
    <div
      data-testid={"search-bar"}
      className={classNames("w-100", "border", "border-danger")}
    >
      <input data-testid={"search-bar__input"} />
    </div>
  );
};

export default SearchBar;
