var app = angular.module("app", []);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);

app.controller("shop", function($scope) {

  //initialize the customers
  $scope.customer = {
    email:'r',
    name:'r',
    addr:'r',
    city:'',
    state:'',
    zip:'',
    country:''
  };

  $scope.shipping_method = {};

  $scope.rates = [];

  $scope.price = 80.00;



  //watch for the customer variable to change!
  $scope.$watch('customer', function(c, oldValue){

      if (c.addr && c.city && c.state && c.zip && c.country){

        $('#shipping').notify("updating shipping methods...", { position:"top center",className:"info" });
        $.ajax({
           url: '/shipping-rates',
           data: JSON.stringify(c, null, '\t'),
           type: 'POST',
           contentType: 'application/json;charset=UTF-8',
           success: function(response) {

             data = JSON.parse(response);


             if (data.length > 0){

               $('#shipping').notify("shipping methods updated", { position:"top center",className:"success" });
               $scope.rates = data;
               $scope.shipping_method = data[0];
               $scope.$digest();
             }
             else{
               $('#shipping').notify("Your address is invalid", { position:"top center"});
               $scope.rates = [];
               $scope.shipping_method = {};
               $scope.$digest();
             }

           },
           error: function(error) {
             alert(error);
           }
       });

      }

        },true);




});
