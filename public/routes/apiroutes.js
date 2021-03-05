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

   
    app.get('/api/notes', (req, res) => res.json(activeNote));

    // attempting to get active notes to show / edit functionality
    // app.get('/api/notes', (req, res) => {
    //     fs.readFile('./data/notesData.json', 'utf-8', (err, data) => {
    //        if( activeNote.id === req.params.id);
    //        res.JSON.parse(activeNote)
    //     })
    // });

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname,'./data/notesData.json'), 'utf-8', (err, data) => {
            let activeNote = JSON.parse(data)
            console.log(activeNote)
            res.json(activeNote)
        })
    });

// ===================
//post function
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
// delete function
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
                res.send(filteredNotes);
            })

        })

    })

    // CHECK THIS LINK 
    // https://stackoverflow.com/questions/61526572/fixed-express-js-delete-request

};