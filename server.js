
// =====================================
// requirements/express set up 
// =====================================
const express = require('express');
const path = require('path');
const fs = require('fs');
// const { resourceLimits } = require('worker_threads');
// THIS BREAKS THE SERVER ALSO 
// const notes = require('./public/notes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const logger = (req, res, next) => {
  console.log(`${req.portocol}://${req.get('host')}${req.originalUrl}`)
  next();
}
// init middleware
app.use(logger);



// this *should* bring up any 'stored notes' 
// app.get('/api/notes', (req, res) => res.json(notes))

// =====================================
// routes to other html pages in this file
// =====================================
require('./public/routes/htmlroutes.js')(app);
require('./public/routes/apiroutes.js')(app);



// =====================================
// port listener
// =====================================
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

