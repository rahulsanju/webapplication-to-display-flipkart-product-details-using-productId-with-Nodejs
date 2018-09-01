var express=require('express');
var router=express.Router();
var client = require('flipkart-api-affiliate-client');

var fkClient = new client({
    trackingId:""/* Your affiliate ID*/,
    token:""/* Your affiliate token */,
},"json");

router.post('/searchProduct',function(req,res){
    id=req.body.pid;
    console.log(id);
    fkClient.doIdSearch(id).then(function(value){
        var productPromise = new Promise(function(resolve,reject){
            if(value.status==200){
                resolve(value);
            }else{
                reject("error occuring!");
            }
        });
        productPromise.then(function(product){
            pdetails=product.body;
            //JSON.parse(pdetails);
            res.json({'success':true,'data':pdetails});
        }).catch(function(error){
            res.json({'success':true,'data':error});
        });

        
    });
});
module.exports=router;
