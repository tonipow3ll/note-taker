
// =====================================
// requirements/express set up 
// =====================================
const express = require('express');
const path = require('path');
const fs = require('fs');
const {v4 : uuidv4} = require('uuid')



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// =====================================
// routes to other html pages in this file
// =====================================
// API routes always first, HTML last -> browser reads top to bottom
require('./public/routes/apiroutes.js')(app);
require('./public/routes/htmlroutes.js')(app);



// =====================================
// port listener
// =====================================
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

