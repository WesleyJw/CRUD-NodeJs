const express = require('express');
const app = express();

app.use(express.json());

let customers = [
    {id: 1, name: "Flamengo", site: "http://flamengo.com"},
    {id: 2, name: "Gremio", site: "http://gremio.com"},
    {id: 3, name: "Sport", site: "http://sport.com"}
];

// GET http://api.com/customers – Lista todos os recursos.

app.get("/customers", (req, res) => {
    return res.json(customers);
});

// GET http://api.com/customers/1 – Lista um recurso específico.

app.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404; 

    return res.status(status).json(customer);
});

// POST http://api.com/customers – Cria um novo recurso.

app.post("/customers", (req, res) => {
    const { name, site} = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = {id, name, site};
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
})

//PUT http://api.com/customers/1 - Atualiza um recurso existente.

app.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {name, site} = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers[index] = {id: parseInt(id), name, site}
    }
    return res.status(status).json(customers[index])
});

// DELETE http://api.com/customers/1 - Excluí um recurso existente

app.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers.splice(index, 1);
    }

    return res.status(status).json()

});

app.listen(3001);