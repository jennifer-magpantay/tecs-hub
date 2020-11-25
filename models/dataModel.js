import mongoose from 'mongoose';

// defining a schema model for our db and add validation if there is any
// ps: validation could be set as function on controllers either
const schemaData = mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    ano_acao_fiscal: {
        type: String,
        require: true,
    },
    uf: {
        type: String,
        require: true,
    },
    empregador: {
        type: String,
        require: true,
    },
    cnpj_cpf: {
        type: String,
        require: true
    },
    estabelecimento: {
        type: String,
        require: true,
    },
    n_trabalhadores_envolvidos: {
        type: Number,
        require: true,
    },
    cnae: {
        type: String,
        require: true,
    },
    decisao_administrativa: {
        type: String,
        require: true,
    },
    data_inclusao_cadastro_empregadores: {
        type: String,
        require: true,
    },
    cnae_descricao: {
        type: String,
        require: true,
    }
});
// relacionando o model com: ("nome da collection", schema)
mongoose.model("dados", schemaData);

// declara em uma const e exporta para ser usado no controller
const Dados = mongoose.model("dados");
export { Dados }