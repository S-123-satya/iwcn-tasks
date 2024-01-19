import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001', // Your server URL
});

export const getNotes = () => instance.get('/notes');
export const getNote = (id) => instance.get(`/note/${id}`);
export const addNote = (note) => instance.post('/notes', note);
export const deleteNote = (id) => instance.delete(`/notes/${id}`);
