require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const candidateRouter = require('./routes/candidates.routes')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// candidates router
app.use('/api/candidates', candidateRouter)

app.listen(process.env.PORT, () => console.log(`App listen on PORT ${process.env.PORT}`))