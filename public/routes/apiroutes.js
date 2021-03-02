// nothing here is working in postman

const noteArray = require('../assets/data/notesData');


// ROUTING

module.exports = (app) => {


  app.get('/api/notes', (req, res) => res.json(notes));
  

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

