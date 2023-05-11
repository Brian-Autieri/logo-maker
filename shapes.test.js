const { Circle, Triangle, Square } = require("./lib/shapes");

test("Create a new Circle", () => {
  const shape = new Circle();

  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<circle cx="160" cy="100" r="75" fill="blue"/>'
  );
});

test("Create a new Triangle", () => {
  const shape = new Triangle();

  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="red"/>'
  );
});

test("Create a new Square", () => {
  const shape = new Square();

  shape.setColor("green");
  expect(shape.render()).toEqual(
    '<rect x="100" y="100" width="110" height="110" fill="green"/>'
  );
});
