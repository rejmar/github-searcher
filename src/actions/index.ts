import Axios from "axios";
import { FetchGithubUserResponse } from "../constants/types";

export const fetchUserInfo = (
  login: string
): Promise<FetchGithubUserResponse> =>
  Axios.get("https://api.github.com/users/" + login)
    .then((res: any) => res.data)
    .catch((err: any) => err.message);
