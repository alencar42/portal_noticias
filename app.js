let express = require('./config/server.js')

var rota_noticias = require('./app/routes/noticias')(express)
var rota_home = require('./app/routes/home')(express)
var rota_formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(express)

express.listen(4242, () => {
    console.log(`Server OndeLine 4242`)
})