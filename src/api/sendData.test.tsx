/* eslint-disable jest/no-conditional-expect */
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { sendData } from "./sendData";

const mockAxios = new MockAdapter(axios);

describe("sendData function", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("sends data successfully and returns response", async () => {
    const inputMessage = "Test message";
    const responseData = { response: "Bot response" };
    mockAxios
      .onPost(`${process.env.REACT_APP_API_BASE_URL}/sendData`, {
        inputMessage,
      })
      .reply(200, responseData);

    const response = await sendData(inputMessage);

    expect(response).toEqual(responseData.response);
  });

  it("handles errors properly", async () => {
    const inputMessage = "Test message";
    const errorMessage = "Request failed with status code 500";
    mockAxios
      .onPost(`${process.env.REACT_APP_API_BASE_URL}/sendData`, {
        inputMessage,
      })
      .reply(500, { error: errorMessage });

    try {
      await sendData(inputMessage);
    } catch (error) {
      expect(
        typeof error === "string" ? error : (error as Error).message
      ).toEqual(errorMessage);
    }
  });
});
