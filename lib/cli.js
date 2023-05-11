// Import inquirer package
const inquirer = require('inquirer');
// Import fs package
const fs = require('fs');
// Import svg.js file
const SVG = require('./svg');
// Import Circle, Square and Triangle classes from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

// Create CLI class
class CLI {
  // Create run function
  run() {
    inquirer
      // Use inquirer to prompt the user for input
      .prompt([
        {
          type: 'input',
          message: 'Enter three characters to create a logo:',
          name: 'logoCharacters',
        },
        {
          type: 'input',
          message: 'Enter a color for the text:',
          name: 'colorOfText',
        },
        {
          type: 'list',
          message: 'Select a shape for the logo:',
          choices: ['Circle', 'Triangle', 'Square'],
          name: 'logoShape',
        },
        {
          type: 'input',
          message: 'Enter a color for the shape:',
          name: 'colorofShape',
        },
      ])
      // .then is used to handle the user's input
      .then(({ logoCharacters, colorOfText, logoShape, colorofShape }) => {
        // User input is used to create a new Circle, Square or Triangle object
        let shape;
        // switch is used to select one of the three shapes based on the user's input
        switch (logoShape) {
          case 'Circle':
            shape = new Circle();
            // break is implemented to stop the switch statement once the user selects a shape
            break;

          case 'Triangle':
            shape = new Triangle();
            break;

          case 'Square':
            shape = new Square();
            break;
        }

        shape.setColor(colorofShape);
        // User input for text and shape
        const newSVG = new SVG();
        newSVG.setShape(shape);
        newSVG.setText(logoCharacters, colorOfText);
        // Render SVG
        const SVGCode = newSVG.render(newSVG);

        fs.writeFile(`logo.svg`, SVGCode, (err) => {
          if (err) {
            throw err;
          }
          console.log('Generated logo.svg');
        });
      });
  }
}

// Export CLI class
module.exports = CLI;
