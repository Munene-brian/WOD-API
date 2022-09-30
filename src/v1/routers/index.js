const express = require('express');
const route = express.Router()

route.route("/").get((req,res)=>{
    res.send(`<h2>Data From${req.baseUrl}</h2>`)
})

module.exports = route;