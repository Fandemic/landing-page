var app = angular.module("app", []);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);

app.controller("shop", function($scope) {


  $scope.data = {};

  //initialize the customers
  $scope.data.customer = {
    email:'',
    name:'',
    addr:'',
    city:'',
    state:'',
    zip:'',
    country:'US'
  };

  $scope.data.shipping_method = {};

  $scope.rates = [];

  $scope.data.price = price;

  $scope.data.end_time = 1477267200;

  $scope.total_price_str = function(){

    if ($scope.data.shipping_method['rate']){
      return ('($'+ ($scope.data.price + parseFloat($scope.data.shipping_method['rate'])).toFixed(2).toString() +')');
    }
    else{
      return '';
    }

  };

  $scope.total_price = function(){

    if ($scope.data.shipping_method['rate']){
      return $scope.data.price + parseFloat($scope.data.shipping_method['rate']);
    }
    else{
      return $scope.data.price;
    }

  };

  $scope.process_order = function(nonce){

    $scope.data.nonce = nonce;

    if ($scope.validate_checkout_form()){

        $.ajax({
           url: '/charge',
           data: JSON.stringify($scope.data, null, '\t'),
           type: 'POST',
           contentType: 'application/json;charset=UTF-8',
           success: function(response) {
             alert('payment sent to backend');
           },
           error: function(error) {
             alert(error);
           }
       });

    }

  }

  $scope.validate_checkout_form = function(){

    c = $scope.data.customer;

    if (!c.email){
      $('#submit').notify("oops! you forgot your EMAIL", { position:"top center" });
      $('#email').notify("oops! you forgot your EMAIL", { position:"top center" });
      return false;
    }
    else if (!c.name){
      $('#submit').notify("oops! you forgot your NAME", { position:"top center" });
      $('#name').notify("oops! you forgot your NAME", { position:"top center" });
      return false;
    }
    else if (!c.addr){
      $('#submit').notify("oops! you forgot your ADDRESS", { position:"top center" });
      $('#addr').notify("oops! you forgot your ADDRESS", { position:"top center" });
      return false;
    }
    else if (!c.city){
      $('#submit').notify("oops! you forgot your CITY", { position:"top center" });
      $('#city').notify("oops! you forgot your CITY", { position:"top center" });
      return false;
    }
    else if (!c.state){
      $('#submit').notify("oops! you forgot your STATE", { position:"top center" });
      $('#state').notify("oops! you forgot your STATE", { position:"top center" });
      return false;
    }
    else if (!c.zip){
      $('#submit').notify("oops! you forgot your ZIP", { position:"top center" });
      $('#zip').notify("oops! you forgot your ZIP", { position:"top center" });
      return false;
    }
    else if (!c.country){
      $('#submit').notify("oops! you forgot your COUNTRY", { position:"top center" });
      $('#country').notify("oops! you forgot your COUNTRY", { position:"top center" });
      return false;
    }
    else if (!$scope.data.shipping_method.rate){
      $('#submit').notify("a shipping method must be chosen", { position:"top center" });
      $('#shipping').notify("a shipping method must be chosen", { position:"top center" });
      return false;
    }
    else{
      return true;
    }

  }

  //watch for the customer variable to change!
  $scope.$watch('data.customer', function(c, oldValue){

      if ((c.name !== oldValue.name) || (c.email !== oldValue.email)){

      }

      else if (c.addr && c.city && c.state && c.zip && c.country){

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
               $scope.data.shipping_method = data[0];
               $scope.$digest();
             }
             else{
               $('#shipping').notify("Your address is invalid", { position:"top center"});
               $scope.rates = [];
               $scope.data.shipping_method = {};
               $scope.$digest();
             }

           },
           error: function(error) {
             $('#shipping').notify("no shipping methods found", { position:"top center" });
           }
       });

      }

        },true);


});
