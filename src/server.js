const app = require('./configs/custom-express');
const port = 3000;

const connectionFactory = require('./app/infra/ConnectionFactory');
const CreateTables = require('./app/infra/CreateTables')

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
})

const connection = connectionFactory(); //Create Connection
CreateTables(connection); //Create Tables
