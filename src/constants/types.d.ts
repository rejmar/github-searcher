export type GithubUserType = {
  avatar_url?: string;
  bio?: string;
  name?: string;
  login?: string;
};

export type UserReposType = {
  name?: string;
  html_url?: string;
  stargazers_count: number;
};

export type FetchGithubUserResponseType = {
  data: GithubUserType;
};

export type FetchUsersReposResponseType = {
  data: UserReposType[];
};
