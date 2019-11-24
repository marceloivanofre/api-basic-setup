require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(require('./routes'));

app.listen(
  process.env.PORT,
  console.log(`Server has started on http://localhost:${process.env.PORT}`)
);
