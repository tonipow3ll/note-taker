// nothing here is working in postman

// TO DOS:
// ADD ID'S TO NOTES
// EDIT FUNCTIONALITY
// WORK ON DELETE FUNCTIONALITY


const fs = require('fs');
const activeNote = require('./data/notesData.json');
const path = require('path')
const { v4: uuidv4 } = require('uuid')

// ROUTING

module.exports = (app) => {

// ===================
// get request
// ===================
   
    // app.get('/api/notes', (req, res) => res.json(activeNote));

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname,'./data/notesData.json'), 'utf-8', (err, data) => {
            let newnotes = JSON.parse(data)
            // console.log(activeNote)
            res.json(newnotes)
        })
    });

// ===================
// post request
// ===================
    app.post('/api/notes', (req, res) => {
        let id = uuidv4();
        let newNote = {
            id: id,
            title: req.body.title,
            text: req.body.text,
        };
        fs.readFile(path.join(__dirname, './data/notesData.json'), (err, data) => {
            if (err) throw err;
            const ActiveNote = JSON.parse(data);
            activeNote.push(newNote);
            fs.writeFile(path.join(__dirname, './data/notesData.json'), JSON.stringify(activeNote), err => {
                if (err) throw err;
                res.send(activeNote)
            });
        });
    });

// ===================
// delete request
// ===================
    app.delete('/api/notes/:id', (req, res) => {
        let thisnote = req.params.id;
        //  console.log(thisnote)
        // console.log(activeNote)
        fs.readFile(path.join(__dirname, './data/notesData.json'), 'utf-8', (err, data) => {
            let activeNote = JSON.parse(data);
            const filteredNotes = activeNote.filter(note => note.id != thisnote)
            fs.writeFile(path.join(__dirname, './data/notesData.json'), JSON.stringify(filteredNotes), 'utf-8', (err, data) => {
                if (err) throw err
                res.send(activeNote);
            })

        })

    })
};