

//start game*/

//random selected button
function randomPlayerSelected()
{
  var a=Math.random();
  a=a*2

var  selected=Math.floor(a);


if(selected==1)
{
  $("#button2").fadeIn(100).fadeOut(100).fadeIn(100);
  $("#button2").addClass("pressed");


   window.setTimeout(function(){$("#button2").removeClass("pressed");},1050);
   console.log("1");
}
if(selected==0)
{
  $("#button1").fadeIn(100).fadeOut(100).fadeIn(100);
  $("#button1").addClass("pressed");
  
   window.setTimeout(function(){$("#button1").removeClass("pressed");},1050);
   console.log("0");
}


}


//**************************************************//
//when user will click on start game button then game must be started//


var x=1;
var audio = new Audio("sounds/game-start.mp3");
var audio2 = new Audio("sounds/green.mp3");
var audio1 = new Audio("sounds/blue.mp3");


$(".game-started").css("visibility","hidden");

console.log("hh");
$(".start-btn").click(function()
 {

  $(".start-btn").remove();
  $(".srt").addClass("start-game")
  $(".start-game").css("visibility","visible");

   audio.play();

  var inter=window.setInterval(start_game, 500);
   //window.setTimeout(function(){},150);
  function start_game() {

    $(".start-game").text(x);

    x++;
    if(x==11)
    {
      clearInterval(inter);
      $(".start-game").text("start");

      this.setTimeout(function()
      {
      $(".remove-started").remove();
      $(".game-started").css("visibility","visible");},1200)
      randomPlayerSelected();
      }

  }
})


//*************************************************************************
function player1()
{
  var p2=Math.random();
  p2=p2*20;
  var v2=Math.floor(p2+1);


  return v2;
}

function player2()
{
  var p2=Math.random();
  p2=p2*20;
  var v2=Math.floor(p2+1);


  return v2;
}



$("i.runner1").addClass("move");
$("i.runner2").addClass("move");


var com1=0;
var com2=0;

//88888888888888888888888888888888888888888888888








//********************************************************



///this that function when user click any one of the button the that will be declared winnner
$("div.btn").click(function(){
var press=$(this).attr("id");
if(press=="button1")
{

   animatedPressed(press);
     audio1.play();
   console.log("value1="+ com1);
   var value1=player1();
   com1=com1+value1;

   $("h2.score1").text("Score: "+com1);

   //for random number code put below
   randomNumber(value1)

   $("i.runner1").css("left",com1+"%");
}


if(press=="button2")
{

  animatedPressed(press)
  audio2.play();
  console.log("value2="+ com2);

  var value2=player2();
  com2=com2+value2;
 //for random number code put below
  randomNumber(value2)
  $("h2.score2").text("Score: "+com2);
  $("i.runner2").css("left",com2+"%");


}


if(com1>100 && com1>com2)
{
  $(".high-player1").text("High-Score: "+com1);
  $(".high-player2").text("High-Score: "+com2);

  com1=0;
  $("h2.score1").text("Score: "+com1);
  $("i.runner1").removeClass("move");
  $("section.game-started").remove();
  $(".add").addClass(".winner-container");
  $(".winner-container1").css("visibility","visible")
  $(".winner1").text("winner");
  $(".winner2").text("lose");

  window.setInterval(winnerFun, 1000)
}
if(com2>100 && com2>com1)
{
$(".high-player2").text("High-Score: "+com2);
$(".high-player1").text("High-Score: "+com1);

  com2=0;
  $("h2.score2").text("Score: "+com2);
  $("i.runner2").removeClass("move");
  $("section.game-started").remove();

$(".winner-container1").css("visibility","visible")
$(".winner1").text("lose");
$(".winner2").text("winner");


  window.setInterval(winnerFun, 1000)

}

});


//88888888888888888888888888888888888888888


function randomNumber(currentNum)
{
$("h1.random-number").text(currentNum);
this.setTimeout(function(){$("h1.random-number").text("0");},1200)
}

//when user will click on button that should animated onclick
function animatedPressed(buttonPressed)
 {
  $("#"+buttonPressed).fadeIn(100).fadeOut(100).fadeIn(100);
  $("div#"+buttonPressed).addClass("pressed");
   window.setTimeout(function(){$("div#"+buttonPressed).removeClass("pressed");},150);
 }
function winnerFun()
{
$(".winner").fadeIn(200).fadeOut(200).fadeIn(200);
$(".winner").on("click",function(){var audio = new Audio("sounds/win.mp3");
                    audio.play();});
}


$('.again-play').click(function() {
    location.reload();
});
