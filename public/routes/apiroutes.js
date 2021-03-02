// nothing here is working in postman

const noteArray = require('../assets/data/notesData');


// ROUTING

module.exports = (app) => {

// think the issue is somewhere here, unexpected token in json position 0, and 500 - internal server error
  app.get('/api/notes', (req, res) => res.json(noteArray));
  
// don't think i need the 'else' portion, right now this pushes to the array no matter what. 
  app.post('/api/notes', (req, res) => {
    if (noteArray.length < 10) {
        noteArray.push(req.body);
      res.json(true);
    } else {
        noteArray.push(req.body);
      res.json(false);
    }
  });

};

