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

  $scope.data.end_time = end_time;

  $scope.data.order_id = randomString(10);

  $scope.data.star_id = star_id;

  $scope.data.campaign_id = campaign_id;

  $scope.view_mode = 'box';

  $scope.product_view = {
    name:'',
    img_url: '',
    variation: '',
    description: ''
  }

  $scope.toggle_product = function(product){
    $scope.view_mode = 'product';
    $scope.product_view = product;


    $('html').animate({
        scrollTop: 0
    }, 2000);


    if (imageExists(product.img_url) == false)
    {
        if (product.item_num.length == 8){
          product.item_num = product.item_num.slice(0, -3);

          $scope.product_view.img_url = "https://res.cloudinary.com/fandemic/image/upload/e_trim,e_make_transparent/w_400,h_400,c_pad/products/" + product.item_num + ".png";
        }
        else{
          $scope.product_view.img_url = "https://res.cloudinary.com/fandemic/image/upload/e_trim,e_make_transparent/w_400,h_400,c_pad/products/" + product.item_num + ".png";
        }
      }

  }

  $scope.estimated_arrival = function(){

    date = undefined;
    end_time = $scope.data.end_time;
    production_time = 14 * 86400; //two week production time
    time_padding = 4 * 86400; //used when a shipping method is not present

    if ($scope.data.shipping_method['rate']){
      date = new Date((end_time+production_time+parseInt($scope.data.shipping_method['delivery_days'])*86400)*1000);
    }
    else{
      date = new Date((end_time+production_time+time_padding)*1000);
    }
    return moment(date).format("MMM Do YYYY");
  }

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
           data: angular.toJson($scope.data, null, '\t'),
           type: 'POST',
           contentType: 'application/json;charset=UTF-8',
           success: function(response) {
             $("#payment-modal").modal("hide");
             $("#payment-success-modal").modal("show");
           },
           error: function(error) {
             alert("Payment Error: please try again later");
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
    if (!validateEmail(c.email)){
      $('#submit').notify("your email is invalid!", { position:"top center" });
      $('#email').notify("your email is invalid!", { position:"top center" });
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


      //HELPER FUNCTIONS
      function validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      }

      function randomString(length) {
        var chars = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      }


});


//check if an image exists
function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
