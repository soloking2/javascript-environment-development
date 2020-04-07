const express = require('express');
const path = require('path');
const open = require('open');

import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
var app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if(err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
