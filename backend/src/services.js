const express = require('express');
const route = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);
app.use(errors());
app.listen(3333);