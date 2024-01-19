// Run this command in your teminal to create a database

// CREATE DATABASE notesdb;
// USE notesdb;
// CREATE TABLE notesdb (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     text TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

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

app.get('/note/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    db.query('SELECT * FROM notesdb where id= ? ',id, (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(result);
        }
    });
});
app.get('/notes', (req, res) => {
    db.query('SELECT * FROM notesdb', (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(200).json(result);
        }
    });
});

app.post('/notes', (req, res) => {
    const { text } = req.body;
    db.query('INSERT INTO notesdb (text) VALUES (?)', [text], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).json({message:'Note added successfully',id:result.insertId});
        }
    });
});

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM notesdb WHERE id = ?', id, (err, result) => {
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
