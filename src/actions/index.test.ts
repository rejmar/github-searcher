import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchUserInfo, fetchUsersRepos } from ".";
import {
  FetchGithubUserResponseType,
  FetchUsersReposResponseType,
  GithubUserType,
  UserReposType,
} from "../constants/types";

describe("fetchUserInfo action tests", () => {
  let mock: MockAdapter;

  const correctUserData: GithubUserType = { login: "test-user" };
  const correctResponseData: FetchGithubUserResponseType = {
    data: correctUserData,
  };
  const incorrectResponseData = "Request failed with status code 404";

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    mock.reset();
  });

  it("should resolve promise", async () => {
    mock
      .onGet("https://api.github.com/users/test-user")
      .reply(200, correctResponseData);

    await fetchUserInfo("test-user").then((res: GithubUserType) => {
      expect(res).toEqual(correctResponseData);
    });
  });

  it("should reject promise", async () => {
    mock
      .onGet("https://api.github.com/users/incorrect-test-user")
      .reply(404, incorrectResponseData);

    await fetchUserInfo("incorrect-test-user").catch((res: string) => {
      expect(res).toEqual(incorrectResponseData);
    });
  });
});

describe("fetchUserRepos action tests", () => {
  let mock: MockAdapter;

  const correctUserReposData: UserReposType[] = [
    {
      name: "test-repo",
      html_url: "https://test-repo.com",
      stargazers_count: 1000,
    },
  ];
  const correctResponseData: FetchUsersReposResponseType = {
    data: correctUserReposData,
  };
  const incorrectResponseData = "Request failed with status code 404";

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    mock.reset();
  });

  it("should resolve promise", async () => {
    mock
      .onGet("https://api.github.com/users/test-user/repos")
      .reply(200, correctResponseData);

    await fetchUsersRepos("test-user").then((res: UserReposType[]) => {
      expect(res).toEqual(correctResponseData);
    });
  });

  it("should reject promise", async () => {
    mock
      .onGet("https://api.github.com/users/incorrect-test-user/repos")
      .reply(404, incorrectResponseData);

    await fetchUserInfo("incorrect-test-user").catch((res: string) => {
      expect(res).toEqual(incorrectResponseData);
    });
  });
});
