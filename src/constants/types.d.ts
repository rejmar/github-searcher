export type GithubUser = {
  avatar_url?: string;
  bio?: string;
  name?: string;
  login?: string;
};
export type FetchGithubUserResponse = {
  data: GithubUser;
};
