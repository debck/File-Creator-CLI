'use strict';
const CFonts = require('cfonts');

exports.init = () => {
  CFonts.say('File Creator', {
    font: 'shade', // define the font face
    align: 'center', // define text alignment
    colors: ['red'], // define all colors
    background: 'magenta', // define the background color
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty link
    maxLength: '0', // define how many character can be on one line
  });
};
