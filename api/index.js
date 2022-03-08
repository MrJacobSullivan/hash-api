const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end('Hello, world');
});

module.exports = app;
