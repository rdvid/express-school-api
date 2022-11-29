const express = require('express');
const rotas = express();
const instrutores = require('./controladores/instrutores')

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor)
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor)


module.exports = rotas;