const router = require('express').Router();
const menuItemController = require('../controllers');

router.post('/add', menuItemController.saveMenuItem);
router.get('/get', menuItemController.getMenuItems);
router.get('/get/:id', menuItemController.getMenuItem);
router.patch('/update/:id', menuItemController.updateMenuItem);
router.patch('/delete/:id', menuItemController.deleteMenuItem);

module.exports = router;
