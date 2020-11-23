import { Dados } from '../models/dataModel.js'
import { Cnae } from '../models/cnaeModel.js'

// controle dos dados que queremos buscar de acordo com as rotas e modelo/schema

//rota: app.get('/dados/consultaTodos/', controller.consultaTodos);
// postman GET http://localhost:3000/dados/consultaTodos/
const consultaTodos = async (req, res) => {
    try {
        const listaDados = await Dados.find({}, { _id: 0, decisao_administrativa: 0, data_inclusao_cadastro_empregadores: 0 })
        res.send(listaDados);
    } catch (error) {
        res.status(500).send(error);
    }
}

// rota: app.get('/cnae/consultaPorCnae/', controller.consultaPorCnae);
// postman: GET http://localhost:3000/cnae/consultaPorCnae/
const consultaPorCnae = async (req, res) => {
    const input = req.body.subclasse;
    try {
        const listaDados = await Cnae.find({ subclasse: input }, { _id: 0 })
        res.send(listaDados);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { consultaTodos, consultaPorCnae }