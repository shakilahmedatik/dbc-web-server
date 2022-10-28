const express = require('express')
const port = 8000
const app = express()

app.get('/', (req, res) => res.send('server running....welcome to dbc api'))

app.listen(port, () => console.log('Server running at port: ', port))
