const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: `Restful API's To Manage Restaurant Management System` });
});

module.exports = app;
