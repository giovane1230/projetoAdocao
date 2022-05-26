function isAunthenticated (req, res, next) {
    if (!req.headers.authorization ) {
/*         return res.status(401).json({
            erro: 'User not authenticated' */
/*             return responde.redirect('/login');
 */       }
    
    next();
}

module.exports = isAunthenticated;