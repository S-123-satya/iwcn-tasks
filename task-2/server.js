// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
console.log(process.env.MYSQL_DATABASE_NAME);
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_USER_PASSWORD, 
    database: process.env.MYSQL_DATABASE_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.get('/notes', (req, res) => {
    db.query('SELECT * FROM notes', (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(result);
        }
    });
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    db.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).send('Note added successfully');
        }
    });
});

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM notes WHERE id = ?', id, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).send('Note deleted successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
