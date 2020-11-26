import Axios from "axios";
import { GITHUB_API_URL } from "../config";
import {
  FetchGithubUserResponseType,
  FetchUsersReposResponseType,
} from "../constants/types";

export const fetchUserInfo = async (
  login: string
): Promise<FetchGithubUserResponseType> =>
  await Axios.get(`${GITHUB_API_URL}/users/${login}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const fetchUsersRepos = async (
  login: string
): Promise<FetchUsersReposResponseType> =>
  await Axios.get(`${GITHUB_API_URL}/users/${login}/repos`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
