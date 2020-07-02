jQuery(document).ready(function(){
    $('#videolink').magnificPopup({
        typy:'inline',
        midClick:true
    });


})


$(function(){
    $('#team-members').owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            }
        }
    });
});


$('#bar1').barfiller({

    // color of bar
    barColor: '#16b597',
  
    // shows a tooltip
    tooltip: true,
  
    // duration in ms
    duration: 1000,
  
    // re-animate on resize
    animateOnResize: true,
  
    // custom symbol
    symbol: "%"
    
  });
  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();
  


//Mixutup Filter
$(document).ready(function(){


	// Mix It Up---------Portfolio
	var mixer=mixitup('.container-mix');
})

// Counter Up 
 jQuery(document).ready(function($){
     $('.counter').counterUp({
         delay: 10,
         time:1000
     })
 })
 $(function(){
    $('.counter-num').rCounter();
  });