const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: `Olar ${req.query.name}` })
});

routes.post('/users', (req,res) => {
    console.log(req.body);
    return res.json(req.body);
});

module.exports = routes;