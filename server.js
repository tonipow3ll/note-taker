const express = require('express');

const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;
// const routes = require('somefile.js')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// this line causes nodemon / server to crash
// require('routes.js')(app);


// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
console.log("testing testing")