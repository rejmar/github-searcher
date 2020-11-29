/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { SEARCH_BAR_PLACEHOLDER, SEARCH_BUTTON } from "../constants";
import { colors } from "../assets/styles";
import styled from "@emotion/styled";

type SearchBarProps = {
  onUserSet: (user: string) => void;
};

const Header = styled.header({
  display: "flex",
  width: "100%",
  background: "white",
  justifyContent: "center",
  height: "7rem",
  padding: "2rem",
  zIndex: 1000,
  boxShadow: `0 5px 5px ${colors.shadow}`,
  MozBoxShadow: `0 5px 5px ${colors.shadow}`,
  WebkitBoxShadow: `0 5px 5px ${colors.shadow}`,
});

const Button = styled.button({
  border: "none",
  background: colors.violet,
  color: "white",
  fontWeight: 500,
  fontSize: "1rem",
  marginLeft: "1rem",
  borderRadius: "0.6rem",
  padding: "0.5rem",
  width: "9rem",
  height: "3rem",
  "&:focus, &:active, &:hover": {
    outline: "none !important",
    boxShadow: "none !important",
  },
  "@media(min-width: 450px)": {
    width: "9rem",
  },
  "@media(max-width: 450px)": {
    width: "12rem",
  },
});

const Input = styled.input({
  border: "none",
  background: colors.grey,
  borderRadius: "0.6rem",
  width: "90vh",
  height: "3rem",
  textIndent: "1rem",
  "&:focus, &:active, &:hover": {
    outline: "none !important",
    boxShadow: "none !important",
  },
});

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
    <Header data-testid={"search-bar"}>
      <Input
        data-testid={"search-bar__input"}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        value={userToSearch ?? undefined}
        onChange={handleUserToSearchSet}
      />
      <Button
        data-testid={"search-bar__button"}
        onClick={handleUserSearch}
        disabled={!userToSearch}
      >
        {SEARCH_BUTTON}
      </Button>
    </Header>
  );
};

export default SearchBar;
