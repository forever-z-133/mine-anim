$('.demo').on('mouseenter mouseleave click', function(){
  $('.page2').toggleClass('anim');
});

$('body').on('anim', '[data-anim]', function(e){
  var $this = $(this);
  var animName = $this.attr('data-anim');
  $this.addClass(animName);
});
$('body').on('animEnd', '[data-anim]', function(e){
  $(this).one()
});