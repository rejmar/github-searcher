import React from "react";
import { GithubUser } from "../constants/types";

type UserDetailsProps = {
  user: GithubUser;
};
const UserDetails: React.FunctionComponent<UserDetailsProps> = ({
  user,
}: UserDetailsProps) => {
  return <div data-testid={"user-details"}></div>;
};

export default UserDetails;
