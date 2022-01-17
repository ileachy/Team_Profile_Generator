const Engineer = require("../lib/Engineer");

test("Constructor sets GitHub info", () => {
  const testValue = "userName";
  const engineerTest = new Engineer("John", 1, "email@email.com", testValue);
  expect(engineerTest.github).toBe(testValue);
});

test("Engineer returned from getRole()", () => {
  const testValue = "Engineer";
  const engineerTest = new Engineer("John", 1, "email@email.com", "userName");
  expect(engineerTest.getRole()).toBe(testValue);
});

test("getGitHub() returns username", () => {
  const testValue = "userName";
  const engineerTest = new Engineer("John", 1, "email@email.com", testValue);
  expect(engineerTest.getGitHub()).toBe(testValue);
});
