const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const repairController = require('../controllers/repair-controller')


router.get('/', authenticate, repairController.getByUser)
router.get('/all-status', authenticate, repairController.getAllStatus)
router.get('/adminShow', authenticate, repairController.adminShowRepair)
router.post('/', authenticate, repairController.createRepair)
router.put('/:id', authenticate, repairController.createRepair)
router.put('/repairedit', authenticate, repairController.updateRepair)
router.delete('/:id', authenticate, repairController.deleterepair)


module.exports = router