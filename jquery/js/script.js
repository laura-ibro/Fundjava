$(document).ready (function(){
/*
$('p').mouseenter(function() {

  alert("Ju jeni te elementti p")
})
$('p').mouseleave(function() {

    alert("Ju iket nga elementi p")
  })



  */
    
// $('body h1:nth-child(1)').mouseenter(function() {

//     $(this).hide();
//   })


$('#button').click(function(){
    $('#epara').fadeOut();
    $('#edyta').fadeOut(3000);
    $('#etreta').fadeOut("slow"); 
})

$('#button1').click(function(){
  $('#paragraf').prepend('<p id="para"> Ore Mesimore </p>');
})


$('button').dblclick(function(){

$('#para').toggleClass('highlight');
});

$('button').mouseenter(function(){
  $('#paragraf').toggleClass('fontsize')
})





});

