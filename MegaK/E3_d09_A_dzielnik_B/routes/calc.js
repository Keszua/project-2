const express = require ('express');

const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res) => {    // sprawdz, czy B jest dzielnikiem A
        const {numerA, numerB } = req.body;

        res.json({
            divider: numerA % numerB === 0,
        });
    })

module.exports = {
    calcRouter,
}    