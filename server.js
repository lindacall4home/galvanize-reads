'use strict'

const port = process.env.port || 3000;

if(process.env.NODE_ENV != 'production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join('public')));

app.use((err, req, res, next)=>{
  return res
    .status(err.output.statusCode)
    .set('Content-Type', 'text/plain')
    .send(err.message);
});

app.use((req, res)=>{
  res.sentStatus(404);
});

app.listen(port);
