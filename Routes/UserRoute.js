var userController = require('../Controllers/UserController');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/users',userController.getAll);
router.get('/users/:id',userController.get);
router.put('/users/:id',userController.update);
router.post('/users',userController.create);
router.delete('/users/:id',userController.delete);
module.exports = router;