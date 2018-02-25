const fs=require('fs');

var sampleNotesObj={
    title: 'Sample Title',
     body: 'Sample Body'
}

var sampleNotesObjString=JSON.stringify(sampleNotesObj);

fs.appendFileSync('notes.json',sampleNotesObjString);

var notesObjString=fs.readFileSync('notes.json');

var note=JSON.parse(notesObjString)

console.log(typeof note);
console.log(note.title);
