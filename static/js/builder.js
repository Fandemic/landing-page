//NAVIGATION
$("#step1").on('click', '.next-btn', function() {
  $('.steps').hide( "fast"  );
  $('#step2').fadeIn('fast', function() {
    $(".carousel").flickity('resize');
});
  $('#crumb1').removeClass( "current");
  $('#crumb1').addClass( "touched");
  $('#crumb2').addClass('current');
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#step2").on('click', '.next-btn', function() {
  $('.steps').hide( "fast"  );
  $('#step3').fadeIn('fast', function() {
    $(".carousel").flickity('resize');
});
  $('#crumb2').removeClass( "current");
  $('#crumb2').addClass( "touched");
  $('#crumb3').addClass('current');
  $("#next4").addClass("on");
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#step3").on('click', '.next-btn', function() {
  $('.steps').hide( "fast" );
  $('#step4').show( "slow" );
  $('#crumb3').removeClass( "current");
  $('#crumb3').addClass( "touched");
  $('#crumb4').addClass('current');
  $("#next5").addClass("on");
  $("html, body").animate({ scrollTop: 0 }, "slow");
  //$(".carousel").flickity('resize');
});

$("#step4").on('click', '.next-btn', function() {
  $('.steps').hide( "fast" );
  $('#step5').show( "slow" );
  $('#crumb4').removeClass( "current");
  $('#crumb4').addClass( "touched");
  $('#crumb5').addClass('current');
  $("#next6").addClass("on");
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#step5").on('click', '.next-btn', function() {
  $('.steps').hide( "fast" );
  $('#step6').show( "slow" );
  $('#crumb5').removeClass( "current");
  $('#crumb5').addClass( "touched");
  $('#crumb6').addClass('current');
  $("#finish").addClass("on");
  $("html, body").animate({ scrollTop: 0 }, "slow");
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
    var step = $(this).attr('data-step');
    $('.steps').hide( "fast"  );
    $('#'+step).show( "slow" );
    $('.crumb').removeClass('current');
    $(this).addClass('current');
});


//PART 1 - premade or custom
$("#premade").click(function(){

  $("#next2").addClass("on")
 $("#premade").addClass("active");
  $("#custom").removeClass("active");
});

$("#custom").click(function(){

  $("#next2").addClass("on")
 $("#premade").removeClass("active");
  $("#custom").addClass("active");
});

$(".thumbnail .content").click(function(){

  $("#next3").addClass("on")

  $(this).toggleClass("checked");

  $.notify("Product Added To Box", { position:"bottom center",className:"success" });
});

//story wsywig editor
tinymce.init({
  selector: 'textarea',
  height: 500,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_css: '//www.tinymce.com/css/codepen.min.css'
});
