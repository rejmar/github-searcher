import Axios from "axios";
import { GITHUB_API_URL } from "../config";
import {
  FetchGithubUserResponseType,
  FetchUsersReposResponseType,
} from "../constants/types";

export const fetchUserInfo = (
  login: string
): Promise<FetchGithubUserResponseType> =>
  Axios.get(`${GITHUB_API_URL}/users/${login}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const fetchUsersRepos = (
  login: string
): Promise<FetchUsersReposResponseType> =>
  Axios.get(`${GITHUB_API_URL}/users/${login}/repos`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
