const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Constructor sets office number", () => {
  const testValue = 100;
  const managerTest = new Manager("John", 1, "email@emil.com", testValue);
  expect(managerTest.officeNum).toBe(testValue);
});

test("getRole() returns Manager", () => {
  const testValue = "Manager";
  const managerTest = new Manager("John", 1, "email@email.com", 12);
  expect(managerTest.getRole()).toBe(testValue);
});

test("getOfficeNum() returns office number", () => {
  const testValue = 100;
  const managerTest = new Manager("John", 1, "email@email.com", testValue);
  expect(managerTest.getOfficeNum()).toBe(testValue);
});
