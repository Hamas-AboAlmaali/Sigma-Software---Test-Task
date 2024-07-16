const express = require('express')
const candidateController = require('../controllers/candidates.controller')
const router = express.Router()

router.post('/', candidateController.addCandidate)

module.exports = router;