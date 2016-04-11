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


$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {

    $('.side-panel').toggleClass('visible');

    $('[data-toggle=offcanvas]').toggleClass('btn-danger');

  });
});
