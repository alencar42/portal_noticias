let express = require('express')()

express.get('/', (req, res) => {
    res.send ('uhu')
})

express.listen(4242, () => {
    console.log(`On-deline`)
})