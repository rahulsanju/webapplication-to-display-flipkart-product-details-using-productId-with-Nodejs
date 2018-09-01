var express = require('express');
var app=express();
var port  =	process.env.PORT||8010;
var morgan=require('morgan');
var searchProductRouter=require('./app/routes/searchProduct');
var bodyParser=require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use('/api',searchProductRouter);

app.get('*',function(req,res){
    res.sendfile(__dirname+'/public/app/views/index.html');
});

app.listen(port,function(req,res){
    console.log("server running!");
})