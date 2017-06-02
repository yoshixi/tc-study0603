$(function(){
  $('.menu-trigger').on('click',function() {
    $(this).toggleClass("active");
    $('.left-wrap').toggleClass("active");
  });
});
