const express = require('express');
const router = express.Router();
const controller = require('../controllers/car-controller')

router.get('/', controller.get );
router.get('/:id', controller.getById );
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;