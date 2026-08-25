const express = require('express');
const app = express();
const PORT = 3000;
const logsMiddleware = require('./middlewares/logs');
const maiorIdadeMiddleware = require('./middlewares/maioridade')

app.use(logsMiddleware);
app.use(express.json());

app.post('/api/cadastro', maiorIdadeMiddleware, (req, res) => {
    console.log('Cadastro realizado com sucesso:', req.pessoa);
    res.status(200).json({
        message: 'Cadastro realizado com sucesso!',
        data: req.body
    });
});

app.listen(PORT, () => {
    console.log(`RODANDO AQUI: http://localhost:${PORT}`)
})