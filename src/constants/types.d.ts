export type GithubUser = {
  avatar_url?: string;
  bio?: string;
  name?: string;
  login?: string;
};

export type UserRepos = {
  name?: string;
  url?: string;
  stargazers_count: number;
};

export type FetchGithubUserResponse = {
  data: GithubUser;
};

export type FetchUsersReposResponse = {
  data: UserRepos;
};
