const mongoose = require('mongoose');

const assinanteSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    data: Number,
    telefone: String, 
    endereco: String, 
    cidade: String, 
    estado: String,
    imagem: String,
    status: Boolean
});

module.exports = mongoose.model('assinantes', assinanteSchema);
