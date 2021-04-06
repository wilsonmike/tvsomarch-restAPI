const express = require("express");
const yfw = express.Router();
const pool = require("./connection");

//api routes including pg data

//TVSO Data
yfw.get('/amazon', function(req,res) {
    let query = `select * from amazon`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})


module.exports = yfw;