const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const db = require("./db.js")
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors())

// Add liked movie into db
app.post('/liked', (req, res) => {
    const { title, year, type, image } = req.body
    const query = 'INSERT INTO movies (title, year, type, image) VALUES (?,?,?,?)';
    db.query(query, [title, year, type, image], (err, result) => {
        if (err) {
            console.error('Error while inserting data into table', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(201).json({ id: result.insertId});
    });
});

// Read all liked movies
app.get('/liked', (req, res) => {
    const query = 'SELECT * FROM movies';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error while fetching movies:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});