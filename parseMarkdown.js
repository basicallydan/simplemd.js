var headerRegex = /^#+/;
var linkRegex = /\[(.*?)\]\((.*?)\)/g;

function addLinks(text) {
  'use strict';
  return text.replace(linkRegex, '<a href="$2">$1</a>');
}

function createHeader(level, text) {
  'use strict';
  text = addLinks(text.substring(level).trim());
  return '<h' + level + '>' + text + '</h' + level + '>';
}

function parseMarkdown(input) {
  'use strict';
  var parts = input.split('\n\n');
  var elements = [];
  parts.forEach(function (part) {
    var headerMatch = part.match(headerRegex);
    var element;
    if (headerMatch && headerMatch.length > 0) {
      // it's a header!
      element = createHeader(headerMatch[0].length, part);
    } else {
      element = '<p>' + addLinks(part) + '</p>';
    }
    elements.push(element);
  });
  return elements.join('\n');
}

module.exports = parseMarkdown;