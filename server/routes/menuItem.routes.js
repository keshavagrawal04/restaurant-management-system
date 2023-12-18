const router = require('express').Router();

router.post('/add');
router.get('/get');
router.get('/get/:id');
router.patch('/update/:id');
router.patch('/delete/:id');

module.exports = router;
