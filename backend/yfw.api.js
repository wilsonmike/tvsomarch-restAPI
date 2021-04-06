const express = require("express");
const yfw = express.Router();
const pool = require("./connection");

//api routes including pg data

//api routes including pg data

//TVSO Data
yfw.get('/amazon', function(req,res) {
    let query = `select * from amazon`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

yfw.get('/etsy', function(req,res) {
    let query = `select * from etsy`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

yfw.get('/tvso', function(req,res) {
    let query = `select * from tvso`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})
yfw.get('/manualorders', function(req,res) {
    let query = `select * from manualorders`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

//costume data
yfw.get('/maskmarket', function(req,res) {
    let query = `select * from maskmarket`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

yfw.get('/costumeagent', function(req,res) {
    let query = `select * from costumeagent`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

module.exports = yfw;