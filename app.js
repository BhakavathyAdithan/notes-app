console.log('Starting app.js');

const fs=require('fs');
const os=require('os');
const notes=require('./notes');
const _=require('lodash');
const yargs=require('yargs');


//const argv=yargs.argv;
//var command=process.argv[2];

const titleOptions={
        describe: 'Title of the Note',        //Description of the argument
        demand: true,                         //Whether it's mandatory arg or not.Defaults to faklse
        alias : 't'                           //Shortand notation of --title to -t
};

const bodyOptions={
        describe: 'Body of the Note',
        demand : true,
        alias: 'b'
};

const argv= yargs
            .command('add','Add New Note',{           //Command requires three arguments- Name of the command
                                                      //Description of the command
                                                      //Arguments Object
            title : titleOptions,
            body : bodyOptions
            })
            .command('list','List All Notes')
            .command('read', 'Read A Note',{
                title : titleOptions
            })
            .command('remove','Remove A Note',{
                title : titleOptions
            })
            .help()                                    // Method to enable the --help flag for the command 
            .argv;

//console.log(`Command Line Argument: ${command}`);
//console.log(`Process: ${process.argv}`);
//console.log(`Yargs: ${JSON.stringify(argv)}`);

var command=argv._[0];

if(command==='add')
{
   var note= notes.addNote(argv.title,argv.body);

   if(note!==undefined)
   {
       console.log('Note got created successfully!');
   }
   else{
       console.log('Note taken already');
   }
}
else if(command==='list')
{
    var allNotes=notes.getAll();
    allNotes.forEach((note) => console.log(`Note- Title: ${note.title} Body: ${note.body}`) );
}
else if(command === 'read')
{
    var note=notes.readNote(argv.title);

    if(note)
    {
        console.log(`Note with the title ${note.title} and body ${note.body} was found`);
    }
    else{
        console.log('Note not found');
    }
}
else if(command==='remove')
{
    var result=notes.removeNote(argv.title);
    var message= result ? 'Note was removed successfully' : 'Note was not found';
    console.log(message);
}
else{
    console.log('Command not recognized');
}

// var filteredArray=_.uniq(['Bucks',1,'Bucks','Adithan',2,1,3,4,5]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Bucks'));

// var addResult=notes.addNumbers(3,2);
// console.log(`Addition= ${addResult}`);

// var user=os.userInfo();
// fs.appendFile('greetings.txt',`Hello ${user.username} !`,(err)=>{
//     if(err) throw err;
//     console.log('The file was appended successfully!!!');
// });