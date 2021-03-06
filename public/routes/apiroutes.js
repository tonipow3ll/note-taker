
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
            // change this to 'newnotes' for delete to work properly.
            // delete works fine with 'newnotes' in the res.json on the LOCAL environment.. 
            // on heroku delete works as it should, BUT when you click 'save' to enter a new note - then all the 'deleted' notes re-populate.
            res.json(activeNote)
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
        fs.readFile(path.join(__dirname, './data/notesData.json'), 'utf-8', (err, data) => {
            let activeNote = JSON.parse(data);
            const filteredNotes = activeNote.filter(note => note.id != thisnote)
            activeNote.splice(filteredNotes);
            console.log(activeNote)
            fs.writeFile(path.join(__dirname, './data/notesData.json'), JSON.stringify(filteredNotes), 'utf-8', (err, data) => {
                if (err) throw err
                res.send(activeNote);
            })

        })

    })
};