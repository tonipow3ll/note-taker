// nothing here is working in postman

// TO DOS:
// ADD ID'S TO NOTES
// WORK ON DELETE FUNCTIONALITY


const fs = require('fs');
const noteArray = require('./data/notesData.json');
const path = require('path')

// ROUTING

module.exports = (app) => {

    // think the issue is somewhere here, unexpected token in json position 0, and 500 - internal server
    app.get('/api/notes', (req, res) => res.json(noteArray));


    app.get('/api/notes', (req, res) => {
        fs.readFile('./data/notesData.json', 'utf-8', (err, data) => {
            let noteArray = JSON.parse(data)
            console.log(noteArray)
        })

    });
//body is on the request object <-------
// delete will look similar to this - MUST add id's first
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        noteArray.push(newNote);
        let stringifiedNote = JSON.stringify(noteArray);
        fs.writeFile(path.join(__dirname, './data/notesData.json'), stringifiedNote,'utf-8', (err, data) => {
            if (err){
                res.json(err).status(500).send()
                console.log(err)
            } else {
                res.status(200).send()
            }
        })
        // users should be able to 'post' notes, ie. write them to the 'notesData' json file.
        // what am i doing. 
    })

};

// old code snippers / notes 
 // don't think i need the 'else' portion, right now this pushes to the array no matter what. 
//   app.post('/api/notes', (req, res) => {
//     if (noteArray.length < 10) {
//         noteArray.push(req.body);
//     //   res.json(true);
//     } else {
//         noteArray.push(req.body);
//       res.json(false);
//     }
//   });

// app.post('/api/notes', (req, res) => {
//     fs.readFile('./data/notesData.json', 'utf-8', function(err, data) {


//         var notesArray = JSON.parse(data)
//         console.log(notesArray)
//     })

// });

// var fs = require('fs')



// below didn't work 
// if (error) {
//     res.json(false)
//     return console.log(error)
// } else {
//     noteArray.push(req.body);
//     res.json(true)
// }