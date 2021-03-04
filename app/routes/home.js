module.exports = (express) => {

    express.get('/', (req, res) => {
        res.render (`home/index`)
    })

}
