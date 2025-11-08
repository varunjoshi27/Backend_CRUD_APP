const express = require('express');
const app = express(); // This is a function that creates an Express application
const dotenv = require('dotenv').config();
let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World From Node Js  !');
});
