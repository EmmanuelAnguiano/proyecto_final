let productoController=require('../controllers/productoController')
var router=require('express').Router();
router.get('/',function (req,res){
    productoController.listar(req,res);
});
router.get('/:id',function (req,res){
    productoController.buscarid(req,res);
});
router.delete('/:id',function(req,res){
    productoController.eliminarid(req,res);
});
router.post('/',function(req,res){
    productoController.agregar(req,res);
});
module.exports=router;