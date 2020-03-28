const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.listen(3333);

app.use(express.json());

app.use(routes);

/* ROTAS & RECURSOS >>  */

/* MÉTODOS HTTP >>

GET: Buscar/listar uma informação do backend
POST: Criar uma informação do backend
PUT: Alterar uma informação do backend
DEL: Deletar uma informação do backend

*/


/* Tipos de parâmetros >>
   
    Query params: parâmetros nomeados e enviados na rota após o simbolo "?" (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar um único recurso
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


*/

/* Banco de Dados  >>>

   Relacionais : SQL, MYSQL, SQLite, PostgreeSQL, Oracle, MCSQLServer -- Microsoft 
   Não Relacionais: MongoDB, couchDB, etc...

*/

/*  MÉTODOS DE CHAMADA DO BANCO DE DADOS  >> 

    SQL CMD :: SELECT * FROM USERS

    Query Builder :: table('users').select('*').where()

*/



