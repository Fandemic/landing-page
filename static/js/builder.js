var app = angular.module("app", []);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);

app.controller("builder", function($scope) {

    //box template
    $scope.box = {
      brand_name: '',
      box_name: '',
      font1: "font-family: 'Quicksand'",
      font2: "font-family: 'Arvo'",
      font_color: '',
      description: null,
      cost: 0.00,
      price: 50,
      profit: 3,
      charity: 0,
      goal: 25,
      products: [],
      style: null,
      material: null,
      desc: '',
      star: {
        'exists': false,
        'name': '',
        'id': '',
        'email': '',
        'phone': '',
        'img_url': '',
        'password': ''
      },
      social_media: {
        'instagram': '',
        'twitter': '',
        'facebook': '',
        'youtube': ''
      },
      confirmation_code: randomString(12),
      logo: '',
      box_img: ''
    };

    $scope.validation = {
      name:'',
      email:'',
      instagram:'',
      password: ''
    };

    $scope.filter = {
      brand:{
        name:'All Brands',
        id:'All Brands'
      },
      category:'All Products'
    }

    $scope.items = [];

    $scope.step = 1;

    /*$("#slider").ionRangeSlider({
     grid: true,
     min: 0,
     max: 100,
     from: 10,
     step: 1,
     prettify_enabled: false,
     prefix: "$"
   });
   $scope.slider = $("#slider").data("ionRangeSlider");
   */

   //filter products
   $scope.$watch('filter', function () {

       $.ajax({
          url: '/product-search',
          data: JSON.stringify($scope.filter, null, '\t'),
          type: 'POST',
          contentType: 'application/json;charset=UTF-8',
          success: function(response) {
              data = JSON.parse(response);
              $scope.items = data;
              $scope.$apply();
              $scope.$digest();

          },
          error: function(error) {
              console.log(error);
          }
      });

    }, true);

    //launch the users store form
    $scope.launch_store = function(){

        //lowercase front end check
        $scope.box.star.id = $scope.box.star.id.toLowerCase();
        $scope.box.star.instagram = $scope.box.star.instagram.toLowerCase();
        $scope.box.social_media.instagram = $scope.box.social_media.instagram.toLowerCase();

        var box = $scope.box;
        $("#finish-last-step").prop("disabled",true);

          //facebook event tracking
          fbq('track', 'CompleteRegistration', {
          value: 0.00,
          currency: 'USD'
          });

          //Google Analytics
          ga('send', 'event', {
            eventCategory: 'Builder',
            eventAction: 'Next Step',
            eventLabel: 'Builder Submission Success'
          });

        $('#loader').show();

        $.ajax({
          type: 'POST',
          url: '/launch-store-request',
          data: angular.toJson(box, null, '\t'),
          contentType: 'application/json;charset=UTF-8',
          success: function(response) {
            $('#launch-store-modal').modal('hide');
            $('.fa-times').hide();
            $('.steps').hide();
            $('#step6').fadeIn('fast', function() {

            });
            $("#coin-alert").hide();
            $("html, body").animate({ scrollTop: 0 }, "fast");

          },
          error: function(error) {
            alert("Submission Error: " + str(error));
          },
          complete: function(){
            $('#loader').hide();
            $("#launch-store-button").prop("disabled",false);
          }
        });



      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      function validatePhone(phone) {
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = phone.replace(/\D/g, "");
        return (digits.match(phoneRe) !== null);
      }

    }

    $scope.check_product = function(item){

      if (item.variation.length > 0){
        $('#'+item.item_num+'-variation').modal('show');
        return ''
      }
      else{
        $scope.toggle_product({name:item.name,item_num:item.item_num,price:item.partner_price});
      }

    }

    //Takes a product object and adds it to the box
    $scope.toggle_product = function(product){

      index = -1;



      for (i in $scope.box.products){
        if (product.variation){
          if ( ($scope.box.products[i].name == product.name) && ($scope.box.products[i].variation == product.variation)){
            index = i;
          }
        }
        else if ($scope.box.products[i].name == product.name){
          index = i;
        }
      }

      if (index >= 0){
         $scope.box.products.splice(index, 1);
         $scope.box.cost  =  $scope.box.cost - parseFloat(product['price']);
         $.notify("Product Removed", { position:"top right",className:"error" });
      }

      else if ($scope.box.products.length >= 6){
        alert('We only allow 6 starter items!');
      }

      else{
        $scope.box.products.push(product);
        $scope.box.cost =  $scope.box.cost + parseFloat(product['price']);
        $.notify("Product Added", { position:"top right",className:"success" });
      }

      //$scope.updateSlider();

    }

    //Toggles the packaging color or material depending
    //on the packaging dictionary variable
    $scope.toggleStyle = function(style){

      if ($scope.box.style == null){
        $scope.box.style = style;
        $scope.box.cost += 10;
        $scope.box.price = $scope.box.cost + 5;
        $.notify("Box Successfully Added", { position:"top right",className:"success" });
      }
      else if ($scope.box.style.variation == style.variation){
        $scope.box.style = null;
        $scope.box.cost -= 10;
        $scope.box.price = $scope.box.cost + 5;
        $.notify("Box Successfully Removed", { position:"top right",className:"success" });
      }
      else{
        $scope.box.style = style;
        $.notify("Box Successfully Updated", { position:"top right",className:"success" });
      }

    }

    //
    $scope.toggleMaterial = function(material){

      if ($scope.box.material == null){
        $scope.box.material = material;
        $.notify("Packaging Successfully Added", { position:"top right",className:"success" });
      }
      else if ($scope.box.material.variation == material.variation){
        $scope.box.material = null;
        $.notify("Packaging Successfully Removed", { position:"top right",className:"success" });
      }
      else{
        $scope.box.material = material;
        $.notify("Packaging Successfully Updated", { position:"top right",className:"success" });
      }

    }



    $scope.togglePrice = function(price){

      $scope.box.profit = price.profit
      $scope.box.charity = price.charity
      $scope.box.price = $scope.box.cost + price.profit + price.charity

    }



  /*  $scope.updateSlider = function(){
      // UPDATE - updates slider to any new values
      $scope.slider.update({
        min: $scope.box.cost,
        max: $scope.box.cost + 50,
        from: $scope.box.cost,
      });

      // RESET - reset slider to it's first values
      $scope.slider.reset();
    }
    */

    //sample order form
    $('.sample-order').on('click', function(e) {
      // Open Checkout with further options
      handler.open({
      name: 'ORDER A SAMPLE ($'+ $scope.box.cost.toString()+')',
      //description: '' ,
      zipCode: true,
      billingAddress: true,
      shippingAddress: true,
      allowRememberMe: true,
      panelLabel: "Pay",
      amount: Math.round(($scope.box.cost) * 100)
      });
      e.preventDefault();
    });

    //STRIPE SAMPLE
    var handler = StripeCheckout.configure({
    key: 'pk_test_z1mq9KQ3GyakW5OdduPIX94u',
    //key: 'pk_live_kyvM71oajfwVWnxBoy7SfqOp',
    locale: 'auto',
    token: function(token,args) {

      //combine all info into one object
      var result={};
      var box = $scope.box;
      $.extend(result, args, token);
      $.extend(result, result, box);
      result['amount'] = Math.round(($scope.box.cost) * 100);

      $('#big-loader').show();

      $.ajax({
        type: 'POST',
        url: '/sample-charge',
        data: JSON.stringify(result, null, '\t'),
        contentType: 'application/json;charset=UTF-8',
        success: function(response) {
          $('#sample-order-modal-success').modal('show');
        },
        error: function(error) {
          alert("payment error");
        },
        complete: function(){
          $('#big-loader').hide();
        }
      });

    }

    });

    function randomString(length) {
      var chars = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ';
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }

    //BUTTON FUNCTIONS
    $scope.step_2 = function(){

      $('.modal').modal('hide');

      //check for at least 1 item
      if ($scope.box.products.length == 0){
        BootstrapDialog.show({
         title: 'OOPS',
           message: 'Please add <strong>at least one</strong> product to your store &#128516;',
           buttons: [{
             cssClass: 'btn-success',
             label: 'ok, got it!',
               action: function(dialog) {
                 dialog.close();
               }
           }]
        });
      }

      else{


        fbq('track', 'NextStep', {
        dest: '2.Packaging'
        });

        $('.steps').hide();
        $('#step5').fadeIn('fast', function() {
          $(".carousel").flickity('resize');
        });
          $('#crumb2').removeClass( "current");
          $('#crumb2').addClass( "touched");
          $('#crumb4').addClass('current');
          $("#next5").addClass("on");
          $("html, body").animate({ scrollTop: 76 }, "slow");

        }
      }

      $scope.step_3 = function(){

        $('.modal').modal('hide');




          ga('send', 'event', {
            eventCategory: 'Builder',
            eventAction: 'Next Step',
            eventLabel: 'Step 2: Packaging -> Step 3: Branding'
          });

          $("#step4").css("visibility", "visible");

          $('.steps').hide();

          $('#step5').fadeIn('fast', function() {
            $(".carousel").flickity('resize');
          });
            $('#crumb3').removeClass( "current");
            $('#crumb3').addClass( "touched");
            $('#crumb4').addClass('current');
            $("#next5").addClass("on");
            $("html, body").animate({ scrollTop: 76 }, "slow");

        }

        //NAVIGATION
        $("#step1").on('click', '.next-btn', function() {

          $('.steps').hide();
          $('#step2').fadeIn('fast', function() {
            $(".carousel").flickity('resize');
        });
          $('#crumb1').removeClass( "current");
          $('#crumb1').addClass( "touched");
          $('#crumb2').addClass('current');
          $("html, body").animate({ scrollTop: 76 }, "slow");

        });

        $scope.set_star = function(star){
          $scope.box.star['name'] = star['name'];
          $scope.box.star['id'] = star['id'];
          $scope.box.star['img_url'] = star['img_url'];
          $scope.box.star['exists'] = true;
        }

        //extract the id of the user from the URL
        if(window.location.hash) {
            var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

            $.ajax({
               url: '/builder-alert',
               data: {id: hash},
               type: 'GET',
               success: function(response) {
                   data = JSON.parse(response);
                   $scope.set_star(data);
                   $scope.$digest();

               },
               error: function(error) {
                   console.log(error);
               }
           });

        } else {
            // No hash found
        }





  $scope.finish_last_step = function(){

    if ($scope.validation.name != 'valid'){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'Please enter your name!',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else if ($scope.validation.instagram == 'invalid'){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'Please enter your valid Instagram Username! This field is required to help verify your identity.',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else if ($scope.validation.instagram == 'invalid-taken'){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'This instagram account ('+$scope.box.star.instagram+') is already in use! Please contact sarah@fandemic.co if this is your acount.',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else if ($scope.validation.email == 'invalid'){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'Please enter a valid email address.',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else if ($scope.validation.email == 'invalid-taken'){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'This email address is already in use.',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else if ($scope.validation.password != 'valid'){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'Please enter password with at least 6 characters!;',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else {
      $scope.launch_store();
    }


  }






$scope.next_btn5 = function(){

    if ($("#your-brand-input").val()  == ''){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'Please enter a brand name for your store!',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else if ($("#your-box-input").val()  == ''){
      BootstrapDialog.show({
       title: 'Alert!',
         message: 'Please name your box!',
         buttons: [{
           cssClass: 'btn-success',
           label: 'OK',
             action: function(dialog) {
               dialog.close();
             }
         }]
      });
    }
    else{
      ga('send', 'event', {
        eventCategory: 'Builder',
        eventAction: 'Next Step',
        eventLabel: 'Step 3: Branding -> Step 4: Finish'
      });

      $('.modal').modal('hide');




      $('.steps').hide();
      $('#step5').fadeIn('fast', function() {
          $(".carousel").flickity('resize');

    });
      $('#crumb4').removeClass( "current");
      $('#crumb4').addClass( "touched");
      $('#crumb5').addClass('current');
      $("#next6").addClass("on");
      $("html, body").animate({ scrollTop: 76 }, "slow");

  }
//
};


function testInstagram(username){

  $.ajax({
    type: 'GET',
    url: '/instagram-validate',
    data: {username: username},
   error: function(xhr) {
     $scope.$apply(function () {
      $scope.validation.instagram = 'invalid';
    });
   },
   success: function(data) {
    if (data == 'success'){
      $scope.$apply(function () {
      $scope.validation.instagram = 'valid';
    });
    }
    else if (data == 'failed-exist'){
      $scope.$apply(function () {
      $scope.validation.instagram = 'invalid';
    });
    }
    else if (data == 'failed-available'){
      $scope.$apply(function () {
      $scope.validation.instagram = 'invalid-taken';
    });
    }
  }
});


}


$scope.validate_name = function(name){

  if ((name.length > 1) && (/^[A-Za-z\s]+$/.test(name))){
    $scope.validation.name = 'valid';
  }
  else{
    $scope.validation.name = 'invalid';
  }

};

$scope.validate_email = function(email){

  $scope.$apply(function () {
    $scope.validation.email = 'loading';
  });

  if (validateEmail(email)){
          //check if the email exists
          $.ajax({
            type: 'GET',
            url: '/influencer-email-exists',
            data: {email: email},
           error: function(xhr) {
             $scope.$apply(function () {
              $scope.validation.email = 'invalid';
            });
           },
           success: function(data) {
            if (data == 'success'){
              $scope.$apply(function () {
              $scope.validation.email = 'valid';
            });
            }
            else if (data == 'failed'){
              $scope.$apply(function () {
              $scope.validation.email = 'invalid-taken';
            });
            }
          }
        });


  }
  else{
    $scope.validation.email = 'invalid';
  }

};


$scope.validate_instagram = function(instagram){

  $scope.$apply(function () {
             $scope.validation.instagram = 'loading';
         });

  testInstagram(instagram);

};


$scope.validate_password = function(password){

  if (password.length >= 6){
    $scope.validation.password = 'valid';
  }
  else{
    $scope.validation.password = 'invalid';
  }

};

}); //scope


// $scope.finish_last_step = function(){
//   console.log($scope.box.description);
//   console.log($('#box-description-textarea').val());
//     if ($scope.box.description == null){
//       BootstrapDialog.show({
//        title: 'Alert!',
//          message: 'Please enter a box description! &#128516;',
//          buttons: [{
//            cssClass: 'btn-success',
//            label: 'OK',
//              action: function(dialog) {
//                dialog.close();
//              }
//          }]
//       });
//     }
//     else {
//       $('#launch-store-modal').modal('show');
//     }
// }
//
// $('#finish-last-step').click(function(){
//   console.log($('#box-description-textarea').val());
// })

$("#step5").on('click', '.finish', function() {

  $('.modal').modal('hide');

/*
  $('.steps').hide();
  $('#step6').fadeIn('fast', function() {

});
  $('#crumb5').removeClass( "current");
  $('#crumb5').addClass( "touched");
  $('#crumb6').addClass('current');
  $("#finish").addClass("on");
  $("html, body").animate({ scrollTop: 76 }, "slow");
  */
});

/*
$("#step2").on('click', '.prev', function() {
  $('.steps').hide( "fast"  );
  $('#step1').show( "slow" );
  $('.crumb').removeClass('current');
  $('#crumb1').addClass('current');
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#step3").on('click', '.prev', function() {
  $('.steps').hide( "fast"  );
  $('#step2').show( "slow" );
  $('.crumb').removeClass('current');
  $('#crumb2').addClass('current');
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
*/

$("#crumbs").on('click', '.crumb', function() {

   $('.modal').modal('hide');

    var step = $(this).attr('data-step');

    $('.steps').hide( "fast"  );
    $('#'+step).show( "slow" );
    $('.crumb').removeClass('current');
    $(this).addClass('current');
});

/*
$(".thumbnail .content").click(function(){

  $("#next3").addClass("on")

  $(this).toggleClass("checked");

});
*/



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


$('a').popover({
  'trigger': 'hover',
  'container': 'body',
  'html': true
});

$(".bootstrap-touchspin").click(function() {
  setTimeout(
function()
{
  $('#collapse3').collapse("show")
}, 2000);

});


(function() {
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
    new SelectFx(el, {
onChange: function(val) {
  window.location.href = "/builder/" + val.toLowerCase();
}
});
  } );
})();






var windw = this;


$(document).ready(function() {

    if (window.location.href.indexOf("#how-fandemic-works") != -1){
      $('#how-fandemic-works').modal('show');
     }





   });
