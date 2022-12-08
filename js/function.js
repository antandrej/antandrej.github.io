$('#mySection1').on('inview', function(event, isInView) {
  if (isInView) {
    $('#myNavOption1').addClass('active');
  } else {
    $('#myNavOption1').removeClass('active');
  }
});