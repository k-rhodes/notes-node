console.log('starting notes.js');

module.exports.addNote = () => {
	console.log('addNote');
	return 'New note';
};

module.exports.addNum = function (a, b) {
	console.log('addNum');
	return a + b;
};
