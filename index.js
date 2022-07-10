const express = require('express')
const app = express()
const port = 3041

app.get('/', (req, res) => res.send('Hola SOMOSALPINAS.COM.AR'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))