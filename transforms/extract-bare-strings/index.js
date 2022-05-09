const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

function isImportDecalaration(path, j) {
  return path.parent.node.type === 'ImportDeclaration'
}

function location(loc) {
  return `${loc.start.line}:${loc.start.column} | ${loc.end.line}:${loc.end.column}`

}

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();

  return j(file.source)
    .find(j.StringLiteral)
    .forEach(path => {
      let loc = path.node.loc;
      console.log(location(loc), loc.filename);
      // if (!isImportDecalaration(path)) {
      //   console.log(path.node.value, path.parent.node.type);
      // }
    })
    .toSource();

  // return j(file.source)
    // .find(j.Identifier)
    // .forEach(path => {
    //   path.node.name = path.node.name
    //     .split('')
    //     .reverse()
    //     .join('');
    // })
    // .toSource();
};

module.exports.type = 'js';