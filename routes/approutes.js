const express=require('express');
const router = express.Router();
var myController = require("../controllers/my_controller");


router.get('/',myController.showForm);
router.post('/',myController.insertData);
router.get('/showall',myController.showAll);
router.get('/delete/:id', myController.delete);
router.get('/edit/:id', myController.edit);
router.post('/update',myController.update);

module.exports = router