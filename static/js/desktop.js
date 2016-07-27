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
 document.querySelector('.cart-button').addEventListener('click', function() {

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


 /* ==========================================================================
  Activate Form
  ========================================================================== */
 $(function() {
   $('#support-form-button').on('click', function() {
     var firstname = $('#support_firstname').val();
     var email = $('#support_email').val();
     var phone = $('#support_phone').val();

     $('#support-form-notification').html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Sending...');
     $.ajax({
       url: '/supportContactForm',
       data: $('form').serialize(),
       type: 'POST',
       success: function(response) {
         $('#support-form-notification').empty()
         $('#support-form-notification').html('<i class="fa fa-envelope"></i> Thanks ' + firstname + ' , we will contact you within 24 hours!');
         setTimeout(function() {
           //$('#myModal').modal('hide')
           $('#support-form-notification').empty()
           $('#support-contact-form').trigger("reset")
         }, 2000);
         console.log(response);
       },
       error: function(error) {
         $('#support-form-notification').html('<p style="color:red"><i class="fa fa-exclamation-triangle"></i> Error!</p>');
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



/* customer service accordion */
$('.collapse').on('show.bs.collapse', function() {
    var id = $(this).attr('id');
    $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
    $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-minus"></i>');
});

/*FLY TO CART ANIMATION*/
$('.add-to-cart').on('click', function () {
        var cart = $('.cart-button');
        var imgtodrag = $(this).parent().parent().find(".product-picture").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '300px',
                    'width': '300px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');

            setTimeout(function () {
                //cart.effect("shake", {
                //    times: 2
              //  }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
