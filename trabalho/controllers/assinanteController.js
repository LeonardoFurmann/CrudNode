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
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await assinanteModel.findOne({ 'id': id }))._id);
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
