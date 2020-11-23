import { Dados } from '../models/dataModel.js'

// controle dos dados que queremos buscar de acordo com as rotas e modelo/schema

//rota: app.get('/dados/getAll/', controller.getAll);
const consultaTodos = async (req, res) => {
    try {
        const listaDados = await Dados.find({}, { _id: 0, cnpj: 1, nome_empregador: 1, cnae: 1, n_trabalhadores: 1 })
        res.send(listaDados);
    } catch (error) {
        res.status(500).send(error);
    }
}

// rota: app.get('/dados/consultaPorCnpj/:cnpj', controller.consultaPorCnpj);
const consultaPorCnpj = async (req, res) => {
    const cnpj = req.params.cnpj;
    try {
        const listaDados = await Dados.find({ cnpj: cnpj }, { _id: 0, cnpj: 1, nome_empregador: 1, cnae: 1, n_trabalhadores: 1 })
        res.send(listaDados);
    } catch (error) {
        res.status(500).send(error);
    }
}

// rota: app.get('/dados/consultaPorCnae/:cnae', controller.consultaPorCnae);
const consultaPorCnae = async (req, res) => {
    const cnae = req.params.cnae;
    try {
        const listaDados = await Dados.find({ cnae: cnae }, { _id: 0, cnpj: 1, nome_empregador: 1, cnae: 1, n_trabalhadores: 1 })
        res.send(listaDados);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { consultaTodos, consultaPorCnpj, consultaPorCnae }