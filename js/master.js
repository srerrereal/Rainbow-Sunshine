$(document).ready(function(){

  anime({
    targets: '.rainbow',
    translateX: [0, -10],
    loop:true,
    delay: 1000,
    duration:500,
    direction:'alternate',
    easing:'linear'

  });
  anime({
    targets: '.sunshine',
    translateX: [0, 10],
    loop:true,
    delay: 1000,
    duration:500,
    direction:'alternate',
    easing:'linear'

  });
  $('.js-tilt').tilt({
    scale: 1.2
});

})
