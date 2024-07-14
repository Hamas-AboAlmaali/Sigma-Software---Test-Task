const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = 3001
app.listen(PORT, () => console.log(`App listen on PORT ${PORT}`))