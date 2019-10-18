const app = require('./configs/custom-express');
const connectionFactory = require('./app/infra/ConnectionFactory');
const CreateTables = require('./app/infra/CreateTables');

const port = 3000;

app.listen(port, () => {
  console.log('Servidor rodando na porta', port);
});

// Create Connection
const connection = connectionFactory();
// Create Tables
CreateTables(connection);
