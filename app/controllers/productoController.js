let mysql=require('../../bd/mysql');
const { get } = require('../routes');
module.exports={
    listar:(req,res)=>{
        mysql.query('SELECT * FROM product', function(error, results, fields){
            if (error)
                res.json(error);
            else
                res.json(results);
        })
    },
    buscarid:(req,res)=>{
        let id=req.params.id;
        console.log('buscando '+id);
        mysql.query('SELECT * FROM product where id='+id, function(error, results, fields){
            if (error)
                res.json(error);
            else
                res.json(results);
        })
    },
    eliminarid:(req,res)=>{
        let id=req.params.id;
        console.log('eliminando '+id);
        mysql.query('DELETE FROM product where id='+id, function(error, results, fields){
            if (error)
                res.json(error);
            else
                res.json(results);
       })
    },
    agregar:(req,res)=>{
        console.log(req.body);
        let name=req.body.name;
        let id=req.body.id;
        let quantity=req.body.quantity;
        let cost=req.body.cost;
        mysql.query("insert into product(name,id,quantity,cost) values('"+ name +"'," + id + "," + quantity +","+ cost +")", function(error, results, fields)
        {
            if (error)
                res.json(error);
            else
                res.json(results);
       })
    }
}