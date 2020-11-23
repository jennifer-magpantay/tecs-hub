//dependencias
import mongoose from 'mongoose';
import express from 'express'
import dotenv from 'dotenv/config.js';

// importando classes
import { dataRouter } from './routes/dataRouter.js'

// criando e iniciando o app
const app = express();
app.use(express.json());
app.use(dataRouter);
app.listen(3000, () => console.log("API started"))

// --------- CONEXAO COM MONGODB PELO MONGOOSE ----------//
// substituir process.env.URI pelo link de conexao do MongoDB da conta do TECS
await mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // adicionando uma mensagem pelo console.log para confirmar a conexao com a database
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });;