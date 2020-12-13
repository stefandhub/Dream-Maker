
//Accordion

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

//SLIDER REVIEW

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

//LOAD MORE QUESTIONS

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


// REGISTRATION FORM 

var userName = document.getElementById("name");
var password = document.getElementById("password");
var signUpButton = document.getElementById("sign__in");


//userName.addEventListener("blur", userNameValidation);
//password.addEventListener("blur", passwordValidation);
signUpButton.addEventListener("click", validation); 


function userNameValidation() {

    if (userName.value.length < 6) {
        alert("Name must be at least 6 characters.");
        userName.style.border = "solid 2px red";
        userName.focus();
        return false;
    }
    return true;

}

    function passwordValidation() {
        if (password.value.length < 4 || password.value.length > 12) {
            password.style.border = "solid 2px red";
            alert ("Password must be at least 4 and maximum 12 characters long.");
            password.focus();
            return false;
        }
        return true;

    }
 
function validation() {
    userNameValidation();
    passwordValidation();
}


//MOBILE MENU

var menuMobile = document.getElementById("header__navbar__container__2");
var menuMobileButton = document.getElementById("menu__button");

function openMenu() {
    if (menuMobile.style.display === "block") {
        menuMobile.style.display = "none"
    } else {
        menuMobile.style.display = "block"
    }
}

menuMobileButton.addEventListener("click", openMenu);

