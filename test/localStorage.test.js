import LocalStorage from "../src/objects/localStorage";

test("SHould save data to localStorage", () => {
  LocalStorage.saveLocalStorage("Brittany");
  expect(JSON.parse(localStorage.getItem("score"))).toBe("Brittany");
});

test("Should retrieve data from localStorage", () => {
  localStorage.setItem("score", JSON.stringify("Brittany"));
  expect(JSON.parse(localStorage.getItem("score"))).toBe("Brittany");
});
