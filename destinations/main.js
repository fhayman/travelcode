/*------- Smooth Scroll -------*/

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );
  
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  
  });
  
  
  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  
  });
  