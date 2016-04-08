//Initial Variables
var total_cost = 0.00;
var num_items = 0;
var cart = {}


$(document).ready(function(){

    $('.btn-checkout').prop('disabled', true);
    $('#loading').hide();

    //Add a product to the cart
    $(".add-to-cart").click(function(){


      num_items++;
      $(".num-items").text("("+num_items+")");


        //cart icon animation
        $( ".cart-btn" ).effect( "shake",{times:2}, 300 );

        //Hide cart alert
        $("#alert-cart-empty").hide();
        $('.btn-checkout').prop('disabled', false);

        //Get the product Variables
        var price = $(this).parent().find(".price").text();
        total_cost = total_cost + parseFloat(price);
        $(".total-cost").text(total_cost.formatMoney(2));

        var itemSrc = $(this).parent().parent().find('.product-picture').attr("src");
        var itemTitle = $(this).parent().find('.title').text();
        var itemID = $(this).parent().parent().find('.product-id').text();


        //store in an array
        if (cart.hasOwnProperty(itemID)){
          cart[itemID]['qty']++;
          $('.'+itemID).find('.qty').text(cart[itemID]['qty']);
        }else{
          cart[itemID] = {'qty':1};
          var item = $('<div class="item '+itemID+'"><span class="product-id">'+itemID+'</span><img width="80px" src="' + itemSrc + '"><strong>' + itemTitle + '</strong><br>$<span class="price">' + price + '</span><br>qty <span class="qty">1</span><a class="delete"><i class="fa fa-times"></i></a></div>');
          item.prependTo($("#cart")).hide().fadeIn(500);
        }


        //Create the DOM item and fade it in



    });


    //Delete from cart
    $("#cart").on('click', '.delete', function() {

      //increment
      num_items--;
      $(".num-items").text("("+num_items+")");

      if (num_items == 0){
        $("#alert-cart-empty").show();
      }

      key = $(this).parent().find(".product-id").text();

      //delete in array
      delete cart[key];

      //hide x button
      $(this).hide();

      //Remove the item
      var price = $(this).parent().find(".price").text();
      var qty = $(this).parent().find(".qty").text();
      total_cost = total_cost - (parseFloat(price)*qty);
      $(".total-cost").text(total_cost.formatMoney(2));
      $(this).parent(".item").fadeOut(300, function(){ $(this).remove();});
    });

});

//RESET THE CART
function resetCart(){
  cart = {};
  num_items = 0;
  total_cost = 0;
  $(".total-cost").text("0.00");
  $(".num-items").text("");
  $('#cart').html("");
  $('.btn-checkout').prop('disabled', true);
  $("#alert-cart-empty").show();
}

//DOLLAR FORMATTING
Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };


/*SLIDE OUT CART MENU*/
 var cartMenu = new Slideout({
   'panel': document.getElementById('center-panel'),
   'menu': document.getElementById('cart-menu'),
   'padding': 300,
   'tolerance': 70,
   'side': 'right',
   'touch': false
 });

 //cart toggle
 // Toggle button
 document.querySelector('.cart-btn').addEventListener('click', function() {

   cartMenu.toggle();

   });


 /* ==========================================================================
  Activate Form
  ========================================================================== */
 $(function() {
   $('#activate-store-button').on('click', function() {
     var firstname = $('#activate_firstname').val();
     var email = $('#activate_email').val();
     var phone = $('#activate_phone').val();

     $('#activate-store-notification').html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Sending...');
     $.ajax({
       url: '/activateStore',
       data: $('form').serialize(),
       type: 'POST',
       success: function(response) {
         $('#activate-store-notification').empty()
         $('#activate-store-notification').html('<i class="fa fa-envelope"></i> Thanks ' + firstname + ' , we will contact you within 24 hours!');
         setTimeout(function() {
           $('#myModal').modal('hide')
           $('#activate-store-notification').empty()
           $('#activate-store-modal-form').trigger("reset")
         }, 2000);
         console.log(response);
       },
       error: function(error) {
         $('#activate-store-notification').html('<p style="color:red"><i class="fa fa-exclamation-triangle"></i> Error!</p>');
         console.log(error);
       }
     });
     return false;
   });
 });


(function ($) {
  $('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  });
})(jQuery);


$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {

    $('.side-panel').toggleClass('visible');

    $('[data-toggle=offcanvas]').toggleClass('btn-danger');

  });
});

/* ==========================================================================
 Caption mouseover
 ========================================================================== */

$('.caption .item-info-icon').hover(
    function(){
      $(this).parent().parent().parent().find('.mouseoverCaption').slideDown(250);
    },
    function(){
      $(this).parent().parent().parent().find('.mouseoverCaption').slideUp(250);
    }
);

/*DATA FILTERS*/
$(function() {
    //Simple filter controls
    $('.btn-filter').click(function() {
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});
