//Initial Variables
var total_cost = 0.00;

$(document).ready(function(){


    var cart = []
    var num_items = 0;

    //Add a product to the cart
    $(".add-to-cart").click(function(){

      //increment
      num_items++;
      $(".num-items").text("("+num_items+")");

        //cart icon animation
        $( ".cart-btn" ).effect( "shake",{times:2}, 300 );

        //Hide cart alert
        $("#alert-cart-empty").hide();

        //Get the product Variables
        var price = $(this).parent().find('.caption').find(".price").text();
        total_cost = total_cost + parseFloat(price);
        $("#total-cost").text(total_cost.formatMoney(2));

        var itemSrc = $(this).parent().find('.product-picture').attr("src");
        var itemTitle = $(this).parent().find('.caption').find('.title').text();

        //Create the DOM item and fade it in
        var item = $('<div class="item"><img width="80px" src="' + itemSrc + '"><strong>' + itemTitle + '</strong><br>$<span class="price">' + price + '</span><br>qty <span class="qty">1</span><a class="delete"><i class="fa fa-times"></i></a></div>');
        item.prependTo($(".cart")).hide().fadeIn(500);

        //animation
        //var itemThumbnail = $(this).parent();
        //flyToElement($(itemThumbnail), $('.cart'));




    });


    //Delete from cart
    $(".cart").on('click', '.delete', function() {

      //increment
      num_items--;
      $(".num-items").text("("+num_items+")");

      //hide x button
      $(this).hide();

      //Remove the item
      var price = $(this).parent().find(".price").text();
      total_cost = total_cost - parseFloat(price);
      $("#total-cost").text(total_cost.formatMoney(2));
      $(this).parent(".item").fadeOut(300, function(){ $(this).remove();});
    });

});

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

 /* ==========================================================================
  Animation shop
  ========================================================================== */
/*
 function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 3;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
    $('body').append($(flyerClone));
    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;

    $(flyerClone).velocity({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 700,
    function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut('fast', function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
}
*/


$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {

    $('.side-panel').toggleClass('visible');

    $('[data-toggle=offcanvas]').toggleClass('btn-danger');

  });
});

/* ==========================================================================
 Caption mouseover
 ========================================================================== */
/*
$('.caption .item-info-icon').hover(
    function(){
      $(this).parent().parent().parent().find('.mouseoverCaption').slideDown(250);
    },
    function(){
      $(this).parent().parent().parent().find('.mouseoverCaption').slideUp(250);
    }
);
*/
