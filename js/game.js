

//start game*/

//random selected button



//**************************************************//
//when user will click on start game button then game must be started//

/* ****************************************************************************** */


var x=1;
var audio = new Audio("sounds/game-start.mp3");
var audio2 = new Audio("sounds/green.mp3");
var audio1 = new Audio("sounds/blue.mp3");


$(".game-started").css("visibility","hidden");





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

//* when user will click on start game button the this method will be executed *///
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
    if(x==7)
    {
      clearInterval(inter);
      $(".start-game").text("start");

      this.setTimeout(function()
      {
      $(".remove-started").remove();
      $(".game-started").css("visibility","visible");

      },1200)

//*** oneTimeClickRandom this is random selected button function                **        ***////

      this.setTimeout(function oneTimeClickRandom()
      {

        rnumber=player1();
        console.log(Math.floor(rnumber));
        if(rnumber<10)
        {


          animatedPressed("button1")
        /*  com1=0;
          randomNumber(com1)
          $("h2.score1").text("Score: "+com1);
          $("i.runner1").css("left",com1+"%");

          $("h2.score2").text("Score: "+com1);
          $("i.runner2").css("left",com1+"%");


*/
        

        }
        if(rnumber>10)
        {
          $(document).ready(function(){
            $('#button2').trigger('click');
            animatedPressed("button2")});
            com2=player2();
            randomNumber(com2)
            $("h2.score2").text("Score: "+com2);
            $("i.runner2").css("left",com2+"%");
        }
      },2000)


//* end of Random slected function oneTimeClickRandom*/


      }

  }
});






//********************************************************

document.getElementById("button2").disabled = true;


///this that function when user click any one of the button the that will be declared winnner
$("button.btn").click(function(){
var press=$(this).attr("id");
if(press=="button1")
{




//when user will click on "You" then computer button will be clicked automtically
 window.setTimeout(function(){

    document.getElementById("button2").disabled = false;
    $(document).ready(function(){

      $('#button2').trigger('click');
      animatedPressed("button2")
      audio2.play();
      console.log("value2="+ com2);

      var value2=player2();
      com2=com2+value2;
     //for random number code put below
      randomNumber(value2)
      $("h2.score2").text("Score: "+com2);
      $("i.runner2").css("left",com2+"%");
    });




  },1150);

//** end of button2 function****////


document.getElementById("button2").disabled = true;

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
  $("#"+buttonPressed).addClass("pressed");
   window.setTimeout(function(){$("#"+buttonPressed).removeClass("pressed");},150);
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
