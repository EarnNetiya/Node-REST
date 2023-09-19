// const express = require('express');
// const Seqelize = require('sequelize');
// const app = express();

// app.use(express.json());
// const sequelize = new Seqelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'sqlite',
//     storage: './Database/SQBooks.sqlite'
// });

// const Book = sequelize.define('Book', {
//     id: {
//         type: Seqelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     title: {
//         type: Seqelize.STRING,
//         allowNull: false
//     },
//     author: {
//         type: Seqelize.STRING,
//         allowNull: false
//     },
// });

// sequelize.sync();
// app.get('/books',  (req, res) => {
//     Book.findAll().then(books => res.json(books));
//     }).catch(err => {
//         res.status(500).send(err);
// });

// app.get('/books/:id', (req, res) => {
//     Book.findByPk(req.params.id).then(book => {
//         if (!book) {
//             res.status(404).send('Book not found');
//         } else {
//             res.json(book);
//         }
//     }).catch(err => {
//         res.status(500).send(err);
//     });
// });

// app.post('/books', (req, res) => {
//     Book.create(req.body).then(book => {
//         res.send(book);
//     }).catch(err => {
//         res.status(500).send(err);
//     });
// });


