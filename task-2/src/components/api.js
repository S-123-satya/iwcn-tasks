// Run this command in your teminal to create a database

// CREATE DATABASE notesdb;
// USE notesdb;
// CREATE TABLE notesdb (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     text TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001', // Your server URL
});

export const getNotes = () => instance.get('/notes');
export const getNote = (id) => instance.get(`/note/${id}`);
export const addNote = (note) => instance.post('/notes', note);
export const deleteNote = (id) => instance.delete(`/notes/${id}`);
