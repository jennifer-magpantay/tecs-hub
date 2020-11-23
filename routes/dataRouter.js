import express from 'express';
import controller from '../controllers/dataController.js';

const app = express();

// consultar todos os dados da lista
app.get('/dados/consultaTodos/', controller.consultaTodos);

// consultar lista por cnpj
app.get('/dados/consultaPorCnpj/', controller.consultaPorCnpj);

//consultar lista por razao social


// consultar lista por setor/cnae
app.get('/dados/consultaPorCnae/', controller.consultaPorCnae);

export { app as dataRouter }