const express = require('express')
const sqlite = require('sqlite3').verbose()

const app = express()

const db = new sqlite.Database('./Database/Book.sqlite');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.run(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL
    )
`)

app.get("/", (req, res) => {
        res.status(200).json({
            status: 200,
            message: "Success",
            data: {
                message: "Hello World"
            }
        })
    }
)

app.get("/books", (req, res) => {
        db.all("SELECT * FROM books", (err, rows) => {
            if (err) {
                res.status(500).json({
                    status: 500,
                    message: err.message,
                    data: null
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Success",
                    data: rows
                })
            }
        })
    }
)

app.get("/books/:id", (req, res) => {
        db.get("SELECT * FROM books WHERE id = ?", [req.params.id], (err, row) => {
            if (err || !row) {
                res.status(500).json({
                    status: 500,
                    message: err.message || "Not Found",
                    data: null
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Success",
                    data: row
                })
            }
        })
    }
)

app.post("/books", (req, res) => {
        db.run("INSERT INTO books (title, author) VALUES (?, ?)", [req.body.title, req.body.author], (err) => {
            if (err) {
                res.status(500).json({
                    status: 500,
                    message: err.message,
                    data: null
                })
            } else {
                res.status(201).json({
                    status: 201,
                    message: "Success",
                    data: null
                })
            }
        })
    }
)

app.put("/books/:id", (req, res) => {
        db.run("UPDATE books SET title = ?, author = ? WHERE id = ?", [req.body.title, req.body.author, req.params.id], (err) => {
            if (err) {
                res.status(500).json({
                    status: 500,
                    message: err.message,
                    data: null
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Success",
                    data: null
                })
            }
        })
    }
)

app.delete("/books/:id", (req, res) => {
        db.run("DELETE FROM books WHERE id = ?", [req.params.id], (err) => {
            if (err) {
                res.status(500).json({
                    status: 500,
                    message: err.message,
                    data: null
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Success",
                    data: null
                })
            }
        })
    }
)

app.get("*",  (req, res) => {
        res.status(404).json({
            status: 404,
            message: "Not Found",
            data: null
        })
    }
)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})