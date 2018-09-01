angular.module('searchProductService',[])
.factory('searchProduct',function($http){
    var searchProductFactory={};
    searchProductFactory.searchProductDetails=function(pid){
        return $http.post('/api/searchProduct',pid);
    }

    return searchProductFactory;
});