const express = require('express')
const create = require('../controllers/warehouse/create')
const list = require ('../controllers/warehouse/list')

// initialize router
const router = express.Router()

// POST at route: http://localhost:8080/warehouse/create
router.post('/create', [], create)

// GET at path: http://localhost:8080/warehouse/list
router.get('/list', [], list)

module.exports = router
