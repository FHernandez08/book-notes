const express = require('express');
const axios = require('axios');
const path = require('path');
const pg = require('pg');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// connecting to database for project
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "books",
    password: "Astros#0213",
    port: 5433,
});

db.connect();

// routes
app.get("/", (req, res) => {
    res.render("index");
});




app.listen(port, () => {
    console.log(`The app would be listening on port ${port}!`);
    console.log(`To access the website: http://localhost${port}`);
})