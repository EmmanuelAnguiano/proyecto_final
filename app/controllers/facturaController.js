let mysql=require('../../bd/mysql');
const { get } = require('../routes');
module.exports={
    facturar:(req,res)=>{
        console.log(req.body);
        let id=req.body.id;
        let date=req.body.date;
        let payment=req.body.payment;
        let costumer_rfc=req.body.costumer_rfc;
        mysql.query("insert into invoice(id,date,payment,costumer_rfc) values('"+ id +"'," + date + ","+ payment +","+ costumer_rfc +")", function(error, results, fields)
        {
            if (error)
                res.json(error);
            else
                res.json(results);
    })
    }
}