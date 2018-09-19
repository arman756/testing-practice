const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/about', (req, res) => {
  res.status(404).send({
    error: 'Page not found.'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    { name: 'Arman', age: 21 },
    { name: 'Hormoz', age: 20},
    { name: 'Sahar', age: 19}]
  );
});

app.listen(3000);

module.exports.app = app;
