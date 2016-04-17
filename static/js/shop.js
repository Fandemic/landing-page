//Shop Code - same as mobile*/
var total_cost = 0.00;
var num_items = 0;
var cart = {}

//timer
$('.time').countdown(1462147199*1000, function(event) {
   var totalHours = event.offset.totalDays * 24 + event.offset.hours;
   $(this).html(event.strftime(totalHours + ':%M:%S'));
 });

 //Change product image on select
 $('.variation2 .form-control').change(function () {
    //var val = parseInt($(this).val());
    var src = $(this).find("option:selected").data('src');
    $(this).parent().parent().parent().find(".product-picture").attr("src",src);
});

$(document).ready(function(){

    $('.btn-checkout').prop('disabled', true);

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
        var varName1 = $(this).parent().parent().find( ".variation1 .name span" ).text();
        var varName2 = $(this).parent().parent().find( ".variation2 .name span" ).text();
        var var1 = $(this).parent().parent().find( ".variation1 option:selected" ).text();
        var var2 = $(this).parent().parent().find( ".variation2 option:selected" ).text();
        var id = (itemID+var1+var2).replace(/ /g,'').replace(/(\r\n|\n|\r)/gm,"");
        var variation = var1+var2;

        //store in an array
        try{
            cart[itemID][variation]['qty']++;
            $('.'+id).find('.qty').text(cart[itemID][variation]['qty']);
        }
        catch(KeyError){
          if (!cart.hasOwnProperty(itemID)){
            cart[itemID] = {};
          }
          cart[itemID][variation]={};
          cart[itemID][variation]['qty'] = 1;
          var item = $('<div class="item '+id+'"><span class="product-id">'+itemID+'</span><img width="80px" src="' + itemSrc + '"><strong>' + itemTitle + '</strong> (x<span class="qty">1</span>)<br>$<span class="price">' + price + '</span><br><strong>'+varName1+':</strong> '+var1+' <strong>'+varName2+':</strong> '+var2+'<a class="delete"><i class="fa fa-times"></i></a></div>');
          item.prependTo($("#cart")).hide().fadeIn(500);
        }

    });


    //Delete from cart
    $("#cart").on('click', '.delete', function() {

      //increment
      var qty = $(this).parent().find(".qty").text();
      num_items = num_items - qty;

      $(".num-items").text("("+num_items+")");

      if (num_items == 0){
        $("#alert-cart-empty").show();
        $('.btn-checkout').prop('disabled', true);
      }

      key = $(this).parent().find(".product-id").text();

      //delete in array
      delete cart[key];

      //hide x button
      $(this).hide();

      //Remove the item
      var price = $(this).parent().find(".price").text();
      var qty = $(this).parent().find(".qty").text();
      total_cost = total_cost - (parseFloat(price)*parseFloat(qty));
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

 /* ==========================================================================
  Contact Form Support
  ========================================================================== */

 $(function() {
   $('#contact-form-button').on('click', function() {
     var firstname = $('#support_firstname').val();
     var email = $('#support_email').val();

     $('#contact-form-notification').html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Sending...');
     $.ajax({
       url: '/supportContactForm',
       data: $('form').serialize(),
       type: 'POST',
       success: function(response) {
         $('#contact-form-notification').empty()
         $('#contact-form-notification').html('<i class="fa fa-envelope"></i> Thanks ' + firstname + ' , we will contact you within 24 hours!');
         console.log(response);
       },
       error: function(error) {
         $('#contact-form-notification').html('<p style="color:red"><i class="fa fa-exclamation-triangle"></i> Error!</p>');
         console.log(error);
       }
     });
   });
 });

 /* ==========================================================================
  ========================================================================== */
