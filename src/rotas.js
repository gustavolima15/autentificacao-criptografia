const express = require('express')
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
rotas.get('/usuario', listarUsuarios);

rotas.get('/carro', listarCarros)
rotas.get('/carro/:id', detalharCarro)
rotas.post('/carro', cadastrarCarro)
rotas.put('/carro/:id', atualizarCarro)
rotas.delete('/carro/:id', excluirCarro)

module.exports = rotas
