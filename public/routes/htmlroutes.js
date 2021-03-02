
const path = require('path');


module.exports = (app) => {
// =====================================
// routes to show different HTML pages 
// =====================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  })
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../notes.html"));
  })
  
  // this might not work later - 
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../notes.html"));
  
  });

};

