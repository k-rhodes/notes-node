console.log('starting notes.js');

var addNote = (title, body) => {
	console.log('adding note', title, body);
};

var getAll = ()=>{
	console.log('getting all notes');
}
 
var getNote = (title) => {
	console.log('Getting note title:', title);
}

var removeNote = (title) => {
	console.log('Removing note title:', title);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}
