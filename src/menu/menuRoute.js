const express = require('express');
const menuController = require('./menuController');

const router = express.Router();

router.get('/', menuController.getAllDishes);
router.post('/', menuController.createDish);
router.get('/:id', menuController.getDish);
router.put('/:id', menuController.updateDish);
router.delete('/:id', menuController.deleteDish);

module.exports = router;