const fs=require('fs');

console.log('Starting notes.js')

// module.exports.addNumbers=(a,b)=>{
//     return a+b;
// }

var fetchNotes=()=>{

    try{
        var notesStringObj=fs.readFileSync('notes-data.json');
        return notes=JSON.parse(notesStringObj);
        }catch(e)
        {
            return [];
        }
}

var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote=(title,body)=>{
// console.log(`Adding Note ${title} with Body ${body}`);

var notes=fetchNotes();

var note={
    title,
    body
}


var duplicateNotes=notes.filter((note)=>note.title===title);

if(duplicateNotes.length===0)
{
    notes.push(note);
    saveNotes(notes);
    return note;
}

}

var getAll=()=>{

    //console.log('Getting all Notes');
    return fetchNotes();
}


var readNote=(title)=>{

    //console.log('Title of the note to Read',title);
    var notes=fetchNotes();

    var note=notes.filter((note)=>note.title===title);

    return note[0];
}

var removeNote=(title)=>{

    //console.log('Title of the note to Remove',title);

    var notes=fetchNotes();

    var notesToRetain=notes.filter((note)=>note.title!==title);

    saveNotes(notesToRetain);

    return notes.length!==notesToRetain.length;
}

module.exports={
    addNote,
    getAll,
    readNote,
    removeNote
}