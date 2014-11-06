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