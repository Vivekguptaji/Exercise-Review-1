import fetchMock from "jest-fetch-mock";

const url = "https://5dc588200bbd050014fb8ae1.mockapi.io/assessment";
const APIRequest = function () {
  return fetch(url).then((res) => res.json());
};
describe("Testing API", () => {
  beforeEach(() => {
    fetchMock.doMock();
  });

  it("Mock API call", () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        createdAt: "2021-03-31T13:24:14.020Z",
        name: "Ryann Wiegand",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg",
        id: "1",
      })
    );
    APIRequest().then((res) => {
      expect(res.length).not.toBe(0);
    });
  });
});
