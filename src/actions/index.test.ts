import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchUserInfo } from ".";
import { FetchGithubUserResponse, GithubUser } from "../constants/types";

describe("actions tests", () => {
  let mock: MockAdapter;

  const correctUserData: GithubUser = { login: "test-user" };
  const correctResponseData: FetchGithubUserResponse = {
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

    await fetchUserInfo("test-user").then((res: FetchGithubUserResponse) => {
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
