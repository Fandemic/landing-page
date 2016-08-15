

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
