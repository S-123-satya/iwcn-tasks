// Run this command in your teminal to create a database

// CREATE DATABASE notesdb;
// USE notesdb;

// CREATE TABLE notes (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     content TEXT
// );

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001', // Your server URL
});

export const getNotes = () => instance.get('/notes');
export const addNote = (note) => instance.post('/notes', note);
export const deleteNote = (id) => instance.delete(`/notes/${id}`);
