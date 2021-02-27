modeule.exports = (app) => {


app.get('/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
};


