class Shape {
  constructor() {
    this.colorOfShape = '';
  }
  setColor(colorOfShape) {
    this.colorOfShape = colorOfShape;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="160" cy="100" r="75" fill="${this.colorOfShape}"/>`;
  }
}
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colorOfShape}"/>`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="100" y="100" width="110" height="110" fill="${this.colorOfShape}"/>`;
  }
}
module.exports = {
  Circle,
  Triangle,
  Square,
};
