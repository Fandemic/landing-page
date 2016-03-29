$(function() {
  "use strict";

  /* ==========================================================================
   Sub Form
   ========================================================================== */



  $('#mc-form').ajaxChimp({
    language: 'cm',
    url: 'https://fandemic.us13.list-manage.com/subscribe/post?u=55e39921c574af9d816b96e7a&amp;id=5593e970c2'
  });


  $.ajaxChimp.translations.cm = {
    'submit': 'Submitting...',
    0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
    1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
    2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
    3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
    4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
    5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
  };

  /* ==========================================================================
   Activate Form
   ========================================================================== */

  $(function() {
    $('#activate-store-button').on('click', function() {
      var firstname = $('#activate_firstname').val();
      var email = $('#activate_email').val();
      var phone = $('#activate_phone').val();
      var youtube = $('#activate_youtube').val();

      $('#activate-store-notification').html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Sending...');
      $.ajax({
        url: '/activate',
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
          $('#activate-store-notification').html('<i class="fa fa-exclamation-triangle"></i> Error!');
          console.log(error);
        }
      });
    });
  });

  /* ==========================================================================
   Tweet
   ========================================================================== */


  // $('.tweet').twittie({
  //     username: 'envatomarket', // change username here
  //     dateFormat: '%b. %d, %Y',
  //     template: '{{tweet}} {{user_name}}',
  //     count: 10
  // }, function() {
  //     var item = $('.tweet ul');
  //
  //     item.children('li').first().show().siblings().hide();
  //     setInterval(function() {
  //         item.find('li:visible').fadeOut(500, function() {
  //             $(this).appendTo(item);
  //             item.children('li').first().fadeIn(500);
  //         });
  //     }, 5000);
  // });


  /* ==========================================================================
   sticky nav
   ========================================================================== */

  $('.navbar-default').waypoint('sticky', {
    offset: 30
  });

  /* ==========================================================================
   litebox
   ========================================================================== */

  $('.litebox-hero, .litebox-tour').magnificPopup({
    type: 'iframe'
  });


  /* ==========================================================================
     Number animation
     ========================================================================== */


  $('.welcome-message').waypoint(function() {

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

    $('.total-number-1').animateNumber({
      number: 61392, //change value here
      numberStep: comma_separator_number_step
    }, 6000);

  }, {
    offset: '80%'

  });




  /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

  $(window).load(function() {
    var featureImg = function() {
      $(".features div[class='row'] .col-md-7").each(function() {
        var newHeight = 0,
          $this = $(this);
        $.each($this.children(), function() {
          newHeight += $(this).height();
        });
        $this.height(newHeight);
      });
    };


    featureImg();


    $(window).on("resize", function() {
      featureImg();
    });


  });




  /* ==========================================================================
   Smooth scroll
   ========================================================================== */

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });




});
