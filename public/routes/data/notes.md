
[
//     {
//       noteTitle: 'First Note',
//       noteBody: 'Hi, I am a note!',
//     },
//   ]
// const noteArray = [
//     {
//       noteTitle: 'First Note',
//       noteBody: 'Hi, I am a note!',
//     },
//   ];
  
 
//   module.exports = noteArray;

// this is how mike had it 
// module.exports = [
//     {
//         id: "1",
//         noteTitle: "Hi, i'm a note!",
//         noteBody: "you can write / stuff here"
//     }
// ];

don't think we'll need 'put', here - thought it would help with readibility/functionality
    // app.put('/api/notes', (req, res) => {
    //     const noteId = JSON.parse(req.params.id)
    //     fs.readFile('./data/notesData.json', 'utf-8', (err, data) => {
    //         if (error ){
    //             return console.log(error)
    //           }
    //           noteArray.JSONparse(noteArray)
    //           noteArray = noteArray.filter(val => val.id !== noteId)
    //           fs.writeFile(__dirname +"db/db.json", JSON.stringify(noteArray), function (error, data) {
    //             if (error) {
    //               return error
    //             }
    //             res.json(notes)
    //           })
    //         })
    //       })