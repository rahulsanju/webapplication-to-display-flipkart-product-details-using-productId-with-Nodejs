angular.module('searchProductController',['searchProductService'])
.controller('searchCtrl',function(searchProduct,$routeParams,$location,$rootScope){
    app=this;
    
    this.searchProductUsingId = function(pid){
        $location.path('/id/'+pid.pid);
    };
    var changeRoute=function(pid){
        searchProduct.searchProductDetails(pid).then(function(data){
            if(data.data.success==true){
                 pdetails=data.data.data;
                 pd=JSON.parse(pdetails);
                 p=pd.productBaseInfoV1;
                 app.ptitle=p.title;
                 app.pmrp=p.maximumRetailPrice.amount;
                 app.pfsp=p.flipkartSpecialPrice.amount;
                 app.pinstock=p.inStock;
                 app.brand=p.productBrand;
                 app.productid=p.productId;
                 app.purl=p.productUrl;
                 app.pcod=p.codAvailable;
                 app.pid=p.productId;
                 app.mimage=p.imageUrls["400x400"];
                 if(app.pmrp==app.pfsp){
                     app.pmrp=null;
                 }
                 console.log(p);
                 $location.path('/id/'+app.pid);
                 }else{
                     console.log(data);
                 }
         });
    }
    $rootScope.$on('$routeChangeStart',function(){
        var url = $location.path().split('/');
        if(url[1]=="id" && url[2]){
            console.log(url[2]);
            pid={pid:url[2]}
            changeRoute(pid);
            
        }
    });
});