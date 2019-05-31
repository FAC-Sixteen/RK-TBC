import positioning from "./positioning";

test("test that positioning returns an object", () => {
  expect(positioning()).toEqual(
    expect.objectContaining({
      top: expect.any(String),
      left: expect.any(String)
    })
  );
});
