const logsMiddleware = (req, res, next) => {
    console.log ({
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString(),
        ip: req.ip
    })
    next();
}

module.exports = logsMiddleware