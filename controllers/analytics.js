module.exports.home = function (req, res) {
    res.status(200).json({
        login: true,
        meessage: "Page Home"
    })
}

module.exports.analytic = function (req, res) {
    res.status(200).json({
        login: true,
        meessage: "Page Analytics"
    })
}