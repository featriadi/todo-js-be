require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Express
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

// Database
const connection = require('./db');
connection();

// Routes
const routes = require('./routes/TaskRoute');
app.use(routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})