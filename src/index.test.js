import fetchMock from "jest-fetch-mock";

const url = "https://610417013356ea001748f699.mockapi.io/Temp";
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
        createdAt: "2021-07-31T04:04:38.538Z",
        name: "Edgar Reichert",
        avatar: "https://cdn.fakercloud.com/avatars/svenlen_128.jpg",
        id: "1",
      })
    );
    APIRequest().then((res) => {
      expect(res.length).not.toBe(0);
    });
  });
});
