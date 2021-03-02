const noteArray = [
    {
      noteTitle: 'First Note',
      noteBody: 'Hi, I am a note!',
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = noteArray;

// this is how mike had it 
// module.exports = [
//     {
//         id: "1",
//         noteTitle: "Hi, i'm a note!",
//         noteBody: "you can write / stuff here"
//     }
// ];