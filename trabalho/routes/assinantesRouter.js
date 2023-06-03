const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.get('/assinantes', assinanteController.listar);
router.post('/', assinanteController.salvar);
router.get('/:id', assinanteController.buscarPorId);
router.get('/nome/:nome', assinanteController.buscarPorNome);
router.get('/estado/:estado', assinanteController.buscarPorEstado);
router.get('/sobrenome/:sobrenome', assinanteController.buscarPorSobrenome);
router.get('/cidade/:cidade', assinanteController.buscarPorCidade);
router.get('/status/:status', assinanteController.buscarPorStatus);
router.put('/:id', assinanteController.atualizar);
router.delete('/:id', assinanteController.excluir);

module.exports = router;
