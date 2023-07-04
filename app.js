const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const connection = require('./db');
connection();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})