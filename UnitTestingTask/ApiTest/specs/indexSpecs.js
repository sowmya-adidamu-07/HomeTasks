describe("YouTube Api", function () {
  it("API result length is as expected", function () {
    return getResponse("Epam").then(function (result) {
      expect(result.length).toEqual(50);
    });
  });

  it("toNumPage is working as expected", () => {
    const res = toNumPage(50);
    expect(res).toEqual(5);
  });

  it("nextPage is Working as expected", () => {
    const res = nextPage(5);
    expect(res).toBe(6);
  });

  it("prevPage is working as expected", () => {
    const res = prevPage(5);
    expect(res).toBe(4);
  });
});
