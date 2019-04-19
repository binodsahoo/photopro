// Animate Smooth Scroll
$('#view-work').on('click', function(){
  const images =$('#images').position().top;

  $('html, body').Animate(
    {
      scrollTop: images
    },
    900
  );
});
