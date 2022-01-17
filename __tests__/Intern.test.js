const Intern = require("../lib/Intern");

test("Constructor sets school", () => {
  const testValue = "OSU";
  const internTest = new Intern("John", 1, "email@email.com", testValue);
  expect(internTest.school).toBe(testValue);
});

test("Intern returned from getRole()", () => {
  const testValue = "Intern";
  const internTest = new Intern("John", 1, "email@email.com", "OSU");
  expect(internTest.getRole()).toBe(testValue);
});

test("getSchool() gets school info", () => {
  const testValue = "OSU";
  const internTest = new Intern("John", 1, "email@email.com", testValue);
  expect(internTest.getSchool()).toBe(testValue);
});
