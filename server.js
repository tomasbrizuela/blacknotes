const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const port = 3306;
const app = express();

const host = process.env.HOST;
const user = process.env.USER;
const pas = process.env.PS;
const db = process.env.DB;

const queryGetNotes = 'SELECT * FROM dark_notes'

app.use(cors());

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: pas,
    database: db
})

connection.connect();

connection.query(queryGetNotes, (err, res) => {
    err || console.log(res);
})

