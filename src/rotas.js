const express = require('express')
const verificarUsuarioLogado = require('./intermediarios/autentificacao')
const {
	listarCarros,
	detalharCarro,
	cadastrarCarro,
	atualizarCarro,
	excluirCarro,
} = require('./controladores/carros')
const {cadastrarUsuario, login, listarUsuarios} = require('./controladores/usuarios')

const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', login);

rotas.use(verificarUsuarioLogado);

rotas.get('/perfil', listarUsuarios);

rotas.get('/carro', listarCarros)
rotas.get('/carro/:id', detalharCarro)
rotas.post('/carro', cadastrarCarro)
rotas.put('/carro/:id', atualizarCarro)
rotas.delete('/carro/:id', excluirCarro)

module.exports = rotas
