$(window).scroll(function(e) {
  var height = $(this).scrollTop();
  $('.js-navbar')[height >= 100 ? 'addClass' : 'removeClass']('active')
});
