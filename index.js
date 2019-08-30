for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var btm = this.innerHTML;
      makeSound(btm);
      buttonAnimation(btm);

    }


  );
}
// i added a key down event listener to detect keys presssed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      break;
    case 'k':
      var audio = new Audio("sounds/crash.mp3");
      break;
    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
  }
  audio.play();

}
function buttonAnimation(currentKey){
  var actvBut = document.querySelector("." + currentKey);
  actvBut.classList.add("pressed");

  setTimeout(function(){
    actvBut.classList.remove("pressed");
  }
        , 100       )
}
