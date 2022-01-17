const Employee = require("../lib/Employee");

test("Can create employee instance", () => {
  const employeeTest = new Employee();
  expect(typeof employeeTest).toBe("object");
});

test("Constructor sets name", () => {
  const name = "Bob";
  const employeeTest = new Employee(name);
  expect(employeeTest.name).toBe(name);
});

test("Constructor sets ID", () => {
  const testValue = 1;
  const employeeTest = new Employee("John", testValue);
  expect(employeeTest.id).toBe(testValue);
});

test("Constructor sets email", () => {
  const testValue = "testEmail@email.com";
  const employeeTest = new Employee("John", 1, testValue);
  expect(employeeTest.email).toBe(testValue);
});

test("Can get name from getName()", () => {
  const testValue = "Bob";
  const employeeTest = new Employee(testValue);
  expect(employeeTest.getName()).toBe(testValue);
});

test("Can get ID from getId()", () => {
  const testValue = 1;
  const employeeTest = new Employee("John", testValue);
  expect(employeeTest.getId()).toBe(testValue);
});

test("Can get email from getEmail()", () => {
  const testValue = "testEmail@email.com";
  const employeeTest = new Employee("John", 1, testValue);
  expect(employeeTest.getEmail()).toBe(testValue);
});

test("Employee returned by getRole()", () => {
  const testValue = "Employee";
  const employeeTest = new Employee("John", 1, "testEmail@email.com");
  expect(employeeTest.getRole()).toBe(testValue);
});
