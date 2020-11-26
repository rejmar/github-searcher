import Axios from "axios";
import { GithubUserType, UserReposType } from "../constants/types";

export const fetchUserInfo = async (login: string): Promise<GithubUserType> =>
  await Axios.get("https://api.github.com/users/" + login)
    .then((res: any) => res.data)
    .catch((err: any) => err.message);

export const fetchUsersRepos = async (
  login: string
): Promise<UserReposType[]> =>
  await Axios.get(`https://api.github.com/users/${login}/repos`)
    .then((res: any) => res.data)
    .catch((err: any) => err.message);
