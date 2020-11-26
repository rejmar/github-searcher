import Axios from "axios";
import { GithubUser, UserRepos } from "../constants/types";

export const fetchUserInfo = (login: string): Promise<GithubUser> =>
  Axios.get("https://api.github.com/users/" + login)
    .then((res: any) => res.data)
    .catch((err: any) => err.message);

export const fetchUsersRepos = (login: string): Promise<UserRepos[]> =>
  Axios.get(`https://api.github.com/users/${login}/repos`)
    .then((res: any) => res.data)
    .catch((err: any) => err.message);
