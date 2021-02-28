// const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const fs = require('fs')
// const htmlRoutes = require('routes/htmlroute');
// const apiRoutes = require('routes/apiRoute');

const app = express();
// const bodyParser = require('body-parser')
// // Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;
// // const routes = require('somefile.js')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
})


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
})

// this line causes nodemon / server to crash
// require('routes.js')(app);

// port listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

