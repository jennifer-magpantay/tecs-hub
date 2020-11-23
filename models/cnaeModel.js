import mongoose from 'mongoose';

// defining a schema model for our db and add validation if there is any
// ps: validation could be set as function on controllers either
const schemaCnae = mongoose.Schema({
    secao: {
        type: Number,
        require: true,
    },
    sec_denominacao: {
        type: String,
        require: true,
    },
    divisao: {
        type: String,
        require: true,
    },
    div_denominacao: {
        type: String,
        require: true,
    },
    grupo: {
        type: String,
        require: true,
    },
    grp_denominacao: {
        type: String,
        require: true
    },
    classe: {
        type: String,
        require: true,
    },
    cls_denominacao: {
        type: Number,
        require: true,
    },
    subclasse: {
        type: String,
        require: true,
    },
    sbc_denominacao: {
        type: String,
        require: true,
    }
});
// relaciono o model com ("collection", schema)
// ps: por padrao, o mongo trabalha com collections nomeadas no pluras
// para forcar uma nome no sinlgular, adiciona-lo apos schema, dentro de model()
mongoose.model("cnae", schemaCnae, "cnae");

// declara em uma const e exporta para ser usado no controller
const Cnae = mongoose.model("cnae");
export { Cnae }