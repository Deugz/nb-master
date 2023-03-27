$(document).ready(function() {
  $(".title_move").lettering();
  $(".button_move").lettering();
});


$(document).ready(function() {
  animation();
}, 1000);

$('.button_move').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title_move span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button_move", 0.2, {visibility: 'visible' ,opacity: 1})
}