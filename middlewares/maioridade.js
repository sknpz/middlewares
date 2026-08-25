const maiorIdadeMiddleware = (req, res, next) => {
    try {
        const { idade } = req.body;

        if (idade >= 18) {
            req.pessoa = { idade }
            next();
        } else {
            res.status(403).json({
                message: 'Não ta podendo ver pornô rapazinho.'
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

module.exports = maiorIdadeMiddleware;