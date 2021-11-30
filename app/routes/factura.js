let productoController=require('../controllers/facturaController')
var router=require('express').Router();
router.post('/',function (req,res){
    productoController.facturar(req,res);
});
module.exports=router;