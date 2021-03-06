const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'web/dist'),
  entryPath: path.resolve(__dirname, '../', 'web/src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'web/public/index.html'),
  imagesFolder: 'assets',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};