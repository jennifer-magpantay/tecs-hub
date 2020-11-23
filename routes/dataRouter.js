import express from 'express';
import controller from '../controllers/dataController.js';

// rotas das requisicoes do app
// os metodos dessas rotas sao definidos no controller

const app = express();

// consultar todos os dados da lista
app.get('/dados/consultaTodos/', controller.consultaTodos);

// consultar lista por setor/cnae
app.get('/cnae/consultaPorCnae/', controller.consultaPorCnae);

export { app as dataRouter }