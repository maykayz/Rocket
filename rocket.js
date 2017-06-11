

$("#scrollBtn").click(function(event){
  event.preventDefault();
  $("body").animate({scrollTop:$("#landing2").offset().top},"slow");
});
