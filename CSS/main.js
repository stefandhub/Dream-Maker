var accordion = document.getElementsByClassName("faq__button__accordion");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
       var content = this.nextElementSibling;

       if (content.style.height){
           content.style.height = null;
       } else {
           content.style.height = 250 + "px";
       }
    }
}

var containerValue = document.getElementsByClassName("feature__section__slide");
var button = document.getElementById("next__slide");
var i = 0;
button.addEventListener("click", slider);

function slider() {
    i++;
    if (i >= containerValue.length){
        i = 0;
    }
    for (let index = 0; index < containerValue.length; index++) {
        containerValue[index].classList.add("slide__modifier");
    }
    containerValue[i].classList.remove("slide__modifier");
}



var questions = document.getElementsByClassName("faq__accordion");
var button = document.getElementById("load__more");
var i = 0;

function newQuestions() {
  for (let i = 0; i < questions.length; i++) {
    questions[i].classList.remove("load__later");
    button.style.opacity = "0";
  }
}

button.addEventListener("click", newQuestions);
