const {Router} = require('express');
const router = Router();
const controller = require('../controller/income.controller');
const auth = require('../middleware/auth.middleware');

router.get('/', auth, controller.getAll);
router.post('/', auth, controller.create);
router.patch('/', auth, controller.update);

module.exports = router;
