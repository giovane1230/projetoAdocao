function isAunthenticated (req, res, next) {
    if (!req, headers.authorization ) {
        return res.status(401).json({
            erro: 'User not authenticated'
        });
    }
    next();
}

module.exports = isAunthenticated;