var router=require('express').Router();
var producto=require('./producto');
var factura=require('./factura');
router.use('/producto',producto);
router.use('/factura',factura);
router.get('/',function(req,res){
    res.json({mensaje:'PROYECTO FINAL:)'})
})
module.exports=router;