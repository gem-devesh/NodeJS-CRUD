const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

router.get('/', services.homeRoutes)
router.get('/update-user', services.updateUser)
router.get('/add-user', services.addUser)

/*
    @description CRUD APIs
*/
router.post('/api/users', controller.create)
router.get('/api/users', controller.find)
router.put('/api/users/:id', controller.update)
router.delete('/api/users/:id', controller.delete)


module.exports = router;
