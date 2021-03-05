module.exports = (express) => {

    express.get('/noticias', (req, res) => {


        let mysql = require('mysql')
        let connection = mysql.createConnection(
            {
                host        :   'localhost',
                user        :   'root',
                password    :   '1234',
                database    :   'portal_noticias',
                insecureAuth : true 
            }
        )

        connection.query('select * from noticias;', (erro, result) => {
            res.render("noticias/noticias", {noticias : result})
        })
            //res.render (`noticias/noticias`)
    })

}