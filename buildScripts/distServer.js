const express = require('express');
const path = require('path');
const open = require('open');
import compression from 'compression';

/*eslint-disable no-console */
const port = 3000;
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
