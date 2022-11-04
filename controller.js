const path = require('path')

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"))
    },
    homeCss: (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.css"))
    },
    homeJs: (req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.js"))
    }
}