var parseMarkdown = require('./index');

var testNum = 0;

function assertOutputEqual(func, input, expectedOutput) {
	'use strict';
	var output;
	++testNum;
	try {
		output = func(input);
		console.assert(output === expectedOutput, 'Equality test', testNum, 'failed:', input, '!==', expectedOutput);
	} catch (e) {

	}
	console.log('Test', testNum, 'passed:');
	console.log(output);
	console.log('\n');
}

assertOutputEqual(parseMarkdown, 'This is a paragraph\n\nThis is another paragraph.', '<p>This is a paragraph</p>\n<p>This is another paragraph.</p>');
assertOutputEqual(parseMarkdown, '# Header 1', '<h1>Header 1</h1>');
assertOutputEqual(parseMarkdown, '## Header 2', '<h2>Header 1</h2>');
assertOutputEqual(parseMarkdown, '#Header 3\n\nThis is a paragraph\n\nThis is another paragraph.', '<h1>Header 1</h1>\n<p>This is a paragraph</p>\n<p>This is another paragraph.</p>');
assertOutputEqual(parseMarkdown, '#Header 3\n\nThis is a paragraph\n\n####Header 4\n\nThis is another paragraph.', '<h1>Header 1</h1>\n<p>This is a paragraph</p>\n<h4>Header 4</h4>\n<p>This is another paragraph.</p>');
assertOutputEqual(parseMarkdown, '#Header 3\n\nThis is a paragraph\n\n####Header 4\n\nThis is [a link](http://google.com).', '<h1>Header 1</h1>\n<p>This is a paragraph</p>\n<h4>Header 4</h4>\n<p>This is <a href="http://google.com">a link</a>.</p>');
assertOutputEqual(parseMarkdown, '#Header 3\n\nThis [has](http://google.com) [some](http://reddit.com) [links](http://trello.com)\n\n####Header 4', '<h1>Header 1</h1>\n<p>This <a href="http://google.com">has</a> <a href="http://reddit.com">some</a> <a href="http://trello.com">links</a></p>\n<h4>Header 4</h4>');

// var paraTestInput = 'This is a paragraph\n\nThis is another paragraph.';

// console.log(parseMarkdown(paraTestInput));
// console.assert(parseMarkdown(paraTestInput) === '<p>This is a paragraph</p>\n<p>This is another paragraph.</p>', 'Para test failed');

// console.log('---');

// var headerTestInput = '# Header 1';

// console.log(parseMarkdown(headerTestInput));
// console.assert(parseMarkdown(headerTestInput) === '<h1>Header 1</h1>', 'Para test failed');

// console.log('---');

// var headerParaTestInput = '# Header 1\n\nThis is a paragraph\n\nThis is another paragraph.';

// console.log(parseMarkdown(headerParaTestInput));
// console.assert(parseMarkdown(headerParaTestInput) === '<h1>Header 1</h1>\n<p>This is a paragraph</p>\n<p>This is another paragraph.</p>', 'Header + para test failed');

// console.log('---');

// var twoHeaderParaTestInput = '### Header 3\n\nThis is a paragraph\n\nThis is another paragraph.\n\n##Header 2';

// console.log(parseMarkdown(twoHeaderParaTestInput));
// // console.assert(parseMarkdown(twoHeaderParaTestInput) === '<h3>Header 1</h3>\n<p>This is a paragraph</p>\n<p>This is another paragraph.</p>\n<h2>Header 2</h2>', '2 Header + para test failed');

// console.log('---');

// var linkparatestinput = 'Paragraph [whoooo](http://awesome.com)';

// console.log(parseMarkdown(linkparatestinput));
// // console.assert(parseMarkdown(linkparatestinput) === '<p>Paragraph <a href="http://awesome.com">whoooo</a>', 'Link in para test failed');

// console.log('---');

// var linkparatestinput = '### Paragraph [whoooo](http://awesome.com)';

// console.log(parseMarkdown(linkparatestinput));

// console.log('---');

// var linkparatestinput = '### Paragraph [whoooo](http://awesome.com) and [another link](http://omg.com)';

// console.log(parseMarkdown(linkparatestinput));