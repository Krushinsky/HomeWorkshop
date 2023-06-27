const { Router } = require('express');
const {getService, saveServices, deleteService, editService} = require ('./ServicesController')

const router = Router();

router.get('/', getService )
router.post('/saveServices', saveServices)
router.post('/deleteService', deleteService)
router.post('/editService', editService)


module.exports = router;

