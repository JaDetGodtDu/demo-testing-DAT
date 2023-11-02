import lib from "./lib";

// greet function test ------------------------------
test(`This greet function call should return the string "welcome" followed by the name-input`, () => {
  const name = `Bingus`;
  const result = lib.greet(name);
  expect(result).toBe(`Welcome Bingus`);
}); // Tests the greet function with a string

test(`This greet function call should return the string "welcome" followed by an empty string`, () => {
  const name = ``;
  const result = lib.greet(name);
  expect(result).toBe(`Welcome `);
}); // Tests the greet function with an empty string

// getCurrencies function test -----------------------
test(`The getCurrencies function should return an array of currencies`, () => {
  const result = lib.getCurrencies();
  expect(result).toEqual(["USD", "AUD", "EUR"]);
}); // Tests the getCurrencies function, wich should return an array of currencies

/* describe("getCurrencies", () => {
  const result = lib.getCurrencies();
  expect(result).toContain("USD");
  expect(result).toContain("AUD");
  expect(result).toContain("EUR");
  expect(result.length).toBe(3);
}); */

// getProduct funtion test ---------------------------
test("The getProduct function should return the productId that is parsed into the function and a price = 10", () => {
  const productId = 666;
  const result = lib.getProduct(productId);
  expect(result).toEqual({ id: productId, price: 10 });
});

// registerUser function test --------------------------
test("registerUser should return an object with a unique ID and the username", () => {
  const username = "Bingus";
  const result = lib.registerUser(username);
  expect(result).toEqual({ id: expect.any(Number), username });
}); // Tests the registerUser function with a correct input

test("registerUser should throw an error if there is no username input", () => {
  expect(() => lib.registerUser("")).toThrowError("Username is required.");
}); // Tests if the registerUser function throws an error, when there is no username input
