//prompt for name
function myWelcome() {
let yourName = prompt("What is your name?", "");
if (yourName != null) {
    document.getElementById("welcome").innerHTML = "Hello " + yourName + "! How are you today?";
}}


//Create a function that when a button is clicked, user can see who is skiing.  function uses a loop
function  onSlope() {
    document.getElementById("skiing").style.color = "#ff0000";
    var skiers = new Array("Mary", "Claude", "Crue", "Alisha", "Jim");
    document.getElementById("skiing").innerHTML = "Look who is already on the slopes!";
    //document.write("<b>Who is on the slopes already</b><br />");
    let text ="";
    for (let i=0; i<skiers.length; i++)  {
      text += skiers[i] + " " ;
}
document.getElementById("skiing").innerHTML = "Looks like " + text + " are already on the slopes,  Let's hurry!" +"<br />";

  		}


// Set up funcitonal that when clicked the page will refresh, which reset back to the first page
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}


//define what the function will do when it runs
function winterFunction(choice) {
    var answer1 = document.getElementById("snow1").innerHTML;
    var answer2 = document.getElementById("snow2").innerHTML;


//    if user clicks on Take a Dave, change verbiage on screen and buttons
  choice == 1 && answer1 == "Dave"?
(
  //if it's true add this verbiage to body, change the change buttons to Eat and Play
  document.getElementById("letsGo").innerHTML = "Dave never misses an excuse to hit the slopes! <br><br>Should we ski or snowboard today?",
  document.getElementById("snow1").innerHTML = "Ski",
  document.getElementById("snow2").innerHTML = "Snowboard"
):

//If Dave wasn't chosent, answer this question.  Was Jenell chosen?  If so, add verbiage and change button to Home and Carrott
  choice == 2 && answer2 == "Jenell"?
(
  document.getElementById("letsGo").innerHTML = "Jenell is pretty new to skiing.  I mean she's only been on the slopes in North Carolina, and is that even considered skiing? </br></br>Where should we go?",
  document.getElementById("snow1").innerHTML = "Blacktail",
  document.getElementById("snow2").innerHTML = "Big Mountain",
  document.getElementById("mainImage").src = "./images/boardPic.jpg"
):

//If Go On An letsGo was not clicked, but Take a Nap was chosen THEN Eat was chosen, change verbiage to this
  choice == 1 && answer1 == "Blacktail"?
(

  document.getElementById("letsGo").innerHTML = "Whew!  Big Mountain may have been a bit too much like work today. </br></br>  Should we go  to the bunny slope first?  Or throw her onto a Black Diamond?",
  document.getElementById("snow1").innerHTML = "Bunny Slope",
  document.getElementById("snow2").innerHTML = "Black Diamond",
  document.getElementById("mainImage").src="./images/blacktailPic.png"
):

//if Go On An letsGo not clicked, but Take a Nap was chosen, AND Eat was not chosen, did the user choose Go on an letsGo AND Play
  choice == 2 && answer2 == "Big Mountain"?
(
    document.getElementById("letsGo").innerHTML = "This should be interesting!  When we get there should we hit the mountain right away or have a cocktail for 'liquid confidence'?",
    document.getElementById("snow1").innerHTML = "Hit the slopes!",
    document.getElementById("snow2").innerHTML = "Get some courage",
    document.getElementById("mainImage").src="./images/bigPic.jpg"
):

//if Go On An letsGo not click, Take A Nap was chosen, and Play was not chosen,
  choice ==1 && answer1 == "Ski"?
(
    document.getElementById("letsGo").innerHTML = "Great choice!  Something about having both feet strapped into a single board sounds horrifying! <br><br>  Where should we spend the day?",
    document.getElementById("snow1").innerHTML = "Blacktail",
    document.getElementById("snow2").innerHTML = "Big Mountain",
    document.getElementById("mainImage").src="./images/skiPic.jpeg"
):
  choice ==2 && answer2 == "Get some courage"?
(
  document.getElementById("letsGo").innerHTML = "This should be interesting.  Cocktails and skiing don't mix! ?",
  document.getElementById("mainImage").src = "./images/drink1.jpeg"
):
  document.getElementById("letsGo").innerHTML = "Here we go!  Have Two Bear Air on standby!",
  document.getElementById("mainImage").src = "./images/doubleD.jpeg"

}
