const express = require("express");

const app = express();

// Routes
// http://localhost:3001/home?nome=Wesley&idade=40

// Query params:
// ?nome=Wesley&idade=40


app.get('/hello', (req, res) => {
    const { nome, idade } = req.query;

    return res.json({
        title: "Hello world",
        message: `${nome}: The App is running in port 3001.`,
        idade: idade
    });
});

// Route params:
// http://localhost:3001/home

app.get('/hello/:nome', (req, res) => {
    const nome = req.params.nome;

    return res.json({
        title: "Hello world",
        message: `${nome}: The App is running in port 3001.`
    });
});

app.listen(3001);