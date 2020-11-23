import mongoose from 'mongoose';


// defining a schema model for our db and add validation if there is any
// ps: validation could be set as function on controllers either
const schemaData = mongoose.Schema({
    cnpj: {
        type: String,
        require: true
    },
    nome_empregador: {
        type: String,
        require: true
    },
    cnae: {
        type: String,
        require: true
    },
    n_trabalhadores: {
        type: Number,
        require: true,
        min: 0
    },
});
// adding a new object following this new schema
mongoose.model("dados", schemaData);
const Dados = mongoose.model("dados");

export { Dados }