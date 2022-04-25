module.exports.login = function (req, res) {
    res.status(200).json({
        email: req.body.email,
        password: req.body.password,
        login: true
    })
}

module.exports.register = function (req, res) {
    res.status(200).json({
        email: req.body.email,
        password: req.body.password,
        register: true
    })
}