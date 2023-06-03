const assinanteModel = require('../models/assinanteModel');

class AssinanteController {
    async salvar(req, res) {
        let assinante = req.body;
        const max = await assinanteModel.findOne({}).sort({ codigo: -1 });
        assinante.id = max == null ? 1 : max.id + 1;
        const resultado = await assinanteModel.create(assinante);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await assinanteModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await assinanteModel.findOne({ 'id': id });

        if(!resultado){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }

        res.status(200).json(resultado);
    }

    async buscarPorNome(req, res) {
        const nome = req.params.nome;
        const resultado = await assinanteModel.find({nome});
        
        if(!resultado){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }

        res.status(200).json(resultado);
    }

    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;
        const resultado = await assinanteModel.find({sobrenome});
        
        if(!resultado){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }
        
        res.status(200).json(resultado);
    }

    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;
        const resultado = await assinanteModel.find({cidade});
        
        if(!resultado){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }
        
        res.status(200).json(resultado);
    }

    async buscarPorStatus(req, res) {
        const status = req.params.status;
        let resultado;

        if (status == "Ativo") {
            resultado = await assinanteModel.find({status: 'true'});
        }

        if (status == "Inativo") {
            resultado = await assinanteModel.find({status: 'false'});
        }
    
        if(!resultado){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }
        
        res.status(200).json(resultado);
    }

    async buscarPorEstado(req, res) {
        const estado = req.params.estado;
        const resultado = await assinanteModel.find({estado});
        
        if(!resultado){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }
        
        res.status(200).json(resultado);
    }



    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await assinanteModel.findOne({ 'id': id }))._id);

        if(!_id){
            res.status(404).json({msg: "Assinante não encontrado"});
            return;
        }

        await assinanteModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await assinanteModel.findOne({ 'id': id }))._id);
        await assinanteModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new AssinanteController();
